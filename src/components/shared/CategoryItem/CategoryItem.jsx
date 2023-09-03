import React from "react"

function CategoryItem({ text, setStateFunction }) {
  return (
    <button
      onClick={() => setStateFunction(text)}
      className="font-medium text-white border border-primary rounded-2xl px-3 py-1.5 bg-blueNormal">
      {text}
    </button>
  )
}

export default CategoryItem
