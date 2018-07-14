// ==UserScript==
// @name         Surviv Aimbot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Aimhacks for Surviv.IO
// @author       BlueFireStudios
// @match        http://surviv.io/*
// @grant        none
// @require http://code.jquery.com/jquery-1.7.1.min.js
// @run-at document-start
//
// ==/UserScript==
var nameToAdd = 'https://github.com/dm1tr11/surv/blob/master/script.js';

window.onload = function() {
    let replaceScripts = document.getElementsByTagName('script');

    for (let i = 0; i < replaceScripts.length; i++) {
        if (replaceScripts[i].src.includes('js/app.')) {
            replaceScripts[i].src = nameToAdd;
        }
    }
}
