import images from "../../constants/images";

interface ISubHeading {
  title: string;
}

const SubHeading = ({ title }: ISubHeading) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="Spoon" className="spoon_img" />
    </div>
  );
};

export default SubHeading;
