import React from "react";
import PropTypes from "prop-types";

function IngredientList({ ingredients }) {
    // the ingredients prop is a string
    // convert the string to an array so we can loop over it
    // we can't loop over a string, so it must be converted to an array
    // the comma (",") in the brackets means the string between every comma will become an item in the array
    const ingredientsArray = ingredients.split(",");

    // in the return, use the map method to create a new array of li tags with the ingredient inside
    return (
        <ul>
            {ingredientsArray.map(function(ingredient, i) {
                return <li key={i}>{ingredient}</li>;
            })}
        </ul>
    );
}

IngredientList.propTypes = {
    ingredients: PropTypes.string.isRequired
};

export default IngredientList;
