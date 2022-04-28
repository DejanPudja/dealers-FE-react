import React from 'react';

export default function PartsPagination() {
  const next = () => {
    console.log('next');
  };
  const previous = () => {
    console.log('previous');
  };

  return (
    <div className="pagination">
      <button onClick={previous}>&laquo;</button>
      <a href="#" className="active">
        1
      </a>
      <button onClick={next}>&raquo;</button>
    </div>
  );
}
