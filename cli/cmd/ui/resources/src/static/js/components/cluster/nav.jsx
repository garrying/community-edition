import { Link } from 'react-router-dom'
import { ClarityIcons } from '@cds/core/icon/icon.service'
import { vmBugIcon } from '@cds/core/icon/shapes/vm-bug'
import { cloudIcon } from '@cds/core/icon/shapes/cloud'
import { cogIcon } from '@cds/core/icon/shapes/cog'
import '@cds/core/modal/register.js'

ClarityIcons.addIcons(vmBugIcon)
ClarityIcons.addIcons(cloudIcon)
ClarityIcons.addIcons(cogIcon)

const Nav = () => {
  const handleClose = () => {
    document.querySelector('cds-modal').toggleAttribute('hidden')
  }
  return (
    <>
      <cds-modal aria-labelledby=',-title' id=',' hidden closable='false'>
        <cds-modal-header>
          <h3 cds-text='section' cds-first-focus="true" id='default-modal-title'>Settings</h3>
        </cds-modal-header>
        <cds-modal-content>
          <p cds-text='body'>Place holder text for the default sized modal example.</p>
        </cds-modal-content>
        <cds-modal-actions>
          <cds-button action='outline' onClick={handleClose}>Cancel</cds-button>
          <cds-button onClick={handleClose}>Ok</cds-button>
        </cds-modal-actions>
      </cds-modal>
      <header className='header' cds-layout='horizontal gap:lrg align:vertical-center p-l:l p-r:l p-b:md'>
        <div className='branding'>
          <Link to='/launcher' className='title' cds-text='message'>
            <cds-icon shape='vm-bug' solid size='36' cds-layout='m-r:md' />
            Create a cluster
          </Link>
        </div>
        <div className='header-nav' cds-layout='align:right'>
          <cds-button action='flat' onClick={handleClose}>
            <cds-icon shape='cog' inverse='true' size='24' />
          </cds-button>
        </div>
      </header>
    </>
  )
}

export default Nav
