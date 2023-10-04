export default function createWebServer() {
  function start() {
    console.log('> [webserver] Starting...')
    console.log('> [webserver] Waiting for part to be available...')
    console.log('> [webserver] Stopping done!')
  }

  function stop() {
    console.log('> [webserver] Stopping...')
    console.log('> [webserver] Gracefully waiting for all clients...')
    console.log('> [webserver] Closing all parts...')
    console.log('> [webserver] Stopping done!')
  }

  return {
    start,
    stop
  }
}