import { MapPin, Package, ShieldCheck, Truck } from "lucide-react"


export const iconMap = {
    STORE: Package,
    VERIFICATION: ShieldCheck,
    DISPATCH: Truck,
    DELIVERED: MapPin,
};

export const statusColor = {
    completed: 'text-green-600',
    ongoing: 'text-red-400',
    pending: 'text-black',
}