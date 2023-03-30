import { useEffect, useState } from "react";

const useIntersection = (target) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>
      setIsIntersecting(entries[0].isIntersecting)
    );

    const element = target && target.current;
    if (!element) return;

    observer.observe(element);

    return () => {
      setIsIntersecting(false);
      observer.unobserve(element);
    };
  }, [target]);

  return isIntersecting;
};

export default useIntersection;
