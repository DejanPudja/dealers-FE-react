import React, { useEffect, useState } from 'react';
import Service from '../../domain/dealersCollection/Service';
import ViewMapper from '../../domain/dealersCollection/ViewMapper';
import BlocksListItem from './BlocksListItem';
import PartsPagination from '../parts/PartsPagination';

export default function BlocksList() {
  const [dealers, setDealers] = useState<any>([]);

  const fetchDealers = async () => {
    const dealers = await Service.getAll(1);
    const mappedDealers = ViewMapper.map(dealers);

    setDealers(mappedDealers);
  };

  useEffect(() => {
    fetchDealers();
  }, []);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = dealers.slice(indexOfFirstPost, indexOfLastPost);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
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
        {dealers.map((dealer: any, index: number) => {
          return <BlocksListItem dealers={dealer} key={index} />;
        })}
      </tbody>
    </table>
  );
}
