import React from 'react'
import { iconMap } from '../ui/icons'

export default function ProcessStage({ stage }) {
    const Icon = iconMap[stage.label];
    const processColor = iconMap[stage.status];

    return (
        <div className='flex flex-col items-center gap-y-1'>
            <span className='mt-2 text-xs font-medium'>{stage.label}</span>
            <Icon size={20} className={processColor} />
            <section className='flex flex-row gap-x-1'>
                <span className='text-xs text-gray-500'>{stage.date || 'Pending'}</span>
                <span className='text-xs text-gray-500'>{stage.time}</span>
            </section>
        </div>
    )
}