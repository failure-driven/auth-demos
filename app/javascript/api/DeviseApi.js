const getUser = () => {
  return fetch("/users/sign_in", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json"
    }
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
