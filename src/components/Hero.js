import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>Lagos | {dateTime.toLocaleString()}</p>
    </section>
  );
};

export default Hero;
