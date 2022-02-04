import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './home'
import ClusterCreate from './cluster-create'

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='create' element={<ClusterCreate />} />
        </Routes>
      </main>
    </>
  )
}

export default App
