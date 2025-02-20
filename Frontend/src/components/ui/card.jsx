export function Card({ children }) {
    return <div className="bg-white rounded-xl w-screen h-screen shadow-md p-4">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="p-4">{children}</div>;
  }
  