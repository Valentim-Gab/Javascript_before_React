import createCore from './core'

export default function Index() {
  const core = createCore()

  try {
    core.start()
    core.stop()
  } catch (error) {
    console.error('> [index] Uncaught error')
    console.error(error)
  }
}