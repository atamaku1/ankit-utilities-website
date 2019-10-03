import React, { useState } from "react";
const calculate = (rate, percentage)=>{
  rate = parseFloat(rate);
  percentage = parseFloat(percentage);
  const tipAmount = rate * (percentage/100); 
  const total = (rate + tipAmount).toFixed(2);
  return [total, tipAmount.toFixed(2)];
}
const TipCaculator = ({ className }) => {
  const [rate, setRate] = useState("");
  const [total, setTotal] = useState("");
  const [tipPercentage, setTipPercentage] = useState("20");
  const [tipValue, setTipValue] = useState("");

  const handleChange=(event)=>{
    event.preventDefault();
    switch(event.target.name){
      case "rate":{
        setRate(event.target.value);
        const [inputTotal, inputTipAmount] = calculate(event.target.value, tipPercentage);
        setTotal(inputTotal);
        setTipValue(inputTipAmount);
        break;
      }
      case "tipPercentage":{
        setTipPercentage(event.target.value);
        const [inputTotal, inputTipAmount] = calculate(rate, event.target.value);
        setTotal(inputTotal);
        setTipValue(inputTipAmount);
        break;
      }
      default:{}
    }
  }
  return (
    <div className={`card ${className}`}>
      <div className="card-body">
        <h5 className="card-title">Tip calculator</h5>
        <p className="card-text">Caculate tips in restaurants.</p>
        <div className="form-group">
          <label htmlFor="rate">Amount</label>
          <input className="form-control" id="rate" step="0.01" min="0" placeholder="Rate" type="number" name="rate" value={rate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="tipPercentage">Tip percentage</label>
          <input className="form-control" id="tipPercentage" name="tipPercentage" value={tipPercentage} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="tipValue">Tip amount</label>
          <input disabled className="form-control" id="tipValue" step="0.01" min="0" placeholder="Tip Value" type="number" name="tipValue" value={tipValue} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="total">Total</label>
          <input disabled className="form-control" id="total" step="0.01" min="0" placeholder="Total" type="number" name="total" value={total} onChange={handleChange} />
        </div>
      </div>
    </div>
  )
};

export default TipCaculator;