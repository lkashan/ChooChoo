import React, { useState } from 'react'
import { Link } from "react-router-dom"

const AccoladeForm = props => {

  const [newAccolade, setNewAccolade] = useState({
    body: "",
    // chosen_charity: "",
    nominator: ""
  })

  const handleChange = (event) => {
    setNewAccolade({
      ...newAccolade,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewAccoladeFunction(newAccolade)
    setNewAccolade({
      body: "",
      // chosen_charity: "",
      nominator: ""
    })
  }
  return (
    <form className="new-accolade-form callout" onSubmit={handleSubmit}>
      <h4>All Aboard The {props.user} Hype Train!</h4> 
      <label className="accolade-label">
        What's got you hyped on {props.user}?
        <input
          name="body"
          id="body"
          type="text"
          onChange={handleChange}
          value={newAccolade.body}
        />
      </label>
      <label className="accolade-label">
        Who You Bees?:
        <input
          name="nominator"
          id="nominator"
          type="textarea"
          onChange={handleChange}
          value={newAccolade.nominator}
        />
      </label>

      <div className="button-group">
        <input className="button" type="submit" value="All Aboard!" />
      </div>
    </form>
  )
}

export default AccoladeForm