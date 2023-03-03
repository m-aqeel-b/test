import StudentTable from "./StudentTable";
import React, { useState } from "react";
const DataDisplay = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [requestParams, setRequestParams] = useState({
    name: "",
    email: "",
    city: "",
  });
  const [entryList, setEntryList] = useState([]);

  const ChangeName = (event) => {
    setName(event.target.value);
  };
  const ChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const ChangeCity = (event) => {
    setCity(event.target.value);
  };

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
              <input type="text" id="name" name="name" onChange={ChangeName} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={ChangeEmail}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" onChange={ChangeCity} />
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
