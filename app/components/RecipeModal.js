var React = require('react');
var Modal = require('react-bootstrap').Modal;

var RecipeModal = function(props){
  var ingredient_list = props.ingredients.map(function(ingredient, key){
    return(
      <input type="text" key={key} id={key} placeholder="Ingredient" onChange={props.onIngredientUpdate}/>
    )
  });
  return(
    <Modal show={props.showModal} onHide = {props.close}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">New Recipe</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form className="form">
          <input type="text" placeholder="Title" onChange={props.onTitleUpdate}/>
          <input type="text" placeholder="Image URL" onChange={props.onImageUpdate}/>
          <h2>Ingredient List:</h2>
          {ingredient_list}
          <button className="add-button" onClick={props.onAddClick}>+ add another ingredient</button>
          <button className="submit" onClick={props.onSubmit}>Create Recipe</button>
        </form>
      </Modal.Body>
    </Modal>
  )
}


module.exports = RecipeModal;
