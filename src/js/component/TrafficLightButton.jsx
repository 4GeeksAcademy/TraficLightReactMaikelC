// TrafficLightButton.js
import React, { useState } from "react";

const TrafficLightButton = ({ setSelectedColor }) => {
    const [currentColor, setCurrentColor] = useState(0);
    const colors = ["green", "yellow", "red"];

    const toggleColor = () => {
        setCurrentColor((currentColor + 1) % colors.length);
        setSelectedColor(colors[currentColor]);
    };

    const addPurple = () => {
        setSelectedColor("purple");
    };

    return (
        <div>
            <button type="button" class="btn btn-dark" onClick={toggleColor}>Alternar Colores</button>
            <button type="button" class="btn btn-dark" onClick={addPurple}>Añadir Púrpura</button>
        </div>
    );
};

export default TrafficLightButton;
