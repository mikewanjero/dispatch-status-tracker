import React from "react";
import { PartyPopper } from "lucide-react";

export default function StatusMessage() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-5 mb-16">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-bold text-gray-800">Good News!</h2>
        <PartyPopper className="w-7 h-7 text-yellow-500" />
      </div>

      {/* Message */}
      <p className="text-gray-700 text-lg max-w-md">
        Congratulations! Your order just left dispatch and it is officially
        coming your way.
      </p>
    </div>
  );
}
