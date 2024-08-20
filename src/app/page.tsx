'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const chatIcon = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>)
  return (
    <div className="flex flex-col w-full min-h-96 max-w-md p-4 mx-auto my-4 border-2 relative rounded-lg">
      <div className="bg-indigo-900 h-28 rounded-t-lg -m-4 mb-1 flex gap-2 items-center p-4 text-white">
      {chatIcon}

        <h1 className="text-3xl font-medium">Chatbot</h1>
      </div>
      <div className="overflow-y-auto no-scrollbar flex flex-col gap-4 justify-end p-2 pb-12 select-none">
      {messages.map(m => (
        <div key={m.id} className={`whitespace-pre-wrap user flex items-end ${m.role === 'user' && 'flex-row-reverse '}`}>
          <p className={`flex gap-2 p-2 rounded-b-lg ${m.role === 'user' && 'bg-gray-200'}`}>
            {m.role !== 'user' && chatIcon}
            {m.content}
          </p>
        </div>
      ))}
      </div>

      <form className="absolute bottom-0 w-full -m-4" onSubmit={handleSubmit}>
        <div className="absolute bottom-4 w-full p-2 flex gap-2 border border-gray-300 rounded-b-lg shadow-xl bg-white">
          <input
            className="text-lg w-full max-w-md p-2"
            value={input}
            placeholder="Write your message"
            onChange={handleInputChange}
          />
          <button className="bg-indigo-700 hover:bg-indigo-900 text-white text-lg font-bold py-2 px-3 rounded-full" onClick={handleSubmit}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
        </div>
      </form>
    </div>
  );
}
