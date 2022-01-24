import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
const PageLayout = ({ children }) => {
  // const { title, author, synopsis , coverImageUrl} = props?.readingList;
  return (
    <div>
      <Header />
      <div className="container my-4">
        <div className="row">
          <Sidebar />
          <div className="col-md-9 my-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageLayout
