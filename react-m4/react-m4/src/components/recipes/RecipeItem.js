import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import IngredientList from "./IngredientList";

function RecipeItem({ title, thumbnail, ingredients }) {
    return (
        <Card>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Title>{title}</Card.Title>
            <Card.Body>
                <IngredientList ingredients={ingredients} />
            </Card.Body>
        </Card>
    );
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired
};

export default RecipeItem;
