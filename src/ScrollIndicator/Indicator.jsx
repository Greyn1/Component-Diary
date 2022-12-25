import { useEffect, useState } from "react";
import "./Indicator.css";

const Indicator = () => {
  const [width, setWidth] = useState(0);

  function updateProgressIndicator() {
    //height of the portion of the document. visible to us on (below browser toolbar).
    const visibleHeight = document.documentElement.clientHeight;

    //complete height of the document (website).
    const documentHeight = document.documentElement.scrollHeight;

    //how much has been scrolled from top
    const scrolled = window.scrollY;

    const percentScrolled = (scrolled / (documentHeight - visibleHeight)) * 100;
    setWidth(percentScrolled);
  }

  useEffect(() => {
    window.addEventListener("scroll", updateProgressIndicator);

    return () => {
      window.removeEventListener("scroll", updateProgressIndicator);
    };
  }, []);

  return (
    <div className="indicator-container" style={{ width: `${width}%` }}></div>
  );
};

export default Indicator;
