import React from "react"

function MainBody({ children }) {
  return (
    <main className="relative flex flex-col min-h-full pb-32 pt-nav-top ml-nav-side gap-section-top">
      {children}
    </main>
  )
}

export default MainBody
