import { useEffect, useRef, useState } from "react";
import "./LoginPage.scss";
import axios from "axios";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../../store";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useTokenCheck } from "../../../customHooks";
export default function LoginPage() {
  const email = useRef();
  const password = useRef();
  const [serverUrl] = useRecoilState($ServerUrl);
  const navigate = useNavigate();

  function userLogin() {
    let server = `${serverUrl}/index.php/api/auth/login`;
    axios
      .post(server, {
        user_email: email.current.value,
        user_password: password.current.value,
      })
      .then((res) => {
        let Res = res.data;
        if (Res.error == false) {
          let Token = Res.data["user_token"];
          sessionStorage.setItem("user_token", Token);
          Swal.fire({
            icon: "success",
            text: "Login Success !",
            timer: 1500,
          }).then(() => {
            navigate("/wp-admin");
          });
        } else {
          Swal.fire({
            icon: "error",
            text: "Email or password is invalid !",
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin();
  };

  const [tokenCheck] = useState(useTokenCheck());

  return (
    <>
      {tokenCheck ? (
        <div id="login-page">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="login-dashboard"
          >
            <label className="form-label">البريد الألكتروني</label>
            <input
              type="text"
              className="form-input-full-contactus"
              ref={email}
            />
            <label className="form-label">كلمة المرور</label>
            <input
              type="password"
              className="form-input-full-contactus"
              ref={password}
            />
            <button className="btn-send-contactus">دخول </button>
          </form>
        </div>
      ) : (
        navigate("/wp-admin")
      )}
    </>
  );
}
