import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import BasicIcons from "../../components/icons/BasicIcons";
import { useRouter } from "next/router";
import UserContext from "../../store/userContext";

function Floors(props) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const router = useRouter();

  const auth = useContext(AuthContext);

  const { isLoggedIn } = auth;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/')
    }
  }, [isLoggedIn]);

  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  useEffect(() => {
    setIsRefreshing(false);
  }, [props.data]);

  return (
    <BasicIcons
      icon={"floors"}
      data={props.data}
      title={props.data.name}
      buttonText={"Modificar sector"}
    />
  );
}

export async function getServerSideProps(context) {
  const hospitalId = context.params.hospitalId;

  const response = await fetch(
    process.env.URL + "/api/hospitals/" + hospitalId
  );

  const hospital = await response.json();

  return {
    props: {
      data: hospital,
    },
  };
}

export default Floors;
