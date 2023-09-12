import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SetFilterSave, SetSortFilter } from '../../features/sort/sortSlice';

function SiteFilter() {
  const dispatch = useDispatch();
  const {filterSave}=useSelector(state=> state.filter)
  

  return (
    <div className="sidebar-items">
    <div className="sidebar-content">
      <h4>Sort</h4>
      <select onChange={(e)=> dispatch(SetSortFilter(e.target.value)) } name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
        <option value="">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </div>
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        <div>
          <input onChange={() => dispatch(SetFilterSave("all"))}
    type="radio" name="filter" id="lws-all" checked={filterSave === "all"} className="radio" />
          <label for="lws-all">All</label>
        </div>
        <div>
          <input onChange={() => dispatch(SetFilterSave("saved"))} checked={filterSave === "saved"} type="radio" name="filter" id="lws-saved" className="radio" />
          <label for="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SiteFilter
