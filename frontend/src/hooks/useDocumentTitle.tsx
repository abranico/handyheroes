import { useEffect } from "react";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    if (title !== "") {
      document.title = `${title} - HandyHeroes`;
    }
  }, [title]);
};

export default useDocumentTitle;
