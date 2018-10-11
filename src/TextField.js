import React from "react";

export default ({ value, handleChange, label, id, name }) => (
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
