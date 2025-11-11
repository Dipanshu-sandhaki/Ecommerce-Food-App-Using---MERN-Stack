import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <section className='app-download' id='app-download'>
      <div className='app-download-content'>
        <div className='app-text'>
          <h2>Experience yummE on the Go</h2>
          <p>
            Order your favorite food anytime, anywhere.  
            Track your delivery live, explore local favorites, and enjoy exclusive app-only deals — all in one place.
          </p>

          {/* Download Buttons */}
          <div className='app-buttons'>
            <img src={assets.play_store} alt='Download on Play Store' />
            <img src={assets.app_store} alt='Download on App Store' />
          </div>

          {/* Optional QR Code Feature */}
          <div className='qr-section'>
            <img src={assets.qr_code} alt='Scan QR to download yummE App' />
            <p>Scan to Download</p>
          </div>
        </div>

        {/* Phone Mockup or Illustration */}
        <div className='app-image'>
          <img src={assets.app_mockup} alt='yummE App Preview' />
        </div>
      </div>
    </section>
  )
}

export default AppDownload
