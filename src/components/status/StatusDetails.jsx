import React from "react";
import { Label } from "@/components/ui/label";

export default function StatusDetails({ tracker }) {
  const { trackingId, docNo, docType, orderDate, deliveryDate, driver } =
    tracker || {};

  return (
    <section className="flex flex-col space-y-4 text-left">
      {/* Header */}
      <section className="flex flex-col justify-center items-center">
        <Label className="uppercase text-sm font-semibold">Your Order</Label>
      </section>

      {/* Tracking ID */}
      <section className="flex flex-row justify-between items-start gap-1">
        <Label className="text-xs font-medium">Tracking ID:</Label>
        <Label className="text-xs font-medium text-muted uppercase">
          #{trackingId || "N/A"}
        </Label>
      </section>

      {/* Invoice Number */}
      <section className="flex flex-row justify-between items-start gap-1">
        <Label className="text-xs font-medium">Invoice No:</Label>
        <Label className="text-xs font-medium text-muted uppercase">
          {docNo || "N/A"}
        </Label>
      </section>

      {/* Document Type */}
      <section className="flex flex-row justify-between items-start gap-1">
        <Label className="text-xs font-medium">Doc Type:</Label>
        <Label className="text-xs font-medium text-muted uppercase">
          {docType || "N/A"}
        </Label>
      </section>

      {/* Order Date */}
      <section className="flex flex-row justify-between items-start gap-1">
        <Label className="text-xs font-medium">Order Date:</Label>
        <Label className="text-xs font-medium text-muted uppercase">
          {orderDate ? new Date(orderDate).toLocaleDateString() : "N/A"}
        </Label>
      </section>

      {/* Delivery Date */}
      <section className="flex flex-row justify-between items-start gap-1">
        <Label className="text-xs font-medium">Delivery Date:</Label>
        <Label className="text-xs font-medium text-muted uppercase">
          {deliveryDate ? new Date(deliveryDate).toLocaleDateString() : "N/A"}
        </Label>
      </section>

      {/* Driver */}
      <section className="flex flex-row justify-between items-start gap-1">
        <Label className="text-xs font-medium">Driver Assigned:</Label>
        <Label className="text-xs font-medium text-muted uppercase">
          {driver ? `${driver.name} - ${driver.vehicleReg}` : "Not Assigned"}
        </Label>
      </section>
    </section>
  );
}
