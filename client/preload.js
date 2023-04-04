const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  setRoomName: (roomName) => ipcRenderer.send("roomName", roomName),
});
