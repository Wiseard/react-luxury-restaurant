import './header.css'
import imageHeader from '../../assets/images/header-overlay.jpg'

const Header = () => {
  function scrolling() {
    window.scrollTo({
      top: 100,
      behavior: 'smooth',
    })
  }
  return (
    <section className="header__overlay" id="home">
      <img src={imageHeader} alt="header" className="header__overlay-img" />
      <div className="header__content">
        <h1 className="header__content__title">
          {/* <span>Only the best ingredients</span>
          <br />
          for our dishes */}
          {/* <img src={logoAlt} alt="logo" className="logo-alt" /> */}
        </h1>
        <h2 className="header__content__subtitle">
          Stylish and fashionable restaurant
        </h2>
        <a href="#reservation" className="btn-link">
          Book a table
        </a>
      </div>
    </section>
  )
}
export default Header
