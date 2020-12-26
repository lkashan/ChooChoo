import React, { useState } from 'react'

const AccoladeForm = props => {

  const { user } = props;

  const [newAccolade, setNewAccolade] = useState({
    body: "",
    nominator: ""
  });

  const clearForm = () => {
    setNewAccolade({
      body: "",
      nominator: ""
    })
    console.log("clearform was hit")
  }

  const accoladeFormData = () => {
    props.callbackFunction(clearForm)
  } 
  accoladeFormData()

  const handleChange = (event) => {
    setNewAccolade({
      ...newAccolade,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (
    <form className="new-accolade-form" onSubmit={(e) => { props.handleSubmit(newAccolade)} }>
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
        Your Name:<br></br>
        <input className="form-field"
          name="nominator"
          id="nominator"
          type="textarea"
          onChange={(e) => {handleChange(e)} }
          value={newAccolade.nominator}
        />
      </label><br></br>
      <input className="button" type="submit" value="All Aboard!" />
    </form>
  )
}

export default AccoladeForm
