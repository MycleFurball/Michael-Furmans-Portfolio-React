import React from 'react'

import { Helmet } from 'react-helmet'

import './marketing-social-media.css'

const MarketingSocialMedia = (props) => {
  return (
    <div className="marketing-social-media-container">
      <Helmet>
        <title>Marketing-Social-Media - Michael Furman's Portfolio</title>
        <meta
          property="og:title"
          content="Marketing-Social-Media - Michael Furman's Portfolio"
        />
      </Helmet>
    </div>
  )
}

export default MarketingSocialMedia
