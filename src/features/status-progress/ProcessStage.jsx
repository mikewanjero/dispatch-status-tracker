import React from 'react'
import { iconMap, statusColor } from '../ui/icons'

export default function ProcessStage({ stage }) {
    const Icon = iconMap[stage.stage?.toUpperCase()] 
    const processColor = statusColor[stage.status?.toLowerCase()] || "text-gray-400";

    const timestamp = stage.timestamp
        ? new Date(stage.timestamp).toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                hour: "2-digit",
                minute: "2-digit",
            })
        : "Pending";

    return (
        <div className='flex flex-col items-center gap-y-1'>
            {/* Stage Name */}
            <span className='mt-2 text-xs font-medium'>{stage.stage}</span>
            {/* Stage Icon*/}
            <Icon size={20} className={processColor} />
            {/* Timestamp */}
            <section className="flex flex-row gap-x-1 text-xs text-gray-500">
                {timestamp !== "Pending" ? (
                    <span>{timestamp}</span>
                ) : (
                    <span className="italic text-gray-400">Pending</span>
                )}
            </section>
        </div>
    )
}