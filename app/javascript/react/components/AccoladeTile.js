import React, { Fragment } from "react"

const AccoladeTile = (props) => (
  <div className="callout success">
    <h3>All Aboard the {props.user.name} Hype Train!</h3>
    <ul>
      <li>{props.nominator} Says:</li>
      <li>{props.body}</li>
    </ul>
  </div>
)
export default AccoladeTile