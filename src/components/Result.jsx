import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearValue } from "../redux/slider/sliderSlicer";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Footer from "./Footer";

function Result(props) {
	const navigate = useNavigate();
	const values = useSelector((state) => state.slider.value);
	const dispatch = useDispatch();
	const linkdinLinks = {
		"Database Administrator":
			"https://in.linkedin.com/jobs/database-administrator-jobs?position=1&pageNum=0",
		"Hardware Engineer":
			"https://in.linkedin.com/jobs/hardware-engineer-jobs?position=1&pageNum=0&original_referer=https%3A%2F%2Fwww.google.com%2F",
		"Application Support Engineer":
			"https://in.linkedin.com/jobs/application-support-engineer-jobs?position=1&pageNum=0",
		"Cyber Security Specialist":
			"https://in.linkedin.com/jobs/cyber-security-specialist-jobs?original_referer=https%3A%2F%2Fwww.google.com%2F&position=1&pageNum=0",
		"Networking Engineer":
			"https://in.linkedin.com/jobs/network-engineer-jobs?position=1&pageNum=0",
		"Software Developer":
			"https://in.linkedin.com/jobs/software-developer-jobs?position=1&pageNum=0",
		"API Specialist":
			"https://in.linkedin.com/jobs/api-specialist-lead-api-jobs?position=1&pageNum=0",
		"Information Security Specialist":
			"https://in.linkedin.com/jobs/information-security-specialist-jobs?position=1&pageNum=0",
		"Technical Writer":
			"https://in.linkedin.com/jobs/technical-writer-jobs?position=1&pageNum=0",
		"AI ML Specialist":
			"https://in.linkedin.com/jobs/artificial-intelligence-specialist-jobs?original_referer=https%3A%2F%2Fwww.google.com%2F&position=1&pageNum=0",
		"Software Tester":
			"https://in.linkedin.com/jobs/software-testing-jobs?original_referer=https%3A%2F%2Fwww.google.com%2F&position=1&pageNum=0",
		"Business Analyst":
			"https://in.linkedin.com/jobs/business-analyst-jobs?position=1&pageNum=0",
		"Customer Service Executive":
			"https://in.linkedin.com/jobs/customer-service-executive-jobs?original_referer=https%3A%2F%2Fwww.google.com%2F&position=1&pageNum=0",
		"Helpdesk Engineer":
			"https://in.linkedin.com/jobs/help-desk-engineer-jobs?position=1&pageNum=0",
		"Graphics Designer":
			"https://in.linkedin.com/jobs/graphic-designer-jobs?position=1&pageNum=0",
		"Project Manager":
			"https://www.linkedin.com/jobs/project-manager-jobs/?currentJobId=4084953169&originalSubdomain=in",
	};

	const [loading, setLoading] = useState(false);
	const [prediction, setPrediction] = useState(null);
	const [error, setError] = useState(null);

	const linkClicked = () => {
		if (prediction && linkdinLinks[prediction]) {
			window.open(linkdinLinks[prediction], "_blank");
		}
	};

	useEffect(() => {
		const jsonData = JSON.stringify(values);
		//https://mini-backend-1.onrender.com
		//http://127.0.0.1:5000/
		const fetchData = async () => {
			const mergedValues = values.reduce(
				(acc, curr) => ({ ...acc, ...curr }),
				{}
			);
			const jsonData = JSON.stringify(mergedValues);
			setLoading(true);
			try {
				//http://127.0.0.1:5000/
				// const response = await fetch("https://mini-backend-1.onrender.com/", {
				const response = await fetch("https://mini-backend-1.onrender.com/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: jsonData,
				});

				if (!response.ok) {
					throw new Error("Prediction failed");
				}

				const data = await response.json();

				if (data.predicted_role) {
					setPrediction(data.predicted_role);
					setError(null);
				}
			} catch (error) {
				setError("Error in predicting... Please try again");
				setPrediction(null);
			}

			dispatch(clearValue());
			setLoading(false);
		};
		fetchData();
	}, []);

	return (
		<div className="min-h-screen bg-white">
					<nav className="container mx-auto   px-4 py-6 flex justify-between items-center border-b">
				<div onClick={()=>{
					navigate("/")
				}} className="text-2xl font-bold text-blue-600 cursor-pointer ">JobPredict</div>
			</nav>
			{/* <div className="my-6 text-center">Welcome </div> */}
			<div className="mx-auto my-28 w-fit ">
				{loading && (
					<div className="text-center mt-8">
						<CircularProgress />
						<p className="mt-4 font-poppins text-gray-600">
							Fetching your predicted role... Please wait.
						</p>
					</div>
				)}
			</div>

			{prediction && (
				<div className="flex flex-grow h-fit flex-col">
					<div
						className="bg-green-100 border border-green-400 text-green-700 px-28 py-3 mt-16 w-fit rounded relative  mx-auto flex flex-col justify-center items-center "
						role="alert"
					>
						<span className="font-poppins">Predicted Job Role: </span>
						<span className="block from-neutral-700 font-poppins sm:inline text-3xl ">
							{prediction}
						</span>
					</div>
					<div className="mt-16 bg-blue-100  border border-blue-400 text-blue-700 px-6 py-3 rounded w-fit mx-auto flex flex-col justify-center items-center">
						<p className="text-lg font-poppins">
							Interested in {prediction} roles? Check out these openings on
							LinkedIn:
						</p>
					</div>
					<div
						onClick={linkClicked}
						className="flex w-2/5 mx-auto my-28 border  border-blue-500 py-5 px-7 justify-between rounded-md hover:bg-blue-400 shadow-black hover:shadow-lg hover:-translate-y-1 hover:text-white transition-all "
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							class="bi bi-linkedin"
							viewBox="0 0 16 16"
						>
							<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
						</svg>
						<p>{prediction} Jobs in India </p>
						<div>
							<ArrowForwardIosIcon />
						</div>
					</div>
					<div className="w-fit m-auto my-8">
						<Button
							onClick={() => {
								dispatch(clearValue());
								setPrediction(null);
								setError(null);
								navigate("/");
							}}
							variant="outlined"
						>
							Re-Analyze
						</Button>
					</div>
				</div>
			)}

			{error && (
				<div
					className="bg-red-100 border border-red-400 text-red-700 mt-16 px-28 py-3 rounded w-fit relative mx-auto flex flex-col justify-center items-center "
					role="alert"
				>
					<strong className="font-bold">Error </strong>
					<span className="block sm:inline">{error}</span>
				</div>
			)}

			<div className="bg-white text-black w-full  border-t mt-36 ">
				<Footer />
			</div>
		</div>
	);
}

export default Result;