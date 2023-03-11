import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height: '50px'}}>
      {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.alertmsg} </strong> {props.alert.type}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        <button type="button" class="btn" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>}
    </div>
  )
}