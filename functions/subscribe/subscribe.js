const fetch = require("node-fetch");

exports.handler = function (event, context, callback) {

  const authHeader = `any ${process.env.MAILCHIMP_API_KEY}`;

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
    status: 'subscribed'
  };

  const url = `https://us20.api.mailchimp.com/3.0/lists/${listId}/members/`

  fetch(url, {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      'Authorization': `Basic ${authHeader}`,
    },
    body: JSON.stringify(subscriber),
  }).then(x => x.json()).then(data => {
    console.log(`Request successful: ${JSON.stringify(data)}`);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: data })
    })
  })
};
