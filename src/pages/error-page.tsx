import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../components/Button";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <Button onClick={() => navigate("/")}>Go back home</Button>
    </div>
  );
}
