import { Link } from 'react-router-dom'
import '@cds/core/button/register.js'
import '@cds/core/icon/register.js'
import { ClarityIcons } from '@cds/core/icon/icon.service'
import { userIcon } from '@cds/core/icon/shapes/user'
import { plusCircleIcon } from '@cds/core/icon/shapes/plus-circle'
import { folderOpenIcon } from '@cds/core/icon/shapes/folder-open'
import { terminalIcon } from '@cds/core/icon/shapes/terminal'
import SplashGraphic from '../../images/welcome-intro-01-dk.svg'
import '@cds/core/progress-circle/register.js'
import ButtonWC from './cluster/react-wc-ref'

ClarityIcons.addIcons(userIcon)
ClarityIcons.addIcons(plusCircleIcon)
ClarityIcons.addIcons(folderOpenIcon)
ClarityIcons.addIcons(terminalIcon)

const Launcher = (props) => {
  return (
    <>
      <div className='message' cds-layout='vertical gap:lg'>
        <h1 cds-text='heading'>Welcome to the Tanzu Community Edition Launcher</h1>
        <p cds-text='body'>Tanzu Community Edition (TCE) is VMware's Open Source Kubernetes distribution. The installer will deploy a temporary cluster on your local machine to bootstrap a management cluster on your desired target.</p>
      </div>

      <div className='message' cds-layout='vertical gap:lg'>
        <Link to='/create'><cds-button><cds-icon shape='plus-circle' />Create a Cluster</cds-button></Link>
        <Link to='/add'><cds-button><cds-icon shape='folder-open' />Add an Existing Cluster</cds-button></Link>
        <cds-button disabled><cds-icon shape='terminal' />Install Tanzu Command Line Tool</cds-button>
      </div>

      <footer className='footer' cds-layout='vertical gap:lg'>
        <ButtonWC />
        <div cds-layout='horizontal gap:md align:vertical-center'>
          <cds-progress-circle status='info' /> <p cds-text='secondary'>Installing Virtual Machine...</p>
        </div>
        <div cds-layout='horizontal gap:md align:vertical-center'>
          <p cds-text='secondary' className='version'>{`v${props.version}`}</p>
          <p cds-text='secondary' className='version'><a href='' cds-text='link static'>Report an issue</a></p>
        </div>
      </footer>
      <div className='splash-graphic'>
        <div>
          <img src={SplashGraphic} />
        </div>
      </div>
    </>
  )
}

export default Launcher
