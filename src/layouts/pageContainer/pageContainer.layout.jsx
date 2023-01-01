import React from "react";
import Header from "../header/header.layout";
import Footer from "../footer/footer.layout";

export default function PageContainer(props) {
  const { children } = props;
  return (
    <>
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </>
  );
}
