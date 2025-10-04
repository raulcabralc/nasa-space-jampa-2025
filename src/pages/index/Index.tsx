import { useState } from "react";
import { Button } from "../../components/Button/Button.styled";

function Index() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Teste brabo!!</h1>
      <h2>Teste brabo!!</h2>
      <h3>Teste brabo!!</h3>
      <p>Teste brabo!!</p>
      <Button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        {count}
      </Button>
    </>
  );
}

export default Index;
