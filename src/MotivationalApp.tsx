import { useEffect, useState } from 'react';

export const MotivationalApp = () => {
  const [author, setAuthor] = useState('');
  const [quote, setQuote] = useState('');

  const handleReset = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetch('https://dummyjson.com/quotes/random')
      .then((res) => res.json())
      .then((data) => {
        setAuthor(data.author);
        setQuote(data.quote);
      });
  }, []);

  return (
    <div className="container">
      <h1>Motivational Quotes</h1>
      <h3>{author} </h3>
      <p>"{quote}" </p>
      <button onClick={handleReset}>Refresh!</button>
    </div>
  );
};
