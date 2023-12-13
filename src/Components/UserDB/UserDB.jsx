
const UserDB = (name, email) => {
    const user = {name, email}

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => {
        return data
    })
  
};

export default UserDB;
