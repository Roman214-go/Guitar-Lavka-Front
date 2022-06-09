import CatalogFilter from "../components/Catalog/CatalogFilter";
import CatalogProducts from "../components/Catalog/CatalogProducts";
import CatalogSort from "../components/Catalog/CatalogSort";

export default function Catalogpage() {
    return (
        <>
          <CatalogSort />
          <div className="filter-products-cont">
            <CatalogFilter />
            <CatalogProducts />
          </div>
        </>
    )
}