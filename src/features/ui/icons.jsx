import { MapPin, Package, ShieldCheck, Truck } from "lucide-react"


export const iconMap = {
    STORE: Package,
    VERIFICATION: ShieldCheck,
    DISPATCH: Truck,
    DELIVERED: MapPin,
};

export const statusColor = {
    Completed: 'text-green-600',
    Active: 'text-red-400',
    Pending: 'text-black',
}