import { Link } from 'react-router-dom'
import '@cds/core/button/register.js'
import Nav from './nav'

const Create = () => {
  return (
    <>
      <Nav />
      <div className='message' cds-layout='vertical gap:lg p-t:xxl'>
        <h1 cds-text='heading'>Create a cluster</h1>
      </div>
      <Link to='/'><cds-button>Cancel</cds-button></Link>
    </>
  )
}

export default Create
