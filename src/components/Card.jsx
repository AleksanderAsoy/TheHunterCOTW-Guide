import { Link } from 'react-router-dom';

function Card({ title, description, link, badge, details, image }) {
  return (
    <div className="bg-hunter-dark rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-hunter-brown flex flex-col h-full">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
          {badge && (
            <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-orange-500 text-white shadow-lg">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-hunter-tan flex-1 pr-2">{title}</h3>
          {!image && badge && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-500 text-white whitespace-nowrap flex-shrink-0">
              {badge}
            </span>
          )}
        </div>
        
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        {details && details.length > 0 && (
          <div className="space-y-2 mb-4">
            {details.map((detail, index) => (
              <div key={index} className="flex items-center text-sm text-gray-400">
                <span className="mr-2 text-orange-500">•</span>
                {detail}
              </div>
            ))}
          </div>
        )}
        
        {link && (
          <Link
            to={link}
            className="inline-block mt-auto px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-200"
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;

