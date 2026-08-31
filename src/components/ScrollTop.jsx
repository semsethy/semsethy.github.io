import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Icon from "./Icon";

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          exit={{opacity: 0, scale: 0.8}}
          onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-full bg-brand-600 text-white shadow-lg transition-colors hover:bg-brand-700"
        >
          <Icon name="arrow" className="size-4 -rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
