import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function CatalogSort() {
    const dispatch = useDispatch()
    const numOfProducts = useSelector(state => state.products.numOfProducts)
    const currentPage = useSelector(state => state.catalogSort.page)
    const changeOption = (e) => {
        let option = e.target.value.split(" ")
        option[1] = !!option[1]
        
        dispatch({type: "SET_PRODUCTS_SORT_TYPE", payload: option[0]})
        dispatch({type: "SET_PRODUCTS_SORT_ASC", payload: option[1]})
        dispatch({type: "SET_PRODUCTS_SORT_PAGE", payload: 1})
    }
    return (
    
    <div className="catalog-settings-cont">
            <h3>Filters</h3>
            <div className="catalog-sort">
            <p>Page: {currentPage}</p>
            <p>{numOfProducts} products</p>
            <FormGroup>
                <FormControlLabel  control={<Checkbox onChange={(e) => dispatch({type: "SET_PRODUCTS_FILTER_STOCK", payload: e.target.checked})} 
                
                sx={{
                    color: 'orange',
                    '&.Mui-checked': {
                    color: 'orange',
                    },
                }}
                />} label="In stock" />
            </FormGroup>
            <label className="catalog-select">
                <select onChange={changeOption}>
                    <option value="popularity true">Popular</option>
                    <option value="popularity">Unpopular</option>
                    <option value="price">Expensive</option>
                    <option value="price true">Cheap</option>
                </select>
            </label>
            </div>
        </div>
    )
}