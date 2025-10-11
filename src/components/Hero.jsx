/**
 * Hero Component
 * 
 * Full-width hero banner displayed at the top of pages.
 * Features an orange gradient background with large centered text.
 * 
 * Props:
 * @param {string} title - Main heading text (required)
 * @param {string} subtitle - Subheading text below title (optional)
 * @param {string} backgroundClass - Custom Tailwind classes for background (optional)
 *                                  Defaults to orange gradient
 * 
 * The orange gradient (from-orange-500 to-orange-600) provides a warm,
 * hunting-themed aesthetic that matches the TheHunter brand colors.
 */

function Hero({ title, subtitle, backgroundClass = "bg-gradient-to-r from-orange-500 to-orange-600" }) {
  return (
    <div className={`${backgroundClass} py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        
        {/* Optional Subtitle */}
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export default Hero;
