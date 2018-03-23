const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const url = require('url');
const loader = require('./loader.js');
const proto = require('./prototypes.js');
// Window object
let win;
// JSON file object
let jsonData;

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600});

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    win.webContents.openDevTools();
    // Emitted when the window is closed.
    win.on('closed', () => {
      // Dereference window object
      win = null;
    })
  }

  // Create window on load
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    app.quit();
  });

  // When we receive the loadRoster event
  ipcMain.on('loadRoster', (event, path) => {
    const {dialog} = require('electron');
    const fs = require('fs');
    // Initialize the systems file open dialog
    dialog.showOpenDialog(function(files) {
      // If no file selected, do nothing
      if(files === undefined) {

      } else {
        readFile(files[0]);
      }
    });
    // Load and parse the file
    function readFile(path) {
      fs.readFile(path, 'utf-8', (err, data) => {
        // If there is an error, alert the user
        if(err) {
          alert("Could not open file : " + err.message);
          return;
        }
        event.sender.send('rosterData');
        // Otherwise, parse JSON and assign to object
        jsonData = JSON.parse(data);
      });
    }
    // Load edit.html page
    win.loadURL('file://' + __dirname + '/edit.html');
  });

ipcMain.on('getTeams', (event, t) => {
  // Return list of teams as array
  event.sender.send('teamsList', loader.getTeams(jsonData));
});
