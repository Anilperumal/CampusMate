// Define and export the Input component, receiving props for value, onChange, placeholder, onKeyDown, and className with a default empty string
export function Input({ value, onChange, placeholder, onKeyDown, className = "" }) { 
return (
    <input
      type="text" 
      value={value} // Bind the input value to the value prop
      onChange={onChange} // Trigger the onChange event with the onChange prop
      placeholder={placeholder} // Set the input placeholder to the placeholder prop
      onKeyDown={onKeyDown} // Trigger the onKeyDown event with the onKeyDown prop
      className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${className}`} 
    />
  );
}
