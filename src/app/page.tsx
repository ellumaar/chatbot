'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full h-lvh max-w-md p-4 mx-auto my-4 border-2 relative rounded-lg">
      <div className="bg-indigo-900 h-28 rounded-t-lg -m-4 flex items-center p-4">
        <h1 className="text-3xl font-medium text-white">Chatbot</h1>
      </div>
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form className="absolute bottom-0 w-full -m-4" onSubmit={handleSubmit}>
        <input
          className="text-lg w-full max-w-md p-2 border border-gray-300 rounded-b-lg shadow-xl"
          value={input}
          placeholder="Write your message"
          onChange={handleInputChange}
        />
        <button className="absolute bottom-0 right-2 bg-indigo-700 hover:bg-indigo-900 text-white text-lg font-bold py-2 px-4 rounded-full" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </div>
  );
}
