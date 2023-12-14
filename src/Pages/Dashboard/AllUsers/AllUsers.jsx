import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/users");
      return res.json();
    },
  });

  const handleMakeAdmin = (id) => {
    console.log(id);
  };

  const handleDeleteUser = (id) => {
    console.log(id);
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
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-ghost "
                  >
                    <FaUserShield />
                  </button>
                </td>
                <td><button
                      onClick={() => handleDeleteUser(user._id)}
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
