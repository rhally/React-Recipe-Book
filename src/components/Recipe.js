import React, { useContext } from "react"
import IngredientList from "./IngredientList"
import { RecipeContext } from "./App"
import Button from "react-bootstrap/Button"

export default function Recipe(props) {
    const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext)
    const { id, name, cookTime, servings, instructions, ingredients } = props
    return (
        <div className="recipe">
            <div className="recipe__header">
                <h3 className="recipe__title">{name}</h3>
                <div>
                    <Button
                        variant="primary"
                        className="mr-1"
                        onClick={() => handleRecipeSelect(id)}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => handleRecipeDelete(id)}
                    >
                        Delete
                    </Button>
                </div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Cook Time:</span>
                <span className="recipe__value">{cookTime}</span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Servings:</span>
                <span className="recipe__value">{servings}</span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Ingredients:</span>
                <div className="recipe__value recipe__value--indented">
                    <IngredientList ingredients={ingredients} />
                </div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Instructions:</span>
                <div className="recipe__value recipe__instructions recipe__value--indented">
                    {instructions}
                </div>
            </div>
        </div>
    )
}
