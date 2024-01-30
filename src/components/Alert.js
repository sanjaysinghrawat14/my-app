import React from 'react'

export default function Alert(props) {
    const captalize = (word) => {
          let new_word = word.toLowerCase();
          return  new_word.charAt(0).toUpperCase() + new_word.slice(1)
    }
  return (
    props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{captalize(props.alert.type)} : {props.alert.msg}</strong> 
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    </div>
  )
}
