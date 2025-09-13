'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useStore from '@/store/useStore';

async function createItem(data) {
  console.log('Data', data);

}
// const mutation = useMutation({
//   mutationFn: createItem,
//   onSuccess: () => {
//     queryClient.invalidateQueries({ queryKey: ['items'] });
//     router.push('/items');
//   },
// });

export default function CreateItemPage() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { name, description, setName, setDescription, submitForm, resetForm } = useStore();
  const handleSubmit = (e) => {
    submitForm()
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Create New Item</h1>

      <div>
        <Label>Name</Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <Label>Description:</Label>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <Button
        // onClick={() => mutation.mutate({ name, description })}
        onClick={handleSubmit}
      // disabled={mutation.isPending}
      >
        Saving
        {/* {mutation.isPending ? 'Saving...' : 'Save'} */}
      </Button>

      <Button onClick={() => router.back()} style={{ marginLeft: '10px' }}>
        Cancel
      </Button>

      {/* {mutation.isError && <p style={{ color: 'red' }}>Error saving item</p>} */}
    </div>
  );
}
