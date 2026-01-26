/**
 * Smooth scroll utility with custom duration
 * @param targetId - The ID of the element to scroll to (without #)
 * @param duration - Duration of the scroll animation in milliseconds (default: 1200ms)
 */
export const smoothScrollTo = (targetId: string, duration: number = 1200): void => {
  const target = document.getElementById(targetId);
  
  if (!target) {
    console.warn(`Element with id "${targetId}" not found`);
    return;
  }

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Easing function (easeInOutCubic) for smoother animation
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Initialize smooth scroll behavior for all anchor links
 * @param duration - Duration of the scroll animation in milliseconds (default: 1200ms)
 */
export const initSmoothScroll = (duration: number = 1200): (() => void) => {
  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
    
    if (anchor && anchor.hash) {
      const targetId = anchor.hash.slice(1);
      
      // Don't prevent default for empty hash or top links
      if (targetId && targetId !== '' && targetId !== 'top') {
        e.preventDefault();
        smoothScrollTo(targetId, duration);
        
        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, '', anchor.hash);
        }
      }
    }
  };

  document.addEventListener('click', handleClick);

  // Return cleanup function
  return () => {
    document.removeEventListener('click', handleClick);
  };
};
