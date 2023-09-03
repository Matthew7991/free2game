import React from "react"
import { NavLink } from "react-router-dom"

function NavMainSide() {
  return (
    <nav className="relative flex flex-col justify-center h-screen p-3 overflow-hidden border-r-2 border-white w-nav-side gap-9">
      <button
        className={"w-full absolute top-0 left-0"}
        type="button">
        <div className="flex items-center justify-center aspect-square">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line
              x1="0"
              y1="1"
              x2="24"
              y2="1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="12"
              x2="24"
              y2="12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="23"
              x2="24"
              y2="23"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {/* <p className="text-2xl">Home</p> */}
      </button>
      <NavLink
        className={({ isActive }) =>
          (isActive ? ` bg-primary` : ``) +
          ` aspect-square justify-center rounded-xl w-full flex gap-2`
        }
        to={"/"}>
        <div className="flex items-center justify-center aspect-square">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.2069 11.2786L13.1925 1.66483C12.8056 1.29335 12.1944 1.29335 11.8075 1.66483L1.79311 11.2786C1.1433 11.9024 1.58487 13 2.48564 13H3.5V22C3.5 23.1046 4.39543 24 5.5 24H9.5V18C9.5 16.8954 10.3954 16 11.5 16H13.5C14.6046 16 15.5 16.8954 15.5 18V24H19.5C20.6046 24 21.5 23.1046 21.5 22V13H22.5144C23.4151 13 23.8567 11.9024 23.2069 11.2786Z"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          (isActive ? ` bg-primary` : ``) +
          ` aspect-square justify-center rounded-xl w-full flex gap-2`
        }
        to={"/all"}>
        <div className="flex items-center justify-center aspect-square">
          <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="1"
              y="8"
              width="22"
              height="14"
              rx="3"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M12 7V5.5C12 4.67157 12.6716 4 13.5 4V4C14.3284 4 15 3.32843 15 2.5V1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8 13V17"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M10 15L6 15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="16"
              cy="17"
              r="1"
              fill="white"
            />
            <circle
              cx="18"
              cy="14"
              r="1"
              fill="white"
            />
          </svg>
        </div>
        {/* <p className="text-2xl">All Games</p> */}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          (isActive ? ` bg-primary` : ``) +
          ` aspect-square justify-center rounded-xl w-full flex gap-2`
        }
        to={"/recent"}>
        <div className="flex items-center justify-center aspect-square">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <mask
              id="path-1-inside-1_24_404"
              fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 4C17 1.79086 15.2091 0 13 0H11C8.79086 0 7 1.79086 7 4V7H4C1.79086 7 0 8.79086 0 11V13C0 15.2091 1.79086 17 4 17H7V20C7 22.2091 8.79086 24 11 24H13C15.2091 24 17 22.2091 17 20V17H20C22.2091 17 24 15.2091 24 13V11C24 8.79086 22.2091 7 20 7H17V4Z"
              />
            </mask>
            <path
              d="M7 7V9H9V7H7ZM7 17H9V15H7V17ZM17 20L19 20V20H17ZM17 17V15H15V17H17ZM17 7H15V9H17V7ZM13 2C14.1046 2 15 2.89543 15 4H19C19 0.686292 16.3137 -2 13 -2V2ZM11 2H13V-2H11V2ZM9 4C9 2.89543 9.89543 2 11 2V-2C7.68629 -2 5 0.686292 5 4H9ZM9 7V4H5V7H9ZM4 9H7V5H4V9ZM2 11C2 9.89543 2.89543 9 4 9V5C0.686292 5 -2 7.68629 -2 11H2ZM2 13V11H-2V13H2ZM4 15C2.89543 15 2 14.1046 2 13H-2C-2 16.3137 0.686292 19 4 19V15ZM7 15H4V19H7V15ZM9 20V17H5V20H9ZM11 22C9.89543 22 9 21.1046 9 20H5C5 23.3137 7.68629 26 11 26V22ZM13 22H11V26H13V22ZM15 20C15 21.1046 14.1046 22 13 22V26C16.3137 26 19 23.3137 19 20L15 20ZM15 17V20H19V17H15ZM20 15H17V19H20V15ZM22 13C22 14.1046 21.1046 15 20 15V19C23.3137 19 26 16.3137 26 13H22ZM22 11V13H26V11H22ZM20 9C21.1046 9 22 9.89543 22 11H26C26 7.68629 23.3137 5 20 5V9ZM17 9H20V5H17V9ZM15 4V7H19V4H15Z"
              fill="white"
              mask="url(#path-1-inside-1_24_404)"
            />
          </svg>
        </div>
        {/* <p className="text-2xl">Recently Added</p> */}
      </NavLink>
    </nav>
  )
}

export default NavMainSide
