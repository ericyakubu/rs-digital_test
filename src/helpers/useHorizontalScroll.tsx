import { useEffect, useRef } from 'react';
// import { useEffect, useRef, useState } from 'react';

const useHorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeftStart, setScrollLeftStart] = useState(0);
  // const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollTo({
          left: container.scrollLeft + e.deltaY * 5,
          behavior: 'smooth',
        });
      }
    };

    // const handleMouseDown = (e: MouseEvent) => {
    //   setIsDragging(true);
    //   setStartX(e.pageX);
    //   setScrollLeftStart(container.scrollLeft);
    // };

    // const handleMouseMove = (e: MouseEvent) => {
    //   if (!isDragging) return;
    //   const dx = e.pageX - startX;
    //   container.scrollLeft = scrollLeftStart - dx;
    // };

    // const handleMouseUp = () => setIsDragging(false);

    container.addEventListener('wheel', handleWheel);
    // container.addEventListener('mousedown', handleMouseDown);
    // container.addEventListener('mousemove', handleMouseMove);
    // container.addEventListener('mouseup', handleMouseUp);
    // container.addEventListener('mouseleave', handleMouseUp);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      // container.removeEventListener('mousedown', handleMouseDown);
      // container.removeEventListener('mousemove', handleMouseMove);
      // container.removeEventListener('mouseup', handleMouseUp);
      // container.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);
  // }, [isDragging, scrollLeftStart, startX]);

  return containerRef;
};

export default useHorizontalScroll;
