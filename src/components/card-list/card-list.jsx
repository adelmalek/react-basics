import { Component } from 'react';

import './card-list.css';

import Card from '../card/card';

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