'use client';

import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

export function useLikes() {
  const [likedProfiles, setLikedProfiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchLikedProfiles();
      } else {
        setLikedProfiles([]);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchLikedProfiles = async () => {
    try {
      const response = await fetch('/api/likes');
      if (response.ok) {
        const data = await response.json();
        setLikedProfiles(data.liked_profiles);
      }
    } catch (error) {
      console.error('Error fetching liked profiles:', error);
    } finally {
      setLoading(false);
    }
  };

  const likeProfile = async (profileId: string) => {
    if (!user) {
      // Redirect to login
      window.location.href = '/prihlaseni?redirect=' + window.location.pathname;
      return;
    }

    try {
      const response = await fetch('/api/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ profileId }),
      });

      if (response.ok) {
        setLikedProfiles([...likedProfiles, profileId]);
      }
    } catch (error) {
      console.error('Error liking profile:', error);
    }
  };

  const unlikeProfile = async (profileId: string) => {
    if (!user) return;

    try {
      const response = await fetch(`/api/likes?profileId=${profileId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setLikedProfiles(likedProfiles.filter((id) => id !== profileId));
      }
    } catch (error) {
      console.error('Error unliking profile:', error);
    }
  };

  const isLiked = (profileId: string) => {
    return likedProfiles.includes(profileId);
  };

  return {
    likedProfiles,
    loading,
    user,
    likeProfile,
    unlikeProfile,
    isLiked,
  };
}
