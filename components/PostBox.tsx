import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function PostBox({ wallet }: { wallet: string }) {
  const [message, setMessage] = useState('');
  const [mnchrmId, setMnchrmId] = useState('');
  const [tone, setTone] = useState('');
  const [status, setStatus] = useState('');

  const handlePost = async () => {
    if (!message.trim()) return;

    const { error } = await supabase.from('forum_posts').insert([
      {
        wallet,
        message,
        mnchrm_id: mnchrmId || null,
        tone: tone || null,
      },
    ]);

    if (error) {
      console.error('Post error:', error);
      setStatus('❌ Failed to post');
    } else {
      setStatus('✅ Posted!');
      setMessage('');
      setMnchrmId('');
      setTone('');
    }
  };

  return (
    <div className="w-full max-w-xl bg-gray-800 p-4 rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-2">Post to the Lounge</h2>
      <textarea
        placeholder="What’s on your Chromie's mind?"
        className="w-full p-2 rounded bg-gray-700 text-white mb-2"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex space-x-2 mb-2">
        <input
          placeholder="MNCHRM ID (optional)"
          className="flex-1 p-2 rounded bg-gray-700 text-white"
          value={mnchrmId}
          onChange={(e) => setMnchrmId(e.target.value)}
        />
        <input
          placeholder="Tone (e.g. flirty, chill)"
          className="flex-1 p-2 rounded bg-gray-700 text-white"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        />
      </div>
      <button
        onClick={handlePost}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Post
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}
