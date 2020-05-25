import './style.scss'

const btnStart = document.getElementById('btnStart')
const btnStop = document.getElementById('btnStop')
const btnClear = document.getElementById('btnClear')

const textarea = document.getElementById('textarea')

const speech = new webkitSpeechRecognition()
speech.lang = 'ja-JP'

btnStart.addEventListener('click', () => {
  speech.start()
})

btnStop.addEventListener('click', () => {
  speech.stop()
})

btnClear.addEventListener('click', () => {
  textarea.value = ''
})

speech.addEventListener('result', (e) => {
  console.log(e)
  console.log(e.results)

  const text = e.results[0][0].transcript
  textarea.value += text
}); 

