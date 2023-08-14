
const Itemlist = ({ item }) => {
    console.log(item)
    return (
        <div className="">
            {item.map((item) => (
                <div className=" MenuItemList m-2 p-2 bg-slate-300  border-b-2 border-purple-500" key={item.card.info.id}>
                    <div>
                        <p>{item.card.info.name}</p>
                        <span>Rs {item.card.info.price / 100}</span>
                    </div>
                    <p className=" text-xs text-slate-500">{item.card.info.description}
                    </p>
                </div>
            ))}
        </div>
    )
}
export default Itemlist