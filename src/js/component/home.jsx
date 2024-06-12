// Home.js
import React, { useState } from "react";
import TrafficLightButton from "./TrafficLightButton";

//create your first component
const Home = () => {
    const [selectedColor, setSelectedColor] = useState("green");

    return (
        <div className="container">
            <div className="support">
                <div className="line"></div>
                <div className="traffic-light">
                    <div className={"light green" + (selectedColor === "green" ? " glow-green" : "")}></div>
                    <div className={"light yellow" + (selectedColor === "yellow" ? " glow-yellow" : "")}></div>
                    <div className={"light red" + (selectedColor === "red" ? " glow-red" : "")}></div>
                    {selectedColor === "purple" && <div className="light purple glow-purple"/>}
                </div>
                <TrafficLightButton setSelectedColor={setSelectedColor} />
            </div>
        </div>
    );
};

export default Home;
