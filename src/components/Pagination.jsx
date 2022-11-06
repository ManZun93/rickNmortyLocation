import React from 'react';
import axios from 'axios'

const Pagination = ({charactersPerPage, currentPage,  SetCurrentPage, totalCharacters}) => {

  const pageNumbers = []
 
  for(let i = 1; i <=  Math.ceil(totalCharacters / charactersPerPage); i++){
    pageNumbers.push(i)
  }

  const OnPreviusPage = () => {
    SetCurrentPage(currentPage - 1)
  }

  const OnNextPage = () => {
    SetCurrentPage(currentPage + 1)
  }

  const onClickPage = (pageClicked) => {
    SetCurrentPage(pageClicked)
  }

  return (
    <nav 
      className="pagination is-centered" 
      role="navigation" 
      aria-label="pagination">
      
    <div className='page-buttons'>
      <button className={`pagination-button1 ${currentPage === 1 ? 'is-disabled' : "" }`} onClick={OnPreviusPage}>Previous Characters {" "} </button>
      <button className={`pagination-button2 ${currentPage >= pageNumbers.length ? 'is-disabled' : ""}`} onClick={OnNextPage}>Next Characters</button>
    </div>


     <ul className="pagination-list">

      {pageNumbers.map(noPage=> (
          <li 
            className='number-page' 
            onClick = {() =>  onClickPage(noPage)} 
            key ={noPage}>
            <a className= {`pagination-link ${noPage === currentPage ? " is-current" : ""}`}
               onClick = {() =>  onClickPage(noPage)}
            >
              {noPage}
            </a>
        </li>
      ))
      }

    </ul>
  </nav>
  );
};

export default Pagination;  