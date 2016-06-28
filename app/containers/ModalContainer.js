var React = require('react');
var RecipeModal = require('../components/RecipeModal');

var ModalContainer = React.createClass({
  getInitialState: function(){
    return{
      showModal: false,
      title: '',
      image: '',
      ingredient_list:['','','']
    }
  },

    close: function(){
      this.resetState();
    },

    handleAddClick:function(){
      var new_list = this.state.ingredient_list;
      new_list.push('');
      this.setState({
        ingredient_list: new_list
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

    delete: function(e){
      this.props.delete(e);
      this.resetState();
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

    handleUpdateNum: function(e){

    },

    handleSubmit: function(e){
      this.props.addRecipe(this.state.image, this.state.ingredient_list, this.state.title);
      this.resetState();
    },

    resetState: function(){
      this.setState({
        showModal: false,
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
        ingredients={this.state.ingredient_list}
        title={this.state.title}
        image={this.state.image}
        onSubmit={this.handleSubmit}
        onTitleUpdate={this.handleUpdateTitle}
        onImageUpdate={this.handleUpdateImage}
        onIngredientUpdate={this.handleUpdateIngredient}
        delete={this.delete}/>
    </div>
  )
  }
});

module.exports = ModalContainer;
