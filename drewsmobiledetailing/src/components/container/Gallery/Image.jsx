import React from "react";

const Image = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {photos.map((photo, index) => (
        <div
          key={`${photo.id}-${index}`}
          className="bg-gray-200 rounded overflow-hidden text-center p-4"
        >
          <img
            src={
              photo.media_type === "IMAGE"
                ? photo.media_url
                : photo.thumbnail_url
            }
            alt={photo.caption || "Instagram Photo"}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default Image;
