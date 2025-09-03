import React from "react";
import { Button } from "@/components/ui/button";
export default function StatusActions() {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <Button variant="default" size="sm">
          Contact Driver
        </Button>
        <Button variant="default" size="sm">
          Contact Customer Care
        </Button>
      </div>
    </>
  );
}
