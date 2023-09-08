import axios from "../../utils/axios"

export const fetchPostsApi = async ()=>{
   const response = await axios('/blogsghf');
   return response.data;
}