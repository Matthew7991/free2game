import React from "react"
import { Link } from "react-router-dom"

function Button({ path, text }) {
  return (
    <Link
      to={path}
      className="block px-6 py-3 text-lg font-bold text-white uppercase w-fit rounded-xl bg-primary">
      {text}
    </Link>
  )
}

export default Button
