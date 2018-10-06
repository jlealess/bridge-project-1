import React from "react";

const TextField = props => {
    return (
        <React.Fragment>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type="text"
                value={props.value}
                onChange={props.handleChange}
                name={props.name}
                id={props.id}
            />
        </React.Fragment>
    );
};

export default TextField;