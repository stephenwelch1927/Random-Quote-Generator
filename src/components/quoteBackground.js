import back from './quote.module.css';
import React from "react";
import Card from "react-bootstrap/Card";

class QuoteBackground extends React.Component {
  render() {
    return (
      <div className={back.box}>
        <div className={back.card}>
            <h1 className={back.heading}>Random Quote Generator</h1>
            <h2>Quote</h2>
        </div>
      </div>
    );
  }
}

export default QuoteBackground;
