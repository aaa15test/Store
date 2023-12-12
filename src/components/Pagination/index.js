import './index.css'

export default function Pagination({
  count,
  paginate,
  pagesPerPage,
  currentPage,
}) {
  const pagesCount = Math.ceil(count / pagesPerPage);
  const onPageNumberClick = (i) => {
    paginate(i);
  };

  const activeStyle = {
    background: '#54708D',
    color: 'white',
    fontWeight: 'bold'
  };

  return (
    <div className='pagination'>
      <button
        className='prevNextButton'
        disabled={currentPage === 1}
        onClick={() => onPageNumberClick(currentPage - 1)}
      >
        ⬅️ Предыдущая страница
      </button>
      { [...new Array(pagesCount)].map((_, i) => (
        <button
          key={i}
          className='paginationButton'
          style={i+1 === currentPage ? activeStyle : {}}
          onClick={() => onPageNumberClick(i + 1)}
        >
          { i + 1 }
        </button>
      ))
      }
      <button
        className='prevNextButton'
        disabled={currentPage === pagesCount}
        onClick={() => onPageNumberClick(currentPage + 1)}
      >
        Следующая страница ➡️
      </button>
    </div>
  );
}
