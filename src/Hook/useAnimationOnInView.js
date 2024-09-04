import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const useAnimateOnInView = (delay, threshold = 0.5) => {
  const controls = useAnimation();

  const ref = useRef(null); // ref를 useRef로 초기화
  const inView = useInView(ref, {
    triggerOnce: false,
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const animateVariants = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay } },
  });

  return { ref, controls, animateVariants };
};

export default useAnimateOnInView;
