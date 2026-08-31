import {StrictMode, useEffect} from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "./index.css";

/* The browser resolves #hash before React has mounted, so a deep link
   (e.g. /#projects) would otherwise land at the top of the page. */
function useHashScrollOnMount() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const jump = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({behavior: "instant", block: "start"});
    };
    jump();
    const t = setTimeout(jump, 120); // once images/fonts settle the layout
    return () => clearTimeout(t);
  }, []);
}

function Root() {
  useHashScrollOnMount();
  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
