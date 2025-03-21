const { app, BrowserWindow, globalShortcut } = require('electron');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    console.log('Start Application!');
    mainWindow.loadFile('index.html');
    // Đăng ký tổ hợp phím Alt+X để đóng ứng dụng
    const ret = globalShortcut.register('Alt+X', () => {
        console.log('Phim Alt+X duoc nhan --> Exit Application!');
        app.quit();
    });
    if (!ret) {
        console.error('Khong the dang ky Alt+X');
    }
    // Kiểm tra lại chắc chắn đã đăng ký thành công
    console.log(globalShortcut.isRegistered('Alt+X') ? 'Alt+X Dang ky thanh cong.' : 'Alt+X Chua duoc dang ky.');
}

app.whenReady().then(createWindow);

app.on('will-quit', () => {
    // Hủy đăng ký tất cả phím tắt
    globalShortcut.unregisterAll();
});


