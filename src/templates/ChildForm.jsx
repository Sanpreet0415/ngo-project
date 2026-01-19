import { useState } from "react";
import "./ChildForm.css"
export default function ChildForm() {
  const [formData, setFormData] = useState({
    parent_name: "",
    contact_number: "",
    child_name: "",
    age: "",
    disability: "Autism",
    condition_description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    alert("Data saved to MongoDB");

    setFormData({
      parent_name: "",
      contact_number: "",
      child_name: "",
      age: "",
      disability: "Autism",
      condition_description: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="parent_name" placeholder="Parent Name" onChange={handleChange} value={formData.parent_name} required />
      <input name="contact_number" placeholder="Contact Number" onChange={handleChange} value={formData.contact_number} required />
      <input name="child_name" placeholder="Child Name" onChange={handleChange} value={formData.child_name} required />
      <input name="age" type="number" placeholder="Age" onChange={handleChange} value={formData.age} required />

      <select name="disability" onChange={handleChange} value={formData.disability}>
        <option value="Autism">Autism</option>
        <option value="Speech Impairment">Speech Impairment</option>
        <option value="Hearing Impairment">Hearing Impairment</option>
        <option value="Physical Disability">Physical Disability</option>
      </select>

      <textarea
        name="condition_description"
        placeholder="Describe condition"
        onChange={handleChange}
        value={formData.condition_description}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}
