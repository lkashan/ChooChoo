import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const userTile = (props) => {

  const full_name = "{props.first_name} {props.last_name}"

  return(
  <div className="user-tile">
    <Link to={`user/${props.id}`}>
      <h3>{full_name}</h3>
    </Link>
  </div>
  );
}
export default UserTile