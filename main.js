// import { join, dirname } from 'path';
// import { fileURLToPath } from 'url';
// import { app, BrowserWindow, globalShortcut } from 'electron';
// import { exec } from 'child_process';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// let mainWindow;
// function createWindow() {
//     mainWindow = new BrowserWindow({
//         kiosk: true,
//         frame: false,
//         fullscreen: true,
//         webPreferences: {
//             nodeIntegration: true,
//             contextIsolation: false
//         }
//     });
//     mainWindow.loadFile('index.html');
//     const ret = globalShortcut.register('Alt+X', () => {
//         app.quit();
//     });
//     const ahkPath = app.isPackaged
//     ? join(process.resourcesPath, 'block_key.ahk')
//     : join(__dirname, 'scripts', 'block_key.ahk');
//     exec(`start "" "${ahkPath}"`, (err) => {
//         if (err) {
//             console.error('No run AHK script:', err);
//         } else {
//             console.log('Run AHK script done');
//         }
//     });
// }
// app.on('will-quit', () => {
//     globalShortcut.unregisterAll();
// });
// app.whenReady().then(createWindow);
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { app, BrowserWindow, globalShortcut } from 'electron';
import { spawn } from 'child_process'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let mainWindow;
let ahkProcess = null;
function createWindow() {
    mainWindow = new BrowserWindow({
        kiosk: true,
        frame: false,
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    console.log('Start Application!');
    mainWindow.loadFile('index.html');
    const ret = globalShortcut.register('Alt+X', () => {
        app.quit();
    });
    if (!ret) {
        console.error('Không thể đăng ký Alt+X');
    }
    console.log('Loading AHK script...');
    const ahkExePath = "C:\\Program Files\\AutoHotkey\\AutoHotkeyU64.exe";
    const ahkPath = app.isPackaged
        ? join(process.resourcesPath, 'block_key.ahk')
        : join(__dirname, 'scripts', 'block_key.ahk');

    try {
        ahkProcess = spawn(ahkExePath, [ahkPath], {
            detached: true,
            stdio: 'ignore'
        });
        ahkProcess.unref();
        console.log('AutoHotkey process started.');
        console.log('PID:', ahkProcess.pid);
    } catch (err) {
        console.error('Error run AutoHotkey:', err);
    }
}
app.on('will-quit', () => {
    console.log('App is quitting...');
    if (ahkProcess) {
        console.log('AHK process exists, checking kill status...');
        if (!ahkProcess.killed) {
            try {
                process.kill(ahkProcess.pid);
            } catch (err) {
            }
        }
    } else {
    }
    globalShortcut.unregisterAll();
});
app.whenReady().then(createWindow);
