import "./Display.css"
export default function TableItem({ data, handleDelete }) {
    return (
      <>
        <div style={{width:"50%",margin:"auto"}}>
        <table className="table_content" border="1">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Purpose</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
            {data.map((item) => {
              return (
                <tr key={item.id} >
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.purpose}</td>
                  <td>{item.amount}</td>
                  <td>
                  {
                    item.status === true?"Done":"Pending"
                  }
                  </td>
                  {/* <td>
                    <button onClick={() => handleDelete(item.id)}>X</button>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </>
    );
  }
  