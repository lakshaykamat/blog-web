import { BlogPost } from "@/types"
import axios from 'axios'
// import { getToken } from './getToken';
export default async function getAllPost():Promise<BlogPost> {
  // const token = await getToken()


  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${process.env.API_URL}blog`,
    headers: { 'Content-Type': 'application/json' }
  };


  try {
    const response = await axios.request(config);
    return response.data
  }
  catch (error) {
    console.log(error);
    throw new Error("Failed to fetch blogs")
  }

}

