import { useState } from "react";
import TextField from '@mui/material/TextField';
export default function Form({ onTaskCreate }) {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    purpose:""
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
      });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskCreate && onTaskCreate(formData);
    setFormData("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
           <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="filled"
            size="small"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
           <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="filled"
            size="small"
            type="text"
            placeholder="Enter Your Purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
          />
        </div>
        <div>
           <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="filled"

            type="number"
            placeholder="Enter Your Amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
}
