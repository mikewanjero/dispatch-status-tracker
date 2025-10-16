import React from "react";
import ProcessStage from "../../features/status-progress/ProcessStage";

export default function StatusTimeline({ stages = [] }) {
  return (
    <div className="flex flex-row mx-auto justify-between items-center">
      {stages.length > 0 ? (
        stages.map((stage, index) => (
          <ProcessStage key={index} stage={stage} />
        ))
      ) : (
        <p className="text-xs text-gray-500">No stage data available</p>
      )}
    </div>
  );
}
