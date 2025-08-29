import React from "react";
import { Label } from "@/components/ui/label";
export default function StatusDetails() {
  return (
    <>
      <section className="p-4 flex flex-col space-y-4 text-left">
        <section className="flex flex-col items-start gap-1">
          <Label className="text-lg font-medium">Tracking ID:</Label>
          <Label className="text-lg font-medium text-muted uppercase">
            #DSP-12345
          </Label>
        </section>

        <section className="flex flex-col items-start gap-1">
          <Label className="text-lg font-medium">Invoice No:</Label>
          <Label className="text-lg font-medium text-muted uppercase">
            W1_20022693
          </Label>
        </section>

        <section className="flex flex-col items-start gap-1">
          <Label className="text-lg font-medium">Order Date :</Label>
          <Label className="text-lg font-medium text-muted uppercase">
            2023-03-15
          </Label>
        </section>

        <section className="flex flex-col items-start gap-1">
          <Label className="text-lg font-medium">Delivery Address:</Label>
          <Label className="text-lg font-medium text-muted uppercase">
            Mapera Court - Lang’ata Rd
          </Label>
        </section>

        <section className="flex flex-col items-start gap-1">
          <Label className="text-lg font-medium">Driver Assigned:</Label>
          <Label className="text-lg font-medium text-muted uppercase">
            PETER TANUI - KCA866H
          </Label>
        </section>
      </section>
    </>
  );
}
