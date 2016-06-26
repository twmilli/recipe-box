var React = require('react');
var PropTypes = React.PropTypes;

var Recipe = function(props){
  var ingredients = props.ingredient_list.map(function(ingredient, key){
    return (
      <tr key={key}>
        <td>{ingredient.amount}</td>
        <td>{ingredient.name}</td>
      </tr>
    )
  });

  return(
    <div className = "recipe">
      <h1 onClick{props.handleClick}>{props.title}</h1>
      <div className="full-view">
      <h3>{props.description}</h3>
      <img src={props.image} alt=""/>
      <table>
        <tbody>
          {ingredients}
        </tbody>
      </table>
      </div>
    </div>
  )
}

Recipe.PropTypes = {
  ingredient_list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string
}
module.exports = Recipe;
