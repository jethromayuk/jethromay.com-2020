const fetch = require('node-fetch');

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;

exports.handler = async (event, context, callback) => {

  if (MAILCHIMP_API_KEY === undefined) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ error: "Mailchimp API key is missing" }),
    });
  }

  if (MAILCHIMP_LIST_ID === undefined) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ error: "Mailchimp list id is missing" }),
    });
  }

  const { email } = JSON.parse(event.body);

  if (!email) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ error: "Email address is missing" }),
    });
  }

  const subscriber = {
    email_address: email,
    status: 'subscribed',
  };

  const response = await fetch(`https://us20.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/`,
      {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
        },
        body: JSON.stringify(subscriber),
      }
  );

  const data = await response.json();

  if (!response.ok) {
    callback(null, {
      statusCode: data.status,
      body: data.detail,
    });
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Almost there! Check your inbox for a confirmation e-mail."
    }),
  };
};
