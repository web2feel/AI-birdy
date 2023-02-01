import React from "react";

function Prompt({ handleChange, handleSubmit }) {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 mb-12">
      <p>
        What do you want to tweet about?
      </p>
      <div className="border p-2 bg-white border-slate-300 my-4 shadow rounded">
        <div className="flex flex-col md:flex-row gap-2 text-lg">
          <input
            onChange={handleChange}
            type="text"
            required
            className="form-input w-full block border md:border-0 border-slate-300 rounded placeholder:text-slate-300 py-3 "
            placeholder="I rescued a puppy today"
          />
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-slate-700 text-white hover:bg-slate-900 duration-300 rounded gap-2 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                clipRule="evenodd"
              />
            </svg>

            <span>Generate</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Prompt;
