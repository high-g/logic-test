import './style.scss'

const worker = new Worker('worker1.js')
worker.postMessage('こんにちは')

