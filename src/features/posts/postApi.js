import axios from "../../utils/axios"

export const fetchPostsApi = async ()=>{
   const response = await axios('/blogs');
   return response.data;
}