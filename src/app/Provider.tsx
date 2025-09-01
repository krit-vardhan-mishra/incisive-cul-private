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
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const hasSeenLanding = sessionStorage.getItem('hasSeenLanding');
    if (!hasSeenLanding) {
      setShowLanding(true);
    }
    setIsLoading(false);
    setCurrentPath(pathname);
  }, [pathname]);

  useEffect(() => {
    if (currentPath &&
        currentPath !== pathname &&
        !showLanding &&
        !isLoading) {

      const timer = setTimeout(() => {
        if (stairsRef.current) {
          stairsRef.current.playAnimation();
        }
      }, 50);

      setCurrentPath(pathname);

      return () => clearTimeout(timer);
    }
  }, [pathname, currentPath, showLanding, isLoading]);  const handleLandingComplete = () => {
    sessionStorage.setItem('hasSeenLanding', 'true');
    setShowLanding(false);
  };

  const triggerStairsAnimation = () => {
    if (stairsRef.current && !showLanding && !isLoading) {
      stairsRef.current.playAnimation();
    }
  };

  const navigateWithStairs = (href: string) => {
    if (stairsRef.current && !showLanding && !isLoading) {
      stairsRef.current.playAnimation();
      setTimeout(() => {
        router.push(href);
      }, 100);
    } else {
      router.push(href);
    }
  };

  if (isLoading) {
    return null;
  }

  if (showLanding) {
    return <LandingPage onAnimationComplete={handleLandingComplete} />;
  }

  return (
    <NavigationContext.Provider value={{ navigateWithStairs }}>
      <Stairs ref={stairsRef}>
        <Header stairsRef={stairsRef} triggerStairsAnimation={triggerStairsAnimation} />
        <main>
          {children}
        </main>
        <Footer />
      </Stairs>
    </NavigationContext.Provider>
  );
}