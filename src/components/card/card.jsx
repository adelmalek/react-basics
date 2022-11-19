import './card.css';

const Card = ({ monster }) => {
    return (
        <div className='card-container'>
            <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
}

export default Card;

/*
class Card extends Component {
    render() {
        const {id, name, email} = this.props.monster;

        return (
            <div className='card-container'>
                            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                            <h2>{name}</h2>
                            <p>{email}</p>
            </div>
        )
    }
}

export default Card;
*/