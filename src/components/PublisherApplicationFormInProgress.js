import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'

import './PublisherApplicationFormInProgress.css'

class PublisherApplicationFormInProgress extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <div className='PublisherApplicationFormInProgress'>
        <div className='Content'>
          <p>
            <strong>Submission in progress. </strong>
            <Loader indeterminate active inline />
          </p>
          <p>You will receive <strong>two</strong> MetaMask prompts:</p>
          <p><strong>First prompt:</strong> Allow adChain Registry contract to transfer adToken deposit from your account.</p>
          <p><strong>Second prompt:</strong> Submit domain application to the adChain Registry contract.</p>
        </div>
      </div>
    )
  }
}

export default PublisherApplicationFormInProgress
