'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

async function createItem(data) {
  console.log('Data',data);
  
}

export default function CreateItemPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      router.push('/items');
    },
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Create New Item</h1>

      <div>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label>Description:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        onClick={() => mutation.mutate({ name, description })}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Saving...' : 'Save'}
      </button>

      <button onClick={() => router.back()} style={{ marginLeft: '10px' }}>
        Cancel
      </button>

      {mutation.isError && <p style={{ color: 'red' }}>Error saving item</p>}
    </div>
  );
}
