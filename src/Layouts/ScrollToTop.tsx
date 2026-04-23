import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search, hash, key } = useLocation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    document.scrollingElement?.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    scrollToTop();
    const frameId = window.requestAnimationFrame(scrollToTop);

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, search, hash, key]);

  useEffect(() => {
    scrollToTop();

    const frameId = window.requestAnimationFrame(scrollToTop);
    const timeoutIds = [0, 50, 150, 300].map((delay) =>
      window.setTimeout(scrollToTop, delay)
    );

    return () => {
      window.cancelAnimationFrame(frameId);
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [pathname, search, hash, key]);

  return null;
};

export default ScrollToTop;
