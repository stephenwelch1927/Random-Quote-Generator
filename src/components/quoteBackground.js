import back from "./quote.module.css";
import React from "react";
import Card from "react-bootstrap/Card";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import { BsHandIndexThumbFill } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import axios from "axios";
import './getQuote';
import GetQuote from "./getQuote";
import './quote1';
import ApiCall from "./quote1";
import quotePass from './quote1';
import display from './quote1';

class QuoteBackground extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={back.box}>
        <div className={back.card}>
          <h1 className={back.heading}>Random Quote Generator</h1>
          <div id="text">
            <h2>
 
            </h2>
          </div>
          <div id="author" className={back.displayAuthor}>
            <h2>
              Author <BsHandIndexThumbFill />
            </h2>
          </div>
          <div id="new-quote" className={back.button}>
            <ApiCall />
          </div>
          <div id="tweet-one">
            <a href="https://twitter.com/" target="_blank">
              <BsTwitter className={back.icon} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBackground;
