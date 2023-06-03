import { story } from "@/data/models/story";
import axios from "axios";
import { useEffect, useState } from "react";


export function useGetStory() {
  const initial: story[] = [];
  const [list, setList] = useState<story[]>(initial);



  async function getData() {
    const response = await axios.get(
      `http://103.193.177.79:8000/cerita/all`
    );


    const json: story[] = response.data;
    setList(json);
  }

  useEffect(() => {
    getData();
  });

  return {
    list,
  };
}
