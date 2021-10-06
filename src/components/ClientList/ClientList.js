import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getTokenLocal } from "../../Storage";


const ClientList = () => {
  const [clients, setClients] = useState([]);
  const history = useHistory();

  

  const getClietList = () => {
    fetch("https://localhost:44326/api/Client", {
      headers: new Headers(getTokenLocal()),
    })
      .then((response) => {
        //console.log(response)
        if (response.status === 200) {
          response.json().then((data) => setClients(data));
        } else if (response.status === 401) {
          alert("Unauthorize");
          history.push('/Login');
        }
      })
      //.then((data) => setClients(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getClietList();
  }, []);

  const handleCreate = () => {
    history.push("/CreateClient");
  };

  const handleEdit = (client) => {
    history.push("/CreateClient", client);
  };

  const handleDelete = (clientId) => {      
    axios
      .delete(`https://localhost:44326/api/Client/Delete/${clientId}`, {
        headers: getTokenLocal(),
      })
      .then((response) => {
        //console.log(response);
        if (response.status === 200) {          
          getClietList();
        }else{            
            alert("Unauthorized");
            history.push('/Login')
        }
      })
      .catch((response) => {
          console.log(response);       
      });
  };

  return (
    <div className="container">
      <div className="row row-cols-4  g-3">
        <div
          className="col shadow me-4  rounded d-flex align-items-center justify-content-center"
          style={{ width: "250px" }}
        >
          <h1 className="">
            <i
              className="fas fa-plus-circle"
              onClick={() => handleCreate()}
            ></i>
          </h1>
        </div>

        {clients.map((item) => {
          return (
            <div
              key={item.clientId}
              className="col shadow me-4 p-3 rounded"
              style={{ width: "250px" }}
            >
              <h4>{item.name}</h4>
              <p>Address: {item.address}</p>
              <p>Phone: {item.phone}</p>
              <div className="d-flex justify-content-evenly">
                <button
                  onClick={() => handleEdit(item)}
                  className="btn btn-warning"
                >
                  <i className="far fa-edit"></i>
                </button>
                <button
                  onClick={() => handleDelete(item.clientId)}
                  className="btn btn-danger"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientList;
