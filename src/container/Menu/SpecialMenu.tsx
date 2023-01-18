import "./SpecialMenu.css";

import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => {
  return (
    <section
      className="app__specialMenu flex__center section__padding"
      id="menu"
    >
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits you palates" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((items, index) => (
              <MenuItem
                key={items.title + index}
                title={items.title}
                price={items.price}
                tags={items.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="Menu img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((items, index) => (
              <MenuItem
                key={items.title + index}
                title={items.title}
                price={items.price}
                tags={items.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </section>
  );
};

export default SpecialMenu;
