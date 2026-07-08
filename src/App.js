import React, { Component } from "react";
import CurrencyInput from "./CurrencyInput";

class App extends Component {
  state = {
    from: "USD",
    to: "INR",
    rate: 1,
    fromAmt: 1,
    toAmt: 1,
  };

  setAmount = (amt, field) => {
    if (field === "from") {
      this.setState({
        fromAmt: amt,
        toAmt: null,
      });
    } else {
      this.setState({
        fromAmt: null,
        toAmt: amt,
      });
    }
  };
  render() {
    return (
      <div className="currency-converter">
        <CurrencyInput
          symbol={this.state.from}
          selectSymbol={(sym) => this.setState({ from: sym })}
          setAmount={(amt) => this.setState(amt, "from")}
        />
        <CurrencyInput
          symbol={this.state.to}
          selectSymbol={(sym) => this.setState({ to: sym })}
          setAmount={(amt) => this.setState(amt, "to")}
        />
      </div>
    );
  }
}

export default App;
