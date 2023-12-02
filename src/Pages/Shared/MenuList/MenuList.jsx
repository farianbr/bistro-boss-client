const MenuList = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <section className="flex gap-2">
      <img
        className="w-[118px] h-[104px] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px] mr-7"
        src={image}
      />
      <div>
        <div className="uppercase text-neutral-900 text-xl font-normal font-['Cinzel'] h-7 overflow-hidden mt-2">
          {name}{" "}
          ------------------------------------------------------------------------------------------
        </div>
        <p className="text-neutral-500 text-base font-normal font-['Inter'] leading-relaxed">
          {recipe}
        </p>
      </div>
      <h3 className="text-yellow-600 text-xl font-normal font-['Inter'] leading-relaxed mt-1">
        ${price}
      </h3>
    </section>
  );
};

export default MenuList;
