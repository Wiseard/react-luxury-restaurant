import './menu.css'
import { menuCategory, menu } from '../../data'
import { useState } from 'react'
// import axios from 'axios'
// import { useQuery } from '@tanstack/react-query'

// const url = 'https://json.extendsclass.com/bin/5fcde47f127d'
// const url2 = 'https://jsonkeeper.com/b/7XRQ'
// const api = 'a98dab30-2270-4c96-a32d-177edff02236'
const Menu = () => {
  const [category, setCategory] = useState('all')
  const [active, setActive] = useState(category)
  const [currentPage, setCurrentPage] = useState(1)
  const [menuFiltered, setMenuFiltered] = useState(menu)

  function isActive(category) {
    setCurrentPage(1)
    setCategory(category)
    setActive(category)
    const newMenu = menu.filter((item) => item.category === category)
    setMenuFiltered(category === 'all' ? menu : newMenu)
  }

  // const { isLoading, data, error } = useQuery({
  //   queryKey: ['menu', category],
  //   queryFn: async () => {
  //     const { data } = await axios.get(url)
  //     if (category === 'all') {
  //       return data
  //     }
  //     return data.filter((item) => item.category === category)
  //   },
  // })

  // if (isLoading) {
  //   return (
  //     <div className="lds-ring">
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //     </div>
  //   )
  // }

  // if (error) {
  //   return <h2 style={{ marginTop: '1rem ' }}>An error occurred.</h2>
  // }

  // console.log(JSON.stringify(data))

  // Pagination Variables
  const recordsPerPage = 6
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = menuFiltered.slice(firstIndex, lastIndex)
  // const records = menuFiltered.slice(firstIndex, lastIndex)
  // const records = data.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(menuFiltered.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  // Pagination functions
  function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <section className="menu" id="menu">
      <div className="menu__container grid">
        <div className="menu__container__menu__list">
          <ul className="menu__list__categories">
            <h2>Taste the quality</h2>
            {menuCategory.map((category, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  onClick={() => isActive(category)}
                  className={active === category ? 'active' : ''}
                >
                  {category}
                </button>
              )
            })}
          </ul>
        </div>
        {/* {numbers.length > 1 ? ( */}
        <div className="menu__container__menu__items grid">
          {records.map(({ id, name, image }) => {
            return (
              <article className="menu__items__item" key={id}>
                <div className="menu__items__item__overlay"></div>
                <h3 className="menu__items__item-title">{name}</h3>
                <img src={image} alt={name} loading="lazy" />
              </article>
            )
          })}
        </div>
        {/* ) : (
          <div className="menu__container__menu__items grid">
            {menuFiltered.map(({ id, name, image }) => {
              return (
                <article className="menu__items__item" key={id}>
                  <div className="menu__items__item__overlay"></div>
                  <h3 className="menu__items__item-title">{name}</h3>
                  <img src={image} alt={name} loading="lazy" />
                </article>
              )
            })}
          </div>
        )} */}
      </div>
      {/* Pagination */}
      {numbers.length > 1 && (
        <ul className="pagination">
          <li className="page-item">
            <button
              className={currentPage === 1 ? 'nextBtn' : ''}
              onClick={previousPage}
            >
              Prev
            </button>
          </li>
          {numbers.map((number, index) => {
            return (
              <li key={index}>
                <button
                  className={`page-item ${
                    currentPage === number ? 'activeBtn' : ''
                  }`}
                  onClick={() => changeCurrentPage(number)}
                >
                  {number}
                </button>
              </li>
            )
          })}
          <li className="page-item">
            <button
              className={currentPage === numbers.length ? 'nextBtn' : ''}
              onClick={nextPage}
            >
              Next
            </button>
          </li>
        </ul>
      )}
    </section>
  )
}
export default Menu
