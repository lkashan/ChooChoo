import React, { Fragment } from "react"

const AccoladeTile = (props) => {
  return (
  <div className="accolade-tile">
    <h4>{props.nominator}'s Hyped About:</h4>
    <p>"{props.body}"</p>
  </div>
  )
}

export default AccoladeTile