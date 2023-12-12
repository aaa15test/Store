import { useState } from 'react';
import { Products } from '../Products/index';
import Pagination from '../Pagination/index';
import '../index.css';
import './index.css';

export const Layout = ({ products }) => {
  const [selectedSortingValue, setSelectedSortingValue] = useState('');

  const changeSortOrder = value => {
    setSelectedSortingValue(value);

    products.sort((a, b) => {
      if (value === 'nameAsc') {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      } else if (value === 'nameDesc') {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
      } else if (value === 'priceAsc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    })
  }

  const [pagesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * pagesPerPage;
  const indexOfFirstPost = indexOfLastPost - pagesPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='wrapper'>
      <label for='sort' className='sortTitle'>Сортировать </label>
      <select
        name='sorting'
        id='sort'
        value={selectedSortingValue}
        className='sortSelect'
        onChange={e => changeSortOrder(e.target.value)}
      >
        <option selected value> -- выберите тип сортировки -- </option>
        <option value='nameAsc'>По имени (от А до Я)</option>
        <option value='nameDesc'>По имени (от Я до А)</option>
        <option value='priceAsc'>По возрастанию цены</option>
        <option value='priceDesc'>По убыванию цены</option>
      </select>
      <Products products={products.slice(indexOfFirstPost, indexOfLastPost)}/>
      {products.length > 5 && (
        <Pagination
          count={products.length}
          paginate={paginate}
          pagesPerPage={pagesPerPage}
          currentPage={currentPage}
        />
      )}
    </div>
  )
}
