


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

function GameDetail() {
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const url = BASE_URL + id;

    useEffect(function() {
        console.log("information");
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log("josn", json);
                setDetail(json);
                setLoading(false);
            })
            .catch(error => console.log(error));
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{detail.name}</h1>
            <img src={detail.background_image} alt={detail.background_image} />
            <p>{detail.description}</p>
            
        </div>
    );
}

export default GameDetail;
