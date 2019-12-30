// TODO
class GroceryList extends React.Component {

  render() {
    return (
      <ul>
        {['Eggs', 'Milk', 'Bread'].map(item => <GroceryItem item={item} />)}
      </ul>
    );
  }

}

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedToCart: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
  }

  handleClick(e) {
    this.setState({addedToCart: !this.state.addedToCart});
  }

  handleOnMouseEnter(e) {
    e.target.style.fontWeight = 'bold';
    e.target.style.cursor = 'pointer';
  }

  handleOnMouseOut(e) {
    e.target.style.fontWeight = '';
  }

  render() {
    let style = {textDecoration: this.state.addedToCart ? 'line-through' : 'none'};

    return <li style={style} onClick={this.handleClick} onMouseEnter={this.handleOnMouseEnter} onMouseOut={this.handleOnMouseOut}>{this.props.item}</li>
  }
}

ReactDOM.render(<GroceryList />, document.getElementById('app'));