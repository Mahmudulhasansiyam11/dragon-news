import { FaEye, FaStar } from "react-icons/fa"; // For views and rating icons
import { Link } from "react-router";
// For the trending badge

const NewsCard = ({ news }) => {
  const { id, title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-5">
      {/* Author, Date, and Rating */}
      <div className="flex items-center mt-2 text-gray-600">
        <img
          className="w-8 h-8 rounded-full mr-2"
          src={author.img}
          alt={author.name}
        />
        <div>
          <p className="text-sm">{author.name}</p>
          <p className="text-xs">
            {new Date(author.published_date).toLocaleDateString()}
          </p>
        </div>
        {rating?.badge && (
          <span className="ml-auto inline-block bg-yellow-500 text-white text-xs rounded-full px-3 py-1">
            {rating.badge}
          </span>
        )}
      </div>

       {/* Title */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      </div>

      {/* Thumbnail */}
      <img
        className="w-full h-56 object-cover"
        src={thumbnail_url}
        alt={title}
      />

      <div className="p-4">
      

        {/* Details */}
        <div className="mt-3 text-gray-700 text-sm">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer hover:underline">Read More</Link>
            </>
          ) : (
            details
          )}
        </div>

        {/* Tags */}
        <div className="mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 text-gray-700 text-xs rounded-full px-3 py-1 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer with views and rating */}
        <div className="mt-4 flex justify-between items-center text-gray-500">
          <div className="flex items-center">
            <FaEye className="mr-1" />
            <span className="text-sm">{total_view}</span>
          </div>
          <div className="flex items-center">
            <FaStar className="mr-1" />
            <span className="text-sm">{rating.number}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
