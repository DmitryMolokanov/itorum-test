import { FC } from "react";
interface DescriptionComicsPageProps {
  description: string;
}

const DescriptionComicsPage: FC<DescriptionComicsPageProps> = ({
  description,
}) => {
  return (
    <div className="comic-discription">
      {description !== "" ? (
        <span className="comic-card-discription">{description}</span>
      ) : (
        <h1>Sorry! Product information not available</h1>
      )}
    </div>
  );
};

export default DescriptionComicsPage;
