import React from "react";
import PropTypes from "prop-types";

// destructuring = getting properties from an object
const obj = {
    content: "My content"
};

// const content = obj.content;

// const { content } = obj;

// console.log(content);

function Home({ content, prop2 }) {
    // console.log(props);

    return (
        <>
            <div>{content}</div>
            <div>{prop2}</div>
        </>
    );
}

// function Home(props) {
//     // console.log(props);

//     return (
//         <>
//             <div>{props.content}</div>
//             <div>{props.prop2}</div>
//         </>
//     );
// }

export default Home;
