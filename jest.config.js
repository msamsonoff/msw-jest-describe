module.exports = {
    setupFiles: [
        require.resolve('whatwg-fetch'),
    ],
    testEnvironment: 'jsdom',
    transform: {
        '\\.js$': 'babel-jest',
    },
}
