import React from "react"

function Hero({ title, img, home = false }) {
  return (
    <div className={`${home ? "" : "px-6"} relative`}>
      <img
        className={`${
          home
            ? "h-[60vh]"
            : "rounded-3xl overflow-hidden h-[calc((100vh-theme(spacing.nav-top))/2)]"
        } w-full object-cover`}
        src={img}
        alt=""
      />
      <h1 className="max-w-lg text-5xl font-bold text-white leading-[1.2] uppercase absolute left-section-left bottom-section-right">
        {title}
      </h1>
    </div>
  )
}

export default Hero
