import React, { useEffect, useState } from "react"
import Hero from "../../shared/Hero/Hero"
import HeroImg from "../../../assets/allGames.jpg"
import { getGames } from "../../../utilities/fetch"
import Section from "../../shared/Section/Section"
import GamesList from "../../shared/GamesList/GamesList"

function AllGames() {
  const [displayedGames, setDisplayedGames] = useState(null)

  useEffect(() => {
    getGames(setDisplayedGames)
  }, [])
  return (
    <>
      <Hero
        title={"All Games"}
        img={HeroImg}
      />

      <Section>{displayedGames && <GamesList list={displayedGames} />}</Section>
    </>
  )
}

export default AllGames
