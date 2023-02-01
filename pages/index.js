import Head from "next/head";
import Header from "../components/Header";
import Prompt from "../components/Prompt";
import Response from "../components/Response";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [ready, setReady] = useState(false);
  const [pending, setPending] = useState(false);
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const apiUrl = "/api/birdy";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  };

  const handleSubmit = async (e) => {
    if(message === "") return
    setReady(false);
    setPending(true);
    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      setResponse(data);
      setPending(false);
      setReady(true);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="font-merriweather min-h-screen bg-slate-50 text-slate-600 flex flex-col">
      <Head>
        <title>AI based Tweet Generator</title>
        <meta
          name="description"
          content="A web app to create twitter messages based on OpenAI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="py-12 flex-1">
        <Prompt handleChange={handleChange} handleSubmit={handleSubmit} />
        <Response response={response} ready={ready} pending={pending} />
      </main>

      <footer className="text-sm text-slate-500 px-6 text-center py-8 border border-t border-slate-300 bg-white">
        An OpenAI API based project by Jinson Abraham.
      </footer>
    </div>
  );
}
