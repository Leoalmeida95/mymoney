import React from 'react'

export default props =>
<button onClick={props.onClick} className={`btn btn-${props.btn}`} 
        type={props.type} >
    {props.text}<i className={`fa fa-${props.icon}`} ></i>
</button>