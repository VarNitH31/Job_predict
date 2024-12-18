import React from 'react'

function Footer() {
  return (
    <footer className=" py-12">
    <div className="container mx-auto px-4 text-center">
      <div className="text-2xl font-bold mb-4 text-blue-500">JobPredict</div>
      <p className="text-gray-400 mb-6">
        Empowering professionals with AI-driven career insights
      </p>
      <div className="space-x-4">
        <a href="#" className="text-gray-300 hover:text-white">About</a>
        <a href="#" className="text-gray-300 hover:text-white">Contact</a>
        <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
        <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
      </div>
      <p className="mt-6 text-gray-500">
        © 2024 JobPredict. All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer
