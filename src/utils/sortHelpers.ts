import { Yacht } from '@/types/yacht';

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'length-asc' | 'length-desc';

export function sortYachts(yachts: Yacht[], sortBy: SortOption): Yacht[] {
  const sorted = [...yachts];

  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => parseInt(a.weeklyLowRetail) - parseInt(b.weeklyLowRetail));
    case 'price-desc':
      return sorted.sort((a, b) => parseInt(b.weeklyLowRetail) - parseInt(a.weeklyLowRetail));
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case 'length-asc':
      return sorted.sort((a, b) => parseFloat(a.length) - parseFloat(b.length));
    case 'length-desc':
      return sorted.sort((a, b) => parseFloat(b.length) - parseFloat(a.length));
    default:
      return sorted;
  }
}
