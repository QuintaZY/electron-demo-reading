const { app, BrowserWindow } = require("electron")
const WinState = require('electron-win-state').default

const path = require('path')

const createWindow = () => {
  const winState = new WinState({
    defaultWidth: 1000,
    defaultHeight: 800
  })
  const win = new BrowserWindow({
    // 自定义窗口
    ...winState.winOptions,
    webPreferences: {
      // 预加载
      preload: path.resolve(__dirname, './preload/index.js')
    },
    show: false
  })
  win.loadURL('http://localhost:5173')
  win.webContents.openDevTools()
  winState.manage(win)
  win.on('ready-to-show',() => {
    win.show()
  })
}

app.whenReady().then(() => {
  createWindow()
  // 用户窗口被关的时候，可以再次打开
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})