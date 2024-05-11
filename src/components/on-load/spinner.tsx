import {CSSProperties, JSX} from 'react';
import {InfinitySpin} from 'react-loader-spinner';

export default function Spinner(): JSX.Element {
  const wrapperStyle: CSSProperties = {
    position: 'relative',
    left: '50%'
  };
  const containerStyle: CSSProperties = {
    position: 'absolute',
    transform: 'translate(-50%, 0)'
  };

  return (
    <div className='spinner-wrapper' style={wrapperStyle}>
      <div className='spinner-container' style={containerStyle}>
        <InfinitySpin
          width="200"
          color="#4481c3"
        />
      </div>
    </div>
  );
}
