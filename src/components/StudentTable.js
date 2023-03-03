const StudentTable = ({ props }) => {
  console.log(props.length);
  var srNo = 0;
  return (
    <div>
      <h3>List of Students:</h3>
      <div>
        {!props.length ? (
          <div>
            <h2>No Records Found..!</h2>
          </div>
        ) : (
          <table border="true">
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
            {props.map((std, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{++srNo}</td>
                    <td>{std.name}</td>
                    <td>{std.email}</td>
                    <td>{std.city}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        )}
      </div>
    </div>
  );
};
export default StudentTable;
