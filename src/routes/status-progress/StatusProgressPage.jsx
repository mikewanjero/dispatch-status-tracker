import React from 'react'
import StatusTimeline from '../../components/status/StatusTimeline'
import StatusDetails from '../../components/status/StatusDetails'
import StatusMessage from '../../components/status/StatusMessage'
import StatusActions from '../../components/status/StatusActions'

export default function StatusProgressPage() {
  return (
    <div className='max-w-md sm:max-w-sm mx-auto py-4 space-y-6'>
        <StatusTimeline />
        <StatusDetails />
        <StatusMessage />
        <StatusActions />
    </div>
  )
}
