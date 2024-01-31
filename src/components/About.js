import React, { useState } from 'react'

export default function About(props) {
//     const [myStyle, setMyStyle] = useState({
//         color: 'black',
//         backgroundColor: 'white'
//    });
//    const [myBtn, setMyBtn] = useState('Enable Dark Mode')
//    const handleTheme = ()=>{
//     if (myStyle.color === 'black'){
//         setMyStyle({
//             color: 'white',
//             backgroundColor: 'black',
//             border: '1px solid white'
//        })
//        setMyBtn('Enable Light Mode')
//     }else{
//         setMyStyle({
//             color: 'black',
//             backgroundColor: 'white'
//        })
//        setMyBtn('Enable Dark Mode')
//     }
//    }
 let myStyle = {
    color:  props.mode == 'dark' ? 'white' : 'rgb(28 68 99)',
    backgroundColor: props.mode == 'dark' ? 'rgb(28 68 99)' : 'white'
 }

  return (
    <div className="container" >
        <h1 style={{color:  props.mode == 'dark' ? 'white' : 'rgb(28 68 99)'}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong> Analyze your test</strong> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, 
                    until the collapse plugin adds the appropriate classes that we use to style each element.
                     These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                      You can modify any of this with custom CSS or overriding our default variables. 
                      It's also worth noting that just about any HTML can go within the, 
                      though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <strong>Free to use</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> 
                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
                    These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                    You can modify any of this with custom CSS or overriding our default variables. 
                    It's also worth noting that just about any HTML can go within the, 
                    though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   <strong> Browser compatable </strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, 
                    until the collapse plugin adds the appropriate classes that we use to style each element. 
                    These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                    You can modify any of this with custom CSS or overriding our default variables. 
                    It's also worth noting that just about any HTML can go within the, 
                    though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        {/* <button type="button" className="btn btn-primary my-2" onClick={handleTheme}>{myBtn}</button> */}
    </div>
  )
}
