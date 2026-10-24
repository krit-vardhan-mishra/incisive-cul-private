'use client';

import { useRef, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Stairs, { StairsRef } from "@/components/animation/Stairs";
import LandingPage from "@/components/LandingPage";
import Footer from "@/components/Footer";
import { NavigationContext } from "@/hooks/useStairsNavigation";

export default function Provider({ children }: { children: React.ReactNode }) {
  const stairsRef = useRef<StairsRef>(null);
  const [showLanding, setShowLanding] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Only present the intro landing animation on the homepage, and only if not yet seen in session
    if (pathname === '/') {
      try {
        const hasSeenLanding = sessionStorage.getItem('hasSeenLanding');
        if (!hasSeenLanding) {
          setShowLanding(true);
        }
      } catch {
        // Silently continue if sessionStorage is disabled or unavailable
      }
    }
    setCurrentPath(pathname);
  }, [pathname]);

  useEffect(() => {
    if (currentPath &&
        currentPath !== pathname &&
        !showLanding) {

      const timer = setTimeout(() => {
        if (stairsRef.current) {
          stairsRef.current.playAnimation();
        }
      }, 50);

      setCurrentPath(pathname);

      return () => clearTimeout(timer);
    }
  }, [pathname, currentPath, showLanding]);

  const handleLandingComplete = () => {
    try {
      sessionStorage.setItem('hasSeenLanding', 'true');
    } catch {
      // Ignore storage errors in restricted/incognito environments
    }
    setShowLanding(false);
  };

  const triggerStairsAnimation = () => {
    if (stairsRef.current && !showLanding) {
      stairsRef.current.playAnimation();
    }
  };

  const navigateWithStairs = (href: string) => {
    if (stairsRef.current && !showLanding) {
      stairsRef.current.playAnimation();
      setTimeout(() => {
        router.push(href);
      }, 100);
    } else {
      router.push(href);
    }
  };

  return (
    <NavigationContext.Provider value={{ navigateWithStairs }}>
      <Stairs ref={stairsRef}>
        <Header stairsRef={stairsRef} triggerStairsAnimation={triggerStairsAnimation} />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </Stairs>
      {showLanding && (
        <LandingPage onAnimationComplete={handleLandingComplete} />
      )}
    </NavigationContext.Provider>
  );
}