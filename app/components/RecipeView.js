var React = require('react');
var Bootstrap = require('react-bootstrap');
var Grid = Bootstrap.Grid;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;

var RecipeView = function(props){
  var query = props.query;
  var ingredient_list = query.ingredient_list;
  var ingredients = ingredient_list.map(function(ingredient, key){
    return(<div key={key}>
        <input type="text" defaultValue={ingredient} readOnly={true}/><br/>
      </div>
    )
  });
  return(
    <Grid className="full-recipe">
      <Row>
        <Col sm={4} md={5} lg={6} className="left">
          <img src={query.image} alt=""/>
            <div className="servings text-center">
              <span>1</span><br/>
              <button>-</button>
              Servings
              <button>+</button>
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
