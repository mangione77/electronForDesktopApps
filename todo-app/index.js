const electron = require('electron')
const { app, BrowserWindow } = electron

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({})
    mainWindow.loadURL(`${__dirname}/main.html`)
})

