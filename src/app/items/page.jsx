'use client';

import { useRouter } from 'next/navigation';

export default function ItemsPage() {
  const router = useRouter();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Items Listing</h1>

      <button
        onClick={() => router.push('/items/new')}
        style={{ marginRight: '10px' }}
      >
        Create
      </button>

      <button onClick={() => router.push('/items/123/edit')}>
        Update
      </button>
    </div>
  );
}
