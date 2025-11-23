'use client';

import { useState, useMemo, useEffect } from 'react';
import { Yacht } from '@/types/yacht';
import YachtCard from '@/components/yachts/YachtCard';
import Pagination from '@/components/common/Pagination';

interface YachtListProps {
  yachts: Yacht[];
}

const ITEMS_PER_PAGE = 10;

export default function YachtList({ yachts }: YachtListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(yachts.length / ITEMS_PER_PAGE);

  const paginatedYachts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return yachts.slice(startIndex, endIndex);
  }, [yachts, currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (yachts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No yachts available at the moment.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedYachts.map((yacht) => (
          <YachtCard key={yacht.id} yacht={yacht} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
