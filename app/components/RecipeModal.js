var React = require('react');
var Modal = require('react-bootstrap').Modal;

var RecipeModal = function(props){
  var ingredient_list = props.ingredients.map(function(ingredient, key){
    return(
      <div key={key}>
        <input type="number" placeholder="#" className='quantity-field'
          onChange={props.onNumChange}/>
        <input type="text"  id={key} placeholder="Ingredient"
        onChange={props.onIngredientUpdate}
        value={ingredient}
        className='ingredient-field'/>
      </div>
    )
  });
  return(
    <Modal show={props.showModal} onHide = {props.close}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Recipe</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form className="form">
          <input type="text" placeholder="Title" onChange={props.onTitleUpdate} value={props.title}/>
          <input type="text" placeholder="Image URL" onChange={props.onImageUpdate} value={props.image}/>
          <input type="text" placeholder="Servings" onChange={props.onServingsUpdate} value={props.servings}/>
          <h2>Ingredient List:</h2>
          {ingredient_list}
          <button className="add-button" onClick={props.onAddClick}>+ add another ingredient</button>
          <button className="submit" onClick={props.onSubmit}>Save Recipe</button>
          <button className="delete-button" onClick={props.delete}>Delete</button>
        </form>
      </Modal.Body>
    </Modal>
  )
}


module.exports = RecipeModal;
