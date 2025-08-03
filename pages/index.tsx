import Head from 'next/head';
import PostBox from '../components/PostBox';
import PostList from '../components/PostList';

export default function Home() {
  return (
    <>
      <Head>
        <title>CHROMANCE // MNCHRMS</title>
        <meta name="description" content="Bond your Chromies. Mint the future." />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
        <div className="text-center animate-pulse">
          <h1 className="text-5xl font-bold tracking-widest mb-2">MNCHRMS</h1>
          <h2 className="text-3xl text-gray-400 mb-4">CHROMANCE</h2>
          <p className="text-lg max-w-md mx-auto text-gray-500">
            Bond your Chromies. Mint the future. A grayscale ritual on Bitcoin.
          </p>
        </div>

        <div className="mt-10">
          <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-300 transition-all">
            Connect Wallet
          </button>
        </div>

        <PostList />

        <div className="mt-16 w-full max-w-2xl">
          <PostBox wallet="demo-wallet-address" />
        </div>
      </main>
    </>
  );
}
