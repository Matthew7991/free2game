import React from "react"
import Button from "../../Button/Button"
import PlatformItem from "../../PlatformItem/PlatformItem"
import CategoryItem from "../../CategoryItem/CategoryItem"

function GameItemSpecial({ game, place }) {
  return (
    <article className="overflow-hidden rounded-[1.25rem] bg-blueNormal col-span-2 row-span-3 relative">
      <img
        className="rounded-[1.25rem] object-cover h-full"
        src={game.thumbnail}
        alt={game.title}
      />
      <div className="absolute bottom-12 left-9">
        <h3 className="text-5xl font-bold text-white leading-[1.2] mb-9">
          {game.title}
        </h3>
        <Button
          path={`/details/${game.id}`}
          text={"read more"}
        />
        <div className="flex flex-wrap gap-3 mt-6">
          <PlatformItem platform={game.platform} />
          <CategoryItem text={game.genre} />
        </div>
      </div>
      <div className="absolute flex items-center justify-center px-6 text-2xl font-bold text-white border-2 rounded-full aspect-square bg-blueNormal border-primary top-6 right-6">
        {place}
      </div>
    </article>
  )
}

export default GameItemSpecial
