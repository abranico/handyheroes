import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    if (title !== "") {
      document.title = `${title} - HandyHeroes`;
    }
  }, [title]);
};

export default useDocumentTitle;
