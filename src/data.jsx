// === Social Icons === //
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai'

// === Services Icons === //
import { IoRestaurantOutline } from 'react-icons/io5'
import { BsCalendar2Check } from 'react-icons/bs'
import { AiOutlineCar } from 'react-icons/ai'

// === Menu images === //
// Chief Specialty
import carpaccio from './assets/images/beef-carpaccio.jpg'
import quiche from './assets/images/french-quiche-lorraine.jpg'
import polenta from './assets/images/classic-italian-polenta.jpg'

// Starters
import feta from './assets/images/feta-strawberry.jpg'
import soup from './assets/images/chervil-soup.jpg'
import halloumi from './assets/images/halloumi-vegetables.jpg'
import ham from './assets/images/ham-burger.jpg'
import pasta from './assets/images/pasta-slice-tomato.jpg'

// Main
import teriyaki from './assets/images/chicken-teriyaki.jpg'
import tzatziki from './assets/images/fig-tzatziki.jpg'
import risotto from './assets/images/vegan-risotto.jpg'
import paella from './assets/images/classic-paella.jpg'
import spaghetti from './assets/images/spaghetti-tomato.jpg'

// Desserts
import cheesecake from './assets/images/blueberry-cheescake.jpg'
import caramel from './assets/images/caramel-cake.jpg'
import chocoCake from './assets/images/chocolate-cake.jpg'
import chocoCupcake from './assets/images/chocolate-cupcake.jpg'
import pancakes from './assets/images/berries-pancakes.jpg'

export const menu = [
  {
    id: 1,
    name: 'beef carpaccio',
    image: carpaccio,
    category: "chef's speciality",
  },
  {
    id: 2,
    name: 'quiche lorraine',
    image: quiche,
    category: "chef's speciality",
  },
  {
    id: 3,
    name: 'classic italian polenta',
    image: polenta,
    category: "chef's speciality",
  },
  {
    id: 4,
    name: 'feta and strawberries salad',
    image: feta,
    category: 'starters',
  },
  {
    id: 5,
    name: 'chervil soup',
    image: soup,
    category: 'starters',
  },
  {
    id: 6,
    name: 'halloumi and vegetables',
    image: halloumi,
    category: 'starters',
  },
  {
    id: 7,
    name: 'ham-burger',
    image: ham,
    category: 'starters',
  },
  {
    id: 8,
    name: 'pasta and slice tomatoes',
    image: pasta,
    category: 'starters',
  },
  {
    id: 9,
    name: 'chicken teriyaki',
    image: teriyaki,
    category: 'main',
  },
  {
    id: 10,
    name: 'fig tzatziki',
    image: tzatziki,
    category: 'main',
  },
  {
    id: 11,
    name: 'vegan risotto',
    image: risotto,
    category: 'main',
  },
  {
    id: 12,
    name: 'classic paella',
    image: paella,
    category: 'main',
  },
  {
    id: 13,
    name: 'spaghetti and tomatoes',
    image: spaghetti,
    category: 'main',
  },
  {
    id: 14,
    name: 'blueberry cheesecake',
    image: cheesecake,
    category: 'desserts',
  },
  {
    id: 15,
    name: 'caramel cake',
    image: caramel,
    category: 'desserts',
  },
  {
    id: 16,
    name: 'chocolate cake',
    image: chocoCake,
    category: 'desserts',
  },
  {
    id: 17,
    name: 'chocolate cupcake',
    image: chocoCupcake,
    category: 'desserts',
  },
  {
    id: 18,
    name: 'berries pancakes',
    image: pancakes,
    category: 'desserts',
  },
]

const menuCategoriesFiltered = Array.from(
  new Set(menu.map((item) => item.category))
)

export const menuCategory = ['all', ...menuCategoriesFiltered]

export const navigation = [
  {
    id: 1,
    name: 'home',
    url: '#home',
  },
  {
    id: 2,
    name: 'about us',
    url: '#about',
  },
  {
    id: 3,
    name: 'menu',
    url: '#menu',
  },
  {
    id: 4,
    name: 'reservation',
    url: '#reservation',
  },
]

export const socials = [
  {
    id: 1,
    name: 'facebook',
    icon: <AiOutlineFacebook />,
  },
  {
    id: 2,
    name: 'instagram',
    icon: <AiOutlineInstagram />,
  },
  {
    id: 3,
    name: 'twitter',
    icon: <AiOutlineTwitter />,
  },
]

export const services = [
  {
    id: 1,
    title: 'Catering Services',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna.',
    icon: <IoRestaurantOutline className="services__icon" />,
  },
  {
    id: 2,
    title: 'Reservation',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna.',
    icon: <BsCalendar2Check className="services__icon" />,
  },
  {
    id: 3,
    title: 'Private Parking',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna.',
    icon: <AiOutlineCar className="services__icon" />,
  },
]
