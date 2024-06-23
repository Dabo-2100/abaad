import axios from "axios";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "./store";

export const useTokenCheck = () => {
  const [serverUrl] = useRecoilState($ServerUrl);
  let token = sessionStorage.getItem("user_token");
  const [final, setFinal] = useState(false);
  useEffect(() => {
    if (token) {
      axios
        .post(
          `${serverUrl}/index.php/api/auth/token`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          !res.data.error ? setFinal(true) : setFinal(false);
        })
        .catch((err) => {
          console.log("Connection Error");
          setFinal(false);
        });
    }
  }, []);
  return final;
};
