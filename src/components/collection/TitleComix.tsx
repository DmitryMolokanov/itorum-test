import { FC } from "react";
interface TitleComixProps {
  title: string;
}

const TitleComix: FC<TitleComixProps> = ({ title }) => {
  return (
    <div className="comics-title">
      <span>{title}</span>
    </div>
  );
};

export default TitleComix;
