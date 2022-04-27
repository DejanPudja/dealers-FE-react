import React from 'react';
import BlocksList from '../components/blocks/BlocksList';
import PartsPagination from '../components/parts/PartsPagination';

export default function Home() {
  return (
    <div>
      <BlocksList />
      <PartsPagination />
    </div>
  );
}
