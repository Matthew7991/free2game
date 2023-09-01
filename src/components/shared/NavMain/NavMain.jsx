import React from "react"
import NavMainSide from "./NavMainSide/NavMainSide"
import NavMainTop from "./NavMainTop/NavMainTop"

function NavMain() {
  return (
    <header className="absolute flex h-screen">
      <NavMainSide />
      <NavMainTop />
    </header>
  )
}

export default NavMain
