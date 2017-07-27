import React from 'react'

//This modal is a react component that can be imported into any file because it uses react.
//In another file you will call this component and pass down props to it.

const Modal = ({content, open}) => {
  if(open){
    return (
      <div>
        <div className="modal-root" >
          <div className="modal-parent">
            <div className="modal-screen">
              <div className="modal-wrapper">
                <div className="closeModal"/>
                <div className="modal-content">
                  {content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return null;
  }
}

export default Modal;
