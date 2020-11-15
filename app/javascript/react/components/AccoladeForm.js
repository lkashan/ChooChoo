import React, { useState } from 'react'
import { Link } from "react-router-dom"

const AccoladeForm = props => {

  const {handleSubmit} = props
  const [newAccolade, setNewAccolade] = useState({
    body: "",
    // chosen_charity: "",
    nominator: ""
  })

  const handleChange = (event) => {
    console.log(event)
    setNewAccolade({
      ...newAccolade,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   props.addNewAccoladeFunction(newAccolade)
  //   setNewAccolade({
  //     body: newAccolade.body,
  //     // chosen_charity: "",
  //     nominator: newAccolade.nominator
  //   })
  // }

  return (
    <form className="new-accolade-form callout" onSubmit={handleSubmit}>
      <label className="accolade-label">
        What's got you hyped on {props.user.first_name}?
        <input
          name="body"
          id="body"
          type="text"
          onChange={(e) => {handleChange(e)} }
          value={newAccolade.body}
        />
      </label>
      <label className="accolade-label">
        Who You Bees?:
        <input
          name="nominator"
          id="nominator"
          type="textarea"
          onChange={(e) => {handleChange(e)} }
          value={newAccolade.nominator}
        />
      </label>

      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default AccoladeForm