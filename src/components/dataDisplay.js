import StudentTable from "./StudentTable";
import React, { useState } from "react";
const DataDisplay = () => {
  const [entryList, setEntryList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const obj = {
      name: formData.get("name") ?? "",
      email: formData.get("email") ?? "",
      city: formData.get("city") ?? "",
    };

    setEntryList([obj]);
    const newArray = entryList.slice();
    newArray.push(obj);
    setEntryList(newArray);
  };

  return (
    <div className="container">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="tbl-box">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" />
            </div>
            <div>
              <button type="submit">Add Record</button>
            </div>
          </div>
        </form>
      </div>
      {/* Table is here */}
      <StudentTable props={entryList} />
    </div>
  );
};

export default DataDisplay;
