import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./css/ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar></NavBar>
      <div className="error">
        <h1>Oops</h1>
        <p>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error occured"}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
