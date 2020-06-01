console.log("working");


// starting app
const electron = require('electron');
// security policy
// const session = electron.session;

// session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
//   callback({
//     responseHeaders: {
//       ...details.responseHeaders,
//       'Content-Security-Policy': ['default-src \'assets\'']
//     }
//   })
// });

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');


// st variables
let win;



// create browser window
function createWindow(){

    win = new BrowserWindow();

    // const win = new BrowserWindow({
    //     title: 'electron-app',
    //     width: 800,
    //     height: 600,
    //     webPreferences: {
    //       nodeIntegration: true
    //     }
    //   });
    // win.loadFile('./assets/index.html');

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

// close window event
win.on('closed', () => {
    win = null;
});


}

// include the window into the main app
app.on('ready', createWindow);
// app.whenReady().then(createWindow);



















