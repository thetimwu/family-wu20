import React from "react";

export const useApiService = <T>(
  url: string
): { response: T | null; error: Error | null } => {
  const baseUrl = "http://localhost:8009";
  const [response, setResponse] = React.useState<T | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  React.useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await fetch(`${baseUrl}${url}`, {
          method: "get",
        });
        setResponse(await res.json());
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { response, error };
};
