import Banner from "./Banner";
import Category from "./Category";
import ChefRecommend from "./ChefRecommend";
import SectionCover from "./SectionCover";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";
import img from "../../assets/home/chef-service.jpg";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sultans Dine | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <SectionCover
        img={img}
        title="bistro boss"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem voluptatem sapiente explicabo eos voluptatibus exercitationem nobis distinctio ratione, natus iste deleniti aut provident totam nihil sequi. Reprehenderit voluptas distinctio quidem saepe impedit, deleniti eligendi numquam illum veniam amet, fugit quaerat! Et, tempora a id quaerat architecto sed reiciendis dolorem."
      ></SectionCover>
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
