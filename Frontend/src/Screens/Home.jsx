import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
      <div>
        <Link to='/login'>Login</Link>
        <Link to='/admin-panel'>Admin</Link>
    </div>
  )
}

export default Home