var React = require('react');
var Bootstrap = require('react-bootstrap');
var Grid = Bootstrap.Grid;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;

var RecipeView = function(props){
  var query = props.query;
  var ingredient_list = query.ingredient_list.split(',');
  var ingredients = ingredient_list.map(function(ingredient, key){
    if (ingredient == ''){
      return;
    }
    return(<div key={key}>
        <input type="number" value={props.num_list[key]} readOnly={true}/>
        <input type="text" defaultValue={ingredient} className="ingredient" readOnly={true}/><br/>
      </div>
    )
  });
  return(
    <Grid className="full-recipe">
      <Row>
        <Col sm={4} md={5} lg={6} className="left">
          <img src={query.image} alt=""/>
            <div className="servings text-center">
              <span>{props.servings}</span><br/>
              <button onClick={props.onServingClick} id='-'>-</button>
              Servings
              <button onClick={props.onServingClick} id='+'>+</button>
            </div>
        </Col>
        <Col sm={4} md={5} lg={6} className='full-recipe_info'>
          <input type="text" className='full-recipe_title'
            defaultValue={query.title}/>
            <h2>Ingredients</h2>
            {ingredients}
        </Col>
      </Row>
    </Grid>
  )
}


module.exports=RecipeView;
