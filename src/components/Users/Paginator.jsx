import React, {useState} from 'react';
import c from './Users.module.css';

const Paginator = (props) => {
  let number_of_pages = Math.ceil(props.count / props.users_on_page);

  let number_of_sets = Math.ceil(number_of_pages / 10);
  let [pageSet, setPageSet] = useState(1);
  let first_page = ((pageSet - 1) * 10) + 1;
  let last_page = pageSet * 10;
  if (last_page > number_of_pages) {
    last_page = number_of_pages;
  }


  const page = props.page 
  let pages = []
  for (let i = first_page; i <= last_page; i += 1) {
    pages.push(i);
  }

  return <div>
    <div>
      {pageSet > 1 && <button onClick={() => {setPageSet(pageSet - 1)}}>Prev</button>}
      {pages.map(p => {
        return <span className={c.pageNumber}>
          <span onClick={(e) => props.onPageChange(p)} className={props.page === p && c.activePage}>{p}</span>
        </span>
      })}
      {pageSet < number_of_sets && <button onClick={() => {setPageSet(pageSet + 1)}}>Next</button>}
    </div>
  </div>
}
    
export default Paginator;