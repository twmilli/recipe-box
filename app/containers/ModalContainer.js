var React = require('react');
var RecipeModal = require('../components/RecipeModal');
var FontAwesome = require('react-fontawesome');

var ModalContainer = React.createClass({
  getInitialState: function(){
    var recipe = this.props.recipe;
    return{
      showModal: this.props.showModal,
      title: recipe.title,
      image: recipe.image,
      ingredient_list:recipe.ingredient_list,
      num_list:recipe.num_list,
      servings: recipe.servings
    }
  },

  getDefaultProps: function(){
    return{
      recipe:{
        title: '',
        image: '',
        ingredient_list:['','',''],
        num_list: ['','',''],
        servings: ''
      },
      showModal: false,
      modify: false
    }
  },

    close: function(){
      this.reset();
    },

    reset: function(){
      this.setState({
        showModal: false,
        recipe:{
          title: '',
          image: '',
          ingredient_list:['','',''],
          num_list: ['','',''],
          servings: ''
        },
      });
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

    handleUpdateServings: function(e){
      this.setState({
        servings: e.target.value
      });
    },

    handleUpdateNum: function(e){
      var new_list = this.state.num_list;
      new_list[e.target.id] = e.target.value;
      this.setState({
        num_list: new_list
      });
    },

    handleSubmit: function(e){
      if (this.isValid()){
        this.props.onSubmit(this.state.image, this.state.ingredient_list, this.state.num_list, this.state.title, this.props.id, this.state.servings);
        this.reset();
      }
    },

    isValid: function(){
      var ingredient_list = this.state.ingredient_list;
      var num_list = this.state.num_list;
      if (this.state.title == '' || this.state.image == '' || this.state.ingredient_list[0]=='' || this.state.servings==''){
        return false;
      }
      return true;
    },

    delete: function(e){
      var id = this.props.id;
      this.props.delete(id);
      this.reset();
    },


  render:function(){
    var triggerButton;
    if (this.props.modify){
      triggerButton =(<FontAwesome
              name="pencil"
              size='2x'
              className='edit'
              onClick={this.open}/>)
    }
    else{
      triggerButton=(<button className="add" onClick={this.open}>+</button>)
    }
    return(
    <div>
      {triggerButton}
      <RecipeModal
        close={this.close}
        showModal={this.state.showModal}
        onAddClick={this.handleAddClick}
        ingredients={this.state.ingredient_list}
        title={this.state.title}
        image={this.state.image}
        num_list={this.state.num_list}
        servings={this.state.servings}
        onSubmit={this.handleSubmit}
        onTitleUpdate={this.handleUpdateTitle}
        onImageUpdate={this.handleUpdateImage}
        onIngredientUpdate={this.handleUpdateIngredient}
        onServingsUpdate={this.handleUpdateServings}
        onNumChange={this.handleUpdateNum}
        delete={this.delete}/>
    </div>
  )
  }
});

module.exports = ModalContainer;
