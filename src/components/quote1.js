import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import back from './quote.module.css';
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { BsFillChatRightQuoteFill } from "react-icons/bs";

function ApiCall() {
   
    const [quote, setQuote] = useState(' ');
    const [author, setAuthor] = useState('');
    
    const retrieveQuote = () => {
        axios
          .get("https://official-joke-api.appspot.com/random_joke")
          .then((response) => {
            console.log(response);
            setQuote(response.data.setup)
            setAuthor(response.data.punchline)
          })
          .catch((error) => {
            console.log(error);
          });
      };

      const display = (props) => {
        return(
            <div>
                {quote};
            </div>
        );
      }

      return(
        <div>
        <Button variant="flat" size="xxl" onClick={retrieveQuote}>
        Generate Random Quote
      </Button>
      <div id="text" className={back.displayQuote}>
      <p><h2>Quote</h2><BsFillChatLeftQuoteFill />{quote}<BsFillChatRightQuoteFill /></p> 
        </div>
        
        <p className={back.displayAuthor}></p>
        </div>
        
      );
    

}
export default ApiCall;



