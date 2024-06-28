import React from 'react'

export default function Orders (props){

    const orderStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : '#b0b8bf',
    };

    const btnStyle = {
        color: props.mode === 'black',
        backgroundColor: props.mode === 'dark' ? '#b0b8bf' : 'white',
    };

    return (
    <>

    <div className="container mt-4 pb-4" style={{ ...orderStyle, height: '320px', width: '70%', border: '1px solid black', borderRadius: '10px'}}>
        <h2>Orders</h2>
        <div className="container mt-3" >
            <ul className="list-group" >
                <li className="list-group-item d-flex justify-content-between align-items-center" style={btnStyle}>
                    A list item
                    <span className="badge text-bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={btnStyle}>
                    A second list item
                    <span className="badge text-bg-primary rounded-pill">20</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={btnStyle}>
                    A second list item
                    <span className="badge text-bg-primary rounded-pill">16</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={btnStyle}>
                    A second list item
                    <span className="badge text-bg-primary rounded-pill">3</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={btnStyle}>
                    A second list item
                    <span className="badge text-bg-primary rounded-pill">7</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={btnStyle}>
                    A third list item
                    <span className="badge text-bg-primary rounded-pill">1</span>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
} 