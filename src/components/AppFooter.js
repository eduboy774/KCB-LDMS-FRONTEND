import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  const currentYear = new Date().getFullYear()
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Kcb Bank
        </a>
        <span className="ms-1">&copy; {currentYear}.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          Kcb &amp; Bank
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
