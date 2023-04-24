import back from "./quote.module.css";
import React from "react";
import Card from "react-bootstrap/Card";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import { BsHandIndexThumbFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

class QuoteBackground extends React.Component {
  render() {
    return (
      <div className={back.box}>
        <div className={back.card}>
          <h1 className={back.heading}>Random Quote Generator</h1>
          <div id="text">
            <h2>
              Quote <BsFillChatLeftQuoteFill />
              <BsFillChatRightQuoteFill />
            </h2>
          </div>
          <div id="author">
            <h2>
              Author <BsHandIndexThumbFill />
            </h2>
          </div>
            <div id="new-quote" className={back.button}>
          <Button variant="red" size="lg">Generate New Quote</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBackground;
