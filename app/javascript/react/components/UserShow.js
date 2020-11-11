import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import AccoladeForm from "./AccoladeForm";
import AccoladeTile from "./AccoladeTile";
// import UserTile from "./UserTile"
// import LandingContainer from "./LandingContainer"

const UserShow = (props) => {
  const [user, setUser] = useState({})
  const [accolades, setAccolades] = useState({})
  const [errorList, setErrorList] = useState([])

  const id = props.match.params.id;

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

  useEffect(() => {
    fetch(`/api/v1/users/${id}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(responseBody => {
      setUser(responseBody);  
      setAccolades(responseBody.accolades);
    })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const accoladeTileArray = () => accolades.map((accolade) => (
    <AccoladeTile
      key={accolade.id}
      nominator={accolade.nominator}
      body={accolade.body}
    />)
  ); 

  return (
    <div> 
      <h3>o wow u found {props.user} show page yay good job</h3> 
      <AccoladeForm 
          id={id} 
          handleSubmit={handleSubmit}
        />
        <div className="accolade-list">{accoladeTileArray}
        </div>
      </div>
  )
}

export default UserShow;
