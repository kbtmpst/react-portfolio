import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  async function fetchUserData() {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    console.log(data);

    setUser(data);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <Link to="/">Back to home</Link>
      <h1>ID: {user.id}</h1>
      <h1>Name: {user.name}</h1>
      <h1>Username: {user.username}</h1>
    </div>
  );
}

export default Users;
