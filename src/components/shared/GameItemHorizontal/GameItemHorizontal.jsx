import React from "react"
import Button from "../Button/Button"
import PlatformItem from "../PlatformItem/PlatformItem"
import CategoryItem from "../CategoryItem/CategoryItem"

function GameItemHorizontal({ game, place }) {
  return (
    <article className="overflow-hidden rounded-[1.25rem] bg-blueNormal col-span-3 relative flex gap-9">
      <div className="relative w-1/2">
        <img
          className="rounded-[1.25rem] w-full"
          src={game.thumbnail}
          alt={game.title}
        />
        <div className="absolute flex items-center justify-center px-6 text-2xl font-bold text-white border-2 rounded-full aspect-square bg-blueNormal border-primary top-6 left-6">
          {place}
        </div>
      </div>
      <div className="flex flex-col justify-end gap-6 pb-9">
        <h3 className="text-lg font-bold text-white leading-[1.2]">
          {game.title}
        </h3>
        <Button
          path={`/details/${game.id}`}
          text={"read more"}
        />
        <div className="flex flex-wrap gap-3">
          <PlatformItem platform={game.platform} />
          <CategoryItem text={game.genre} />
        </div>
      </div>
    </article>
  )
}

export default GameItemHorizontal
