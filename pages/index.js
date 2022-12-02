import { useEffect } from "react";

import { Captivated, init, setEnvironment, registerUser } from "captivated";
import "captivated/captivated.css";

export default function Home({ name }) {
  useEffect(() => {
    init("hw9fPO3ZFJ7a1SbnLfTJjUi7R4cYbA");
    setEnvironment("development");
    registerUser({ name });
  }, []);

  return (
    <div>
      <Captivated />
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: { name: "test user" }, // will be passed to the page component as props
  }
}