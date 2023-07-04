

const Card = ({item, handleClick,id})=>{
    const classItem = item.stat ? " active " + item.stat : ""
    return (
        <div className={"card" + classItem} onClick={()=> handleClick(id) }>
           <img src={item.img} alt="images-card" className="img-fluid"/>
        </div>
        )
}
export default Card