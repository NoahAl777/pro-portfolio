import React, { useState, useEffect } from "react";

const CategoriesList = ({ categories }) => {
  const [categoriesToDisplay, setCategoriesToDisplay] = useState([]);

  useEffect(() => {
    setCategoriesToDisplay(categories)
  }, [categories])

  console.log("categories to display: ", categoriesToDisplay)

  const listOfcategories = categoriesToDisplay.map(category => {
    return (
      <p key={category.id}>
        {`${category.title} | ${category.description}`}
      </p>
    )
  })

  return (
    <div className="categoriesList">
      <h2>Categories</h2>
      {listOfcategories}
    </div>
  )
};

export default CategoriesList;