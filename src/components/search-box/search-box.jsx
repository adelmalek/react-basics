import './search-box.css';

const SearchBox = ({ handleChange, className, placeholder }) => {
    return (
        <input 
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

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