import { useDispatch } from "react-redux"

export default function CatalogFilter() {
    const dispatch = useDispatch()
    const setType = (e) => {
      dispatch({type: "SET_PRODUCTS_FILTER_TYPE", payload: e.target.value})
      dispatch({type: "SET_PRODUCTS_SORT_PAGE", payload: 1})
    }    
    return (
        <div className="catalog-filter-cont">
          <div className="catalog-filters" onChange={setType}>
            <label>
              <input type="radio" name="filter" value=""/>
              <span>ALL PRODUCTS</span></label>            
            <label>
              <input type="radio" name="filter" value="acoustic"/>
              <span>ACOUSTIC GUITAR</span></label>
            <label>
              <input type="radio" name="filter" value="electric"/>
              <span>ELECTRIC GUITAR</span></label>
            <label className="radio-ukulele">
              <input type="radio" name="filter" value="ukulele"/>
              <span>UKULELE</span></label>
          </div>
        </div>
    )
}