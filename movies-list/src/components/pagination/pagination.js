const Pagination = ({ currentPage, itemsPerPage, length, onPageChanged }) => {
 const pageCount = Math.ceil(length / itemsPerPage);
 const pages = [];

 for (let i = 1; i <= pageCount; i++) {
  pages.push(i);
 }

 return (
  <div>
   <ul>
    <li>
     <button onClick={() => onPageChanged(currentPage - 1)}>&laquo;</button>
    </li>
    {pages.map((page) => (
     <li key={page}>
      <button onClick={() => onPageChanged(page)}>{page}</button>
     </li>
    ))}

    <li className={currentPage === pageCount ? ' disabled' : ' '}>
     <button onClick={() => onPageChanged(currentPage + 1)}> &raquo;</button>
    </li>
   </ul>
  </div>
 );
};

Pagination.getData = (items, currentPage, itemsPerPage) => {
 const start = currentPage * itemsPerPage - itemsPerPage;
 return items.slice(start, start + itemsPerPage);
};
export default Pagination;
