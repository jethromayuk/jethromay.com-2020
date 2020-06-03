const fetch = require('node-fetch');
const base64 = require('base-64');

exports.handler = async (event, context, callback) => {

  if (process.env.MAILCHIMP_API_KEY === undefined) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ error: "API key is missing" }),
    })
    return;
  }

  const listId = process.env.MAILCHIMP_LIST_ID;

  if (listId === undefined) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ error: "List ID is missing." }),
    })
    return;
  }

  const { email } = JSON.parse(event.body);

  if (!email) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ error: "Email address is missing" }),
    })
    return;
  }

  const subscriber = {
    email_address: email,
    status: 'subscribed',
  };

  const auth = `any:${process.env.MAILCHIMP_API_KEY}`;
  const response = await fetch(`https://us20.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/`,
      {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          Authorization: `Basic ${base64.encode(auth)}`,
        },
        body: JSON.stringify(subscriber),
      }
  );

  const data = await response.json();

  if (!response.ok) {
    return { statusCode: data.status, body: data.detail };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "You've signed up to the mailing list!",
      detail: data,
    }),
  };
};
