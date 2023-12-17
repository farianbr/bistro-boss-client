import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/users");
      return res.json();
    },
  });

  const handleMakeAdmin = (user) => {
    console.log(user);
    fetch(`http://localhost:3000/admin/users/${user._id}`,{
      method: "PATCH"
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount>0){
        refetch()
        Swal.fire({
          title: `${user.name} is now an Admin!`,
          text: "Go Sultans!",
          icon: "success",
        });
      }
    })
  };

  const handleDeleteUser = (user) => {
    console.log(user);
    fetch(`http://localhost:3000/admin/users/${user._id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount>0){
        refetch()
        Swal.fire({
          title: `${user.name} is no more an user!`,
          text: "Go Sultans!",
          icon: "success",
        });
      }
    })
  };

  return (
    <div>
      <h2 className="text-center">Total user: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? "Admin" : <button
                    title="Make Admin"
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-ghost "
                  >
                    <FaUserShield />
                  </button>}
                </td>
                <td><button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-ghost "
                    >
                      <FaTrashAlt />
                    </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
