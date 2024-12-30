import React from "react";

const CategoryPill = ({ category }) => {
  return (
    <button
      className={`whitespace-nowrap rounded-lg px-3 py-1 ${category === "All" ? "bg-black text-white hover:bg-black dark:bg-white dark:text-neutral-950 dark:hover:bg-white" : "bg-neutral-200"} hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600  dark:text-neutral-300`}
    >
      {category}
    </button>
  );
};

export default CategoryPill;