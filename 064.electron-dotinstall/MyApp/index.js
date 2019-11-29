'use strict'

// index.js (main process)
// - GUI (render process)

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu

let mainWindow

let menuTemplate = [{
  label: 'MyApp',
  submenu: [
    {label: 'About'},
    {type: 'separator'},
    {label: 'Settings'},
    {type: 'separator'},
    {label: 'Quit'}
  ]
}]

let menu = Menu.buildFromTemplate(menuTemplate)

const createMainWindow = () => {
  Menu.setApplicationMenu(menu)
  mainWindow = new BrowserWindow({width: 500, height: 400})
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.webContents.openDevTools() // 開発用

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// アプリ実行完了時に呼び出されるイベント
app.on('ready', () => {
  // create window
  createMainWindow()
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if(!mainWindow) {
    createMainWindow()
  }
})