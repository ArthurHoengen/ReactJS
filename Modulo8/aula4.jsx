import React, { useEffect, useState } from 'react';
 
export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");
 
  useEffect(() => {
    const intervalID = setInterval(() => {setTime((previousTime) => previousTime + 1)},1000);
    return () => {clearInterval(intervalID)};
  }, [])

  const handleChange = ({target}) => {setName(target.value)}

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} />
    </>
  );
}