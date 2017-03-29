import * as React from 'react';
import {
  FontIcon,
  Paper,
} from 'material-ui'
import * as Dropzone from 'react-dropzone';

export default class DropImage extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(images, event) {
    const gallery = images.slice(0, 5);
    this.setState({ images: gallery });
  }

  render() {
    const images = this.state.images.map((file, i) => (
      <div
        key={i}
        className="image"
        style={{ backgroundImage: `url(${file.preview})` }}
      />));

    return (
      <Paper className="section image-upload">
        <div className="header">Upload image</div>
        <Dropzone
          className="drop-area"
          activeClassName="over"
          accept="image/*"
          onDrop={this.onDrop}>
          <FontIcon className="fa fa-picture-o" />
          Drop files to upload
        </Dropzone>
        <div className="gallery">
          {images}
        </div>
      </Paper>);
  }
}
