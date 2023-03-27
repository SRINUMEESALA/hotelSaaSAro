import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import HotelRoomCard from "../HotelRoomCard";
import { Button, Placeholder, Card } from "semantic-ui-react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./index.css";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "8ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const apiStatusConstants = {
  fail: "Failed",
  success: "Successful",
  load: "Loading",
  initial: "inital",
};
const Hotels = () => {
  const [roomsList, setRoomsList] = useState([{}]);
  const [filter, setFilter] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [roomsListApiStatus, setRoomsListApiStatus] = useState(
    apiStatusConstants.initial
  );

  const getRoomsList = async () => {
    setRoomsListApiStatus(apiStatusConstants.load);
    const url = `http://localhost:4000/getHotels?filter=${filter}&&search=${searchInput}`;
    // const url = "https://ansronebe.onrender.com/products";
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setRoomsList(result.hotels);
      setRoomsListApiStatus(apiStatusConstants.success);
    } catch (error) {
      console.log("Something went wrong in products api call", error);
      setRoomsListApiStatus(apiStatusConstants.fail);
    }
  };

  useEffect(() => {
    getRoomsList();
  }, [filter]);

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const onChangeInput = (event) => {
    setSearchInput(event.target.value);
  };

  const onClickEnterSearch = (event) => {
    if (event.key === "Enter") {
      getRoomsList();
    }
  };

  const renderSuccessView = () => (
    <div className="d-flex justify-content-center min-vh-100">
      <div className=" mt-3 w-100">
        <div className="d-flex justify-content-between mb-3">
          <h1 className="h2 mb-3 font-weight-bold">Available Hotels</h1>
          <div className="d-flex ">
            <Search className="mr-3">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                className=" h-100"
                value={searchInput}
                onChange={onChangeInput}
                onKeyDown={onClickEnterSearch}
                type="Search"
              />
            </Search>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              size="small"
              label="RoomType"
              sx={{ width: 200 }}
              onChange={onChangeFilter}>
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="p">Premium</MenuItem>
              <MenuItem value="s">Standard</MenuItem>
            </Select>
          </div>
        </div>

        {roomsList.length !== 0 ? (
          <ul className="list-unstyled d-flex row">
            {roomsList.map((obj) => (
              <HotelRoomCard key={uuidv4()} eachItem={obj} />
            ))}
          </ul>
        ) : (
          <div className="text-center">
            <img
              className=""
              alt=""
              src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?size=626&ext=jpg&uid=R96247835&ga=GA1.1.2024764164.1678773257&semt=ais"
            />
            <h1 className="text-secondary">No match Found!</h1>
          </div>
        )}
      </div>
    </div>
  );

  const renderFailureView = () => (
    <div className="failview min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div>
        <div className="text-center">
          <img
            src="https://img.freepik.com/premium-vector/administrators-fixing-computer-problems-tiny-male-worker-repair-service-with-wrench-flat-vector-illustration-maintenance-tech-support-pc-concept-banner-website-design-landing-web-page_179970-7362.jpg?w=1060"
            alt="rooms failure"
            className="sizeFailure w-50"
          />
        </div>
        <h1 className="text-center">Something Went Wrong.</h1>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => getRoomsList()}>
            Try Again
          </button>
        </div>
      </div>
    </div>
  );

  const renderLoadingView = () => (
    <div className="row mt-5 p-0">
      {Array.from({ length: 20 }).map(() => (
        <div
          className="col-3 p-0 d-flex justify-content-center mb-4"
          key={uuidv4()}
          style={{ height: "45vh" }}>
          <Card key="ajsdfh" className="pb-4">
            <Placeholder>
              <div className="" style={{ height: "200px" }}>
                <Placeholder.Image square />
              </div>
            </Placeholder>
            <Card.Content>
              <Placeholder>
                <Placeholder.Header>
                  <Placeholder.Line length="long" />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>

                <Placeholder.Paragraph>
                  <div className="d-flex justify-content-start">
                    <div className="" style={{ width: "80%" }}>
                      <Placeholder.Line length="short" />
                    </div>
                  </div>
                </Placeholder.Paragraph>
              </Placeholder>
            </Card.Content>
            <Card.Content extra>
              <Button disabled={true} className="w-100">
                Book Now
              </Button>
            </Card.Content>
          </Card>
        </div>
      ))}
    </div>
  );

  const renderUi = () => {
    switch (roomsListApiStatus) {
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.fail:
        return renderFailureView();
      case apiStatusConstants.load:
        return renderLoadingView();
      default:
        return null;
    }
  };

  return <>{renderUi()}</>;
};

export default Hotels;
