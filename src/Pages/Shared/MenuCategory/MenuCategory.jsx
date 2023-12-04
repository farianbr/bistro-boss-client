import MenuList  from "../MenuList/MenuList";
import SectionCover from "../../Home/SectionCover";
import SectionButton from "../../../Components/Button/SectionButton";
import { Link } from "react-router-dom";


const MenuCategory = ({menu, img, menuTitle, menuDetails}) => {
    return (
        <section>
      <SectionCover img={img} title={menuTitle} details={menuDetails} transparent={true} ></SectionCover>
      <div className="grid md:grid-cols-2 gap-6 my-16">
        {menu.map((item) => (
          <MenuList key={item._id} item={item}></MenuList>
        ))}
      </div>
      <Link to="/order"><SectionButton name="order your favourite food"></SectionButton></Link>
      </section>
    );
};

export default MenuCategory;