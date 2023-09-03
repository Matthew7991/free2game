import React, { useEffect, useState } from "react"
import Hero from "../../shared/Hero/Hero"
import HeroImg from "../../../assets/HomeHero.jpg"
import {
  getRecentlyAddedGames,
  getTopBrowserGames,
  getTopPcGames,
} from "../../../utilities/fetch"
import Section from "../../shared/Section/Section"
import GamesList from "../../shared/GamesList/GamesList"
import Button from "../../shared/Button/Button"
import TopGamesGrid from "../../shared/TopGamesGrid/TopGamesGrid"

function Home() {
  const [recentGames, setRecentGames] = useState(null)
  const [topPcGames, setTopPcGames] = useState(null)
  const [topBrowserGames, setTopBrowserGames] = useState(null)

  const date = new Date()
  const monthYearString = date.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  })
  useEffect(() => {
    getRecentlyAddedGames(setRecentGames)
    getTopPcGames(setTopPcGames)
    getTopBrowserGames(setTopBrowserGames)
  }, [])

  return (
    <>
      <Hero
        title={"Find & track the best free-to-play games!"}
        img={HeroImg}
        home={true}
      />

      <Section>
        <SectionTitle string={"Recently Added"} />
        {recentGames && (
          <GamesList
            list={recentGames.slice(0, 4)}
            description={true}
          />
        )}
        <div className="flex justify-end mt-9">
          <Button
            text={"show more"}
            path={"/recent"}
          />
        </div>
      </Section>

      <Section>
        <SectionTitle string={`Top 4 Games for PC in ${monthYearString}`} />
        {topPcGames && <TopGamesGrid list={topPcGames.slice(0, 4)} />}
        <div className="flex justify-end mt-9">
          <Button
            text={"show more"}
            path={"/all"}
          />
        </div>
      </Section>

      <Section>
        <SectionTitle
          string={`Top 4 Games for Browser in ${monthYearString}`}
        />
        {topBrowserGames && <GamesList list={topBrowserGames.slice(0, 4)} />}
        <div className="flex justify-end mt-9">
          <Button
            text={"show more"}
            path={"/all"}
          />
        </div>
      </Section>
    </>
  )
}

export default Home

function SectionTitle({ string }) {
  return <h2 className="mb-12 text-2xl font-bold text-white">{string}</h2>
}
