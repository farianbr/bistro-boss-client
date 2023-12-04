import CardButton from "../../../Components/Button/CardButton";

const ItemCard = (item) => {
    const {name, recipe, image} = item.item
  return (
    <div className="card w-96 bg-zinc-100 shadow-xl mb-6">
      <figure className="">
        <img
          src={image}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="h-20">{recipe}</p>
        <div className="card-actions">
        <CardButton
        name="Add to cart"
        ></CardButton>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
