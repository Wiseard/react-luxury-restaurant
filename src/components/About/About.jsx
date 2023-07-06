import './about.css'
import ImageChief from '../../assets/images/chief.jpg'
import { services } from '../../data'

import { IoRestaurantOutline } from 'react-icons/io5'
import { BsCalendar2Check } from 'react-icons/bs'
import { AiOutlineCar } from 'react-icons/ai'

const About = ({ ios }) => {
  return (
    <>
      <section className="about__section" id="about">
        <div className="about__container grid">
          <div className="about__container__content">
            <article className="about__container__content__description">
              <h2>Amazing Food Since 2005</h2>
              <div className="about__container__content__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Vestibulum in finibus justo, eget
                  luctus mi. Aliquam venenatis leo non cursus tempor. Aliquam
                  libero sem, congue ac facilisis at, laoreet vulputate sem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum et dolorem repellendus. Voluptatem eum labore possimus
                  quasi dolores? Nihil, doloribus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum et dolorem repellendus. Voluptatem eum labore possimus
                  quasi dolores? Nihil, doloribus.
                </p>
              </div>
            </article>
            <div className="about__container__content__openings grid">
              <div className="content__openings__week">
                <h3>Monday — Thursday</h3>
                <span>8 am — 11 pm</span>
              </div>
              <div className="content__openings__weekend">
                <h3>Friday — Sunday</h3>
                <span>11 am — 11 pm</span>
              </div>
            </div>
          </div>
          <div className="about__container__img">
            <img src={ImageChief} alt="chief" className="chief-img" />
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section>
        <div className={ios ? 'ios-device' : 'about__container__today-special'}>
          <div className="about__container__today-special__content grid">
            <div className="today-special__content__history">
              <h2>Our Services</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="today-special__content__services grid">
              <article className="today-special__content__services__service">
                <IoRestaurantOutline className="service-icon" />
                <div className="services__service__description">
                  <h3>Catering Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                  </p>
                </div>
              </article>
              <article className="today-special__content__services__service">
                <BsCalendar2Check className="service-icon" />
                <div className="services__service__description">
                  <h3>Reservation</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                  </p>
                </div>
              </article>
              <article className="today-special__content__services__service">
                <AiOutlineCar className="service-icon" />
                <div className="services__service__description">
                  <h3>Private Parking</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About
