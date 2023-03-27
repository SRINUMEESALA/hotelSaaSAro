import "./index.css";

const Footer = () => (
  <div className="footerCon d-flex flex-column justify-content-center">
    <div className="contentCon d-flex pt-4 pb-4 text-secondary align-self-center">
      <div className="col-5">
        <h1 className="h6">ABOUTUS</h1>
        <ul className="list-unstyled">
          <li>
            On a mission to make travel faster, cheaper, and better with
            technology. Help hotel owners to improve their online bookings and
            guest customer experience using unique software solutions. SaasAro
            to be the most preferred partners for the hoteliers to transform
            their business. To create the largest hotel community across the
            globe by 2027. To emerge as the most preferred growth engine to the
            Hotel Industry.
          </li>
        </ul>
      </div>
      <div className="col-2">
        <h1 className="h6">MENUS</h1>
        <ul className="list-unstyled d-flex flex-column justify-content-around h-75">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Rooms </li>
        </ul>
      </div>
      <div className="col-2">
        <h1 className="h6">LEARN MORE</h1>
        <ul className="list-unstyled">
          <li className="mb-2">Facilities</li>
          <li>Payment</li>
        </ul>
      </div>
      <div className="col-3">
        <h1 className="h6">ADDRESS</h1>
        <ul className="list-unstyled">
          <li>203, Sector 49, Gurugram</li>
        </ul>
      </div>
    </div>
    <div className="footerEndCon d-flex justify-content-center">
      <p className=" contentCon m-0 pt-3 pb-3">
        @Copyright 2017-2023 | SaasAro - Hosplitality and Travel Technology
        Solutions | All rights Reserved
      </p>
    </div>
  </div>
);

export default Footer;
