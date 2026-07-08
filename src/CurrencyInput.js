import React from "react";

const CurrencyInput = ({ symbol, selectSymbol, amount, setAmount }) => {
  return (
    <div className="field">
      <div className="currency-picker">
        <select value={symbol} onChange={(e) => selectSymbol(e.target.value)}>
          <option>USD</option>
          <option>INR</option>
          <option>EUR</option>
          <option>SGD</option>
          <option>GBP</option>
          <option>CAD</option>
          <option>AUD</option>
          <option>CNY</option>
          <option>JPY</option>
          <option>NZD</option>
        </select>
      </div>
      <div className="currency-input">
        <input
          className="number-input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default CurrencyInput;
