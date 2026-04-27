import { useEffect, useState } from "react";
import { env } from "../config/env";


type UseFetchReturn<T> = [
  data: T|null,
  error: boolean
]
type Header = {
  token?: string 
}

export function useFetch<T>(apiPath: string,header: Header={}):UseFetchReturn<T>{
  const [data, setData] = useState<T|null>(null);
  const [error, setError] = useState<boolean>(false);
  const url = `${env.apiBaseUrl}${apiPath}`;

  useEffect(() => {
    async function fetchApi() {
      try{     
        const response = await fetch(url,
          {
            method: "GET",
            headers: {
              "Accept": "application/json", ...header
            }
          }
        );
        if (response.ok){
          const json = await response.json();
          setData(json);
        }else{
          setError(true)
          console.log(response.status)
        } 
      }
      catch(err: unknown){
        console.log(err)
        setError(true)
      }
    }
    fetchApi();
  }, [url]);
  return [data,error];
};
