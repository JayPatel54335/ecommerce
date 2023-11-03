import React from 'react';

function Fullscreenimage({ imageUrl, onClose }) {
    const modalStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
    
      const imgStyle = {
        maxWidth: '90%',
        maxHeight: '90%',
      };
    
      return (
        <div style={modalStyle} onClick={onClose}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <img src={imageUrl} alt="Full-screen" style={imgStyle} />
            <button
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'white',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
              onClick={onClose}
            >
              X
            </button>
          </div>
        </div>
      );
    };

export default Fullscreenimage;
