import React from 'react';

function Modal() {
    return (
      // JSX
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">Photo Name </h3>
                <img 
                    src={require(`../../assets/small/${category}/${i}.jpg`)}
                    alt="current category" 
                    className='img-thumbnail mx-1'
                    onClick={() => toggleModal(image, i)}
                    key={image.name}
                    />
                <p>Photo Description</p>
                <button type="button">Close this modal</button>
            </div>
        </div>
    );
}

export default Modal;