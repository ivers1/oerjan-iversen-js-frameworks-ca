
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function GameItem(props) {
    return (
        <div>
             <p>
                <b>{props.id}</b>
            </p>
            <p>
                <b>{props.name}</b>
            </p>
            <p>
                <b>{props.description}</b>
            </p>
        </div>
    );
}


GameItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	background_image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default GameItem;