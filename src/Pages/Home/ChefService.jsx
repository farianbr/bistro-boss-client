import img from "../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <section className="my-20 relative">
      <img src={img} alt="" srcSet="" />
      <div className="absolute w-[1096px] h-[333.67px] bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col justify-center items-center px-36">
        <div className="text-neutral-900 my-4 text-5xl font-['Cinzel']">
          Sultans Dine
        </div>
        <div className="text-center text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </div>
      </div>
    </section>
  );
};

export default ChefService;
