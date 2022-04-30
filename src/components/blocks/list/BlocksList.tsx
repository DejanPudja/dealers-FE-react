import { useEffect, useState } from 'react';
import Service from '../../../domain/dealersCollection/DealersService';
import ViewMapper from '../../../domain/dealersCollection/DealersViewMapper';
import BlocksListItem from './BlocksListItem';
import Spinner from '../../../class/Spinner';
import ReactPaginate from 'react-paginate';

export default function BlocksList() {
  const [dealers, setDealers] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState<any>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchDealers = async (currentPage: number) => {
    const dealers = await Service.getAll(currentPage);
    const mappedDealers = ViewMapper.map(dealers?.items);
    setPageCount(dealers?.lastPage);
    setDealers(mappedDealers);
    setLoading(false);
  };
  useEffect(() => {
    fetchDealers(currentPage);
  }, []);

  const handlePageClick = async (data: any) => {
    let currentPage = data.selected + 1;
    await fetchDealers(currentPage);
    setCurrentPage(currentPage);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#id</th>
            <th>Title</th>
            <th>Adress</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!isLoading
            ? dealers.map((dealer: any, index: number) => {
                return (
                  <BlocksListItem
                    dealers={dealer}
                    key={index}
                    fetchDealers={fetchDealers}
                    currentPage={currentPage}
                  />
                );
              })
            : Spinner.tableSpinner()}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
}
