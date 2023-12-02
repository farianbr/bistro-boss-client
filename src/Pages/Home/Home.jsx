import Banner from "./Banner";
import Category from "./Category";
import ChefRecommend from "./ChefRecommend";
import ChefService from "./ChefService";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <div className="relative my-32">
        <div className="h-[250px] bg-neutral-900" />
        <div className="absolute text-center text-white text-[50px] font-semibold font-['Raleway'] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          Call Us: +8801780028668
        </div>
      </div>
      <ChefRecommend></ChefRecommend>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>

  );
};

export default Home;
