import { useEffect, useRef, useState } from "react";
import axios, { CanceledError } from "axios";

interface User {
  _id: number;
  username: string;
  age: number;
  status: string[];
  active: boolean;
}

const LoginPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();


  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://localhost:3000/users", { signal: controller.signal })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
      });
    return () => controller.abort();
  }, []);

  const getUser = (user: User) => {
    axios
      .get(`http://localhost:3000/users/${user._id}`)
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addUser = (newUser: User) => {
    axios
      .post("http://localhost:3000/users", newUser)
      .then((res) => {
        if (res.status === 201) {
          setUsers([...users, newUser]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = (user: User) => {
    setUsers(users.filter((u) => u._id !== user._id));
    console.log(user);
    axios
      .delete(`http://localhost:3000/users/${user._id}`, { data: user })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUser = (user: User) => {
    const updatedUser = { ...user, active: !user.active };
    axios
      .patch(`http://localhost:3000/users/${updatedUser._id}`, updatedUser)
      .then((res) => {
        if (res.status === 200) {
          setUsers(users.map((u) => (u._id === user._id ? updatedUser : u)));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  return (
    <>
      {currentUser && <h1>{currentUser.username}</h1>}
      <form
        method="post"
        onSubmit={(event) => {
          event.preventDefault();

          if (usernameInput.current && passwordInput.current) {
            const newUser = {
              _id: 0,
              username: usernameInput.current.value,
              password: passwordInput.current.value,
              age: 24,
              active: true,
              status: ["widowed"],
            };

            addUser(newUser);

            usernameInput.current.value = "";
            passwordInput.current.value = "";
          }
        }}
      >
        <input ref={usernameInput} type="text" placeholder="name" required />
        <input
          ref={passwordInput}
          type="text"
          placeholder="password"
          required
        />
        <button>Create new User</button>
      </form>

      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.username} {u.age} {u.status} {u.active ? "Active" : "Not Active"}{" "}
            <button
              onClick={() => {
                getUser(u);
              }}
            >
              SetUser
            </button>
            <button
              onClick={() => {
                deleteUser(u);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                updateUser(u);
              }}
            >
              ActiveStatus
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LoginPage;
