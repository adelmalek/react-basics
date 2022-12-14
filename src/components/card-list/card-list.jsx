import './card-list.css';

import Card from '../card/card';

const CardList = ({ monsters }) => {
    return (
        <div className='card-list'>
            {monsters.map(monster => <Card key={monster.id} monster={monster} />)}
        </div>
    )
}

export default CardList;

/*
class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {monsters.map(monster => <Card key={monster.id} monster={monster} />)}
            </div>
        )
    }
}

export default CardList;
*/