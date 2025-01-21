import React, { useState } from 'react';
import { ChevronRight, TrendingUp, Target, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import AlertDialog from './Mui/Dialogue';



const JobPredictionLandingPage = () => {
  const [email, setEmail] = useState('');
  const navigate =  useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Check if the email matches the regex
    if (!emailRegex.test(email)) {
      setEmail("enter valid Email ID");
      return;
    }

    localStorage.setItem('email', email);
    handleRedirect();
  };

  const handleRedirect=(e)=>{
    navigate("/technical")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">JobPredict</div>
        <div className="space-x-4">
          <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</a>
          <button onClick={handleRedirect} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Predict Your Career Future <br /> with power of Machine Learning
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Leverage advanced machine learning to analyse career interests, 
          identify emerging opportunities, and make data-driven career decisions.
        </p>
        
        <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto flex">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button 
            type='submit'
            onClick={handleEmailSubmit}
            className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition flex items-center"
          >
            Try it out <ChevronRight className="ml-2" />
          </button>
        </form>
      </header>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Career Insight
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our ML-driven platform provides comprehensive career prediction and guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="w-12 h-12 text-blue-600" />,
              title: "Personalized Predictions",
              description: "Tailored career forecasts based on your skills, experience, and goals."
            },
            {
              icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
              title: "Feedback",
              description: "Not happy with prediction? Write to us in feedback and re-analyse!"
            },
            {
              icon: <Globe className="w-12 h-12 text-blue-600" />,
              title: "Immediate aids",
              description: "Dont know where to continue? Job opportunities listed along with the prediction"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How JobPredict Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our advanced model analyzes multiple data points to provide accurate career predictions.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Create Profile", description: "Input your email ID and get started." },
            { step: "2", title: "Data Analysis", description: "Our model processes your skills, technical and non-technical." },
            { step: "3", title: "Generate Insights", description: "Receive personalized career prediction reports." },
            { step: "4", title: "Take Action", description: "Make informed decisions about your professional development." }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Shape Your Career Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals leveraging ML to make smarter career decisions.
          </p>
          <button onClick={handleRedirect} className="bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition">
            Start Your Career Journey
          </button>
        </div>
      </section>
      {/* Footer */}
      <div className='bg-gray-900 text-white' >
            <Footer/>
      </div>
    </div>

  );
};

export default JobPredictionLandingPage;