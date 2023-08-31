export const apiKey = import.meta.env.VITE_API_KEY
export const apiBaseLink = "https://www.freetogame.com/api"
export const apiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
}
