import React from "react"
import { Link } from "react-router-dom"

function Button({ path, text, target = "_self" }) {
  return (
    <Link
      target={target}
      to={path}
      className="block px-6 py-3 text-lg font-bold text-white uppercase cursor-pointer w-fit rounded-xl bg-primary">
      {text}
    </Link>
  )
}

export default Button
