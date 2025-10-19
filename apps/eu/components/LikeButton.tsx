'use client';

import { useLikes } from '@/hooks/useLikes';

interface LikeButtonProps {
  profileId: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export default function LikeButton({
  profileId,
  size = 'md',
  showLabel = false,
}: LikeButtonProps) {
  const { isLiked, likeProfile, unlikeProfile, loading } = useLikes();

  const liked = isLiked(profileId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (liked) {
      unlikeProfile(profileId);
    } else {
      likeProfile(profileId);
    }
  };

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`${sizeClasses[size]} flex items-center justify-center rounded-full transition-all duration-200 ${
        liked
          ? 'bg-red-500 hover:bg-red-600 text-white'
          : 'bg-white hover:bg-gray-100 text-gray-600 border-2 border-gray-300'
      } disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg`}
      aria-label={liked ? 'Odebrat z oblíbených' : 'Přidat do oblíbených'}
      title={liked ? 'Odebrat z oblíbených' : 'Přidat do oblíbených'}
    >
      {liked ? (
        <svg
          className={iconSizes[size]}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className={iconSizes[size]}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      )}
      {showLabel && (
        <span className="ml-2 font-medium">
          {liked ? 'Oblíbeno' : 'Oblíbit'}
        </span>
      )}
    </button>
  );
}
