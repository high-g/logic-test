module.exports = (url, data) => {
  const param = '';

  return fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: param
  })
  .then(responce => {
    return responce.json();
  });
};