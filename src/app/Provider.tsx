'use client';

import { useRef, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Stairs from "@/components/animation/Stairs";
import LandingPage from "@/components/LandingPage";
import Footer from "@/components/Footer";
import { NavigationContext } from "@/hooks/useStairsNavigation";

export default function Provider({ children }: { children: React.ReactNode }) {
  const stairsRef = useRef<any>(null);
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

  // Trigger stairs animation on route change
  useEffect(() => {
    if (currentPath && currentPath !== pathname && !showLanding && !isLoading) {
      // Small delay to ensure the new page is ready
      const timer = setTimeout(() => {
        if (stairsRef.current) {
          stairsRef.current.playAnimation();
        }
      }, 50);
      
      setCurrentPath(pathname);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, currentPath, showLanding, isLoading]);

  const handleLandingComplete = () => {
    sessionStorage.setItem('hasSeenLanding', 'true');
    setShowLanding(false);
  };

  // Function to manually trigger stairs animation
  const triggerStairsAnimation = () => {
    if (stairsRef.current && !showLanding && !isLoading) {
      stairsRef.current.playAnimation();
    }
  };

  // Function to navigate with stairs animation
  const navigateWithStairs = (href: string) => {
    if (stairsRef.current && !showLanding && !isLoading) {
      stairsRef.current.playAnimation();
      // Small delay to let animation start before navigation
      setTimeout(() => {
        router.push(href);
      }, 100);
    } else {
      router.push(href);
    }
  };

  if (isLoading) {
    return null; // or a loading spinner
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