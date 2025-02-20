import { useState } from "react"; // Import useState hook from React
import { Send } from "lucide-react"; // Import Send icon from lucide-react library
import { Card, CardContent } from "./components/ui/card"; // Import Card and CardContent components from your custom UI components
import { Button } from "./components/ui/button"; // Import Button component from your custom UI components
import { Input } from "./components/ui/input"; // Import Input component from your custom UI components

export default function Chatbot() { // Define the main Chatbot component as a default export
  const [messages, setMessages] = useState([ // Initialize state to store chat messages, with initial message from the bot
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState(""); // Initialize state to store the current input value

  const sendMessage = () => { // Define a function to handle sending a message
    if (!input.trim()) return; // If the input is empty or only contains whitespace, return without doing anything

    const newMessage = { text: input, sender: "user" }; // Create a new message object for the user's input
    setMessages([...messages, newMessage, { text: "Processing...", sender: "bot" }]); // Update the messages state with the new user message and a temporary "Processing..." bot message
    setInput(""); // Clear the input field

    // Simulate bot response (Replace this with actual API call)
    setTimeout(() => { // Use setTimeout to simulate a delay before the bot responds
      setMessages((prev) => // Update the messages state by removing the "Processing..." message and adding the bot's response
        prev.slice(0, -1).concat({ text: "I'm here to help!", sender: "bot" })
      );
    }, 1000); // Wait for 1 second before updating the messages state
  };

  return ( // Render the main UI for the chatbot
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100"> // Container div for centering the chatbot in the middle of the screen
      <Card className="w-full h-full flex flex-col bg-white shadow-xl rounded-none"> // Main Card component for the chatbot
        {/* Chat Messages Section */}
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4"> // CardContent component for displaying chat messages with some padding and spacing
          {messages.map((msg, index) => ( // Iterate over the messages array to render each message
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}> // Container div for each message, aligning messages to the left or right based on the sender
              <div
                className={`max-w-[75%] p-3 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end rounded-br-none" // User messages (Blue background, Right-Aligned)
                    : "bg-gray-300 text-black self-start rounded-bl-none" // Bot messages (Gray background, Left-Aligned)
                }`}
              >
                {msg.text} // Display the text of the message
              </div>
            </div>
          ))}
        </CardContent>

        {/* Fixed Input Box at the Bottom */}
        <div className="fixed bottom-0 left-0 w-full bg-white p-3 border-t flex items-center gap-2"> // Container div for the input box at the bottom of the screen
          <Input
            value={input} // Bind the input value to the input state
            onChange={(e) => setInput(e.target.value)} // Update the input state when the user types in the input field
            placeholder="Type a message..." // Placeholder text for the input field
            className="flex-1 text-black" // Add some styles to the input field
            onKeyDown={(e) => e.key === "Enter" && sendMessage()} // Send the message when the Enter key is pressed
          />
          <Button onClick={sendMessage} className="p-2 rounded-full bg-blue-500 text-white"> // Button to send the message
            <Send size={20} /> // Send icon inside the button
          </Button>
        </div>
      </Card>
    </div>
  );
}
