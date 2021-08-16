import React, { useEffect } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import { NavDropdown } from 'react-bootstrap';

const Navbar = (props) => {

  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = "50";
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    $(window).on('resize', function () {
      setTimeout(function () { animation(); }, 500);
    });

  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">

      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        EduPro
      </NavLink>


      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () { animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>

      <div
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">

          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i
                className="fas fa-city">
              </i>Accueil
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Apropos" exact>
              <i
                className="far fa-address-book">
              </i>Apropos
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Universite" exact>
              <i className="fas fa-landmark">
              </i>Universites
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" exact>
              <i
                className="fas fa-comments">
              </i>Contact
            </NavLink>
          </li>
          <li className="nav-item">



            <NavDropdown title="connecter" id="basic-nav-dropdown" >

              <NavDropdown.Item className="dr" onClick={() => props.setlogisopen(true)}>Se connecter</NavDropdown.Item>
              <NavDropdown.Item className="dr" onClick={() => props.setsignisopen(true)}>S'inscrire</NavDropdown.Item>


            </NavDropdown>


          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;