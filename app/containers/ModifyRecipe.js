var React = require('react');
var RecipeModal = require('../components/RecipeModal');
var FontAwesome = require('react-fontawesome');

var ModalContainer = React.createClass({
  getInitialState: function(){
    return{
      showModal: false,
      title: this.props.title,
      image: this.props.image,
      ingredient_list:this.props.ingredient_list
    }
  },

  getDefaultProps: function(){
    return{
      showModal: false,
      title: '',
      image: '',
      ingredient_list:['','','']
    }
  }

    close: function(){
      this.setState({
        showModal: false
      });
    },

    handleAddClick:function(){
      var new_list = this.state.ingredient_list;
      new_list.push(0);
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

    handleSubmit: function(e){
      this.props.modifyRecipe(this.state.image, this.state.ingredient_list, this.state.title, this.props.id);
      this.setState({
        showModal: false
      });
    },

    delete: function(e){
      console.log(this.props);
      var id = this.props.id;
      console.log(id);
      this.props.delete(id);
      this.setState({
        showModal: false
      });
    },


  render:function(){
    return(
    <div>
      <FontAwesome
        name="pencil"
        size='2x'
        className='edit'
        onClick={this.open}/>
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
