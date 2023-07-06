import './navbar.css'
import logo from '../../assets/images/logo.svg'
import { navigation, socials } from '../../data'
import React, { useEffect, useState } from 'react'
import { BsBoxArrowRight } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  const [navBg, setNavBg] = useState(false)
  const [navToggle, setNavToggle] = useState(false)

  function changeNavBg() {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg)
    return () => {
      window.removeEventListener('scroll', changeNavBg)
    }
  }, [])

  return (
    <nav className={navBg ? 'nav nav__bg' : 'nav'}>
      <div className="nav__center">
        <a href="#home" className="nav__center__homelink">
          <img src={logo} alt="logo" className="nav__center-logo" />
        </a>
        <ul className="nav__center__links">
          {navigation.map(({ id, name, url }) => {
            return (
              <li key={id} className="nav__center__link">
                <a href={url}>{name}</a>
              </li>
            )
          })}
        </ul>
        <ul className="nav__center__socials">
          {socials.map(({ id, icon }) => {
            return (
              <li key={id} className="nav__center__social">
                {icon}
              </li>
            )
          })}
        </ul>
        <button
          className="btn__openMenu"
          type="button"
          onClick={() => setNavToggle(true)}
        >
          <FiMenu className="btn__openMenu-icon" />
        </button>

        {/* SMALL SCREEN NAVBAR */}
        <div
          className={`nav__center__smallscreen__container ${
            navToggle && 'show__smallscreen__container'
          }`}
        >
          <button
            type="button"
            className="btn__closeMenu"
            onClick={() => setNavToggle(false)}
          >
            <BsBoxArrowRight className="btn__closeMenu-icon" />
          </button>
          <a
            href="#home"
            className="nav__center__homelink"
            onClick={() => setNavToggle(false)}
          >
            <img src={logo} alt="logo" className="nav__center-logo" />
          </a>

          <ul className="nav__center__smallscreen__container__links">
            {navigation.map(({ id, name, url }) => {
              return (
                <li
                  key={id}
                  className="nav__center__smallscreen__container__link"
                  onClick={() => setNavToggle(false)}
                >
                  <a href={url}>
                    <span>{name.substring(0, 1)}</span>
                    {name.substring(1)}
                  </a>
                  <div className="nav__center__smallscreen__container-underline"></div>
                </li>
              )
            })}
          </ul>
          <ul className="nav__center__socials">
            {socials.map(({ id, icon }) => {
              return (
                <li key={id} className="nav__center__social">
                  {icon}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
