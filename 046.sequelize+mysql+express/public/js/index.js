(function() {
  const btn = document.getElementById('button')
  const name = document.getElementById('name')

  btn.addEventListener('click', (e) => {
    // ajax登録処理を書く
    if(name.value !== '') {
      fetch('/users/insert', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name.value})
      })
      .then(res => {
        name.value = ''
        res.text()
        console.log('res',res)
      }) 
      .then(text => {
        console.log('text',text)
      })
    }
  })
})()