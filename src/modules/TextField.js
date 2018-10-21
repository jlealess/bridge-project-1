import React from "react";

const TextField = ({ value, handleChange, label, id, name }) => (
    <React.Fragment>
        <label htmlFor={id} className="form__label">{label}</label>
        <input
            type="text"
            value={value}
            onChange={handleChange}
            name={name}
            id={id}
            className="form__input"
        />
    </React.Fragment>
);

export default TextField;
