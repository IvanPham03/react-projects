import React from "react";

const Categories = ({ categories, filterNew }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterNew(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
