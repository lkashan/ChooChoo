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
    charity_1_link: ""
  })
  const [accolades, setAccolades] = useState([])

  const id = props.match.params.id;

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

  const handleSubmit = (event, newAccolade) => { 
    event.preventDefault();
    const formPayload = {
      accolade: newAccolade
    }

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
    }
   const accoladeTileArray = accolades.map((accolade) => {
     
    return (
    <AccoladeTile
      key={accolade.id}
      user={user}
      nominator={accolade.nominator}
      body={accolade.body}
    />)
  }); 
  
  return (
    <div> 
      <h3>All Aboard The {user.first_name} {user.last_name} HypeTrain!</h3> 
      <div>
        <ul> 
          <li>My Chosen Charity: <a href="{user.charity_1_link}"> {user.charity_1} </a></li>
          <li>For each HypeTrain I receive, I pledge to donate: ${user.donation_pledge}</li>
        </ul>
      </div>
      <div>
        <AccoladeForm 
          id={id} 
          handleSubmit={handleSubmit}
          user={user}
        />
        <h3>See what everyone else has been squawking about: </h3> 
        <div className="accolade-list">
          {accoladeTileArray}
        </div>
      </div>
    </div>
  )
}

export default UserShow;
