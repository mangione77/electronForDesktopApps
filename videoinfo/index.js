const electron = require('electron')
const ffmpeg = require('fluent-ffmpeg')
const { app, BrowserWindow, ipcMain } = electron

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({})
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on('video:submit', (event,path) => {

    ffmpeg.ffprobe(path, (err,metadata) => {
        if (err) console.error(err)

        let duration = metadata.format.duration 

        mainWindow.webContents.send('video:metadata', duration)
    })
})

