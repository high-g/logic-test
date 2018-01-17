export async function fetch (url, data) {
  const param = '';

  fetch(url, {
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