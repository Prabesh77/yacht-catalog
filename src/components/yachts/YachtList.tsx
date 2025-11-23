'use client';

import { useState, useMemo, useEffect } from 'react';
import { Yacht } from '@/types/yacht';
import YachtCard from '@/components/yachts/YachtCard';
import Pagination from '@/components/common/Pagination';
import SortFilter from '@/components/filters/SortFilter';
import SearchInput from '@/components/filters/SearchInput';
import { useDebounce } from '@/hooks/useDebounce';
import { sortYachts, SortOption } from '@/utils/sortHelpers';

interface YachtListProps {
  yachts: Yacht[];
}

const ITEMS_PER_PAGE = 10;

export default function YachtList({ yachts }: YachtListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('price-asc');
  
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredAndSortedYachts = useMemo(() => {
    let filtered = yachts;

    if (debouncedSearchQuery.trim()) {
      const query = debouncedSearchQuery.toLowerCase();
      filtered = yachts.filter(
        (yacht) =>
          yacht.name.toLowerCase().includes(query) ||
          yacht.type.toLowerCase().includes(query) ||
          yacht.length.includes(query)
      );
    }

    return sortYachts(filtered, sortBy);
  }, [yachts, debouncedSearchQuery, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedYachts.length / ITEMS_PER_PAGE);

  const paginatedYachts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredAndSortedYachts.slice(startIndex, endIndex);
  }, [filteredAndSortedYachts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchQuery, sortBy]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
        <div className="w-full sm:w-auto sm:min-w-[300px]">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by name, type, or length..."
          />
        </div>
        <SortFilter value={sortBy} onChange={setSortBy} />
      </div>

      {filteredAndSortedYachts.length === 0 ? (
        <div className="text-center py-12 animate-fade-in">
          <p className="text-gray-500">No yachts found matching your search criteria.</p>
        </div>
      ) : (
        <>
          <div className="mb-4 text-sm text-gray-600 animate-fade-in" style={{ animationDelay: '0.7s', opacity: 0 }}>
            Showing {paginatedYachts.length} of {filteredAndSortedYachts.length} yachts
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedYachts.map((yacht, index) => (
              <div
                key={yacht.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${0.8 + index * 0.1}s`,
                  opacity: 0
                }}
              >
                <YachtCard yacht={yacht} />
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="animate-fade-in" style={{ animationDelay: `${0.8 + paginatedYachts.length * 0.1}s`, opacity: 0 }}>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}
