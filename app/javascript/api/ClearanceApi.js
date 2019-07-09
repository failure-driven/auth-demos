const xCsrfToken = () =>
  /<meta name="csrf-token" content="(.*)">/.exec(document.head.innerHTML)[1];

const getUser = () => {
  return fetch("/session", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      authenticity_token: xCsrfToken(),
      session: {
        email: null,
        password: null
      }
    })
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        throw new Error(`Request rejected with status ${response.status}`);
      }
    })
    .then(response => response.json());
};

export { getUser };
