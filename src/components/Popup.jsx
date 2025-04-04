function Popup({ popupText, closePopup }) {
  function Confirm() {
    console.log("Confirm Button Clicked!");
  }

  return (
    <>
      <div className="popup">
        <span>{popupText}</span>
        <div className="popup__btns">
          <button
            onClick={() => {
              Confirm();
            }}
            className="popup__btn"
          >
            Confirm
          </button>

          <button onClick={closePopup} className="popup__btn popup__btn--cancel">
            Cancel
          </button>
        </div>
      </div>
      <div onClick={closePopup} className="backdrop"></div>
    </>
  );
}

export default Popup;
