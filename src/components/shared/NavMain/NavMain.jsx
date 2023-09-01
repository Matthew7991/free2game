import React from "react"
import NavMainSide from "./NavMainSide/NavMainSide"
import NavMainTop from "./NavMainTop/NavMainTop"

function NavMain() {
  return (
    <header className="fixed z-50 flex w-screen h-screen">
      <NavMainSide />
      <NavMainTop />
    </header>
  )
}

export default NavMain
