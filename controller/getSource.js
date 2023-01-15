const { ipcMain, BrowserWindow } = require('electron')
const { url } = require('stylus')

const getSource = (url) => {
  return new Promise((resolve, reject) => {
    const win = new BrowserWindow({
      width: 500,
      height: 500,
      show: false,
      webPreferences: {
        offscreen: true  // 离线的，存在内存里
      }
    })
    win.loadURL(url)
    win.webContents.on('did-finish-load', async () => {
      const title = win.getTitle()  // 网页的title
      try {
        const image = await win.webContents.capturePage()  // 截取网页的图
        const screenshot = image.toDataURL()
        console.log(title, screenshot)
        resolve({
          image,
          screenshot,
          url
        })
      } catch (error) {
        reject(error)
      }
    })

  })
}

ipcMain.handle('on-url-event', async (e, ...args) => {
  const result = await getSource(url)
  return result
})

// module.exports = getSource