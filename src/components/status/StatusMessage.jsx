import React from "react";
import { PartyPopper } from "lucide-react";

export default function StatusMessage() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-5">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <h3 className="text-base font-bold text-gray-800">Good News!</h3>
        <PartyPopper className="w-7 h-7 text-yellow-500" />
      </div>

      {/* Message */}
      <p className="text-gray-700 text-sm max-w-md">
        Congratulations! Your order just left dispatch and it is officially
        coming your way.
      </p>
    </div>
  );
}
