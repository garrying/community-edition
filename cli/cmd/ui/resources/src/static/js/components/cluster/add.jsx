import { Link } from 'react-router-dom'
import '@cds/core/button/register.js'

const Add = () => {
  return (
    <>
      <div className='message' cds-layout='vertical gap:lg'>
        <h1 cds-text='heading'>Add an existing cluster</h1>
      </div>
      <Link to='/launcher'><cds-button>Cancel</cds-button></Link>
    </>
  )
}

export default Add
