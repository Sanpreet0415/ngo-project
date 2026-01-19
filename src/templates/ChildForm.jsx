import { useState } from "react";
import "./ChildForm.css";

export default function ChildForm() {
  const [formData, setFormData] = useState({
    parent_name: "",
    contact_number: "",
    child_name: "",
    age: "",
    disability: "Autism",
    condition_description: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      alert("Form submitted successfully. Data saved.");

      setFormData({
        parent_name: "",
        contact_number: "",
        child_name: "",
        age: "",
        disability: "Autism",
        condition_description: ""
      });
    } catch (error) {
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="child-form-wrapper">
      <h2>Child Registration / Contact Form</h2>
      <p>Please provide accurate details for better assistance.</p>

      <form className="child-form" onSubmit={handleSubmit}>
        <label>
          Parent / Guardian Name
          <input
            type="text"
            name="parent_name"
            value={formData.parent_name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Contact Number
          <input
            type="tel"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
          />
        </label>

        <label>
          Child Name
          <input
            type="text"
            name="child_name"
            value={formData.child_name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Age
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="1"
          />
        </label>

        <label>
          Disability Type
          <select
            name="disability"
            value={formData.disability}
            onChange={handleChange}
          >
            <option value="Autism">Autism</option>
            <option value="Speech Impairment">Speech Impairment</option>
            <option value="Hearing Impairment">Hearing Impairment</option>
            <option value="Physical Disability">Physical Disability</option>
            <option value="Multiple Disabilities">Multiple Disabilities</option>
          </select>
        </label>

        <label>
          Condition Description
          <textarea
            name="condition_description"
            value={formData.condition_description}
            onChange={handleChange}
            rows="4"
            required
            placeholder="Briefly describe the child’s condition or needs"
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Form"}
        </button>
      </form>
    </div>
  );
}
