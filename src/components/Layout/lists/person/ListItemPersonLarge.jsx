const ListItemPersonLarge = ({ person }) => {
    const { name, age, hairColor, hobbies } = person;

    return (
        <div>
            <h3>{name}</h3>
            <p> age: {age}</p>
            <p> hair color: {hairColor}</p>
            <h3>Hobbies</h3>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>

        </div>
    )
}

export default ListItemPersonLarge;