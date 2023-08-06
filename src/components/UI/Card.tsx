import React from 'react';

const Card: React.FC<{
  title: string;
  description: string;
  imageUrl: string;
  linkUrl?: string;
}> = ({ title, description, imageUrl, linkUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      {linkUrl && (
        <div className="px-6 pt-4 pb-2">
          <a href={linkUrl} className="text-blue-500 hover:text-blue-700 underline">
            Learn More
          </a>
        </div>
      )}
    </div>
  );
};

export default Card;
