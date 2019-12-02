'use strict'

// index.js (main process)
// - GUI (render process)

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const dialog = electron.dialog
const ipcMain = electron.ipcMain

let mainWindow
let settingsWindow

let menuTemplate = [{
  label: 'MyApp',
  submenu: [
    {
      label: 'About',
      accelerator: 'CmdOrCtrl+Shift+A',
      click: function() {
        showAboutDialog()
      }},
    {type: 'separator'},
    {
      label: 'Settings',
      accelerator: 'CmdOrCtrl+,',
      click: function () {
        showSettingWindow()
      }
    },
    {type: 'separator'},
    {
      label: 'Quit',
      accelerator: 'CmdOrCtrl+Q',
      click: function() {
        app.quit()
      }
    }
  ]
}]

let menu = Menu.buildFromTemplate(menuTemplate)

ipcMain.on('settings_changed', (event, color) => {
  mainWindow.webContents.send('set_bgcolor', color)
})

const showAboutDialog = () => {
  dialog.showMessageBox({
    type: 'info',
    buttons: ['OK'],
    message: 'About this App',
    detail: 'This app was created by @dotinstall'
  })
}

const showSettingWindow = () => {
  settingsWindow = new BrowserWindow({width: 500, height: 400})
  settingsWindow.loadURL(`file://${__dirname}/settings.html`)
  settingsWindow.webContents.openDevTools() // 開発用
  settingsWindow.show()
  settingsWindow.on('closed', () => {
    mainWindow = null
  })
}

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