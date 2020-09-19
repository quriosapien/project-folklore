export default {
  proxy: {
    '/api': {
      target: 'http://itunes.apple.com/',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}