import React from "react";
import { Label } from "@/components/ui/label";
export default function StatusDetails() {
  return (
    <>
      <section className="flex flex-col space-y-4 text-left">

        <section className="flex flex-col justify-center items-center">
          <Label className= "uppercase">Your Order</Label>
        </section>

        <section className="flex flex-row justify-between items-start gap-1">
          <Label className="text-xs font-medium">Tracking ID:</Label>
          <Label className="text-xs font-medium text-muted uppercase">
            #DSP-12345
          </Label>
        </section>

        <section className="flex flex-row justify-between items-start gap-1">
          <Label className="text-xs font-medium">Invoice No:</Label>
          <Label className="text-xs font-medium text-muted uppercase">
            W1_20022693
          </Label>
        </section>

        <section className="flex flex-row justify-between items-start gap-1">
          <Label className="text-xs font-medium">Order Date :</Label>
          <Label className="text-xs font-medium text-muted uppercase">
            2025-08-23
          </Label>
        </section>

        <section className="flex flex-row justify-between items-start gap-1">
          <Label className="text-xs font-medium">Delivery Address:</Label>
          <Label className="text-xs font-medium text-muted uppercase">
            Mapera Court - Lang’ata Rd
          </Label>
        </section>

        <section className="flex flex-row justify-between items-start gap-1">
          <Label className="text-xs font-medium">Driver Assigned:</Label>
          <Label className="text-xs font-medium text-muted uppercase">
            PETER TANUI - KCA866H
          </Label>
        </section>
      </section>
    </>
  );
}
