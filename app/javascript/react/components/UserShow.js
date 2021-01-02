import React, { useState, useEffect } from 'react'
import AccoladeForm from "./AccoladeForm";
import AccoladeTile from "./AccoladeTile";

const UserShow = (props) => {
  const [user, setUser] = useState({
    id: null,
    first_name: "",
    last_name: "",
    phone_number: "",
    donation_pledge: "",
    charity_1: "",
    charity_1_info: "",
    charity_1_link: ""
  })
  const [accolades, setAccolades] = useState([])

  const id = props.match.params.id;

  const callbackFunction = (accoladeFormData) => {
    accoladeFormData
  }

  useEffect(() => {

    fetch(`/api/v1/users/${id}`, {
      credentials: "same-origin"
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      return response.json()
    })

    .then(responseBody => {
      setUser(responseBody);
      setAccolades(responseBody.accolades);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const handleSubmit = (newAccolade) => {
    const formPayload = {accolade: newAccolade}

    fetch(`/api/v1/users/${user.id}/accolades`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }
    })

    .then(response => {
      if (response.ok) {
        return response;
    } else {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => response.json())
    .then(body => {setAccolades([...accolades, body.accolade]);})
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  callbackFunction()
}
    

   const accoladeTileArray = accolades.map((accolade) => {
    return (
      <AccoladeTile
        key={accolade.id}
        user={user}
        nominator={accolade.nominator}
        body={accolade.body}
      />
    );
  });

  return (
    <div><br></br><br></br><br></br><br></br>
      <h2 className="user-show-title">All Aboard The {user.first_name} {user.last_name} HypeTrain!</h2>
      <div className="charity-data">
        <h4>My Chosen Charity: <a href="{user.charity_1_link}"> {user.charity_1} </a></h4>
        <h5>For each HypeTrain I receive, I pledge to donate: ${user.donation_pledge}</h5>
        <p>”{user.charity_1_info}”</p>
      </div> 
      <AccoladeForm
        id={id}
        handleSubmit={handleSubmit}
        user={user}
        callbackFunction={callbackFunction}
        />
      <div>
        <h3 className="accolade-list-title">See what everyone else has been squawking about:</h3>
        {accoladeTileArray}
      </div>
    </div>
  )
}

export default UserShow;
