import { Link } from 'react-router-dom'
import { ClarityIcons } from '@cds/core/icon/icon.service'
import { vmBugIcon } from '@cds/core/icon/shapes/vm-bug'
import { cloudIcon } from '@cds/core/icon/shapes/cloud'
import { cogIcon } from '@cds/core/icon/shapes/cog'

ClarityIcons.addIcons(vmBugIcon)
ClarityIcons.addIcons(cloudIcon)
ClarityIcons.addIcons(cogIcon)

const Nav = () => {
  return (
    <>
      <header className='header' cds-layout='horizontal gap:lrg align:vertical-center p-l:l p-r:l p-b:md'>
        <div className='branding'>
          <Link to='/' className='title' cds-text='message'>
            <cds-icon shape='vm-bug' solid size='36' cds-layout='m-r:md' />
            Create a cluster
          </Link>
        </div>
        <div className='header-nav' cds-layout='align:right'>
          <Link to='#' className='active nav-link nav-icon'>
            <cds-icon shape='cog' inverse='true' size='24' />
          </Link>
        </div>
      </header>
    </>
  )
}

export default Nav
