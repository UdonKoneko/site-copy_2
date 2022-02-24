function Modal({ show, setShow }) {
    const closeModal = () => {
      setShow(false);
    };
    if (show) {
      return (
        <div id="overlay" onClick={closeModal}>
          <div id="js-popup" class="popup">
            <div id="js-close-btn" class="close-btn" onClick={closeModal}>
              <i class="fa-solid fa-xmark fa-fw fa-2x"></i>
            </div>
            <iframe
              class="iframe-1"
              src="https://www.youtube.com/embed/AYM45i2drCU?autoplay=1&mute=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  const { useState } = React;
  function App() {
    const [show, setShow] = useState(true);
    const openModal = () => {
      setShow(true);
    };
    return (
      <div>
        <Modal show={show} setShow={setShow} />
      </div>
    );
  }
  ReactDOM.render(<App />, document.getElementById("modal-main"));