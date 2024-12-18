import React, { useState } from "react";
import Slider from "./components/Slider";
import Technical from "./components/Technical";
import NonTechnical from "./components/NonTechnical";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './redux/store'
import Result from "./components/Result";
import JobPredictionLandingPage from "./components/Landing";

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

// function App() {
// 	const [sliderValues, setSliderValues] = useState(
// 		Object.values(sliderConfig)
// 			.flat()
// 			.reduce((acc, skill) => {
// 				acc[skill] = 0; // Default slider value
// 				return acc;
// 			}, {})
// 	);

// const [prediction, setPrediction] = useState(null);
// const [error, setError] = useState(null);

// 	const handleSliderChange = (skill, value) => {
// 		setSliderValues((prev) => ({
// 			...prev,
// 			[skill]: value,
// 		}));
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();

// 		setPrediction("Loading...")

// 		try {
// 			// Prepare JSON data
// 			const jsonData = JSON.stringify(sliderValues);

// 			// Send POST request with JSON body
// 			//https://mini-backend-1.onrender.com
// 			//http://127.0.0.1:5000/
// 			const response = await fetch("http://127.0.0.1:5000/", {
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				body: jsonData,
// 			});

// 			if (!response.ok) {
// 				throw new Error("Prediction failed");
// 			}

// 			const data = await response.json();

//       if (data.predicted_role) {
//         setPrediction(data.predicted_role);
		
//         setError(null);

// 		setTimeout(() => {
// 			setPrediction(null);
// 		}, 10000);

//       } else if (data.error) {
//         setError(data.error);
//         setPrediction(null);
//       }
// 		} catch (error) {
// 			console.error("Error:", error);
//       setError(data.error);
//       setPrediction(null);
// 		}
// 	};

// 	const renderSliderGroup = (group) => (
// 		<div className="space-y-4">
// 			<h2 className="text-xl font-semibold mb-4 border-b pb-2">
// 				{group === "technical"
// 					? "Technical Skills"
// 					: "Personality & Soft Skills"}
// 			</h2>
// 			<div className="grid grid-cols-2 gap-4">
// 				{sliderConfig[group].map((skill) => (
// 					<Slider
// 						key={skill}
// 						label={skill.replace(/_/g, " ")}
// 						value={sliderValues[skill]}
// 						onChange={(value) => handleSliderChange(skill, value)}
// 					/>
// 				))}
// 			</div>
// 		</div>
// 	);

// 	return (
// 		<div className="container mx-auto px-4 py-8 max-w-5xl">
// 			<h1 className="text-3xl font-bold mb-6 text-center">
// 				Job Role Prediction
// 			</h1>
// 			<form onSubmit={handleSubmit} className="space-y-8">
// 				{renderSliderGroup("technical")}
// 				{renderSliderGroup("nonTechnical")}
// 				{prediction && (
// 					<div
// 						className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
// 						role="alert"
// 					>
// 						<strong className="font-bold">Predicted Job Role: </strong>
// 						<span className="block sm:inline">{prediction}</span>
// 					</div>
// 				)}

// 				{error && (
// 					<div
// 						className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
// 						role="alert"
// 					>
// 						<strong className="font-bold">Error: </strong>
// 						<span className="block sm:inline">{error}</span>
// 					</div>
// 				)}

// 				<button
// 					type="submit"
// 					className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
// 				>
// 					Predict Job Role
// 				</button>
// 			</form>
// 		</div>
// 	);
// }

function App(){
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<JobPredictionLandingPage/>} />
				<Route path='/technical' element={<Technical/>}/>
				<Route path="/nonTechnical" element={<NonTechnical/>} />
				<Route path="/result" element={<Result/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default ()=>(
	<Provider store={store}>
		<App/>
	</Provider>
)