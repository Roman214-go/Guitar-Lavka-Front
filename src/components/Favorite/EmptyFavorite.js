import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md"

export default function EmptyFavorite() {
    return (
        <div className="favorite-empty">
            <p>You don't have any favorites, go to the <Link to="/catalog">catalog</Link> to select what you want</p>
            <MdFavorite className="favorite-empty-anim"/>
        </div>
    )
}