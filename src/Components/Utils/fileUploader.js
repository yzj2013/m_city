import React, { Component } from 'react';
import { firebase } from '../../firebase';
// import FileUploader from 'react-firebase-file-uploader';
import FileUploader from 'react-firebase-file-uploader';
import { CircularProgress } from '@material-ui/core';

class Fileuploader extends Component {
  state = {
    name: '', // name of the file blahBlah.png
    isUploading: false,
    fileURL: '', // http://firebase/hosting.1911i2j/namsm.png
  };

  handleUploadStart = () => {
    this.setState({
      isUploading: true,
    });
  };

  handleUploadError = (e) => {
    // console.log(e);
    this.setState({
      isUploading: false,
    });
  };

  handleUploadSuccess = (filename) => {
    this.setState({
      name: filename,
      isUploading: false,
    });

    firebase
      .storage()
      .ref(this.props.dir)
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        this.setState({ fileURL: url });
      });

    this.props.filename(filename);
  };

  static getDerivedStateFromProps(props, state) {
    if (props.defaultImg) {
      return (state = {
        name: props.defaultImgName,
        fileURL: props.defaultImg,
      });
    }
    return null;
  }

  uploadAgain = () => {
    this.setState({
      name: '',
      isUploading: false,
      fileURL: '',
    });
    this.props.resetImage();
  };

  render() {
    // console.log(this.state);
    // console.log(this.props);
    return (
      <div>
        {!this.state.fileURL ? (
          <div>
            <FileUploader
              accept='image/*'
              name='image'
              randomizeFilename
              storageRef={firebase.storage().ref(this.props.dir)}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
            />
          </div>
        ) : null}

        {this.state.isUploading ? (
          <div
            className='progress'
            style={{ textAlign: 'center', margin: '30px' }}
          >
            <CircularProgress
              style={{ color: '#98c6e9' }}
              thickness={7}
            ></CircularProgress>
          </div>
        ) : null}

        {this.state.fileURL ? (
          <div className='image_upload_container'>
            <img
              alt={this.state.name}
              style={{
                width: '100%',
              }}
              src={this.state.fileURL}
            />
            <div className='remove' onClick={() => this.uploadAgain()}>
              Remove
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Fileuploader;
