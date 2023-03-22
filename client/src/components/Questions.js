import React, { useState } from "react";

export default function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);

  function onSelect(i) {
    console.log("radio button change ");
  }

  return (
    <div className="questions">
      <h2 className="text-light">Simple Question 1</h2>
      <ul>
        <li>
          <input
            type="radio"
            value={false}
            name="options"
            id={`q1-option`}
            onChange={() => onSelect()}
          />
          <label className="text-primary" htmlFor="q1-options">
            options
          </label>
          <div className="check checked "></div>
        </li>
      </ul>
    </div>
  );
}
