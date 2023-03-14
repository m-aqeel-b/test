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

    //setEntryList([obj]);
    const newArray = entryList.slice();
    newArray.push(obj);
    setEntryList(newArray);
    event.target.reset();
  };

  return (
    <div className="container">
      <h2 className="std-heading">Enter Student's Detail Below</h2>
      <div className="" style={{ marginBottom: "50px" }}>
        <form onSubmit={handleSubmit}>
          <div className="tbl-box">
            <div className="w-100">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-80 ml-5"
              />
            </div>
            <div className="w-100">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-80 ml-5"
              />
            </div>
            <div className="w-100">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                required
                className="w-80 ml-5"
              />
            </div>
            <div className="w-30">
              <button type="submit" className="btn-submit">
                Add Record
              </button>
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
