import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ManagementMembers from '../components/ClubMembers/ManagementMembers'

const ManagementclubMembers = () => {
  return (
      <div>
          <Navbar />
          <ManagementMembers/>
          <Footer/>
      </div>
      
  )
}

export default ManagementclubMembers