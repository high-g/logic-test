self.addEventListener('message', message => {
  const name = message.data
  self.postMessage(`こんにちは、${name}さん`)

  const value = 1 + undefinedVariable;
})