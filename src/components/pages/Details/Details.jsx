import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getGameDetails } from "../../../utilities/fetch"
import Hero from "../../shared/Hero/Hero"
import Section from "../../shared/Section/Section"
import CategoryItem from "../../shared/CategoryItem/CategoryItem"
import Button from "../../shared/Button/Button"

function Details() {
  const gameId = useParams().gameId
  const [game, setGame] = useState(null)

  useEffect(() => {
    getGameDetails(gameId, setGame)
  }, [])

  if (!game) return

  console.log(game)
  console.log(
    new Date(game.release_date).toLocaleDateString(undefined, {
      dateStyle: "long",
    })
  )
  return (
    <>
      <Hero img={game.screenshots[0].image} />
      <Section>
        <h1 className="text-5xl font-bold text-white leading-[1.2] uppercase mb-12">
          {game.title}
        </h1>
        <div className="flex">
          <div className="flex-1">
            <img
              className="w-4/5 mb-9 rounded-3xl"
              src={game.thumbnail}
              alt=""
            />
            <div className="flex flex-col items-start gap-6 px-6">
              <p className="text-2xl font-bold text-white">
                Platform: {game.platform}
              </p>
              <CategoryItem text={game.genre} />
              <Button
                text={"play now"}
                path={game.game_url}
                target={"_blank"}
              />
            </div>
          </div>
          <div className="flex-1 pt-3 pl-6">
            <h2 className="text-2xl font-bold text-white mb-9">About</h2>
            <pre className="text-white whitespace-break-spaces max-w-prose font-Titillium-Web">
              {game.description}
            </pre>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex gap-6">
          {game.screenshots.map((img, index) => {
            if (index === 0) {
              return
            } else {
              return (
                <img
                  className="w-full rounded-3xl"
                  key={img.id}
                  src={img.image}
                  alt=""
                />
              )
            }
          })}
        </div>
      </Section>
      <Section>
        <div className="flex gap-6">
          <div className="flex-1 px-6">
            <h2 className="text-2xl font-bold text-white mb-9">
              Additional Information
            </h2>
            <p className="max-w-md mb-6 text-white font-Titillium-Web">
              Please note this free-to-play game may or may not offer optional
              in-game purchases.
            </p>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-7">
              <h3 className="text-white font-bold text-lg leading-[1.2]">
                Developer
              </h3>
              <p className="text-white font-Titillium-Web">{game.developer}</p>
              <h3 className="text-white font-bold text-lg leading-[1.2]">
                Publisher
              </h3>
              <p className="text-white font-Titillium-Web">{game.publisher}</p>
              <h3 className="text-white font-bold text-lg leading-[1.2]">
                Release Date
              </h3>
              <p className="text-white font-Titillium-Web">
                {new Date(game.release_date).toLocaleDateString(undefined, {
                  dateStyle: "long",
                })}
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-1 px-6 gap-9">
            <h2 className="text-2xl font-bold text-white max-w-prose">
              Minimum System Requirements (Windows)
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold leading-[1.2] text-lg text-white">
                  OS
                </h3>
                <p className="text-white font-Titillium-Web">
                  {game.minimum_system_requirements.os}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-bold leading-[1.2] text-lg text-white">
                  Processor
                </h3>
                <p className="text-white font-Titillium-Web">
                  {game.minimum_system_requirements.processor}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-bold leading-[1.2] text-lg text-white">
                  Memory
                </h3>
                <p className="text-white font-Titillium-Web">
                  {game.minimum_system_requirements.memory}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-bold leading-[1.2] text-lg text-white">
                  Graphics
                </h3>
                <p className="text-white font-Titillium-Web">
                  {game.minimum_system_requirements.graphics}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-bold leading-[1.2] text-lg text-white">
                  Storage
                </h3>
                <p className="text-white font-Titillium-Web">
                  {game.minimum_system_requirements.storage}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-bold leading-[1.2] text-lg text-white">
                  Additional Notes
                </h3>
                <p className="text-white font-Titillium-Web">
                  Specifications may change during development
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Details
