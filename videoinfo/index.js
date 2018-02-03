const electron = require('electron')
const path = require('path')
const { app, BrowserWindow } = electron

app.on('ready', () => {
    let mainWindow = new BrowserWindow({})
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})


