import { useState } from "react";

type State = "IDLE" | "LOADING" | "ERROR";

export default function useMutation(f: () => Promise<void>) {
  const [state, setState] = useState<State>("IDLE");

  const handleSubmit = async () => {
    setState("LOADING");
    try {
      await f();
      setState("IDLE");
    } catch (e) {
      setState("ERROR");
    }
  };

  const isLoading = state == "LOADING";
  const isError = state == "ERROR";

  return { handleSubmit, isLoading, isError };
}
