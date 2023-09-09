import axios from "../../utils/axios"

export const singlePostApi = async (id)=>{
   const response = await axios(`/blogs/${id}`);
   return response.data;
}