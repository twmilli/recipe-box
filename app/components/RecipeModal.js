var React = require('react');
var Modal = require('react-bootstrap').Modal;

var RecipeModal = function(props){
  var ingredient_list = props.ingredients.map(function(ingredient, key){
    return(
      <div key={key}>
        <input type="number" min='0' placeholder="#" id={key} className='quantity-field'
          onChange={props.onNumChange} value={props.num_list[key]} required/>
        <input type="text"  id={key} placeholder="Ingredient"
        onChange={props.onIngredientUpdate}
        value={ingredient}
        className='ingredient-field'
        required/>
      </div>
    )
  });
  return(
    <Modal show={props.showModal} onHide = {props.close}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Recipe</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <button className="delete-button" onClick={props.delete}>Delete</button>
        <form className="form">
          <input type="text" placeholder="Title" onChange={props.onTitleUpdate} value={props.title} required/>
          <input type="text" placeholder="Image URL" onChange={props.onImageUpdate} value={props.image} required/>
          <input type="number" min='0' placeholder="Servings" onChange={props.onServingsUpdate} value={props.servings} required/>
          <h2>Ingredient List:</h2>
          {ingredient_list}
          <button className="submit" onClick={props.onSubmit} type="submit">Save Recipe</button>
        </form>
        <button className="add-button" onClick={props.onAddClick}>+ add another ingredient</button>
      </Modal.Body>
    </Modal>
  )
}


module.exports = RecipeModal;
