import React from "react"

function PlatformItem({ platform }) {
  return (
    <button
      onClick={() => setStateFunction(text)}
      className="font-medium text-white border border-primary rounded-2xl px-3 py-1.5 bg-blueNormal">
      {platform === "PC (Windows)" ? (
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.00024 1.00098L0.000244141 2.00098V7.00098H7.00024V1.00098Z"
            fill="white"
          />
          <path
            d="M16.0002 0.000976562L8.00024 1.00098V7.00098H16.0002V0.000976562Z"
            fill="white"
          />
          <path
            d="M7.00024 8.00098H0.000244141V13.001L7.00024 14.001V8.00098Z"
            fill="white"
          />
          <path
            d="M16.0002 8.00098H8.00024V14.001L16.0002 15.001V8.00098Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            x="1"
            y="1.00098"
            width="16"
            height="15"
            rx="2"
            stroke="white"
          />
          <path
            d="M1 3.00098C1 1.89641 1.89543 1.00098 3 1.00098H15C16.1046 1.00098 17 1.89641 17 3.00098V4.00098H1V3.00098Z"
            fill="white"
            stroke="white"
          />
        </svg>
      )}
    </button>
  )
}

export default PlatformItem
