import { apiBaseLink, apiOptions } from "./api"
const linkRecentGames = "/games?sort-by=release-date"
const linkTopPcGames = "/games?sort-by=popularity&platform=pc"
const linkTopBrowserGames = "/games?sort-by=popularity&platform=browser"
const linkGameDetails = "/game?id="

function fetching(linkExtension, setStateFunction) {
  fetch(`${apiBaseLink}${linkExtension}`, apiOptions)
    .then((response) => {
      if (!response.ok) throw new Error("fetch failed")
      return response.json()
    })
    .then((data) => {
      // console.log(data)
      setStateFunction(data)
    })
    .catch((error) => console.error(error))
}

export function getRecentlyAddedGames(setStateFunction) {
  fetching(linkRecentGames, setStateFunction)
}
export function getTopPcGames(setStateFunction) {
  fetching(linkTopPcGames, setStateFunction)
}
export function getTopBrowserGames(setStateFunction) {
  fetching(linkTopBrowserGames, setStateFunction)
}
export function getGameDetails(id, setStateFunction) {
  const linkExtension = linkGameDetails + id
  fetching(linkExtension, setStateFunction)
}
