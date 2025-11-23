'use client';

import { SortOption } from '@/utils/sortHelpers';

interface SortFilterProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortFilter({ value, onChange }: SortFilterProps) {
  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A to Z' },
    { value: 'name-desc', label: 'Name: Z to A' },
    { value: 'length-asc', label: 'Length: Short to Long' },
    { value: 'length-desc', label: 'Length: Long to Short' },
  ];

  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-semibold text-primary uppercase tracking-wide whitespace-nowrap">
        Sort by:
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="px-4 py-2 rounded-lg border border-gold/30 bg-white text-primary font-medium focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300 uppercase tracking-wide text-sm min-w-[200px] transform focus:scale-[1.02]"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
