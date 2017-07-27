import React from 'react'

//This modal is a react component that can be imported into any file because it uses react.
//In another file you will call this component and pass down props to it.

class Modal extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutClick.bind(this), true);
  }

  componentWillUnmount() {
      document.removeEventListener('click', this.handleOutClick.bind(this), true);
  }

  handleOutClick(event) {
    let that = this;
    if (event.target.className === 'closeModal') {
      that.props.updateModal(null, false);
    }
  }
  
  render(){
    if(this.props.open){
      return (
        <div>
          <div className="modal-root" >
            <div className="modal-parent">
              <div className="modal-screen">
                <div className="modal-wrapper">
                  <div className="closeModal"/>
                  <div className="modal-content">
                    {this.props.content}
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
}

export default Modal;
