import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="abbas">
      <div className="coloraa">
        <div className="flex">
          <Link to={"#"}>شین مارکت</Link>
          <Link to={"#"}>دسته بندی کالا ها</Link>
          <Link to={"#"}>داغ ترین ها 🔥</Link>
          <Link to={"#"}>اوف ترین ها 💦</Link>
        </div>
        <div className="flex">
          <Link to={"#"}>🛒 سبد خرید</Link>
          <input type="text" />
          <div className="">
            <p>جست و جو 🔍</p>
          </div>
          <div className="flex-row">
            <Link to={"#"} className="sign-in">
              ورود
            </Link>
            <Link to={"#"} className="log-in">
              ثبت نام
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
