export function formatPrice(price: number, currency: string | null | undefined = 'USD'): string {
  const validCurrency = currency || 'USD';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: validCurrency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
