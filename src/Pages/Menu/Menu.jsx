import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import SectionCover from "../Home/SectionCover";
import banner from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import MenuList from "../Shared/MenuList/MenuList";
import SectionButton from "../../Components/Button/SectionButton";
import MenuCategory from "../Shared/MenuCategory/MenuCategory";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Menu = () => {
  const menu = useMenu();
  const menuDetails = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem voluptatem sapiente explicabo eos voluptatibus exercitationem nobis distinctio ratione, natus iste deleniti aut provident totam nihil sequi. Reprehenderit voluptas distinctio quidem saepe impedit, deleniti eligendi numquam illum veniam amet, fugit quaerat!"
  const offeredMenu = menu.filter((item) => item.category === "popular");
  const desertsMenu = menu.filter((item) => item.category === "dessert");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const soupMenu = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sultans Dine | Menu</title>
      </Helmet>
      <section>
      <SectionCover img={banner} title="our menu" details="WOULD YOU LIKE TO TRY A DISH?" transparent={true} pageCover={true} ></SectionCover>
      <SectionTitle subHeading="Don't miss" heading="today's offer" ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 my-16">
        {offeredMenu.map((item) => (
          <MenuList key={item._id} item={item}></MenuList>
        ))}
      </div>
      <Link to="/order"><SectionButton name="order your favourite food"></SectionButton></Link>
      </section>
      <MenuCategory img={dessertBg} menu={desertsMenu} menuDetails={menuDetails} menuTitle="desserts"></MenuCategory>
      <MenuCategory img={pizzaBg} menu={pizzaMenu} menuDetails={menuDetails} menuTitle="pizza"></MenuCategory>
      <MenuCategory img={saladBg} menu={saladMenu} menuDetails={menuDetails} menuTitle="salad"></MenuCategory>
      <MenuCategory img={soupBg} menu={soupMenu} menuDetails={menuDetails} menuTitle="soup"></MenuCategory>
      
      
    </div>
  );
};

export default Menu;
