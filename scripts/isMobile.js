//移动设备
var ClientRedirect = (function () {
  "use strict";
  var sUserAgent = navigator.userAgent.toLowerCase();

  var bIsIpad = sUserAgent.indexOf("ipad") > -1;
  var bIsIphoneOs = sUserAgent.indexOf("iphone os") > -1;
  var bIsMidp = sUserAgent.indexOf("midp") > -1;          // 黑莓
  var bIsUc7 = sUserAgent.indexOf("rv:1.2.3.4") > -1;     // uc7
  var bIsUc = sUserAgent.indexOf("ucweb") > -1;
  var bIsAndroid = sUserAgent.indexOf("android") > -1;
  var bIsCE = sUserAgent.indexOf("windows ce") > -1;
  var bIsWM = sUserAgent.indexOf("windows phone") > -1;

  return {
    bIsIpad : bIsIpad,
    bIsIphone : bIsIphoneOs,
    bIsMidp : bIsMidp,
    bIsUc : bIsUc,
    bIsAndroid : bIsAndroid,
    bIsCE : bIsCE,
    bIsWM : bIsWM,
    bIsUc7 : bIsUc7
  };
})();

//移动设备判定
ClientRedirect.isMobile = function () {

  "use strict";
  var result = ClientRedirect.bIsIpad || ClientRedirect.bIsIphone || ClientRedirect.bIsWM || ClientRedirect.bIsAndroid;
  return !!result;
};