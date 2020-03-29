import React from "react";
import PropTypes from "prop-types";

function CharacterItem(props) {
    return (
        <div>
            <p>
                <b>Status: {props.status}</b>
            </p>
            <p>
                <b>Gender: {props.gender}</b>
            </p>
        </div>
    );
}

CharacterItem.propTypes = {
    status: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
};

export default CharacterItem;
