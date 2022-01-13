//import "./styles.css";
//import Button from "./Button";
import { useState } from "react";
export default function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "", lastName: ""});

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(JSON.stringify(user))
    
    setUsers([...users, user]);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    const id = !!users.length ? users[users.length - 1].id + 1 : 0;
    setUser({ ...user, [name]: value ,id:id});
  };
  const handleDelete = (event) => {
    const {id} = event.target
    const filtered = users.filter((item) => item.id !== parseInt(id));
    setUsers(filtered);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%"
        }}
      >
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <label htmlFor="lastName">lastname</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      <ul style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%"
        }}>
      {!!users.length && 
        users.map(({ id, name, lastName }) => (
          <li key={id} id={id} style={{display:'flex',flexDirection:'row'}}>
            <p>{`${name} ${lastName}`}</p>
            <button id={id} style={{padding:'5px 10px'}} onClick={handleDelete}>eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
