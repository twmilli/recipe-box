var React = require('react');
var Recipe = require('./Recipe');
var ModalContainer = require('../containers/ModalContainer');
var Link = require('react-router').Link;
var FontAwesome = require('react-fontawesome');
var Main = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return {
      recipe_list:this.props.recipe_list,
      search: ''
    }
  },

  componentWillMount: function(){
    var query = this.props.location.query;
    if (query.title != null){
      this.addRecipe(query.image, query.ingredient_list.split(','), query.num_list, query.title, 1);
    }
  },

  addRecipe: function(image, ingredient_list, num_list, title, servings){
    var new_recipe = this.createRecipe(image, ingredient_list,num_list, title, servings);
    var new_list = this.state.recipe_list;
    new_list.push(new_recipe);
    this.setState({
      recipe_list: new_list
    });
  },

  importRecipe: function(recipe){
    var new_list = this.state.recipe_list;
    new_list.push(recipe);
    this.setState({
      recipe_list: new_list
    });
  },

  modifyRecipe: function(image, ingredient_list, num_list, title, id, servings){
    var new_recipe = this.createRecipe(image, ingredient_list, num_list, title, servings);
    var new_list = this.state.recipe_list;
    new_list[id] = new_recipe;
    this.setState({
      recipe_list: new_list
    });
  },

  createRecipe: function(image, ingredient_list,num_list, title, servings){
    var new_recipe = {
      image: image,
      ingredient_list: ingredient_list,
      num_list: num_list,
      title: title,
      servings : servings
    }
    return new_recipe;
  },

  delete: function(id){
    var new_list = this.state.recipe_list;
    delete new_list[id];
    this.setState({
      recipe_list: new_list
    });
  },


  showRecipe: function(e){
    var curr_recipe = this.state.recipe_list[e.currentTarget.id];
    this.props.saveRecipeList(this.state.recipe_list);
    this.context.router.push({
      pathname: '/recipeView',
      query:{
        image: curr_recipe.image,
        title: curr_recipe.title,
        ingredient_list: [curr_recipe.ingredient_list],
        num_list: [curr_recipe.num_list],
        servings: curr_recipe.servings
      }
    });
  },

  onerror: function(e){
    console.log(e.currentTarget);
    e.currentTarget.src='http://nemanjakovacevic.net/wp-content/uploads/2013/07/placeholder.png';
  },

  getDisplayRecipeList: function(){
    var searchText = this.state.search;
    if (searchText ==''){
      return (this.state.recipe_list);
    }
    searchText.toLowerCase();
    var recipe_list = this.state.recipe_list;
    var display_list=[];
    for (var i=0; i<recipe_list.length; i++){
      var title = recipe_list[i].title.toLowerCase();
      if (title.search(searchText) == 0){
        display_list.push(recipe_list[i]);
      }
    }
    return display_list;
  },

  handleSearch: function(e){
    this.setState({
      search: e.currentTarget.value
    });
  },

  handleImportRecipe: function(e){
    this.context.router.push({
      pathname: '/import',
      query:{
        importRecipe: this.importRecipe
      }
  });
},

  render: function(){
    var recipe_list = this.getDisplayRecipeList();
    var recipes = recipe_list.map(function(recipe, key){
      return(
        <Recipe key={key} recipe={recipe} id={key} showRecipe={this.showRecipe}
          delete={this.delete}
          onSubmit={this.modifyRecipe}
          onerror={this.onerror}/>
    );
    }.bind(this));

    return (
      <div>
        <button className='yummly' onClick={this.handleImportRecipe}>+ Import Recipe From Yummly</button>
        <div className="search-bar">
          <FontAwesome
            name="search"
            size='2x'/>
          <input type="text" placeholder="search" onChange={this.handleSearch}/>
        </div>
        <ModalContainer onSubmit={this.addRecipe} delete={this.delete} id={this.state.recipe_list.length}/>
        {recipes}
      </div>
    )
  }
});

module.exports = Main;
