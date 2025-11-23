import { formatPrice } from '../formatPrice';

describe('formatPrice', () => {
  it('should format price in USD by default', () => {
    const result = formatPrice(1000000);
    expect(result).toMatch(/\$1,000,000/);
  });

  it('should format price with USD currency', () => {
    const result = formatPrice(2500000, 'USD');
    expect(result).toMatch(/\$2,500,000/);
  });

  it('should format price with EUR currency', () => {
    const result = formatPrice(450000, 'EUR');
    expect(result).toMatch(/€450,000/);
  });

  it('should handle null currency and default to USD', () => {
    const result = formatPrice(1000000, null);
    expect(result).toMatch(/\$1,000,000/);
  });

  it('should handle undefined currency and default to USD', () => {
    const result = formatPrice(1000000, undefined);
    expect(result).toMatch(/\$1,000,000/);
  });

  it('should format small prices correctly', () => {
    const result = formatPrice(100, 'USD');
    expect(result).toMatch(/\$100/);
  });

  it('should format large prices with commas', () => {
    const result = formatPrice(1234567890, 'USD');
    expect(result).toMatch(/\$1,234,567,890/);
  });

  it('should not include decimal places', () => {
    const result = formatPrice(1000.99, 'USD');
    expect(result).toMatch(/\$1,001/);
  });
});

