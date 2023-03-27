import "./index.css";
import Rating from "@mui/material/Rating";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import { connect } from "react-redux";
import Dialog from "@mui/material/Dialog";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Button } from "@mui/material";

const HotelRoomCard = (props) => {
  const { price, rating, imageUrl, hotel, type } = props.eachItem;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);

  const onClickBookNow = () => {
    if (date === null) {
      return;
    }
    props.onClickAddToCart({ ...props.eachItem, orderForDate: date });
    navigate("/cart");
    setOpen(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <li className="col-3 p-2">
      <div className="card roomCard mx-auto shadow-sm p-3">
        <img className="RoomImage rounded" alt="" src={imageUrl} />
        <div
          className="d-flex justify-content-between pt-3"
          style={{ color: "rgb(0, 30, 60)" }}>
          <div className="">
            <p className="h5 text-secondary">{hotel}</p>
            <Rating name="read-only" size="small" value={rating} readOnly />
          </div>
          <div className="d-flex">
            <div className="d-flex align-self-center">
              <CurrencyRupeeIcon sx={{ fontSize: 14, margin: 0, padding: 0 }} />
              <h1 className="h3 m-0 font-weight-bold">{price}</h1>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <div
            className="ui animated button primary w-100"
            tabindex="0"
            onClick={() => setOpen(true)}>
            <div className="visible content">Book Now</div>
            <div className="hidden content">
              Cart <ArrowForwardIcon className="ml-3" />
            </div>
          </div>
        </div>
        {type === "p" && (
          <div className="premiumCrown">
            <FaCrown />
          </div>
        )}
      </div>
      <>
        <Dialog open={open} onClose={handleClose}>
          <div className="logoutCon d-flex flex-column justify-content-between p-5">
            <h1 className="text-primary h3 text-center mb-3">Choose date</h1>
            <div className="">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(event) => setDate(event)} value={date} />
              </LocalizationProvider>
            </div>
            <Button
              variant="contained"
              className="mt-5"
              onClick={onClickBookNow}>
              Done
            </Button>
          </div>
        </Dialog>
      </>
    </li>
  );
};

const mapStateToProps = () => {
  return {};
};
const dispatchActionToStore = (dispatch) => {
  return {
    onClickAddToCart: (obj) =>
      dispatch({
        type: "addRoom",
        roomData: obj,
      }),
  };
};

export default connect(mapStateToProps, dispatchActionToStore)(HotelRoomCard);
