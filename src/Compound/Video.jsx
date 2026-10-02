import React from 'react'
import hero from '/hero.mp4'
const Video = () => {
  return (
    <div className = 'h-full w-full'>
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={hero} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
