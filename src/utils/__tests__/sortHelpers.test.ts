import { sortYachts, SortOption } from '../sortHelpers';
import { Yacht } from '@/types/yacht';

const mockYachts: Yacht[] = [
  {
    id: 1,
    name: 'ZEBRA',
    type: 'Motor',
    length: '50.00',
    maxPassengers: 12,
    maxPassengersCruising: null,
    bedrooms: 6,
    maxCrew: 9,
    url: 'https://example.com/yacht1.jpg',
    weeklyLowAhoy: '300000',
    weeklyLowRetail: '300000',
    currency: 'USD',
    acceptsWeeklyCharters: true,
    acceptsDayCharters: false,
  },
  {
    id: 2,
    name: 'ALPHA',
    type: 'Sail',
    length: '35.00',
    maxPassengers: 8,
    maxPassengersCruising: null,
    bedrooms: 4,
    maxCrew: 5,
    url: 'https://example.com/yacht2.jpg',
    weeklyLowAhoy: '150000',
    weeklyLowRetail: '150000',
    currency: 'USD',
    acceptsWeeklyCharters: true,
    acceptsDayCharters: true,
  },
  {
    id: 3,
    name: 'BETA',
    type: 'Motor',
    length: '60.00',
    maxPassengers: 16,
    maxPassengersCruising: null,
    bedrooms: 8,
    maxCrew: 12,
    url: 'https://example.com/yacht3.jpg',
    weeklyLowAhoy: '500000',
    weeklyLowRetail: '500000',
    currency: 'EUR',
    acceptsWeeklyCharters: true,
    acceptsDayCharters: false,
  },
];

describe('sortYachts', () => {
  it('should sort by price ascending', () => {
    const sorted = sortYachts(mockYachts, 'price-asc');
    expect(sorted[0].id).toBe(2);
    expect(sorted[1].id).toBe(1);
    expect(sorted[2].id).toBe(3);
  });

  it('should sort by price descending', () => {
    const sorted = sortYachts(mockYachts, 'price-desc');
    expect(sorted[0].id).toBe(3);
    expect(sorted[1].id).toBe(1);
    expect(sorted[2].id).toBe(2);
  });

  it('should sort by name ascending', () => {
    const sorted = sortYachts(mockYachts, 'name-asc');
    expect(sorted[0].name).toBe('ALPHA');
    expect(sorted[1].name).toBe('BETA');
    expect(sorted[2].name).toBe('ZEBRA');
  });

  it('should sort by name descending', () => {
    const sorted = sortYachts(mockYachts, 'name-desc');
    expect(sorted[0].name).toBe('ZEBRA');
    expect(sorted[1].name).toBe('BETA');
    expect(sorted[2].name).toBe('ALPHA');
  });

  it('should sort by length ascending', () => {
    const sorted = sortYachts(mockYachts, 'length-asc');
    expect(sorted[0].length).toBe('35.00');
    expect(sorted[1].length).toBe('50.00');
    expect(sorted[2].length).toBe('60.00');
  });

  it('should sort by length descending', () => {
    const sorted = sortYachts(mockYachts, 'length-desc');
    expect(sorted[0].length).toBe('60.00');
    expect(sorted[1].length).toBe('50.00');
    expect(sorted[2].length).toBe('35.00');
  });

  it('should not mutate the original array', () => {
    const original = [...mockYachts];
    sortYachts(mockYachts, 'price-asc');
    expect(mockYachts).toEqual(original);
  });

  it('should return empty array for empty input', () => {
    const sorted = sortYachts([], 'price-asc');
    expect(sorted).toEqual([]);
  });
});

