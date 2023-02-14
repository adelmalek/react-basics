import './search-box.css';

import { ChangeEvent } from 'react';

type SearchBoxProps = {
    className: string,
    placeholder?: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ handleChange, className, placeholder }: SearchBoxProps) => {
    return (
        <input 
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
};

export default SearchBox;

/*
class SearchBox extends Component {
    render() {
        return (
            <input 
                className={`search-box ${this.props.className}`}
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.props.handleChange}
        />
        )
    }
}

export default SearchBox;
*/