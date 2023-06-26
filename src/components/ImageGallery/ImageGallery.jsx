import React from 'react';
import css from './ImageGallery.module.css'

export class ImageGallery extends React.Component {
  render() {
    return (
        <ul className={css["imageGallery"]}>
          {this.props.children}
        </ul>
    )
  }
}

export default ImageGallery