'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

export type CartItem = {
  name: string;
  image: string;
  price: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];

  coupon: string;

  discount: number;

  addToCart: (
    item: Omit<CartItem, 'quantity'>
  ) => void;

  removeFromCart: (
    name: string
  ) => void;

  increaseQuantity: (
    name: string
  ) => void;

  decreaseQuantity: (
    name: string
  ) => void;

  clearCart: () => void;

  applyCoupon: (
    code: string
  ) => void;
};

const CartContext = createContext<
  CartContextType | undefined
>(undefined);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [cart, setCart] =
    useState<CartItem[]>([]);

  const [coupon, setCoupon] =
    useState('');

  const [discount, setDiscount] =
    useState(0);

  /* LOAD CART */
  useEffect(() => {

    const savedCart =
      localStorage.getItem(
        'keshvique-cart'
      );

    if (savedCart) {

      setCart(
        JSON.parse(savedCart)
      );
    }

  }, []);

  /* SAVE CART */
  useEffect(() => {

    localStorage.setItem(
      'keshvique-cart',
      JSON.stringify(cart)
    );

  }, [cart]);

  const addToCart = (
    item: Omit<CartItem, 'quantity'>
  ) => {

    const existingItem =
      cart.find(
        (product) =>
          product.name === item.name
      );

    if (existingItem) {

      setCart(
        cart.map((product) =>
          product.name === item.name
            ? {
                ...product,
                quantity:
                  product.quantity + 1,
              }
            : product
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ]);

    }

  };

  const removeFromCart = (
    name: string
  ) => {

    setCart(
      cart.filter(
        (item) =>
          item.name !== name
      )
    );

  };

  const increaseQuantity = (
    name: string
  ) => {

    setCart(
      cart.map((item) =>
        item.name === name
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );

  };

  const decreaseQuantity = (
    name: string
  ) => {

    setCart(
      cart
        .map((item) =>
          item.name === name
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );

  };

  const applyCoupon = (
    code: string
  ) => {

    const normalized =
      code.toUpperCase();

    if (
      normalized ===
      'WELCOME10'
    ) {

      setCoupon(normalized);

      setDiscount(10);

    } else if (
      normalized === 'LUXE20'
    ) {

      setCoupon(normalized);

      setDiscount(20);

    } else {

      alert('Invalid Coupon');

      setCoupon('');

      setDiscount(0);
    }
  };

  const clearCart = () => {

    setCart([]);

    localStorage.removeItem(
      'keshvique-cart'
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,

        coupon,

        discount,

        addToCart,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity,

        clearCart,

        applyCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {

  const context =
    useContext(CartContext);

  if (!context) {

    throw new Error(
      'useCart must be used within CartProvider'
    );
  }

  return context;
}