"use strict";

const e = React.createElement;

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="header-section container-fluid">
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              <img
                src="/images/image4.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt=""
              />
               L'ultima Cena
            </a>
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Build Your Pizza!
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/app/order/orders.html">
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/app/ingredient/ingredients.html">
                  Ingredients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/app/size/sizes.html">
                  Sizes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/app/beverage/beverages.html">
                  Beverages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/app/report/reports.html">
                  Reports
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

const domContainer = document.querySelector("#commom_header_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(Header));
