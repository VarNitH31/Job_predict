import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../redux/slider/sliderSlicer";
import Footer from "./Footer";

function Technical(params) {
	const slideValues = useSelector((state) => state.slider.value);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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
				acc[skill] = 1; // Default slider value
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
			<div className="flex flex-col gap-4">
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
			navigate("/nonTechnical");
		} catch {}
	};

	return (
		<div className="min-h-screen bg-white">
			<nav className="container mx-auto   px-4 py-6 flex justify-between items-center border-b">
				<div onClick={()=>{
					navigate("/")
				}} className="text-2xl font-bold text-blue-600 cursor-pointer ">JobPredict</div>
			</nav>
			<div className="container mb-16 mt-8 mx-auto px-4 py-8 max-w-5xl">
				<form className="space-y-24">
					{renderSliderGroup("technical")}
					<button
						onClick={handleBottonCLick}
						className="w-full bg-blue-500 text-white py-5 rounded hover:bg-blue-600 hover:shadow-lg transition duration-300"
					>
						Enter Non-Technical Skills
					</button>
				</form>
			</div>
			<div className="bg-white text-black  border border-t">
				<Footer />
			</div>
		</div>
	);
}

export default Technical;
