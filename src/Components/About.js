import React from 'react'

export default function About(props) {

    const aboutStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : '#b0b8bf',
      };

    const btnStyle = {
        color: props.mode === 'black',
        backgroundColor: props.mode === 'dark' ? '#b0b8bf' : 'white',
      };

    return (
        <>
        <div className="container mt-4 pb-4" style={{ ...aboutStyle, height: '380px', width: '70%', border: '1px solid black', borderRadius: '10px'}}>
            <h2>About Us</h2>
            <div className="accordion mt-4" id="accordionExample" >
                <div className="accordion-item" style={{backgroundColor:'#e5f3ff'}}>
                    <h2 className="accordion-header">
                    <button className="accordion-button" style={btnStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Our Team
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor:'#e5f3ff'}}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={btnStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Clients
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor:'#e5f3ff'}}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={btnStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Services provided
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )   
}