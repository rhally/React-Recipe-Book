import React from "react"
import Button from "react-bootstrap/Button"

export default function RecipeIngredientEdit(props) {
    const { ingredient, handleIngredientChange, handleIngredientDelete } = props

    function handleChange(changes) {
        handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
    }
    return (
        <>
            <input
                className="recipe-edit__input"
                type="text"
                onChange={(e) => handleChange({ name: e.target.value })}
                value={ingredient.name}
            />
            <input
                className="recipe-edit__input"
                type="text"
                onChange={(e) => handleChange({ amount: e.target.value })}
                value={ingredient.amount}
            />
            <Button
                variant="danger"
                onClick={() => handleIngredientDelete(ingredient.id)}
            >
                {" "}
                &times;
            </Button>
        </>
    )
}
