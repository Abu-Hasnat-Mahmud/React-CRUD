import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { getTokenLocal } from "../../Storage";

const CreateClient = (props) => {
  const [clientId, setClientId] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory();

  useEffect(() => {
    const clientState = props.location.state;
    //console.log(clientState)
    if (clientState) {
      //console.log(clientState);
      setClientId(clientState.clientId);
      setName(clientState.name);
      setPhone(clientState.phone);
      setAddress(clientState.address);
    }
  }, []);

  const btnClientHandler = () => {
    const client = {
      ClientId: clientId,
      Name: name,
      Address: address,
      Phone: phone,
    };

    axios
      .post("https://localhost:44326/api/Client", client, {
        headers: getTokenLocal(),
      })
      .then(function (response) {
        if (response.status == 200) {
          history.push("/ClientList");
        }
      })
      .catch(function (error) {
        alert("Unauthorized");
        history.push("/Login");
        //console.log(error);
      });
  };

  return (
    <div className="px-5 container">
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            value={phone}
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
          />
        </div>

        <button
          type="button"
          onClick={() => btnClientHandler()}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateClient;
