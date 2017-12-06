/* @flow */
import React, {Component} from "react";

import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");

class App extends Component<*, *> {
    render() {
        return (
            <div>
                <h1>
                    HOW MANY PEOPLE PAID SOME ETHER TO SEE HOW MANY PEOPLE PAID SOME ETHER?
                </h1>

                <p>THE BEST CRYPTO CURRENCY INVESTMENT YOU'LL MAKE ALL YEAR</p>

                <ol>
                    <li>CLICK THE BUTTON.</li>
                    <li>PAY SOME ETHER.</li>
                    <li>SEE THE COUNTER.</li>
                    <li>TELL YOUR FRIENDS.</li>
                </ol>

                <button>PAY SOME ETHER</button>
            </div>
        );
    }
}

export default App;
