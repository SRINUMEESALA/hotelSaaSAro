import "./index.css";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-vh-100 home mb-3 d-flex justify-content-center align-items-center">
      <div className="rounded homeCard text-center pt-5 pb-5">
        <h1 className="h1 text-primary" style={{ color: "#2196f3" }}>
          Welcome
        </h1>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            navigate("/hotels");
          }}
          endIcon={<ArrowForwardIcon />}>
          Check Rooms
        </Button>
      </div>
    </div>
  );
};

export default Home;
