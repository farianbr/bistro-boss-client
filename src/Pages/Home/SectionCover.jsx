const SectionCover = ({ img, title, details, transparent,pageCover }) => {
  return (
    <section className="mb-20 relative">
      <img src={img} alt="" srcSet="" />
      <div className={`absolute w-[1096px] h-[333.67px] ${transparent ? "bg-opacity-60 bg-neutral-900 text-white" : "bg-white text-neutral-900"}   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-.5 flex flex-col justify-center items-center px-36`}>
        <div className={`my-4 ${pageCover ? "text-[88px] font-bold": "text-5xl"}  uppercase font-['Cinzel']`}>
          {title}
        </div>
        <div className={`text-center font-normal ${pageCover? "text-2xl font-['Cinzel']" : "text-base leading-relaxed font-['Inter']"} `}>
          {details}
        </div>
      </div>
    </section>
  );
};

export default SectionCover;
