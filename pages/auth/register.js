import Register from "../../components/Register";
import { env } from 'process';

function Login(props) {
  return <Register hospitals={props.hospitals} />;
}

export async function getStaticProps() {
  const response = await fetch(env.URL + "/api/hospitals");

  const hospitals = await response.json();

  return {
    props: {
      hospitals,
    },
  };
}

export default Login;
