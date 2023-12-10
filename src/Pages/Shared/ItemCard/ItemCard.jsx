import { useContext } from "react";
import CardButton from "../../../Components/Button/CardButton";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const ItemCard = (item) => {
  const { name, recipe, image, price, _id } = item.item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const [,refetch] = useCart()

  const handleAddToCart = (item) => {
    console.log(item.item.name);
    if (user && user.email) {
      const cartItem = {menuItemId: _id, name, image, price, email: user.email}

      fetch("http://localhost:3000/carts", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch()
            Swal.fire({
              title: "Item Added!",
              text: "Awesome Choice!",
              icon: "success",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state: {from: location}});
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-zinc-100 shadow-xl mb-6">
      <figure className="">
        <img src={image} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="h-20">{recipe}</p>
        <div onClick={() => handleAddToCart(item)} className="card-actions">
          <CardButton name="Add to cart"></CardButton>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
