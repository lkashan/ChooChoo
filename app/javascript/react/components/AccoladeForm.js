import React, { useState } from 'react'

const AccoladeForm = props => {

  const { user } = props;

  const [newAccolade, setNewAccolade] = useState({
    body: "",
    nominator: ""
  });

  const handleChange = (event) => {
    setNewAccolade({
      ...newAccolade,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (
    <form className="new-accolade-form callout" onSubmit={(e) => {e.preventDefault(); props.handleSubmit(newAccolade);} }>
      <label className="accolade-label">
        What's got you hyped on {user.first_name}?
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
