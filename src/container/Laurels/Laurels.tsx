import "./Laurels.css";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";

interface IAwardCard {
  award: {
    imgUrl: string;
    title: string;
    subtitle: string;
  };
}

const AwardCard = ({ award: { imgUrl, title, subtitle } }: IAwardCard) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <section className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels_awards">
          {data.awards.map((item) => (
            <AwardCard award={item} key={item.title} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </section>
  );
};

export default Laurels;
