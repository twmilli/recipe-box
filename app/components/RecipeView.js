var React = require('react');

var RecipeView = function(props){
  var query = props.location.query;
  var ingredient_list = query.ingredient_list;
  var ingredients = ingredient_list.map(function(ingredient, key){
    return(<div>
      <input type="text" key={key} defaultValue={ingredient}/><br/>
      </div>
    )
  });
  return(
    <div className="full-recipe">
      <img src={query.image} alt=""/>
      <div className='full-recipe_info'>
        <input type="text" className='full-recipe_title' defaultValue={query.title}/>
        <h2>Ingredients</h2>
        {ingredients}
      </div>
    </div>
  )
}


module.exports=RecipeView;
