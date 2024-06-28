import React from 'react'

function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase(word);
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    <>
    <div style={{height:'50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> {/* props.something && ...... : this is used very oftenly in react codeing and is quite famous, this works like when the element prior to the '&&' is true only then the element after the '&&' is return  */}
         
        <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
    </div>
    </>
  )
}

export default Alert
