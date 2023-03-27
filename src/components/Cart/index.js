import { v4 as uuidv4 } from "uuid";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.css";
import { connect } from "react-redux";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { apiStatusConstants } from "../Hotels";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Cart = (props) => {
  const [cartValue, setCartValue] = useState(0);
  const [openForm, setOpenForm] = useState(false);
  const [fullname, setFullname] = useState("");
  const [mobile, setMobile] = useState("");
  const [village, setVillage] = useState("");
  const [hno, setHno] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [formApiStatus, setFormApiStatus] = useState(
    apiStatusConstants.initial
  );

  const renderEmptyView = () => (
    <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column">
      <h1 className="h1 text-secondary">Cart Empty</h1>
      <button
        type="button"
        className="btn btn-outline-dark mt-3 routerLinkUnsetStylesCart p-3">
        <Link to="/hotels">Start Booking</Link>
      </button>
    </div>
  );

  const handleClose = () => {
    setOpenForm(false);
  };

  const renderForm = () => (
    <div className="logoutCon d-flex flex-column justify-content-between p-5">
      <form
        className="d-flex flex-column bg-light rounded  h-100"
        style={{ width: "20vw" }}
        onSubmit={formSubmitted}>
        <TextField
          id="standard-password-input"
          label="Full Name"
          type="text"
          variant="standard"
          className="m-2"
          required
          value={fullname}
          onChange={(event) => setFullname(event.target.value)}
        />
        <TextField
          id="standard-password-input"
          label="mobile"
          type="text"
          variant="standard"
          className="m-2"
          required
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
        />
        <TextField
          id="standard-password-input"
          label="Village"
          type="text"
          variant="standard"
          className="m-2"
          required
          value={village}
          onChange={(event) => setVillage(event.target.value)}
        />
        <TextField
          id="standard-password-input"
          label="HNo"
          type="text"
          variant="standard"
          className="m-2"
          required
          value={hno}
          onChange={(event) => setHno(event.target.value)}
        />
        <TextField
          id="standard-password-input"
          label="City"
          type="text"
          variant="standard"
          className="m-2"
          required
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <TextField
          id="standard-password-input"
          label="Pincode"
          type="text"
          variant="standard"
          className="m-2"
          required
          value={pincode}
          onChange={(event) => setPincode(event.target.value)}
        />
        <TextField
          id="standard-password-input"
          label="State"
          type="text"
          variant="standard"
          className="m-2 mb-3"
          required
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
        <Button variant="contained" type="submit" className="mt-3">
          CheckOut
        </Button>
      </form>
    </div>
  );

  const renderFormFailure = () => <h1>Failed</h1>;

  const renderFormLoadingView = () => (
    <div className="text-center" style={{ padding: "100px" }}>
      <Loader type="TailSpin" color="#FF5454" height={80} width={80} />
    </div>
  );

  const renderFormSuccessView = () => (
    <div className="text-center " style={{ padding: "100px" }}>
      <h1 className="text-success h2">Success</h1>
    </div>
  );

  const formSubmitted = (event) => {
    event.preventDefault();
    // we can make api call here
    setFormApiStatus(apiStatusConstants.load);
    setTimeout(() => {
      setFormApiStatus(apiStatusConstants.success);
    }, 2000);
    setTimeout(() => {
      setFormApiStatus(apiStatusConstants.initial);
      props.resetCart();
    }, 4000);
  };

  const renderDialogUi = () => {
    switch (formApiStatus) {
      case apiStatusConstants.success:
        return renderFormSuccessView();
      case apiStatusConstants.fail:
        return renderFormFailure();
      case apiStatusConstants.load:
        return renderFormLoadingView();
      default:
        return renderForm();
    }
  };

  const renderOrderConfirmForm = () => {
    return (
      <Dialog open={openForm} onClose={handleClose}>
        {renderDialogUi()}
      </Dialog>
    );
  };

  const onClickRemoveButton = (id) => {
    props.onClickRemoveCartItem(id);
  };
  useEffect(() => {
    let sum = 0;
    if (props.cartList.length !== 0) {
      props.cartList.forEach((element) => {
        sum += element.price;
      });
    }
    setCartValue(sum);
  }, []);

  const renderListView = () => (
    <div className="d-flex flex-column mb-4">
      <h1 className="h2 text-center mb-2 mt-5 mb-4">Your Cart</h1>
      <div className=" d-flex flex-md-column flex-column align-items-center align-self-center border w-75">
        <div className=" w-100 p-3 overflow-auto card shadow-lg">
          <div className="font-weight-bold">
            <ul className="list-unstyled d-flex col-12">
              <li className="col-2 ">Image</li>
              <li className="col-4 ">Hotel</li>
              <li className="col-2">Price</li>
              <li className=" col-2">Booking Date</li>
              <li className=" col-2">Remove</li>
            </ul>
            <div className="">
              <hr />
            </div>
          </div>
          {props.cartList.map((obj) => {
            return (
              <div className="" key={uuidv4()}>
                <ul className="list-unstyled d-flex align-items-center text-secondary">
                  <li className="col-2">
                    <img src={obj.imageUrl} alt="product" className="w-100" />
                  </li>
                  <li className="col-4">
                    <h1 className="h6">{obj.hotel}</h1>
                  </li>
                  <li className="col-2">{obj.price}</li>
                  <li className="col-2">
                    <p className="h6">
                      {format(new Date(obj.orderForDate), "MM/dd/yyyy")}
                    </p>
                  </li>

                  <li className="col-2">
                    <button
                      type="button"
                      className="btn"
                      onClick={() => onClickRemoveButton(obj._id)}>
                      <DeleteIcon className="h4 p-0 m-0 text-danger" />
                    </button>
                  </li>
                </ul>
                <div className="">
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between w-100 bg-white p-3">
          <h1 className="h5 text-secondary  m-0">Summary</h1>
          <h1 className="h4 m-0 font-weight-bold">Rs.{cartValue}</h1>
        </div>
      </div>

      <div className="text-right align-self-center w-75 mt-3">
        <button className="btn btn-info" onClick={() => setOpenForm(true)}>
          Confirm Booking
        </button>
      </div>
      <>{renderOrderConfirmForm()}</>
    </div>
  );

  return (
    <div className="min-vh-100">
      {props.cartList.length === 0 ? renderEmptyView() : renderListView()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cartList: state.cartList };
};
const dispatchActionToStore = (dispatch) => {
  return {
    onClickAddToCart: (obj) =>
      dispatch({
        type: "addRoom",
        roomData: obj,
      }),
    onClickRemoveCartItem: (id) =>
      dispatch({
        type: "removeOrderItem",
        itemId: id,
      }),
    resetCart: () =>
      dispatch({
        type: "clearCart",
      }),
  };
};

export default connect(mapStateToProps, dispatchActionToStore)(Cart);
