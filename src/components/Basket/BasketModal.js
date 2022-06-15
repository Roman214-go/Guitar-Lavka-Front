const BasketModal = ({active, setActive}) => {
    return (
        <div className={active ? "basket-modal active" : "basket-modal"} onClick={() => setActive(false)} >
            <div className="basket-modal-content" onClick={(e) => e.stopPropagation()}>
                <p>Sorry, we are unable to process your order at the moment. Try later.</p>   
            </div>
        </div>
    )
}

export default BasketModal