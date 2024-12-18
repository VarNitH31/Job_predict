import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";
import { useSelector,useDispatch } from "react-redux";
import { setValue } from "../redux/slider/sliderSlicer";
import Footer from "./Footer";


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
			// const jsonData = JSON.stringify(values[0]);
			// console.log(values)
			// console.log(values[0])
			// console.log(jsonData);
			navigate("/result")
        }catch{

        }
	};

	return (
		<div className="min-h-screen bg-white">
						<nav className="container mx-auto px-4 py-6 flex justify-between items-center  border-b">
				<div onClick={()=>{
					navigate("/")
				}} className="text-2xl font-bold text-blue-600 cursor-pointer">JobPredict</div>

			</nav>
		<div className="container mx-auto px-4 mb-16 py-8 max-w-5xl mt-8">
			<form  className="space-y-24">
				{renderSliderGroup("nonTechnical")}
				<button
					onClick={handleBottonCLick}
					className="w-full bg-blue-500 text-white py-5 rounded hover:bg-blue-600 hover:shadow-lg transition duration-300 "
				>
					Predict Role
				</button>
			</form>
		</div>
					<div className="bg-white text-black  border-t">
					<Footer/>
					</div>
					</div>
		
	);
}

export default NonTechnical;
