import React from 'react'

const Card = () => {
  return (
    <div>
   <div className="container">
      <svg viewBox="0 0 1000 400" className="shape">
        <path
          d="
            M40 0
            H900
            Q980 0 980 60

            C980 90 940 100 900 110
            C860 125 860 175 900 190
            C940 200 980 210 980 250

            Q980 320 900 320
            H40
            Q0 320 0 280
            V40
            Q0 0 40 0
            Z
          "
          fill="white"
          stroke="#2563eb"
          strokeWidth="4"
        />
      </svg>
    </div>
    </div>
  )
}

export default Card