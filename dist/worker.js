//
// Copyright (c) 2016 Samuel Fisher
// Licensed under the MIT License. See LICENSE.txt file in the project root for full license information.
//

function initWebSocket(url) {
    var connection = new WebSocket(url);

    connection.onerror = function (error) {
        console.error("WebSocket error:", error);
    };

    connection.onmessage = function (e) {
        self.postMessage(e.data);
    };

    connection.onopen = function () {
        console.log("WebSocket connection established:", url);
    };

    connection.onclose = function () {
        console.log("WebSocket connection closed:", url);
    };
}

self.addEventListener('message', function (e) {
    var command = e.data.command;
    switch (command) {
        case 'init':
            var websocketUrl = e.data.url || 'wss://websocketaudio.onrender.com/stream';
            initWebSocket(websocketUrl);
            break;
        default:
            self.postMessage('Unknown command: ' + command, "*");
    }
}, false);
