import React, { useState, useEffect } from "react"
import RecipeList from "./RecipeList"
import "../css/app.css"
import { v4 as uuidv4 } from "uuid"
import RecipeEdit from "./RecipeEdit"

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = "recipeBook.recipes"

function App() {
    const [selectedRecipeId, setSelectedRecipeId] = useState()
    const [recipes, setRecipes] = useState(() => {
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (recipeJSON == null) {
            return sampleRecipes
        } else {
            return JSON.parse(recipeJSON)
        }
    })
    const [filter, setFilter] = useState()
    const selectedRecipe = recipes.find(
        (recipe) => recipe.id === selectedRecipeId
    )

    useEffect(() => {
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
    }, [recipes])

    const recipeContextValue = {
        handleRecipeAdd,
        handleRecipeDelete,
        handleRecipeSelect,
        handleRecipeChange,
        handleRecipeSearch,
    }

    function handleRecipeSelect(id) {
        setSelectedRecipeId(id)
    }

    function handleRecipeSearch(value) {
        const filter = value.toLowerCase()
        setFilter(filter)

        if (!value) {
            setFilter(undefined)
        }
    }

    function handleRecipeAdd() {
        const newRecipe = {
            id: uuidv4(),
            name: "",
            servings: 1,
            cookTime: "",
            instructions: "",
            ingredients: [{ id: uuidv4(), name: "", amount: "" }],
        }

        setSelectedRecipeId(newRecipe.id)
        setRecipes([...recipes, newRecipe])
    }

    function handleRecipeChange(id, recipe) {
        const newRecipes = [...recipes]
        const index = newRecipes.findIndex((r) => r.id === id)
        newRecipes[index] = recipe
        setRecipes(newRecipes)
    }

    function handleRecipeDelete(id) {
        if (selectedRecipeId != null && selectedRecipeId === id) {
            setSelectedRecipeId(undefined)
        }
        setRecipes(recipes.filter((recipe) => recipe.id !== id))
    }

    return (
        <RecipeContext.Provider value={recipeContextValue}>
            <RecipeList
                recipes={
                    filter
                        ? recipes.filter((recipe) => {
                              return recipe.name.toLowerCase().includes(filter)
                          })
                        : recipes
                }
            />
            {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
        </RecipeContext.Provider>
    )
}

const sampleRecipes = [
    {
        id: 1,
        name: "Chocolate Brownies",
        servings: 20,
        cookTime: "20 mins prep, 20 mins cook time",
        instructions:
            "Heat the oven to 180C/160C fan/gas mark 4. Line a 20cm square cake tin with baking parchment. Melt together the butter, brown sugar, chocolate and golden syrup gently on a low heat until it is smooth. Remove the pan from the heat.\n\nWhisk together the eggs and caster sugar in a large bowl until light and fluffy. Add the vanilla extract, then sift over the flour, baking powder and cocoa powder and add the chocolate mixture. Fold everything together quickly and scoop half of the mixture into the tin. Dot over scoops of caramel or chocolate hazelnut spread and then scoop the rest of the brownie mixture over the top. Add more scoops of caramel or chocolate spread, if you like, and bake for 30 mins. The top of the mixture should now be set and slightly cracked looking, but the mixture underneath will still have a slight wobble.\n\nRemove from the oven and allow to cool completely before cutting into squares. Dust the tops with cocoa or icing sugar. Will keep for 3 days in an airtight container.",
        ingredients: [
            {
                id: 1,
                name: "Butter",
                amount: "150g",
            },
            {
                id: 2,
                name: "Light soft brown sugar",
                amount: "75g",
            },
            {
                id: 3,
                name: "Plain chocolate, broken into pieces",
                amount: "150g",
            },
            {
                id: 4,
                name: "Golden syrup",
                amount: "1tbsp",
            },
            {
                id: 5,
                name: "Eggs",
                amount: "3",
            },
            {
                id: 6,
                name: "Caster sugar",
                amount: "125g",
            },
            {
                id: 7,
                name: "Vanilla extract",
                amount: "1tsp",
            },
            {
                id: 8,
                name: "Plain flour",
                amount: "150g",
            },
            {
                id: 9,
                name: "Baking sodar",
                amount: "1/2 tsp",
            },
            {
                id: 10,
                name: "Cocoa powder",
                amount: "3 tbsp",
            },
            {
                id: 11,
                name: "Caramel or chocolate spread",
                amount: "4-6 tbsp",
            },
        ],
        visible: 1,
    },
    {
        id: 2,
        name: "Lentil Cottage Pie",
        servings: 6,
        cookTime: "60+ minutes",
        instructions:
            "Preheat oven to 200C. Heat oil in a large deep-sided frying pan over a medium heat. Add onion, carrot and celery and cook for 7 minutes, stirring occasionally.\n\nAdd the tomato paste, polpa, lentils, stock, Worcestershire sauce, herbs and brown sugar and stir to combine. Simmer, uncovered, stirring occasionally for 30 minutes or until very thick and the carrots are tender. Stir in peas. Spoon the lentil mixture into an 8 cup capacity (6cm deep) oven proof dish.\n\nMeanwhile, place potatoes into a large saucepan; cover with cold water and bring to the boil. Reduce heat and simmer 30 minutes or until tender. Drain potatoes and return to the pan. Mash with a potato masher. Add butter and milk and place over a low heat. Beat with a wooden spoon until creamy. Season with salt and pepper. Spoon the potato on top of the lentil mixture; spread to the edges and sprinkle with the cheese. Bake for 25 minutes or until top is golden.",
        ingredients: [
            {
                id: 1,
                name: "Olive oil",
                amount: "1 tablespoon",
            },
            {
                id: 2,
                name: "Brown onion, finely chopped",
                amount: "1",
            },
            {
                id: 3,
                name: "Large carrot, finely chopped",
                amount: "1",
            },
            {
                id: 4,
                name: "Stalk celery, finely chopped",
                amount: "1",
            },
            {
                id: 5,
                name: "Tomato paste",
                amount: "1/4 cup",
            },
            {
                id: 6,
                name: "Chopped tomatoes",
                amount: "400g can",
            },
            {
                id: 7,
                name: "Brown lentils, drained and rinsed",
                amount: "2 x 400g cans",
            },
            {
                id: 8,
                name: "Vegetable stock",
                amount: "1 cup",
            },
            {
                id: 9,
                name: "Worcestershire sauce",
                amount: "2 tablespoons",
            },
            {
                id: 10,
                name: "Dried herbs",
                amount: "1 teaspoon",
            },
            {
                id: 11,
                name: "Brown sugar",
                amount: "3 teaspoons",
            },
            {
                id: 12,
                name: "Green peas, frozen",
                amount: "1 cup",
            },
            {
                id: 13,
                name: "Potatoes, peeled and chopped",
                amount: "1.2kg",
            },
            {
                id: 14,
                name: "Butter, chopped",
                amount: "60g",
            },
            {
                id: 15,
                name: "Milk",
                amount: "2/3 cup",
            },
            {
                id: 16,
                name: "Salt and pepper",
                amount: "",
            },
            {
                id: 17,
                name: "Cheese, grated",
                amount: "100g",
            },
        ],
        visible: 1,
    },
]

export default App
