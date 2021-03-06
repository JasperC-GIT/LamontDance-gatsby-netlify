import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://www.instagram.com/lamontdancetheatre/">@lamontdancetheatre
</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Lamont Dance Theatre. All rights reserved.
        </span>
      </div>
    </footer>
  </div>
)
