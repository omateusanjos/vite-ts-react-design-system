import Button from "../components/Button";
import { Menu } from "../components/Menu";

export const Index = () => {
  return (
    <>
      <Menu />
      <Button onClick={() => console.log("teste")}>teste</Button>
    </>
  );
};
