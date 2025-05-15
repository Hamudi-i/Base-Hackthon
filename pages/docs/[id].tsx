import Layout from '../../components/Layout';

import { useRouter } from 'next/router';

export default function DocumentView() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800">Viewing Document: {id}</h1>
      <p className="mt-4 text-gray-600">This is where the document content will appear.</p>
    </div>
  );
}
