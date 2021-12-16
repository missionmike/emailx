import * as esbuild from "esbuild-wasm";

import React, { useEffect, useRef, useState } from "react";

// @ts-ignore
import esbuildUrl from "url:./esbuild.wasm";

const Editor = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startService = async () => {
    console.log("Starting service.");
    console.log(`esbuild.wasm URL: ${esbuildUrl}`);
    ref.current = await esbuild.initialize({
      worker: true,
      wasmURL: esbuildUrl,
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = () => {
    console.log(ref);
    if (!ref.current) {
      return;
    }
    console.log(ref.current);
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

export { Editor };
