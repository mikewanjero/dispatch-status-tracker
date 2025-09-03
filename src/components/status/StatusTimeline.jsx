import React from 'react'
import { stages } from '../../features/status-progress/stageData'
import ProcessStage from '../../features/status-progress/ProcessStage'

export default function StatusTimeline() {
  return (
    <div className='flex flex-row mx-auto justify-between items-center'>
      {stages.map((stage) => (
          <ProcessStage key={stage.label} stage={stage} />
        ))}
    </div>
  )
}
