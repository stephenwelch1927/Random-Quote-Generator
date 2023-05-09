import back from "./quote.module.css";
import React from "react";
import "./getQuote";
import GetQuote from "./getQuote";
import "./quote1";
import ApiCall from "./quote1";
import quotePass from "./quote1";
import display from "./quote1";

class QuoteBackground extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div  className={back.box}>
        <h1 className={back.heading}>Random Quote Generator</h1>

        <ApiCall />
      </div>
    );
  }
}

export default QuoteBackground;
