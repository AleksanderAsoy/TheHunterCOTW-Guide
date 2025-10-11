function Hero({ title, subtitle, backgroundClass = "bg-gradient-to-br from-hunter-green via-hunter-brown to-hunter-green-dark" }) {
  return (
    <div className={`${backgroundClass} py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-hunter-tan max-w-3xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export default Hero;

