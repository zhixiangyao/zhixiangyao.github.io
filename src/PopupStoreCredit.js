const { useState, useEffect } = React

const YummySelect__FC = ({ id, name, value, handleChange, optionList }) => {
  return (
    <div className="yummy-select">
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8">
        <path
          d="M5.088.6a.5.5,0,0,1,.824,0l4.549,6.617A.5.5,0,0,1,10.049,8H.951a.5.5,0,0,1-.412-.783Z"
          transform="translate(11 8) rotate(-180)"
          fill="#fff"
        />
      </svg>

      <select value={value} onChange={e => handleChange(e.target.value)} name={name} id={id}>
        {optionList.map(({ id, value, name }) => (
          <option key={id} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

const YummyUpload__FC = () => {
  const [imgs, setImgs] = useState([])

  const updateImageDisplay = ({ target }) => {
    if (imgs.length >= 3) return

    const file = target.files[0]

    if (!validFileType(file)) {
      alert(`File name ${file.name}: Not a valid file type. Update your selection.`)
    }

    setImgs(imgs => [...imgs, file])
  }

  const fileTypes = [
    'image/apng',
    'image/bmp',
    'image/gif',
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/svg+xml',
    'image/tiff',
    'image/webp',
    `image/x-icon`,
  ]

  const validFileType = file => {
    return fileTypes.includes(file.type)
  }

  const returnFileSize = number => {
    if (number < 1024) {
      return number + 'bytes'
    } else if (number > 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + 'KB'
    } else if (number > 1048576) {
      return (number / 1048576).toFixed(1) + 'MB'
    }
  }

  return (
    <div className="yummy-upload">
      <label htmlFor="upload-pictures">upload Pictures</label>
      <input
        onChange={updateImageDisplay}
        style={{ display: 'none' }}
        id="upload-pictures"
        type="file"
        accept=".jpg, .jpeg, .png"
      />

      {imgs.length !== 0 && (
        <ol className="yummy-upload-img-list">
          {imgs.map((file, index) => (
            <li key={index}>
              <div
                className="yummy-upload-img-list-close"
                onClick={() => {
                  setImgs(imgs => {
                    const temp = [...imgs]
                    temp.splice(index, 1)
                    return [...temp]
                  })
                }}
              >
                x
              </div>
              <img width="55" height="55" src={URL.createObjectURL(file)} />
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

const PopupStoreCreditInfo__FC = () => {
  return (
    <div className="popup-store-credit-info">
      <div className="popup-store-credit-info-item">
        <label>Order #:</label>
        <div>275304003</div>
      </div>
      <div className="popup-store-credit-info-item">
        <label>Name:</label>
        <div>Vivek Parganiha</div>
      </div>
      <div className="popup-store-credit-info-item">
        <label>Email:</label>
        <div>vivek.parganiha@yummybazaar.com</div>
      </div>
      <div className="popup-store-credit-info-item">
        <label>Shipping protection:</label>
        <div>Paid</div>
      </div>
    </div>
  )
}

const PopupStoreCreditPackage__FC = ({ currentNumber, totalNumber }) => {
  const [claimID, setClaimID] = useState('')
  const claimOptionList = [
    { id: 'default', value: '', name: '--Select claim type--' },
    { id: 0, value: 0, name: 'Package Not Delivered' },
    { id: 1, value: 1, name: 'Package Missing Content' },
    { id: 2, value: 2, name: 'Package or Item(s) Damaged' },
  ]

  const [damagedID, setDamagedID] = useState('')
  const damagedOptionList = [
    { id: 'default', value: '', name: '--Select--' },
    { id: 0, value: 0, name: 'No' },
    { id: 1, value: 1, name: 'Yes' },
  ]

  useEffect(() => {
    console.log('damagedID:', damagedID)
  }, [damagedID])

  useEffect(() => {
    console.log('claimID:', claimID)
  }, [claimID])

  return (
    <section className="popup-store-credit-package">
      <div className="popup-store-credit-package-title">
        Package {currentNumber} of {totalNumber}
      </div>

      <div className="popup-store-credit-package-info">
        <div className="popup-store-credit-package-info-item">
          <label>Tracking no:</label>
          <div>XY344BFJ45FJ5087</div>
        </div>
        <div className="popup-store-credit-package-info-item">
          <label htmlFor="claim-type-select">Claim type:</label>

          <YummySelect__FC
            id="claim-type-select"
            name="claim"
            value={claimID}
            handleChange={setClaimID}
            optionList={claimOptionList}
          />
        </div>
        <div className="popup-store-credit-package-info-item">
          <label htmlFor="claim-type-select">Package arrived damaged?</label>

          <YummySelect__FC
            id="damaged-type-select"
            name="damaged"
            value={damagedID}
            handleChange={setDamagedID}
            optionList={damagedOptionList}
          />
        </div>
      </div>

      <div className="popup-store-credit-package-conditions">
        <div className="popup-store-credit-package-conditions-title">Upload package conditions</div>

        <div className="popup-store-credit-package-conditions-content">
          <YummyUpload__FC />

          <div className="popup-store-credit-package-conditions-content-tips">
            <div>
              <div>1. Picture of box tape</div>
              <img width="114" src="/static/tips-1.png" alt="Picture of box tape" />
            </div>
            <div>
              <div>2. Picture of shipping label</div>
              <img width="76" src="/static/tips-2.png" alt="Picture of shipping label" />
            </div>
            <div>
              <div>3. Picture of package condition</div>
              <img width="64" src="/static/tips-3.png" alt="Picture of package condition" />
            </div>
          </div>
        </div>
      </div>

      <div className="popup-store-credit-package-affected-item">
        <div className="popup-store-credit-package-affected-item-title">Upload package conditions</div>
      </div>
    </section>
  )
}

const PopupStoreCreditSubmitBar__FC = () => {
  return (
    <div className="popup-store-credit-submit-bar">
      <div>*Claims cannot be modified once submitted. Contact customer service for further assistance.</div>

      <button className="disabled">Submit Request</button>
    </div>
  )
}

var PopupStoreCredit__FC = () => {
  return (
    <div className="popup-store-credit">
      <div className="popup-store-credit-title">PopupStoreCredit</div>

      <PopupStoreCreditInfo__FC />

      {[1, 2, 3].map(v => (
        <PopupStoreCreditPackage__FC key={v} currentNumber={v} totalNumber={3} />
      ))}

      <PopupStoreCreditSubmitBar__FC />
    </div>
  )
}
