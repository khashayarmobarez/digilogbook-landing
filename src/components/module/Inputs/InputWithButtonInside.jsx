import { useState } from 'react';

export default function InputWithButtonInside({ handleSubmit, inputValue, setInputValue }) {
  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-transparent w-full px-4 py-6 pr-4 pl-[40%] rounded-2xl md:rounded-[34px] border border-neutralDark focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none overflow-hidden"
          placeholder="دیدگاه خود را بنویسید"
          rows="1"
          onInput={(e) => {
            // Auto-resize the textarea based on content
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
        />
        <button 
          type="submit"
          className="absolute w-[30%] left-4 top-3.5 px-4 h-12 bottom-1 bg-primaryLightHover hover:bg-gray-100 text-neutralDark rounded-3xl flex justify-center items-center border border-neutralDark"
        >
          ارسال نظر
        </button>
      </form>
    </div>
  );
}
