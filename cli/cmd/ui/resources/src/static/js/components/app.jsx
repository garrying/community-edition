import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Launcher from './launcher'
import ClusterCreate from './cluster/create'
import ClusterAdd from './cluster/add'

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Launcher />} />
          <Route path='create' element={<ClusterCreate />} />
          <Route path='add' element={<ClusterAdd />} />
        </Routes>
      </main>
    </>
  )
}

export default App
