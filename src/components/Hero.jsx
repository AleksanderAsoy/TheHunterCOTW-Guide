function Hero({ title, subtitle, backgroundClass = "bg-gradient-to-r from-hunter-green to-hunter-brown" }) {
  return (
    <div className={`${backgroundClass} py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-hunter-tan max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export default Hero;

