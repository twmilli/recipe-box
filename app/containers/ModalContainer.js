var React = require('react');
var RecipeModal = require('../components/RecipeModal');

var ModalContainer = React.createClass({
  getInitialState: function(){
    return{
      showModal: false,
      ingredients: [0,0,0],
      title: '',
      image: '',
      ingredient_list:['','','']
    }
  },

    close: function(){
      this.setState({
        showModal:false,
        ingredients: [0,0,0]
      });
    },

    handleAddClick:function(){
      var new_list = this.state.ingredients;
      new_list.push(0);
      this.setState({
        ingredients: new_list
      });
    },

    open: function(){
      this.setState({
        showModal: true
      });
    },

    handleUpdateTitle: function(e){
      this.setState({
        title: e.target.value
      })
    },

    handleUpdateImage: function(e){
      this.setState({
        image: e.target.value
      });
    },

    handleUpdateIngredient: function(e){
      var new_list = this.state.ingredient_list;
      new_list[e.target.id] = e.target.value;
      this.setState({
        ingredient_list: new_list
      });
    },

    handleSubmit: function(e){
      this.props.addRecipe(this.state.image, this.state.ingredient_list, this.state.title);
      this.resetState();
    },

    resetState: function(){
      this.setState({
        showModal: false,
        ingredients: [0,0,0],
        title: '',
        image: '',
        ingredient_list:['','','']
      });
    },


  render:function(){
    return(
    <div>
      <button className="add" onClick={this.open}>+</button>
      <RecipeModal
        close={this.close}
        showModal={this.state.showModal}
        onAddClick={this.handleAddClick}
        ingredients={this.state.ingredients}
        onSubmit={this.handleSubmit}
        onTitleUpdate={this.handleUpdateTitle}
        onImageUpdate={this.handleUpdateImage}
        onIngredientUpdate={this.handleUpdateIngredient}/>
    </div>
  )
  }
});

module.exports = ModalContainer;
