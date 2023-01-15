const { contextBridge, ipcRenderer } = require('electron')

// 发送url
const sendUrl = async (url) => {
  let result = await ipcRenderer.invoke('on-url-event', url)
  return result
}

contextBridge.exposeInMainWorld('myApi', {
  sendUrl
})