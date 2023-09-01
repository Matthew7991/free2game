import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/pages/Home/Home"
import AllGames from "./components/pages/AllGames/AllGames"
import RecentlyAdded from "./components/pages/RecentlyAdded/RecentlyAdded"
import Details from "./components/pages/Details/Details"
import NavMain from "./components/shared/NavMain/NavMain"
import MainBody from "./components/shared/MainBody/MainBody"

function App() {
  return (
    <>
      <NavMain />
      <MainBody>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/all"
            element={<AllGames />}
          />
          <Route
            path="/recent"
            element={<RecentlyAdded />}
          />
          <Route
            path="/details/:gameId"
            element={<Details />}
          />
        </Routes>
      </MainBody>
    </>
  )
}

export default App
