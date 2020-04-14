// (function(doc, win) {
//   var docEl = doc.documentElement,
//       resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
//       recalc = function() {
//           if (docEl.clientWidth > 750) {
//               docEl.style.fontSize = "100px";
//               // doc.getElementById("app").style.width = "750px";
//           } else {
//               var width = docEl.clientWidth / 7.5;
//               docEl.style.fontSize = width + "px";
//               // doc.getElementById("app").style.width = "auto";
//           }
//       };
//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener("DOMContentLoaded", recalc, false);
// })(document, window);
(function (doc, win) {
    var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
              var clientWidth = docEl.clientWidth;
              if (!clientWidth) return;
              docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
            };
  
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);