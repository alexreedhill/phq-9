import React from 'react'
import '../../styles/core.scss'

// Layouts allow us to wrap multiple views in bits of HTML
export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <h2>PHQ-9</h2>
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
