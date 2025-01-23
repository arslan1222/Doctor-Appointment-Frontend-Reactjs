import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 items-start m-auto p-8 min-w-[340px] sm:min-w-96 con-border rounded-xl text-zinc-600 text-sm shadow-lg">
        <div>
          <p className="text-2xl font-semibold">{state === "Sign Up" ? "Create Account" : "Login"}</p>
          <p>
            Please {state === "Sign Up" ? "Sign Up" : "Login"} to book an
            appointment
          </p>
        </div>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="con-border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
            />
          </div>
        )}
        <div className="w-full">
          <p>Email</p>
          <input
            className="con-border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="con-border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
          />
        </div>
        <button
          className="bg-primary text-white w-full py-2 rounded-md text-based"
          type="submit"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
