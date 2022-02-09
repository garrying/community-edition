import { Link, useNavigate } from 'react-router-dom'
import '@cds/core/button/register.js'
import '@cds/core/icon/register.js'
import '@cds/core/alert/register.js'
import { ClarityIcons } from '@cds/core/icon/icon.service'
import { plusCircleIcon } from '@cds/core/icon/shapes/plus-circle'
import { terminalIcon } from '@cds/core/icon/shapes/terminal'
import SplashGraphic from '../../images/welcome-intro-01-dk.svg'
import '@cds/core/progress-circle/register.js'

ClarityIcons.addIcons(plusCircleIcon)
ClarityIcons.addIcons(terminalIcon)

const Preflight = (props) => {
  const navigate = useNavigate()
  setTimeout(() => {
    navigate('/launcher')
  }, 3500)
  return (
    <>
      <div className='preflight' cds-layout='vertical gap:lg align:center'>
        <div cds-layout='vertical gap:lg align:vertical-stretch align:center'>
          <h1 cds-text='title'>Starting Tanzu Community Edition</h1>
          <cds-progress-circle size='xxl' line='1' status='info' />
        </div>
        <Link cds-layout='align:bottom' to='/launcher'><cds-button status='neutral' size='sm' action='flat'>Skip</cds-button></Link>
      </div>
      <footer className='footer' cds-layout='vertical gap:lg'>
        <div cds-layout='horizontal gap:md align:vertical-center'>
          <p cds-text='secondary' className='version'>{`v${props.version}`}</p>
          <p cds-text='secondary' className='version'><a href='' cds-text='link static'>Report an issue</a></p>
        </div>
      </footer>
      <div className='splash-graphic preflight-graphic'>
        <div>
          <img src={SplashGraphic} />
        </div>
      </div>
    </>
  )
}

export default Preflight
