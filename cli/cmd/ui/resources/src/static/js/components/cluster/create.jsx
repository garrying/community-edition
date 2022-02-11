import { Link } from 'react-router-dom'
import '@cds/core/button/register.js'
import '@cds/core/card/register.js'
import '@cds/core/divider/register.js'
import Nav from './nav'

const Create = () => {
  const tceProviders = [
    {
      name: 'Amazon Web Services',
      description: 'Deploy your management cluster on Amazon Elastic Compute Cloud'
    }, {
      name: 'Microsoft Azure',
      description: 'Deploy your management cluster on Microsoft Azure'
    }, {
      name: 'VMware vSphere',
      description: 'Deploy your management cluster on VMware vSphere'
    }
  ]

  return (
    <>
      <Nav />
      <div cds-layout='vertical' style={{ paddingTop: 100 + 'px' }}>
        <h1 cds-text='section'>Supported infrastructure providers</h1>
      </div>
      <div cds-layout='horizontal gap:lg p-t:lg m-b:xxl align:fill'>
        {tceProviders.map((provider, index) => (
          <cds-card key={index}>
            <div cds-layout='vertical gap:md' aria-labelledby='{id}'>
              <h2 id='{id}' cds-text='section'>{provider.name}</h2>
              <cds-divider cds-card-remove-margin />
              <div cds-text='body light'>{provider.description}</div>
              <cds-divider cds-card-remove-margin />
              <div cds-layout='horizontal gap:xs align:vertical-center'>
                <cds-button action='solid' size='sm'>Deploy</cds-button>
              </div>
            </div>
          </cds-card>
        ))}
      </div>
      <Link to='/launcher'><cds-button action='outline'>Cancel</cds-button></Link>
    </>
  )
}

export default Create
