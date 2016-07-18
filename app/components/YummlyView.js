var React = require('react');
var FontAwesome = require('react-fontawesome');
var Link = require('react-router').Link;



var YummlyView = function(props){
  var recipes = props.recipe_list.map(function(recipe, key){
    if (recipe == ''){
      return;
    }
    return (
      <div key={key} className="import-recipe">
        <div className='import-title'>{recipe.title}</div>
        <a href={recipe.url} target="_blank">
        <img src={recipe.image} alt=""/>
        </a>
        <button className="yummly-add" onClick={props.open} data-image={recipe.image} data-ingredient={recipe.ingredient_list} title={recipe.title} >+</button>
    </div>);
  });

  return(
    <div className='import text-center'>
      <Link to='/'>
        <FontAwesome
          name='arrow-left'
          size='3x'
          style={{color: 'white', float: 'left'}}/>
      </Link>
      <div className="search-bar">
        <FontAwesome
          name="search"
          size='2x'/>
        <input type="text" id='search-text' placeholder="search"/>
      </div>
      <button onClick={props.handleSearch} className="search-btn">Search</button>
      <br/>
      {recipes}
  </div>

  )
}

module.exports = YummlyView;
