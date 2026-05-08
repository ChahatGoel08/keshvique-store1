'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

type WishlistItem = {
  id: string;
  name: string;
  image: string;
  price: string;
};

type WishlistContextType = {
  wishlist: WishlistItem[];

  toggleWishlist: (
    item: WishlistItem
  ) => void;

  isWishlisted: (
    id: string
  ) => boolean;
};

const WishlistContext = createContext<
  WishlistContextType | undefined
>(undefined);

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [wishlist, setWishlist] =
    useState<WishlistItem[]>([]);

  useEffect(() => {

    const savedWishlist =
      localStorage.getItem(
        'keshvique-wishlist'
      );

    if (savedWishlist) {

      setWishlist(
        JSON.parse(savedWishlist)
      );
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      'keshvique-wishlist',
      JSON.stringify(wishlist)
    );

  }, [wishlist]);

  const toggleWishlist = (
    item: WishlistItem
  ) => {

    const exists = wishlist.find(
      (product) =>
        product.id === item.id
    );

    if (exists) {

      setWishlist(
        wishlist.filter(
          (product) =>
            product.id !== item.id
        )
      );

    } else {

      setWishlist([
        ...wishlist,
        item,
      ]);

    }

  };

  const isWishlisted = (
    id: string
  ) => {

    return wishlist.some(
      (item) => item.id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {

  const context =
    useContext(WishlistContext);

  if (!context) {

    throw new Error(
      'useWishlist must be used within WishlistProvider'
    );
  }

  return context;
}