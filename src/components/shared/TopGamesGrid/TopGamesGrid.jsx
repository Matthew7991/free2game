import React from "react"
import GameItemHorizontal from "../GameItemHorizontal/GameItemHorizontal"
import GameItemSpecial from "./GameItemSpecial/GameItemSpecial"

function TopGamesGrid({ list }) {
  return (
    <div className="grid grid-cols-5 grid-rows-3 gap-6">
      {list.map((game, index) => {
        if (index === 0) {
          return (
            <GameItemSpecial
              key={game.id}
              game={game}
              place={index + 1}
            />
          )
        } else {
          return (
            <GameItemHorizontal
              key={game.id}
              game={game}
              place={index + 1}
            />
          )
        }
      })}
    </div>
  )
}

export default TopGamesGrid
