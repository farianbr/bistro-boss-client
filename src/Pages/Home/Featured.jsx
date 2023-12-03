import CardButton from "../../Components/Button/CardButton";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import "./Home.css"

const Featured = () => {
  return (
    <div className="my-32 featured-bg  text-white  bg-fixed bg-no-repeat bg-cover bg-center shadow-lg ">
      <div className="bg-neutral-900 bg-opacity-70 pt-20 pb-32">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
        headingClassName="text-white"
      ></SectionTitle>
      <div className="flex px-64 gap-14 justify-center items-center ">
        <img
          className="w-[648px] h-[400px]"
          src={featuredImg}
          alt=""
          srcSet=""
        />
        <div className="font-['Inter'] leading-9  text-base font-normal">
          <h3>December 02, 2023</h3>
          <h3 className="uppercase">Traditional fuchka with tok</h3>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            est eaque quo unde ipsa sit. Vel illum, obcaecati voluptatum
            voluptate delectus dolores odio amet, nostrum nobis ipsum omnis.
            Pariatur, a!
          </p>
          <CardButton
          name="read more"
          ></CardButton>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Featured;
