import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-seccondary h1 mb-3">Not Found</h1>

      <Button variant="contained" onClick={() => navigate("/")}>
        Return Home
      </Button>
    </div>
  );
};

export default NotFound;
