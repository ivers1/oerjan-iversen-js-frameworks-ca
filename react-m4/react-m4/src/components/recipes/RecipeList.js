import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeItem from "./RecipeItem";
import Search from "./Search";
import Heading from "../layout/Heading";

// a similar component is discussed in this lesson https://interactive-content.now.sh/js-frameworks/4/2
function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setRecipes(json.results);
                setFilteredRecipes(json.results);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    // this function is discussed in this lesson https://interactive-content.now.sh/js-frameworks/4/4
    const filterCards = function(e) {
        const searchValue = e.target.value.toLowerCase();

        const filteredArray = recipes.filter(function(recipe) {
            const lowerCaseName = recipe.title.toLowerCase();

            if (lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
        });
        setFilteredRecipes(filteredArray);
    };

    // return the Spinner if the API call is not done yet
    if (loading) {
        return <Spinner animation="border" className="spinner-grow" />;
    }

    // the API call is done
    return (
        <Container>
            <Heading title="Recipes" />
            <Search handleSearch={filterCards} />
            <Row>
                {filteredRecipes.map(recipe => {
                    const { title, thumbnail, ingredients } = recipe;

                    // you can use the title as the key as the title is unique
                    return (
                        <Col sm={6} md={4} key={title}>
                            <RecipeItem title={title} thumbnail={thumbnail} ingredients={ingredients} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default RecipeList;
