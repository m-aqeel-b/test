const StudentTable = ({ props }) => {
  console.log(props.length);

  var srNo = 0;
  return (
    <div>
      <h2 className="std-heading">List of Students:</h2>

      <div>
        {!props.length ? (
          <div className="text-center">
            <img
              src="../images/no-record.svg"
              alt="no-record"
              style={{ height: "150px" }}
            />
          </div>
        ) : (
          <table className="w-100 tbl">
            <tr className="tbl-header text-left">
              <th className="w-10 text-center">#</th>
              <th>Name</th>
              <th>Email</th>
              <th className="w-20">City</th>
            </tr>
            <tbody>
              {props.map((std, index) => {
                return (
                  <tr key={index} className="tbl-row">
                    <td className="text-center" style={{ fontWeight: "bold" }}>
                      {++srNo}
                    </td>
                    <td>{std.name}</td>
                    <td>{std.email}</td>
                    <td>{std.city}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default StudentTable;
