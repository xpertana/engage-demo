import { useState } from "react";
import Router from "next/router";
import { useUser } from "../../lib/hooks";
import Form from "../../components/form";

import { Magic } from "magic-sdk";

const Login = () => {
  const u = useUser();
  console.log(u);

  useUser({ redirectTo: "/profile", redirectIfFound: true });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    event.preventDefault();

    if (errorMsg) setErrorMsg("");

    const body = {
      email: e.currentTarget.email.value
    };

    try {
      const magic = new Magic(process.env.MAGIC_PUBLISHABLE_KEY);
      const didToken = await magic.auth.loginWithMagicLink({
        email: body.email,
        showUI: false
      });
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + didToken
        },
        body: JSON.stringify(body)
      });
      if (res.status === 200) {
        Router.push("/");
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
      setErrorMsg(error.message);
    }
  }

  return (
    <div class="flex items-center justify-center h-screen">
      <div class="text-white bg-gray-50 font-bold rounded-lg border shadow-lg p-10">
        <Form errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
