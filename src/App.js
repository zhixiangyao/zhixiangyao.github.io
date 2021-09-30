const { useState } = React

const usePopupShow = show => {
  const [state, setState] = useState(show || true)

  const switchPopup = () => {
    setState(state => !state)
  }

  return [state, switchPopup]
}

const YummyPopup__FC = ({ children, show, handlePopupShow }) => {
  return (
    <div className={['yummy-popup', show ? 'yummy-show' : ''].join(' ')}>
      <nav className="yummy-popup-nav">
        <div>Yummy bazaar</div>

        <div className="yummy-popup-nav-hide" onClick={handlePopupShow}>
          <svg
            t="1632971821354"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2408"
            width="34"
            height="34"
          >
            <path
              d="M544.448 499.2l284.576-284.576a32 32 0 0 0-45.248-45.248L499.2 453.952 214.624 169.376a32 32 0 0 0-45.248 45.248l284.576 284.576-284.576 284.576a32 32 0 0 0 45.248 45.248l284.576-284.576 284.576 284.576a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0-45.248L544.448 499.2z"
              p-id="2409"
              fill="#ffffff"
            />
          </svg>
        </div>
      </nav>

      <main className="yummy-popup-main">{children}</main>
    </div>
  )
}

const App__FC = () => {
  const [show, handlePopupShow] = usePopupShow()
  const [step, handleStep] = useState(0)

  return (
    <>
      <ClaimSearch_FC handlePopupShow={handlePopupShow} handleStep={handleStep} />

      <YummyPopup__FC show={show} handlePopupShow={handlePopupShow}>
        {step === 0 && <PopupStoreCredit__FC />}
        {step === 1 && <PopupSubmitted__FC />}
        {step === 2 && <PopupCheckStates__FC />}
      </YummyPopup__FC>
    </>
  )
}

ReactDOM.render(<App__FC />, document.querySelector('#root'))
