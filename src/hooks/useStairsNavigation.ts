'use client';

import { useContext, createContext } from 'react';

interface NavigationContextType {
  navigateWithStairs: (href: string) => void;
}

export const NavigationContext = createContext<NavigationContextType | null>(null);

export const useStairsNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useStairsNavigation must be used within NavigationProvider');
  }
  return context;
};
