import React, { useContext } from "react"
import Recipe from "./Recipe"
import { RecipeContext } from "./App"
import DownloadButton from "./DownloadButton"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import { InputGroup } from "react-bootstrap"

export default function RecipeList({ recipes }) {
    const { handleRecipeAdd, handleRecipeSearch } = useContext(RecipeContext)

    return (
        <>
            <Col bsPrefix="none" className="col-lg-6 g-12">
                <Row>
                    <Col bsPrefix="none" className="col-lg-12">
                        <div className="">
                            <div className="">
                                <InputGroup className="input-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Search..."
                                        onChange={(e) =>
                                            handleRecipeSearch(e.target.value)
                                        }
                                    />
                                    <DownloadButton recipes={recipes} />
                                </InputGroup>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-lg-12 pt-3">
                        <div>
                            {recipes.map((recipe) => {
                                return <Recipe key={recipe.id} {...recipe} />
                            })}
                        </div>
                        <div className="recipe-list__add-recipe-btn-container">
                            <Button
                                className="btn btn--primary"
                                onClick={handleRecipeAdd}
                            >
                                Add Recipe
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
