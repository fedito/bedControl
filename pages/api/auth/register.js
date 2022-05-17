import swal from "sweetalert";
import { env } from 'process';

const handler = async (req, res) => {
  if (req.method === "POST") {
    const response = await fetch(env.URL + "/api/auth/register", {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      return res.json(data);
    } else {
      swal({
        title: `Upss`,
        text: "Algo falló, reintenta en un momento",
        timer: "2000",
        icon: "error",
      });
      return res.status(data.status).json(data.name);
    }
  }
};

export default handler;
