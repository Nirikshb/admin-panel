'use client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, use } from 'react';
const updateItem = () => {
  console.log('CLICK ON UPDATE ITEM');
};

export default function EditItemPage({ params }) {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const unwrappedParams = use(params);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName('');
    setDescription('');
  }, []);

  const mutation = useMutation({
    mutationFn: updateItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      router.push('/items');
    },
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Editing: {unwrappedParams.id}</h1>

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
        onClick={() =>
          mutation.mutate({
            id: unwrappedParams.id,
            name,
            description,
          })
        }
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Updating...' : 'Update'}
      </button>

      <button onClick={() => router.back()} style={{ marginLeft: '10px' }}>
        Cancel
      </button>
    </div>
  );
}
