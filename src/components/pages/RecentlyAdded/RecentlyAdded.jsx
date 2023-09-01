import React, { useEffect, useState } from "react"
import Hero from "../../shared/Hero/Hero"
import HeroImg from "../../../assets/recentGames.jpg"
import { getRecentlyAddedGames } from "../../../utilities/fetch"
import Section from "../../shared/Section/Section"
import GamesList from "../../shared/GamesList/GamesList"

function RecentlyAdded() {
  const [recentGames, setRecentGames] = useState(null)

  useEffect(() => {
    getRecentlyAddedGames(setRecentGames)
  }, [])

  return (
    <>
      <Hero
        title={"Recently Added"}
        img={HeroImg}
      />
      <Section>{recentGames && <GamesList list={recentGames} />}</Section>
    </>
  )
}

export default RecentlyAdded
