import React from "react";
import PropTypes from "prop-types";
import Headline from "../layout/Headline";

function GameItem(props) {
    return (
        <div>
        <Headline content="Game Details" />
            <p>
                <b>title: {props.name}</b>
            </p>
            <p>
                <b>image: {props.background_image}</b>
            </p>
        </div>
    );
}

GameItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default GameItem;
