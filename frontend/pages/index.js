import axios from "axios";
import Head from 'next/head';
import {
  QueryClient,
  QueryClientProvider, useQuery
} from "react-query";

const apiRoot = process.env.API_ROOT || 'https://z7cddb8b3-za1c0d31b-gtw.qovery.io';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js!
            </a>
          </h1>

          <Images />

        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">      </footer>
      </div>
    </QueryClientProvider>
  )
}

function Images() {
  const { status, data, error, isFetching } = useImages();

  if (isFetching) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error: {error.message}</span>
  }

  return (
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {data.map((file) => (
        <li key={file.source} className="relative">
          <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <img src={file.source} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{file.title}</p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.size}</p>
        </li>
      ))}
    </ul>
  )
}

function useImages() {
  return useQuery("images", async () => {
    const { data } = await axios.get(
      `${apiRoot}/api/v1/images`
    );
    return data;
  });
}
