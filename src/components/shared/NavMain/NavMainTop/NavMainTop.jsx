import React from "react"

function NavMainTop() {
  return (
    <div className="relative flex items-center justify-between flex-auto px-6 h-nav-top">
      <div className="flex gap-4">
        <svg
          width="33"
          height="27"
          viewBox="0 0 33 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 1V14L11 27H21L0 1Z"
            fill="#FF4654"
          />
          <path
            d="M32.5 0V14.5L28 19H17L32.5 0Z"
            fill="#FF4654"
          />
        </svg>
        <p className="text-2xl font-bold text-white uppercase">free2game</p>
      </div>
      <div className="flex my-3 rounded-xl bg-blueLight">
        <input
          className="bg-transparent"
          type="search"
          name="search"
          id="search"
        />
        <svg
          className="my-1 mr-5"
          width="24"
          height="30"
          viewBox="0 0 24 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.2928 26.7071C22.6833 27.0976 23.3165 27.0976 23.707 26.7071C24.0975 26.3166 24.0975 25.6834 23.707 25.2929L22.2928 26.7071ZM14.1847 18.5991L22.2928 26.7071L23.707 25.2929L15.599 17.1849L14.1847 18.5991Z"
            fill="white"
          />
          <circle
            cx="9"
            cy="12"
            r="8"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  )
}

export default NavMainTop
