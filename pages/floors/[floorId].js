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
      icon={"rooms"}
      data={props.data}
      title={`Sector: ${props.data.name}`}
      buttonText={"Modificar sector"}
    />
  );
}

export async function getServerSideProps(context) {
  const floorId = context.params.floorId;

  const response = await fetch(
    process.env.URL + "/api/floors/" + floorId
  );

  const floor = await response.json();

  return {
    props: {
      data: floor,
    },
  };
}

export default Floors;
