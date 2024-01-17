import { useEffect, useState } from "react";

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      // Cleanup the interval on component unmount
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount
  
    const formatTime = (time) => {
      return time.toLocaleTimeString();
    };
  
    return (
      <div>
        <h2>Current Time</h2>
        <p>{formatTime(currentTime)}</p>
      </div>
    );
  };
  
  export default Clock;