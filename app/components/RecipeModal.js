var React = require('react');
var Modal = require('react-bootstrap').Modal;

var RecipeModal = React.createClass({
  getInitialState: function(){
    return{
      showModal: false,
      ingredients: [0,0,0]
    };
  },

  handleAddClick:function(){
    this.state.ingredients.push(0);
    this.setState({
      ingredients: this.state.ingredients,
      showModal: true
    });
  },

  close: function(){
    console.log('closing');
    this.setState({
      showModal: false
    });
  },

  open: function(){
    this.setState({
      showModal: true
    });
  },

  render: function(){
    var ingredient_list = this.state.ingredients.map(function(ingredient, key){
      return(
        <input type="text" name="ingredients" key={key} placeholder="Ingredient"/>
      )
    });
    return(
    <div>
      <button className="add" onClick={this.open}>+</button>
      <Modal show={this.state.showModal} onHide = {this.close}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">New Recipe</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form className="form">
            <input type="text" name="title" placeholder="Title"/><br/>
            <h2>Ingredient List:</h2>
            {ingredient_list}
            <button className="add-button" onClick={this.handleAddClick}>+ add another ingredient</button>
            <button className="submit">Create Recipe</button>
          </form>

        </Modal.Body>
      </Modal>
    </div>
  )
}
});

module.exports = RecipeModal;
