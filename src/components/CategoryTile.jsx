

const CategoryTile = ({image, name}) => {
  return (
    <div>
        <div>
        <p>{name}</p>
        <img src={image} alt="name" />
        </div>
    </div>
  )
}

export default CategoryTile