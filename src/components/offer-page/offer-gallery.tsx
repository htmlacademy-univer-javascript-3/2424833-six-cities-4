import {JSX} from 'react';

const createImage = (image: string) => (
  <div key={image} className="offer__image-wrapper">
    <img className="offer__image" src={image} alt="Photo studio"/>
  </div>
);

export default function OfferGallery({images}: { images: string[] }): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => createImage(image))}
      </div>
    </div>
  );
}
