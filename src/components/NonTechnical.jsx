import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";
import { useSelector,useDispatch } from "react-redux";
import { setValue } from "../redux/slider/sliderSlicer";


function NonTechnical(params) {
    const values=useSelector((state)=>state.slider.value)
	const dispatch=useDispatch();
	const navigate=useNavigate();

	const sliderConfig = {
        nonTechnical: [
                "Communication_skills",
                "Openness",
                "Conscientousness",
                "Extraversion",
                "Agreeableness",
                "Emotional_Range",
                "Conversation",
                "Openness_to_Change",
                "Hedonism",
                "Self-enhancement",
                "Self-transcendence",
            ],
	};

	const [sliderValues, setSliderValues] = useState(
		Object.values(sliderConfig.nonTechnical)
			.flat()
			.reduce((acc, skill) => {
				acc[skill] = 0; // Default slider value
				return acc;
			}, {})
	);

    const handleSliderChange = (skill, value) => {
		setSliderValues((prev) => ({
			...prev,
			[skill]: value,
		}));
	};

	const renderSliderGroup = (group) => (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold mb-4 border-b pb-2">
				{group === "technical"
					? "Technical Skills"
					: "Personality & Soft Skills"}
			</h2>
			<div className="grid grid-cols-2 gap-4">
				{sliderConfig[group].map((skill) => (
					<Slider
						key={skill}
						label={skill.replace(/_/g, " ")}
						value={sliderValues[skill]}
						onChange={(value) => handleSliderChange(skill, value)}
					/>
				))}
			</div>
		</div>
	);



    const handleBottonCLick = async (e) => {
		e.preventDefault();
		try {
			dispatch(setValue(sliderValues));
			// const jsonData = JSON.stringify(values[0]);
			// console.log(values)
			// console.log(values[0])
			// console.log(jsonData);
			navigate("/result")
        }catch{

        }
	};

	return (
		<div className="container mx-auto px-4 py-8 max-w-5xl">
			<h1 className="text-3xl font-bold mb-6 text-center">
				Job Role Prediction
			</h1>
			<form  className="space-y-8">
				{renderSliderGroup("nonTechnical")}
				<button
					onClick={handleBottonCLick}
					className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
				>
					Predict Role
				</button>
			</form>
		</div>
	);
}

export default NonTechnical;
