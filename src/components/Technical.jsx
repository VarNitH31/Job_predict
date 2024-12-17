import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";
import { useSelector,useDispatch } from "react-redux";
import { setValue } from "../redux/slider/sliderSlicer";


function Technical(params) {
    const slideValues=useSelector((state)=>state.slider.value)
	const dispatch=useDispatch();
	const navigate=useNavigate();

	const sliderConfig = {
		technical: [
			"Database_Fundamentals",
			"Computer_Architecture",
			"Distributed_Computing_Systems",
			"Cyber_Security",
			"Networking",
			"Software_Development",
			"Programming_Skills",
			"Project_Management",
			"Computer_Forensics_Fundamentals",
			"Technical_Communication",
			"AI_ML",
			"Software_Engineering",
			"Business_Analysis",
			"Data_Science",
			"Troubleshooting_skills",
			"Graphics_Designing",
		],
	};

	const [sliderValues, setSliderValues] = useState(
		Object.values(sliderConfig.technical)
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
			navigate("/nonTechnical")
			// const jsonData = JSON.stringify(sliderValues);
        }catch{

        }
	};

	return (
		<div className="container mx-auto px-4 py-8 max-w-5xl">
			<h1 className="text-3xl font-bold mb-6 text-center">
				Job Role Prediction
			</h1>
			<form  className="space-y-8">
				{renderSliderGroup("technical")}
				{/* {renderSliderGroup("nonTechnical")} */}
				{/* {prediction && (
					<div
						className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
						role="alert"
					>
						<strong className="font-bold">Predicted Job Role: </strong>
						<span className="block sm:inline">{prediction}</span>
					</div>
				)} */}
{/* 
				{error && (
					<div
						className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
						role="alert"
					>
						<strong className="font-bold">Error: </strong>
						<span className="block sm:inline">{error}</span>
					</div>
				)} */}

				<button
					onClick={handleBottonCLick}
					className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
				>
					Enter Non-Technical Skills
				</button>
			</form>
		</div>
	);
}

export default Technical;
