// 检测平台、设备和操作系统 
var system = {};
var platform = navigator.platform;
system.win = platform.indexOf("Win") === 0;
system.mac = platform.indexOf('Mac') === 0;
system.xll = (platform === 'Xll') || (platform.indexOf('Linux') === 0);
system.ipad = (navigator.userAgent.match(/iPad/i) !== null) ? true : false;

if(!(system.win || system.mac || system.xll || system.ipad)) {
    window.location.href = 'http://http://3g.ifeng.com';
}

// 腾讯的适配代码
if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){ 
    if(window.location.href.indexOf("?mobile")<0){ 
        try{ 
            if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){ 
                window.location.href="http://shipei.qq.com/index.htm"; 
            }else if(/iPad/i.test(navigator.userAgent)){ 
            }else{ 
                window.location.href="http://shipei.qq.com/simple/s/index/" 
            } 
        }catch(e){} 
    } 
} 