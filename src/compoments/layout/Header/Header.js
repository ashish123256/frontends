import React from 'react'
import { ReactNavbar } from "overlay-navbar";
import logo from "./../../../images/logo.png";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";




const Header = () => {
  return (
    <ReactNavbar
      burgerColor="black"
      logo={logo}
      profileIcon={true} ProfileIconElement={FaRegUser}
      cartIcon={true} CartIconElement={IoCartOutline}
      searchIcon={true} SearchIconElement={FaSearch}
      navColor1="white"
      burgerColorHover="#900"
      logoWidth="70%"
      logoHight="80%"
      logoHoverColor="crimson"
      link1Size="1.2rem"
      link1Color="#121212"
      link1Padding="1vmax"
      link1ColorHover="crimson"
      nav2justifyContent="flex-end"
      link1Margin="1vmax"
      link2Margin="0"
      link3Margin="0"
      link4Margin="1vmax"
      nav3justifyContent="flex-start"
      link1Family="sans-serif"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      profileIconUrl="/login"
      cartIconUrl =	"/cart"
      nav4justifyContent="flex-start"
      searchIconMargin="0.5vmax"
      cartIconMargin="1vmax"
      profileIconMargin="0.5vmax"
      searchIconColor="#121212"
      cartIconColor="#121212"
      profileIconColor="#121212"
      searchIconColorHover="crimson"
      cartIconColorHover="crimson"
      profileIconColorHover="crimson"
    />
  )
}

export default Header
