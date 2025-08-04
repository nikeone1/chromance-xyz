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

        {/* 🎥 Hero Video Section */}
        <section style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '2rem' }}>
          <iframe
            src="https://player.vimeo.com/video/1107127746?autoplay=1&muted=1&loop=1&background=1"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Chromance Video"
          />
        </section>

        {/* 🧠 Heading + CTA */}
        <div className="text-center animate-pulse">
          <h1 className="text-5xl font-bold tracking-widest mb-2">MNCHRMS</h1>
          <h2 className="text-3xl text-gray-400 mb-4">CHROMANCE</h2>
          <p className="text-lg max-w-md mx-auto text-gray-500">
            Bond your chromies. Mint the future. A grayscale ritual on Bitcoin.
          </p>
        </div>

        {/* 🔘 Connect Wallet Button */}
        <div className="mt-10">
          <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-300 transition-all">
            Connect Wallet
          </button>
        </div>

        {/* 💬 Message Feed */}
        <PostList />

        {/* 📨 Post Box */}
        <div className="mt-16 w-full max-w-2xl">
          <PostBox wallet="demo-wallet-address" />
        </div>
      </main>
    </>
  );
}
