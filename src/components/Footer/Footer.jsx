import './footer.css'

const Footer = () => {
  function submitSubscribe(e) {
    e.preventDefault()
  }
  return (
    <section className="footer__container">
      <div className="footer__container__info grid">
        <div className="footer__container__info__contact">
          <h2 className="contact__title">Contact Info</h2>
          <p className="contact__address">
            732/21 Second Street, Manchester, King Street, Kingston United
          </p>
          <p className="contact__phone">+ 123 4567-32-21</p>
          <p className="contact__mail">info@mail.com</p>
        </div>
        <div className="footer__container__info__hours">
          <h2 className="hours__title">Open Hours</h2>
          <div className="hours__week">
            <p>Monday — Thursday</p>
            <p>8 am — 11 pm</p>
          </div>
          <div className="hours__week-end">
            <p>Friday — Sunday</p>
            <p>11 am — 11 pm</p>
          </div>
        </div>
        <div className="footer__container__info__subscribe">
          <h2 className="subscribe__title">Be notified</h2>
          <form className="subscribe__form" onSubmit={submitSubscribe}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <button className="btn-subscribe" type="submit">
              subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="footer-copyright">
        &copy;{new Date().getFullYear()} Emerald Blues. All rights reserved.
      </p>
    </section>
  )
}
export default Footer
