// ==UserScript==
// @name         正方评教一键好评
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  使用Tampermonkey自动化处理繁琐的教学评价流程，一键完成满意评价。注意：当前版本可能在评价教师时出现问题。只为简化流程，不推广恶意评价。
// @author       T1t4m1un
// @match        在这里复制粘贴你的评教网址！！
// @grant        none
// ==/UserScript==

(function() {
    console.log('Hello from TamperMonkey');
    const iframeElement = document.getElementById('iframeautoheight');

    if (iframeElement) {
        window.setTimeout(function() {
            const iframeDocument = iframeElement.contentDocument || iframeElement.contentWindow.document;
            const selectElements = iframeDocument.getElementById('DataGrid1').getElementsByTagName('select');

            Array.from(selectElements).forEach((select) => {
                select.selectedIndex = 1;
            });

            const randIdx = Math.floor(Math.random() * selectElements.length);
            selectElements[randIdx].selectedIndex = 2;
        }, 500); // 延迟500ms确保加载完成
    } else {
        console.error('找不到指定 ID 的 iframe 元素');
    }
})();
