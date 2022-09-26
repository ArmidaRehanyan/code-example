function MyBiography(object){
    let name = object.name,
        age = object.age
    return (
        <div>
            <p className="Para">Biography</p> {name} {age}
        </div>
    )
}

export default MyBiography
