import React from "react";

export const Blog = (props) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-2">{props.name}</h2>
        <p className="text-gray-700">{props.info}</p>
      </div>
    </div>
  );
};
