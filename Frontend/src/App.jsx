import { useState } from 'react'; // Import useState hook from React
import reactLogo from './assets/react.svg'; // Import React logo from the assets folder
import viteLogo from '/vite.svg'; // Import Vite logo from the root directory
import './App.css'; // Import the App.css stylesheet
import Chatbot from "./chatbot"; // Import the Chatbot component from the chatbot file

function App() { // Define the main App component
  return ( // Render the main UI
    <div className="flex items-center justify-center min-h-screen bg-gray-100"> // Container div with Flexbox for centering the Chatbot in the middle of the screen with a minimum height of the screen and a gray background
      <Chatbot /> // Render the Chatbot component inside the container
    </div>
  );
}

export default App; // Export the App component as the default export
