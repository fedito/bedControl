import Head from "next/head";
import { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import SignIn from "../components/SingIn";
import AuthContext from "../store/auth-context";
import { useRouter } from "next/router";
import UserContext from "../store/userContext";

export default function Home() {
  const auth = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (auth.isLoggedIn) {
      router.push('/hospitals/' + auth.hospital)
    }
  }, [auth]);

  return (
    <>
      <Head>
        <title>Control de camas</title>
        <meta name="description" content="Una web para el control de camas" />
      </Head>
      <SignIn />
    </>
  );
}
