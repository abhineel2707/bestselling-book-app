import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
function Book() {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
}

function Image() {
  return (
    <img
      src="./images/book-interesting-facts.jpg"
      alt="Interesting Facts For Curious Minds"
    />
  );
}

const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>;
};

function Author() {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return (
    // <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
    //   Jordan Moore
    // </h4>

    <h4 style={inlineHeadingStyles}>Jordan Moore</h4>
  );
}
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<BookList />);
