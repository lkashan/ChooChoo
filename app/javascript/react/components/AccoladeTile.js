import React, { Fragment } from "react"

const AccoladeTile = (props) => {
  return (
  <div className="callout success">
    <h3>{props.nominator} Says:</h3>
    <p>{props.body}</p>
  </div>
  )
}

export default AccoladeTile