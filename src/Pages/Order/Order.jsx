import SectionCover from "../Home/SectionCover";
import img from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";
import ItemCard from "../Shared/ItemCard/ItemCard";
import { Helmet } from "react-helmet";

const Order = () => {
  const menu = useMenu();
  const drinksMenu = menu.filter((item) => item.category === "drinks");
  const dessertsMenu = menu.filter((item) => item.category === "dessert");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const soupMenu = menu.filter((item) => item.category === "soup");

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sultans Dine | Order</title>
      </Helmet>
      <SectionCover
        title="our shop"
        details="WOULD YOU LIKE TO TRY A DISH?"
        img={img}
        pageCover={true}
        transparent={true}
      ></SectionCover>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab uppercase"
          aria-label="salad"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content">
          <div className="grid md:grid-cols-3 px-44 place-items-center my-16">
            {saladMenu.map((item) => (
              <ItemCard key={item._id} item={item}></ItemCard>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab uppercase"
          aria-label="pizza"
        />
        <div role="tabpanel" className="tab-content">
          <div className="grid md:grid-cols-3 px-44 place-items-center my-16">
            {pizzaMenu.map((item) => (
              <ItemCard key={item._id} item={item}></ItemCard>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab uppercase"
          aria-label="soup"
        />
        <div role="tabpanel" className="tab-content">
          <div className="grid md:grid-cols-3 px-44 place-items-center my-16">
            {soupMenu.map((item) => (
              <ItemCard key={item._id} item={item}></ItemCard>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab uppercase"
          aria-label="desserts"
        />
        <div role="tabpanel" className="tab-content">
          <div className="grid md:grid-cols-3 px-44 place-items-center my-16">
            {dessertsMenu.map((item) => (
              <ItemCard key={item._id} item={item}></ItemCard>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab uppercase"
          aria-label="drinks"
        />
        <div role="tabpanel" className="tab-content">
          <div className="grid md:grid-cols-3 px-44 place-items-center my-16">
            {drinksMenu.map((item) => (
              <ItemCard key={item._id} item={item}></ItemCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
