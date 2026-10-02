import React from 'react'

const Home = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">

      <video
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div className="text-white max-w-3xl">

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
            Delicious Food,
            <br />
            Beautiful Moments
          </h1>

          <p className="mt-5 text-sm sm:text-lg">
            Premium catering services for weddings, parties and special events.
          </p>

          <a
            href="/booking"
            className="inline-block mt-7 bg-primary px-7 py-3 rounded-full font-medium hover:scale-105 transition"
          >
            Book Now
          </a>

        </div>
      </div>

    </section>
  )
}

export default Home