import React, { useState, useCallback } from 'react';

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from './wedding-photos';
import './Wedding.scss';

function Wedding() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="Wedding">
      <div className="download-info">
        You can see all 1200+ photos in full resolution and order prints from our amazing photographer <a href="https://jennydeephoto.com/" target="_blank">Jenny Dee Photography</a> at
        <br />
        <a href="https://bit.ly/brianandmeliwedding" target="_blank">https://bit.ly/brianandmeliwedding</a>
        <br />
        and use password: <strong>BrianMelWed52619</strong>
      </div>
      <Gallery photos={photos} direction={"column"} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Wedding;