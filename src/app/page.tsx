'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const short="hi"
  const msg = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
  return (
    <div className="flex flex-col w-full min-h-96 max-w-md p-4 mx-auto my-4 border-2 relative rounded-lg">
      <div className="bg-indigo-900 h-28 rounded-t-lg -m-4 mb-1 flex items-center p-4">
        <h1 className="text-3xl font-medium text-white">Chatbot</h1>
      </div>
      <div className="overflow-y-auto no-scrollbar flex flex-col gap-4 p-2 select-none">
        {/* <div className="whitespace-pre-wrap user flex items-end flex-row-reverse"><p className="p-2 rounded bg-gray-200">{short}</p></div>
        <div className="whitespace-pre-wrap AI flex items-end"><p className="p-2 rounded bg-gray-200">{short}</p></div>
        <div className="whitespace-pre-wrap user flex items-end flex-row-reverse"><p className="p-2 rounded bg-gray-200">{msg}</p></div>
        <div className="whitespace-pre-wrap AI flex items-end"><p className="p-2 rounded bg-gray-200">{msg}</p></div>
        <div className="whitespace-pre-wrap user flex items-end flex-row-reverse"><p className="p-2 rounded bg-gray-200">{short}</p></div> */}
      {messages.map(m => (
        <div key={m.id} className={`whitespace-pre-wrap user flex items-end ${m.role === 'user' && 'flex-row-reverse'}`}>
          <p className="p-2 rounded bg-gray-200">
            {m.content}
          </p>
        </div>
      ))}
      </div>

      <form className="absolute bottom-0 w-full -m-4" onSubmit={handleSubmit}>
        <div>
          <input
            className="text-lg w-full max-w-md p-2 border border-gray-300 rounded-b-lg shadow-xl"
            value={input}
            placeholder="Write your message"
            onChange={handleInputChange}
          />
        </div>
        <button className="absolute bottom-0 right-2 bg-indigo-700 hover:bg-indigo-900 text-white text-lg font-bold py-2 px-4 rounded-full" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </div>
  );
}
