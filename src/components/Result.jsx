import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearValue } from "../redux/slider/sliderSlicer";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Footer from "./Footer";
import AlertDialog from "./Mui/Dialogue";

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

	const internshalaInternships = {
		"Database Administrator":
			"https://internshala.com/internships/database-building-internship/",
		"Cyber Security Specialist":
			"https://internshala.com/internships/cyber-security-internship/",
		"Networking Engineer":
			"https://internshala.com/internships/network-engineering-internship/",
		"Software Developer":
			"https://internshala.com/internships/software-development-internship/",
		"Information Security Specialist":
			"https://internshala.com/internships/information-technology-internship/",
		"Application Support Engineer":
			"https://internshala.com/internships/mobile-app-development-internship/",
		"Technical Writer":
			"https://internshala.com/internships/content-writing-internship/",
		"AI ML Specialist":
			"https://internshala.com/internships/artificial-intelligence-ai,machine-learning-internship/",
		"Software Tester":
			"https://internshala.com/internships/software-testing-internship/",
		"Business Analyst":
			"https://internshala.com/internships/analytics-internship/",
		"Customer Service Executive":
			"https://internshala.com/internships/customer-service-internship/",
		"Graphics Designer":
			"https://internshala.com/internships/graphic-design-internship/",
		"Project Manager":
			"https://internshala.com/internships/project-management-internship/",
	};

	const internshalaJobs = {
		"Database Administrator":
			"https://internshala.com/jobs/database-building-jobs/",
		"Cyber Security Specialist":
			"https://internshala.com/jobs/cyber-security-jobs/",
		"Networking Engineer":
			"https://internshala.com/jobs/network-engineering-jobs/",
		"Software Developer":
			"https://internshala.com/jobs/software-development-jobs/",
		"Information Security Specialist":
			"https://internshala.com/jobs/information-technology-jobs/",
		"Application Support Engineer":
			"https://internshala.com/jobs/mobile-app-development-jobs/",
		"Technical Writer": "https://internshala.com/jobs/content-writing-jobs/",
		"AI ML Specialist":
			"https://internshala.com/jobs/artificial-intelligence-ai,machine-learning-jobs/",
		"Software Tester": "https://internshala.com/jobs/software-testing-jobs/",
		"Business Analyst": "https://internshala.com/jobs/analytics-jobs/",
		"Customer Service Executive":
			"https://internshala.com/jobs/customer-service-jobs/",
		"Graphics Designer": "https://internshala.com/jobs/graphic-design-jobs/",
		"Project Manager": "https://internshala.com/jobs/project-management-jobs/",
	};

	const unstopInternships = {
		"Database Administrator": "https://unstop.com/internships?searchTerm=data",
		"Hardware Engineer":
			"https://unstop.com/internships?searchTerm=hardware%20engineer",
		"Application Support Engineer":
			"https://unstop.com/internships?searchTerm=application%20support",
		"Cyber Security Specialist":
			"https://unstop.com/internships?searchTerm=cyber%20security",
		"Networking Engineer":
			"https://unstop.com/internships?searchTerm=networking",
		"Software Developer":
			"https://unstop.com/internships?searchTerm=software%20developer",
		"API Specialist": "https://unstop.com/internships?searchTerm=api",
		"Information Security Specialist":
			"https://unstop.com/internships?searchTerm=information",
		"Technical Writer":
			"https://unstop.com/internships?searchTerm=technical%20writer",
		"AI ML Specialist": "https://unstop.com/internships?searchTerm=ai%20ml",
		"Software Tester":
			"https://unstop.com/internships?searchTerm=software%20tester",
		"Business Analyst":
			"https://unstop.com/internships?searchTerm=business%20analyst",
		"Customer Service Executive":
			"https://unstop.com/internships?searchTerm=customer%20service",
		"Helpdesk Engineer": "https://unstop.com/internships?searchTerm=help",
		"Graphics Designer":
			"https://unstop.com/internships?searchTerm=graphic%20designer",
		"Project Manager":
			"https://unstop.com/internships?searchTerm=project%20manager",
	};

	const unstopJobs = {
		"Database Administrator":
			"https://unstop.com/jobs?searchTerm=database%20administrator",
		"Hardware Engineer":
			"https://unstop.com/jobs?searchTerm=hardware%20engineer",
		"Application Support Engineer":
			"https://unstop.com/jobs?searchTerm=application%20support%20engineer",
		"Cyber Security Specialist":
			"https://unstop.com/jobs?searchTerm=cyber%20security%20specialist",
		"Networking Engineer":
			"https://unstop.com/jobs?searchTerm=networking%20engineer",
		"Software Developer":
			"https://unstop.com/jobs?searchTerm=software%20developer",
		"API Specialist": "https://unstop.com/jobs?searchTerm=api%20specialist",
		"Information Security Specialist":
			"https://unstop.com/jobs?searchTerm=information%20security%20specialist",
		"Technical Writer": "https://unstop.com/jobs?searchTerm=technical%20writer",
		"AI ML Specialist":
			"https://unstop.com/jobs?searchTerm=ai%20ml%20specialist",
		"Software Tester": "https://unstop.com/jobs?searchTerm=software%20tester",
		"Business Analyst": "https://unstop.com/jobs?searchTerm=business%20analyst",
		"Customer Service Executive":
			"https://unstop.com/jobs?searchTerm=customer%20service%20executive",
		"Helpdesk Engineer":
			"https://unstop.com/jobs?searchTerm=helpdesk%20engineer",
		"Graphics Designer":
			"https://unstop.com/jobs?searchTerm=graphic%20designer",
		"Project Manager": "https://unstop.com/jobs?searchTerm=project%20manager",
	};
	const udemyCourses = {
		"Database Administrator":
			"https://www.udemy.com/courses/search/?src=ukw&q=database+administration",
		"Hardware Engineer":
			"https://www.udemy.com/courses/search/?q=hardware+engineering&src=sac&kw=hardware+en",
		"Application Support Engineer":
			"https://www.udemy.com/courses/search/?q=application+support&src=sac&kw=application+support",
		"Cyber Security Specialist":
			"https://www.udemy.com/courses/search/?src=ukw&q=cyber+security",
		"Networking Engineer":
			"https://www.udemy.com/courses/search/?q=network+engineer&src=sac&kw=network+en",
		"Software Developer":
			"https://www.udemy.com/courses/search/?src=ukw&q=software+developer",
		"API Specialist": "https://www.udemy.com/courses/search/?src=ukw&q=api",
		"Information Security Specialist":
			"https://www.udemy.com/courses/search/?src=ukw&q=information+security",
		"Technical Writer":
			"https://www.udemy.com/courses/search/?q=technical+writing&src=sac&kw=technical+wr",
		"AI ML Specialist": "https://www.udemy.com/courses/search/?src=ukw&q=ai+ml",
		"Software Tester":
			"https://www.udemy.com/courses/search/?q=software+tester&src=sac&kw=software+tester",
		"Business Analyst":
			"https://www.udemy.com/courses/search/?src=ukw&q=business+analyst",
		"Customer Service Executive":
			"https://www.udemy.com/courses/search/?src=ukw&q=customer+service",
		"Helpdesk Engineer":
			"https://www.udemy.com/courses/search/?q=helpdesk&src=sac&kw=helpdesk",
		"Graphics Designer":
			"https://www.udemy.com/courses/search/?q=graphic+design&src=sac&kw=graph",
		"Project Manager":
			"https://www.udemy.com/courses/search/?q=project+management&src=sac&kw=project",
	};
	const indeedJobs = {
		"Database Administrator": "https://in.indeed.com/jobs?q=database+administrator&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=74fb425591659f2c",
		"Hardware Engineer": "https://in.indeed.com/jobs?q=hardware+engineer&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=f4145c0c8c33054e",
		"Application Support Engineer": "https://in.indeed.com/jobs?q=application+support+engineer&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=dd0eeb179057808b",
		"Cyber Security Specialist": "https://in.indeed.com/jobs?q=cyber+security&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=8337e317029da28e",
		"Networking Engineer": "https://in.indeed.com/jobs?q=network+engineer&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=dd0eeb179057808b",
		"Software Developer": "https://in.indeed.com/jobs?q=software+developer&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=0c66938feebe1277",
		"API Specialist": "https://in.indeed.com/jobs?q=api+production&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=452d57cc74adae1e",
		"Information Security Specialist": "https://in.indeed.com/jobs?q=information+security&l=&from=searchOnDesktopSerp&vjk=dd0eeb179057808b",
		"Technical Writer": "https://in.indeed.com/jobs?q=technical+writer&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=0e4343fb89e150c9",
		"AI ML Specialist": "https://in.indeed.com/jobs?q=ai+ml+engineer&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=fda3f4cb8be306a7",
		"Software Tester": "https://in.indeed.com/jobs?q=software+testing&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=8880336ed104a833",
		"Business Analyst": "https://in.indeed.com/jobs?q=business+analyst&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=a0af9551bc9c4f4f",
		"Customer Service Executive": "https://in.indeed.com/jobs?q=customer+service+executive&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=d3f93e397b575307",
		"Helpdesk Engineer": "https://in.indeed.com/jobs?q=help+desk&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=08085d377eb43d09",
		"Graphics Designer": "https://in.indeed.com/jobs?q=graphic+designer&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=f19f51663386586d",
		"Project Manager": "https://in.indeed.com/jobs?q=project+manager&l=&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=f423a8344d3dbb21"
	};

	const [loading, setLoading] = useState(false);
	const [prediction, setPrediction] = useState(null);
	const [error, setError] = useState(null);

	// const linkClicked = () => {
	// 	if (prediction && linkdinLinks[prediction]) {
	// 		window.open(linkdinLinks[prediction], "_blank");
	// 	}
	// };

	const handleLinkClick = (platform) => {
		console.log(`platform=${platform}`)
		let links;
		switch (platform) {
			case "linkedin":
				links = linkdinLinks;
				break;
			case "internshalaInternships":
				links = internshalaInternships;
				break;
			case "internshalaJobs":
				links = internshalaJobs;
				break;
			case "unstopInternships":
				links = unstopInternships;
				break;
			case "unstopJobs":
				links = unstopJobs;
				break;
			case "udemyCourses":
				links = udemyCourses;
				break;
			case "indeedJobs":
				links=indeedJobs;
				break;
			default:
				links = null;
		}
		console.log(`links=${links},prediction=${prediction}`)
		console.log(`links=${links},prediction=${prediction},links[prediction=${links[prediction]}]`)
		if (prediction && links && links[prediction]) {
			window.open(links[prediction], "_blank");
		}
	};

	useEffect(() => {
		// const jsonData = JSON.stringify(values)
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
				const response = await fetch("https://mini-backend-1.onrender.com/", {
				// const response = await fetch("http://127.0.0.1:5000/", {
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
					localStorage.setItem("prediction", data.predicted_role);
				}
			} catch (error) {
				setError("Error in predicting... Please try again");
				localStorage.setItem("prediction", null);
				localStorage.setItem("email", null);
				dispatch(clearValue());
				setPrediction(null);
			}

			// dispatch(clearValue());
			setLoading(false);
		};
		fetchData();
	}, []);

	return (
		<div className="min-h-screen bg-white">
			<nav className="container mx-auto   px-4 py-6 flex justify-between items-center border-b">
				<div
					onClick={() => {
						navigate("/");
					}}
					className="text-2xl font-bold text-blue-600 cursor-pointer "
				>
					JobPredict
				</div>
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
						</p>
					</div>
					{/* <div
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
					</div> */}
					<div className="flex flex-col items-center gap-6 my-10">
						<div
							onClick={() => handleLinkClick("linkedin")}
							className="flex w-2/5 mx-auto border border-blue-500 py-5 px-7 justify-between rounded-md hover:bg-blue-400 shadow-black hover:shadow-lg hover:-translate-y-1 hover:text-white transition-all cursor-pointer"
						>
							{/* <svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="bi bi-linkedin"
								viewBox="0 0 16 16"
							>
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
							</svg> */}
							<img src="https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/linkedin.svg" alt="" className="w-24" />
							<p>{prediction} Jobs on LinkedIn</p>
							<div>
							<ArrowForwardIosIcon />
						</div>
						</div>

						<div
							onClick={() => handleLinkClick("internshalaInternships")}
							className="flex w-2/5 mx-auto border border-green-500 py-5 px-7 justify-between rounded-md hover:bg-green-400 shadow-black hover:shadow-lg hover:-translate-y-1 hover:text-white transition-all cursor-pointer items-center"
						>
														<img src="https://raw.githubusercontent.com/ShreyasP77/internshala_homepage_clone/31214363b3bf8fe161bce62b504812beecf58d6e/new_internshala_logo.svg" alt="" />
							<p>{prediction} Internships on Internshala</p>
							<div>
							<ArrowForwardIosIcon />
						</div>
						</div>

						<div
							onClick={() => handleLinkClick("internshalaJobs")}
							className="flex w-2/5 mx-auto border border-purple-500 py-5 px-7 justify-between rounded-md hover:bg-purple-400 shadow-black hover:shadow-lg hover:-translate-y-1 hover:text-white transition-all cursor-pointer items-center"
						>
							<img src="https://raw.githubusercontent.com/ShreyasP77/internshala_homepage_clone/31214363b3bf8fe161bce62b504812beecf58d6e/new_internshala_logo.svg" alt="" />
							<p>{prediction} Jobs on Internshala</p>
							<div>
							<ArrowForwardIosIcon />
						</div>
						</div>

						<div
							onClick={() => handleLinkClick("unstopInternships")}
							className="flex w-2/5 mx-auto border border-orange-500 py-5 px-7 justify-between rounded-md hover:bg-orange-400 shadow-black hover:shadow-lg hover:-translate-y-1 hover:text-white transition-all cursor-pointer items-center"
						>
													<img src="https://raw.githubusercontent.com/Sai2307l/Unstop/e88b5dc3b03741326a583ece567c5ed670e13d64/unstop-logo.svg" alt="" className="w-20" />
							<p>{prediction} Internships on Unstop</p>
							<div>
							<ArrowForwardIosIcon />
						</div>
						</div>

						<div
							onClick={() => handleLinkClick("unstopJobs")}
							className="flex w-2/5 mx-auto border border-red-500 py-5 px-7 justify-between rounded-md hover:bg-red-400 shadow-black hover:shadow-lg hover:-translate-y-1 hover:text-white transition-all cursor-pointer items-center"
						>
							<img src="https://raw.githubusercontent.com/Sai2307l/Unstop/e88b5dc3b03741326a583ece567c5ed670e13d64/unstop-logo.svg" alt="" className="w-20" />
							<p>{prediction} Jobs on Unstop</p>
							<div>
							<ArrowForwardIosIcon />
						</div>
						</div>

						<div
							onClick={() => handleLinkClick("indeedJobs")}
							className="flex w-2/5 mx-auto border border-yellow-500 py-5 px-7 justify-between rounded-md hover:bg-yellow-200 shadow-black hover:shadow-lg hover:-translate-y-1 hover:text-white transition-all cursor-pointer items-center"
						>
							<img src="https://i.ibb.co/NWxJD2H/66f1c5b7c1d07-indeed.png" alt="66f1c5b7c1d07-indeed"  className="w-20" border="0"/>
							<p>{prediction} Jobs on indeedJobs</p>
							<div>
							<ArrowForwardIosIcon />
						</div>
						</div>

						<div
							onClick={() => handleLinkClick("udemyCourses")}
							className="flex w-2/5 mx-auto border border-teal-500 py-5 px-7 justify-between rounded-md hover:bg-teal-400 shadow-black hover:shadow-lg hover:-translate-y-1 hover:text-white transition-all cursor-pointer items-center"
						>
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/768px-Udemy_logo.svg.png?20210716114915" alt="Udemy" className="w-20"></img>
							<p>{prediction} Courses on Udemy</p>
							<div>
							<ArrowForwardIosIcon />
						</div>
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
				<>
					<div
						className="bg-red-100 border border-red-400 text-red-700 mt-16 px-28 py-3 rounded w-fit relative mx-auto flex flex-col justify-center items-center "
						role="alert"
					>
						<strong className="font-bold">Error </strong>
						<span className="block sm:inline">{error}</span>
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
				</>
			)}
			<div className="hidden">
				<AlertDialog />
			</div>

			<div className="bg-white text-black w-full  border-t mt-36 ">
				<Footer />
			</div>
		</div>
	);
}

export default Result;
