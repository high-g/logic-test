import './style.scss'

const worker = new Worker('worker1.js')

worker.addEventListener('message', message => {
  console.log('メッセージ受信:', message.data)
})

worker.addEventListener('error', error => {
  console.log(error)
})

const myName = '紅茶花伝'
worker.postMessage(myName)

worker.postMessage('')
