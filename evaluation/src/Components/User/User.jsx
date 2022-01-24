import { useEffect, useState } from "react";
import Form from "./Content/Form";
import TableItem from "./Content/DIsplay/Display";

function User() {
  const [data, setData] = useState([]);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const getData = (page) => {
    fetch(
      `https://masai-react-assignment.herokuapp.com/formDetails`
    )
      .then((res) => res.json())
      .then((res) => {
        setData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleTask = async ({
    name,
    amount,
    purpose
  }) => {
    const payload = {
      name: name,
      amount: amount,
      purpose:purpose,
      status:false,
      date:date
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    };
    await fetch(
      `https://masai-react-assignment.herokuapp.com/formDetails`,
      config
    );
  };

  const handleDelete = async (id) => {
    try {
      await fetch(
        `https://masai-react-assignment.herokuapp.com/formDetails/${id}`,
        {
          method: "DELETE"
        }
      );
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="App">
      <h1>User Details Form</h1>
      <Form onTaskCreate={handleTask} />
     
      <TableItem
        handleDelete={handleDelete}
        data={data}
      />
    </div>
  );
}

export default User;
