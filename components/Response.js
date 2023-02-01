import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Response({ response, ready, pending }) {
  const handleClick = () => {
    let encoded = encodeURIComponent(response);
    window.open(`https://twitter.com/intent/tweet?text=${encoded}`, "_blank");
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 my-4">
      {!ready && pending && (
        <div className="text-center text-slate-500">
          <Image
            src="/Loader.svg"
            alt="Loader"
            width={48}
            height={16}
            className="mx-auto"
          />
          The AI is generating your twitter message.
        </div>
      )}

      {ready && !pending && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.5 }}
        >
          <div className="border p-6 md:p-12 my-4 text-xl leading-relaxed border-slate-300 text-slate-600 shadow rounded bg-white">
            {response}
          </div>
          <button
            onClick={handleClick}
            className=" cursor-pointer shadow py-3 px-6 flex gap-2 justify-center items-center mt-4 text-white bg-slate-700 hover:bg-slate-900  duration-300 text-lg rounded"
          >
            <Image src="/twitter.svg" alt="Tweet This" width={20} height={20} />
            Tweet This
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default Response;
