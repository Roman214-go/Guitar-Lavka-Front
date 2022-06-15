import { useDispatch, useSelector } from "react-redux"

export default function CatalogFilter() {
    const dispatch = useDispatch()
    const isButtonChecked = useSelector(state => state.catalogSort.type)
    const setType = (e) => {
      dispatch({type: "SET_PRODUCTS_FILTER_TYPE", payload: e.target.value})
      dispatch({type: "SET_PRODUCTS_SORT_PAGE", payload: 1})
    }
    
    return (
        <div className="catalog-filter-cont">
          <div className="catalog-filters" onChange={setType} >
            <label>
              <input type="radio" name="filter" value="" defaultChecked={!isButtonChecked ? true : false}/>
              <span>ALL PRODUCTS</span></label>            
            <label>
              <input type="radio" name="filter" value="acoustic" defaultChecked={isButtonChecked == "acoustic" ? true : false}/>
              <span>ACOUSTIC GUITAR</span></label>
            <label>
              <input type="radio" name="filter" value="electric" defaultChecked={isButtonChecked == "electric" ? true : false}/>
              <span>ELECTRIC GUITAR</span></label>
            <label className="radio-ukulele">
              <input type="radio" name="filter" value="ukulele" defaultChecked={isButtonChecked == "ukulele" ? true : false}/>
              <span>UKULELE</span></label>
          </div>
        </div>
    )
}