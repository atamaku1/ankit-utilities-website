import React, {useState} from "react";

const TaxCalculator = ()=>{
  const [rate, setRate] = useState("");
  const [tax, setTax] = useState("");
  const [total, setTotal] = useState("");
  const handleChange = (e)=>{
    if(e.target.name === "rate"){
      const inputRate = parseFloat(e.target.value).toFixed(2) || "";
      const totalTax = (parseFloat(inputRate) * 0.13125).toFixed(2) || "";
      const totals = (parseFloat(inputRate) + parseFloat(totalTax)).toFixed(2) || "";
      setRate(e.target.value);
      setTax(totalTax);
      setTotal(totals);
    }
    else{
      const inputTotal = parseFloat(e.target.value).toFixed(2) || "";
      const inputRate = (parseFloat(inputTotal) / 1.13125).toFixed(2) || "";
      const inputTax = (parseFloat(inputRate) * 0.13125).toFixed(2) || "";
      setTotal(e.target.value);
      setRate(inputRate);
      setTax(inputTax);
    }
  }
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Tax calculator</h5>
        <p className="card-text">Caculate tax and total for NY hotels.</p>
        <div className="form-group">
          <label htmlFor="rate">Rate</label>
          <input className="form-control" id="rate" step="0.01" min="0" placeholder="Rate" type="number" name="rate" value={rate} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="tax">Tax</label>
          <input className="form-control" id="tax" step="0.01" min="0" placeholder="Tax" type="number" disabled name="tax" value={tax} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="total">Total</label>
          <input className="form-control" id="total" step="0.01" min="0" placeholder="Total" type="number" name="total" value={total} onChange={handleChange}/>
        </div>
      </div>
    </div>
  )
};

export default TaxCalculator;