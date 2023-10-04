import createDatabaseConnection from './database'
import createWebserver from './webserver'

export default function createCore(configuration: any = {}) {
  const database = configuration.database ?? createDatabaseConnection()
  const webserver = configuration.webserver ?? createWebserver()

  function start() {
    console.log('> [core] Starting...')
    database.start()
    webserver.start()
    console.log('> [core] Starting done! System running!')
  }

  function stop() {
    console.log('> [core] Stopping...')
    webserver.stop();
    database.stop();
    console.log('> [core] Stopping done!')
  }

  return {
    start,
    stop
  }
}