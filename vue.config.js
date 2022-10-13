module.exports = {
    devServer: {
        open: true,
        overlay: {
            warnings: false,
            errors:true
        },
        proxy: {
            '/': {
                target: process.nextTick.VUE_APP_BASE_API,
                changeOrigin: true,
            }
        }
    }
}