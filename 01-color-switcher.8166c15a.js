!function(){var t,n={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]"),bodyMain:document.querySelector("body")};function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}function e(t){n.bodyMain.style.backgroundColor=t}n.startButton.addEventListener("click",(function(){e(o()),t=setInterval((function(){return e(o())}),1500),n.startButton.disabled=!0,n.stopButton.disabled=!1})),n.stopButton.addEventListener("click",(function(){clearInterval(t),n.startButton.disabled=!1,n.stopButton.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.8166c15a.js.map
