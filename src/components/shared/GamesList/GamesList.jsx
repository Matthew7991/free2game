import React from "react"
import GameItemVertical from "../GameItemVertical/GameItemVertical"

function GamesList({ list, description = false }) {
  return (
    <div className="grid grid-cols-4 gap-6 mt-12">
      {list.map((game) => (
        <GameItemVertical
          game={game}
          key={game.id}
          description={description}
        />
      ))}
    </div>
  )
}

export default GamesList
