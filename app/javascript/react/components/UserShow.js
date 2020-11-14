import React, { useState, useEffect } from 'react'
import AccoladeForm from "./AccoladeForm";
import AccoladeTile from "./AccoladeTile";

const UserShow = (props) => {
  const [user, setUser] = useState({})
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
      
      setUser({responseBody});  
      setAccolades(responseBody.accolades);
    })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const handleSubmit = (event, newAccolade) => { 
    event.preventDefault();

    const formPayload = {
      accolade: newAccolade
    }

    fetch(`/api/v1/users/${id}/accolades`, {
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
    //debugger
   const accoladeTileArray = accolades.map((accolade) => {
     //debugger
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
      <h3> {props.user} </h3> 
        <AccoladeForm 
          id={id} 
          handleSubmit={handleSubmit}
          user={user}
          />
        <div className="accolade-list">
          {accoladeTileArray}
      </div>
    </div>
  )
}

export default UserShow;
