import React, { useContext } from "react"
import Recipe from "./Recipe"
import { RecipeContext } from "./App"
import DownloadButton from "./DownloadButton"

export default function RecipeList({ recipes }) {
    const { handleRecipeAdd, handleRecipeSearch } = useContext(RecipeContext)

    return (
        <div className="recipe-list">
            <div className="recipe-list__search-box-container">
                <input
                    className="recipe-list__search-box-input"
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => handleRecipeSearch(e.target.value)}
                />
                <DownloadButton recipes={recipes} />
            </div>
            <div>
                {recipes.map((recipe) => {
                    return <Recipe key={recipe.id} {...recipe} />
                })}
            </div>
            <div className="recipe-list__add-recipe-btn-container">
                <button className="btn btn--primary" onClick={handleRecipeAdd}>
                    Add Recipe
                </button>
            </div>
        </div>
    )
}
