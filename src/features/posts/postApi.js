import axios from "../../utils/axios"

export const fetchPostsApi = async (filterSave)=>{
   let queryString;
   if(filterSave==="saved"){
      queryString = `isSaved_like=${true}`
   }
   const response = await axios(`/blogs?${queryString}`);
   return response.data;
}