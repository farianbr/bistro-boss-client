import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const price = cart.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = item => {

    fetch(`http://localhost:3000/carts/${item._id}`, {
        method: 'DELETE'
    } )
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount>0){
            refetch()
        }
    })
  }

  return (
    <section className="mx-20 py-3 px-44 shadow ">
      <div className="uppercase text-2xl font-semibold flex justify-evenly items-center">
        <h2>Total Orders: {cart.length}</h2>
        <h2>Total Price: ${price}</h2>
        <button className="btn btn-base text-lg font-semibold">Pay</button>
      </div>
      <div className="overflow-x-auto">
  <table className="table my-5">
    {/* head */}
    <thead className="bg-slate-300">
      <tr>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {cart.map(item => 
        <tr key={item._id}>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {item.name}
        </td>
        <td className="">${item.price}</td>
        <td>
          <button onClick={()=>handleDelete(item)} className="btn btn-ghost "><FaTrashAlt /></button>
        </td>
      </tr>)}
    </tbody>    
  </table>
</div>
    </section>
  );
};

export default MyCart;
