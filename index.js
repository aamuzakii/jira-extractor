var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Basic aGVuZHJpQGFydW5hLmlkOkI2NmpaNldDSGFMQ0NNWWw5ZXF5NDlCNA=="
);
myHeaders.append(
  "Cookie",
  "atlassian.xsrf.token=f7de74f622c1510e60ec398059f3c5b8892856f1_lin"
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://arunaid.atlassian.net/rest/agile/1.0/sprint/273/issue?os_authType=basic",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    result.issues.forEach((ticket) => {
      if (ticket.fields.issuetype.name === "Story") {
        // console.log(ticket.key);
      } else {
        console.log(ticket.key);
        console.log(ticket.fields.summary);
        console.log("========");
      }
    });
  })
  .catch((error) => console.log("error", error));
