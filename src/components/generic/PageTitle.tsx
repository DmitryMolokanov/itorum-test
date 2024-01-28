import { FC } from "react";

interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return <h1 className="page-title">{children}</h1>;
};

export default PageTitle;
