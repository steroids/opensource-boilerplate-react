const webpackNodeExternals = require('webpack-node-externals');

require('@steroidsjs/webpack').config({
    inlineSvg: true,
    port: 9991,
    ssr: {
        externals: [
            webpackNodeExternals({
                allowlist: [/\.(?!(?:tsx?|jsx?|json)$).{1,5}$/i, /^lodash/, /^@steroidsjs/],
            }),
        ],
        module: {
            rules: {
                ts: {
                    exclude: /\.\/node_modules\/(?!steroidsjs\/core\/).*/,
                },
            },
        },
    },
});
