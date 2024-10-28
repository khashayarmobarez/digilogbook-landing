import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Pagination({ pageNumber, totalPages, basePath = '/blogs' }) {
  const hasPreviousPage = pageNumber > 1;
  const hasNextPage = pageNumber < totalPages;

  return (
    <div className="pagination flex items-center justify-center gap-8 mt-6">
      {/* Previous Button */}
      <Link 
        href={`${basePath}/${pageNumber - 1}`} 
        prefetch={false}
        className={`flex items-center ${!hasPreviousPage && 'opacity-50 pointer-events-none'}`}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </Link>

      {/* Current Page Display */}
      <span className="text-lg font-semibold px-4">{pageNumber}</span>

      {/* Next Button */}
      <Link 
        href={`${basePath}/${pageNumber + 1}`} 
        prefetch={false}
        className={`flex items-center ${!hasNextPage && 'opacity-50 pointer-events-none'}`}
      >
        <ArrowBackIosIcon fontSize="small" />
      </Link>
    </div>
  );
}
