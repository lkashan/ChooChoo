import React, { useState } from 'react'

const AccoladeForm = props => {

  const [getNewAccolade, setNewAccolade] = useState({
    body: "",
    chosen_charity: "",
    nominator: ""
  })

  const handleInputChange = event => {
    
    const target = event.currentTarget;
    
    setNewAccolade({
      ...getNewAccolade,
      [event.currentTarget.name]: value
    })
  }
}