const { useState } = React

const ClaimSearchLeft__FC = ({ handlePopupShow, handleStep }) => {
  const [email, setEmail] = useState('')
  const [order, setOrder] = useState('')

  return (
    <section className="claim-search-left">
      <span className="claim-search-left-title">Request Store Credit</span>

      <form
        onSubmit={e => {
          handleStep(0)
          handlePopupShow()
          console.log(email, order)
          e.preventDefault()
        }}
      >
        <div className="claim-search-form-item">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} id="email" required />
        </div>

        <div className="claim-search-form-item">
          <label htmlFor="order">Order #:</label>
          <input type="text" name="order" value={order} onInput={e => setOrder(e.target.value)} id="order" required />
        </div>

        <div className="claim-search-form-item">
          <input type="submit" value="Search" />
        </div>
      </form>
    </section>
  )
}

const ClaimSearchRight__FC = ({ handlePopupShow, handleStep }) => {
  const [email, setEmail] = useState('')
  const [claim, setClaim] = useState('')

  return (
    <section className="claim-search-right">
      <span className="claim-search-right-title">Check Status</span>

      <form
        onSubmit={e => {
          handleStep(1)
          handlePopupShow()
          e.preventDefault()
        }}
      >
        <div className="claim-search-form-item">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} id="email" required />
        </div>

        <div className="claim-search-form-item">
          <label htmlFor="claim">YB Claim #:</label>
          <input type="text" name="claim" value={claim} onInput={e => setClaim(e.target.value)} id="claim" required />
        </div>

        <div className="claim-search-form-item">
          <input type="submit" value="Track" />
        </div>
      </form>
    </section>
  )
}

const ClaimSearchBottom__FC = () => {
  return (
    <section className="claim-search-bottom">
      <div>
        <span>Need Assistance?</span>
      </div>
      <div>
        <span>Call Us</span>
      </div>
      <div>
        <span>Email Us</span>
      </div>
      <div>
        <span>844-986-6922</span>
      </div>
      <div>
        <span>hello@yummybazaar.com</span>
      </div>
    </section>
  )
}

var ClaimSearch_FC = ({ handlePopupShow, handleStep }) => {
  return (
    <div className="claim-search">
      <ClaimSearchLeft__FC handlePopupShow={handlePopupShow} handleStep={handleStep} />

      <ClaimSearchRight__FC handlePopupShow={handlePopupShow} handleStep={handleStep} />

      <ClaimSearchBottom__FC />
    </div>
  )
}
