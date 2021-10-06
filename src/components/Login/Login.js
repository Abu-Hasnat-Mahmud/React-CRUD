import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { setTokenLocal } from "../../Storage";


const Login = () => {
  const [userName, setUserName] = useState("Admin");
  const [password, setPassword] = useState("12345");
  const history = useHistory();
 

  const btnLogingHandler = () => {
    const user = {
      UserName: userName,
      Password: password,
    };

    axios
      .post("https://localhost:44326/api/User/Login", user)
      .then(function (response) {
        if (response.status == 200) {
          setTokenLocal(response.data.token);
          
          history.push("/ClientList");
          //console.log(response);
        } 
      })
      .catch(function (error) {
          alert("Invalid credential!!")
        console.log(error);
      });
  };

  return (
    <div className="px-5 container">
      <form>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            value={userName}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>

        <button
          type="button"
          onClick={btnLogingHandler}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
