const state: any = {}
const screen2: any = {}


// Sem reduzir
function movePlayer(command: any) {
  console.log(`Moving ${command.player.Id} with ${command.keyPressed}`)

  const keyPressed = command.keyPressed
  const player = state.players[command.playerId]

  if (keyPressed === 'ArrowUp' && player.y - 1 >= 0) {
    player.y -= 1

    return
  }

  if (keyPressed === 'ArrowRight' && player.x + 1 < screen2.width) {
    player.x += 1

    return
  }

  if (keyPressed === 'ArrowDown' && player.y + 1 >= screen2.height) {
    player.y += 1

    return
  }

  if (keyPressed === 'ArrowLeft' && player.y - 1 >= 0) {
    player.x -= 1

    return
  }
}

// Reduzindo
function movePlayer2(command: any) {
  console.log(`Moving ${command.player.Id} with ${command.keyPressed}`)

  const acceptedMoves = {
    ArrowUp(player: any) {
      if (player.y - 1 >= 0)
        player.y -= 1
    },
    ArrowRight(player: any) {
      if (player.x + 1 < screen2.width)
        player.x += 1
    },
    ArrowDown(player: any) {
      if (player.y + 1 >= screen2.height)
        player.y += 1
    },
    ArrowLeft(player: any) {
      if (player.y - 1 >= 0)
        player.x -= 1
    }
  }

  const keyPressed = command.keyPressed
  const player = state.players[command.playerId]
  const moveFunction = acceptedMoves[keyPressed]
  
  if (moveFunction) {
    moveFunction(player)
  }
}