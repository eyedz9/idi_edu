export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export const programImages: Record<string, string> = {
  certificate: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=75",
  "associate-of-arts": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=75",
  "bachelor-of-arts": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75",
  "master-interior-architecture": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=75",
};
