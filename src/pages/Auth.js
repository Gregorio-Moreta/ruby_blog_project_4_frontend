import React from "react";

const Auth = (props) => {

    const type = props.match.params.form

    return <h1>{type}</h1>;
};

export default Auth;