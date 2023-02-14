import './card-list.css';

import Card from '../card/card';

import { Monster } from '../../App';

type CardListProps = {
    monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => {
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