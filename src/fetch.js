import { useCallback } from "react";

const sendRequest = useCallback(async (endpoint, get = () => {}) => {
    const url = "http://localhost:5000";
    try {
      const response = await fetch(` ${url}${endpoint}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("không thể kết nối 404");
      }
      const data = await response.json();
      get(data.results);
    } catch (err) {
      get(null, true);
      console.error(err.message);
    }
  }, []);

  const postRequest  = useCallback(async (query, get = () => {}) => {
    //query la object chua USER can them de gui len server
    const url = "http://localhost:5000";
    try {
      const response = await fetch(url, {
        method: "POST", 
        body: JSON.stringify(query),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw await response.json();
      }

      const data = await response.json();
      get(data);
    } catch (res) {
      get(null, true);
      console.log(res.message);
    }
  }, []);


