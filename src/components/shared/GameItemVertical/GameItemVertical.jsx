import React, { useEffect, useState } from "react"
import Button from "../Button/Button"
import CategoryItem from "../CategoryItem/CategoryItem"
import { getGameDetails } from "../../../utilities/fetch"

function GameItemVertical({ game, description = false }) {
  const [gameDetails, setGameDetails] = useState(null)

  useEffect(() => {
    getGameDetails(game.id, setGameDetails)
  }, [])

  return (
    <article className="overflow-hidden rounded-[1.25rem] bg-blueNormal">
      <img
        className="rounded-[1.25rem] w-full"
        src={game.thumbnail}
        alt={game.title}
      />
      <div className="px-6 py-9">
        <div className="px-2 pb-12 border-b-2 border-whiteTransparent ">
          <h3 className="text-lg font-bold text-white leading-[1.2] min-h-[calc(2em*1.2)] min-h-[2lh] mb-6">
            {game.title}
          </h3>
          {description && (
            <p className="text-blueVeryLight mb-9 min-h-[calc(4em*1.5)] min-h-[4lh]">
              {gameDetails
                ? gameDetails.description.split(" ", 17).join(" ") + "..."
                : game.short_description}
            </p>
          )}
          <Button
            path={`/details/${game.id}`}
            text={"read more"}
          />
        </div>
        <div className="flex flex-wrap gap-3 px-2 mt-6">
          <CategoryItem text={game.genre} />
        </div>
      </div>
    </article>
  )
}

export default GameItemVertical
