import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./modal.css";
function ModalExample(props) {
  const [modal, setModal] = useState(false);
  const [sign, setsign] = useState(true);
  const [log, setlog] = useState(false);

  const toggle = () => setModal(!modal);
  //   const toggle = () => setModal(true);
//   const clickbutt = event => {
//     // 👇️ toggle class on click
//     // event.currentTarget.classList.toggle('active');

//     if(modal)
//     {
//             event.currentTarget.classList.add('active');
//     }
//     else{
        
//             event.currentTarget.classList.remove('active');

//     }
//     // 👇️ add class on click
//     // event.currentTarget.classList.add('bg-salmon');

//     // 👇️ remove class on click
//     // event.currentTarget.classList.remove('bg-salmon');
//   };

  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  const clicksign = () => {setsign(true);setlog(false)};
  const clicklog = () => {setsign(false);setlog(true)};
  return (
    <div>
      <Button className="clickbutton" color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal
        className="modalclass"
        isOpen={modal}
        toggle={toggle}
        external={externalCloseBtn}
      >
        <ModalHeader>
          <div className="modalheader">
            <button onClick={clicksign}  className={sign ? 'active' : ''} >Sign Up</button>
            <button onClick={clicklog}  className={log ? 'active' : ''} >Log In</button>
          </div>
        </ModalHeader>

        <ModalBody>
          {/* <b>Sign Up</b>
          <br /> */}
          {console.log(sign)}
          {/* ///////////////////////////////////////// */}
          <div style={{display: sign ? "":"none" }} className="signdiv">
            <input
              placeholder="Enter the Name"
              id="name"
              className="sign"
              type="text"
            />
            <input
              placeholder="Email"
              id="mail"
              className="sign"
              type="email"
            />
            <input
              placeholder="Password"
              id="password"
              className="sign"
              type="password"
            />
            <button id="signup" className="sign">
              Sign Up
            </button>
            <p>or</p>
            <button id="google" className="sign">
              Continue With Google
            </button>
            <button id="github" className="sign">
              Github
            </button>
          </div>
      {/* ///////////////////////////////////////// */}
          <div style={{display: log ? "":"none" }} className="signdiv">

            <input
              placeholder="Email"
              id="mail"
              className="sign"
              type="email"
            />
            <input
              placeholder="Password"
              id="password"
              className="sign"
              type="password"
            />
            <button id="signup" className="sign">
             Log In
            </button>
            <h5><a href="">Forgit password ?</a></h5>
            <p>or</p>
            <button id="google" className="sign">
              Continue With Google
            </button>
            <button id="github" className="sign">
              Github
            </button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Done
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
