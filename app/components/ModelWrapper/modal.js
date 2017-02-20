/**
 * Created by Sangeetha and Shiva on 2/20/2017.
 */

import React from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class VelloModal extends React.Component{

  constructor(props){
    super(props);
0
  this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  } // End constructor

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#000';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={this.openModal}>Upload new file&nbsp;<Glyphicon glyph="plus"></Glyphicon></Button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Upload Dataset"
        >

          <div className="panel panel-primary">
            <div className="panel-heading">
              <h4 ref="subtitle" className ="panel-title">Upload Dataset</h4>
            </div>
            <div className = "panel-body">
              <form>
                <input className ="form-control" placeholder = "Dataset Name" type="text" /> <br />
                <input className ="form-control" placeholder = "Search Keywords (, seperated )" type="text" /> <br />
                <textarea className ="form-control"placeholder = "Describe you dataset" />  <br />
                <div className ="form-group">
                  <label>Choose dataset file</label>
                  <input className ="form-control" placeholder = "Upload dataset file" type="file" /> <br />
                </div>
                <button type="button" onClick={this.closeModal} className = "btn btn-default">Upload</button>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

}

export default VelloModal;
