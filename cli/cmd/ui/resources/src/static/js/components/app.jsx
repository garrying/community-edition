import { version } from '../../../package.json'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Launcher from './launcher'
import ClusterCreate from './cluster/create'
import ClusterAdd from './cluster/add'
import Preflight from './preflight'

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Preflight version={version} />} />
          <Route path='launcher' element={<Launcher version={version} />} />
          <Route path='create' element={<ClusterCreate />} />
          <Route path='add' element={<ClusterAdd />} />
        </Routes>
      </main>
    </>
  )
}

export default App
