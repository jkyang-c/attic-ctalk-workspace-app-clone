const prompt = require("electron-prompt");
const {app} = require("electron");

module.exports = {
    showServerPrompt: function (serverUrl) {
        return prompt({
            title: 'SalesBridge workspace',
            label: 'server : ',
            value: serverUrl,
            inputAttrs: {
                type: 'url'
            },
            type: 'input'
        });
    },
}