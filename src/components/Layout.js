import React from 'react'
import { StarsCanvas } from '../components/canvas'

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-16 px-32 dark:bg-dark ${className} xl:px-24 lg:px-16 md:px-12 sm:px-8  xl:p-12 lg:p-8 md:p-6 sm:p-4 `}>
      <StarsCanvas />
      {children}
    </div>
  )
}

export default Layout
