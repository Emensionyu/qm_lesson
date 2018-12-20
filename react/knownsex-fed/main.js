const {app ,BrowserWindow}=require('electron');

const url=require('url');

let mainWindow;
function createWindow(){
    mainWindow=new BrowserWindow({
        width:800,
        height:600
    })
    mainWindow.loadURL('http://localhost:3000/')
    mainWindow.on('closed',function(){
        mainWindow=null
    })
}
app.on('ready',createWindow)
app.on('window-all-closed', function () {
    // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', function () {
     // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
    if (mainWindow === null) {
      createWindow()
    }
  })
  