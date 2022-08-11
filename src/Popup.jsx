import React from 'react';

const Popup = ({setIsOpen, itemId}) => {  
    console.log(itemId, setIsOpen(true));
    return (
       
          <>
            <div className="overlay"></div>
            <div className="modal">
              <header className="modal__header">
                <h2>Item Id</h2>
                <button onClick={()=>{setIsOpen(false)}} className="close-button">&times;</button>
              </header>
              <main className="modal__main">
                <p>{itemId}</p>
              </main>
            </div>
          </>
    );
};

export default Popup;