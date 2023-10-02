const PersonCard = (props) => {
    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={props.person.picture.large} className="card-img-top" alt={props.person.name.first}/>
            <div className="card-body">
                <h5 className="card-title">{props.person.name.first}</h5>
                <p className="card-text">{props.person.quote}</p>
            </div>
        </div>
    );
};

export default PersonCard;
