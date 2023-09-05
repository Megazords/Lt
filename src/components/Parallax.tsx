import { FilterProps } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
}

const Parallax = ({ children }: ParallaxProps) => {
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const parallax = parallaxRef.current;

    if (parallax) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        parallax.style.transform = `translateY(-${scrollY * 0.1}px)`; // Adjust the multiplier for the parallax effect
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="parallax" ref={parallaxRef}>
      {children}
    </div>
  );
};

export default Parallax;
