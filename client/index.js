"use strict";
var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

app.on("ready", function () {
  let displays = electron.screen.getAllDisplays();

  for (const d of displays) {
    showWindow(
      "testroom",
      d.bounds.x,
      d.bounds.y,
      d.bounds.width,
      d.bounds.height,
      d.workAreaSize.height
    );
  }
});

function showWindow(roomname, x, y, width, height, workAreaHeight) {
  var mainWindow = new BrowserWindow({
    x: x,
    y: y,
    width: width,
    height: height,
    frame: false,
    show: true,
    transparent: true,
    resizable: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.setIgnoreMouseEvents(true);
  mainWindow.maximize();
  mainWindow.loadURL(
    "file://" +
      __dirname +
      "/index.html?width=" +
      width +
      "&height=" +
      height +
      "&workAreaHeight=" +
      workAreaHeight +
      "&roomName=" +
      roomname
  );

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}
