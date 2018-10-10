import React from "react";

export default ({ handleClick, className, value }) => (
    <button onClick={handleClick} className={className}>{value}</button>
);