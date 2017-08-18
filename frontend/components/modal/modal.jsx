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
    if (event.target.className === 'modalfinish') {
      that.props.updateModal(null, false);
    }
  }

  render(){
    if(this.props.open){
      return (
        <div>
          <div className="out-modal" >
            <div className="theparentmodal">
              <div className="themodalscrn">
                <div className="modalwrap">
                  <div className="modalfinish"/>
                  <div className="themodalvalue">
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
