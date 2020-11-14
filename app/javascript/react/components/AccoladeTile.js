import React, { Fragment } from "react"

const AccoladeTile = (props) => {
  return (
  <div className="callout success">
    <h3>All Aboard the {props.user.first_name} Hype Train!</h3>
    <ul>
      <li>{props.nominator} Says:</li>
      <li>{props.body}</li>
    </ul>
  </div>
)
}

export default AccoladeTile