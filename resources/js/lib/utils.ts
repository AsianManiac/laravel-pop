import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPrice(
    price: number,
    options: {
        currency?: "USD" | "EUR" | "GBP";
    } = {}
) {
    const { currency = "USD" } = options;

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 0, // Set to 0 to avoid decimals
    }).format(price);
}
