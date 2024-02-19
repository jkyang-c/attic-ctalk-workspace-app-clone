module.exports = {
    packagerConfig: {
        asar: true,
        icon: './electron/icons/salesbridge-app.ico'
    },
    rebuildConfig: {},
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                loadingGif: './electron/icons/salesbridge-app.ico',
                description: 'Messaging Works Platform',
                setupIcon: './electron/icons/salesbridge-app.ico',
                icon: './electron/icons/salesbridge-app.ico'
            },
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin'],
        },
        {
            name: '@electron-forge/maker-dmg',
            config: {
                format: 'ULFO',
                icon: './electron/icons/salesbridge-app.icns',
            }
        },
        {
            name: '@electron-forge/maker-deb',
            config: {},
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {},
        },
    ],
    plugins: [
        {
            name: '@electron-forge/plugin-auto-unpack-natives',
            config: {},
        },
    ],
};
