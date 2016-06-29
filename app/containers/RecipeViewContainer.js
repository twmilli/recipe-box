var React = require('react');
var RecipeView = require('../components/RecipeView');
var Link = require('react-router').Link;
var FontAwesome =require('react-fontawesome');
var RecipeViewContainer = React.createClass({

  getInitialState: function(){
    return{
      servings: parseInt(this.props.location.query.servings,10),
      num_list: this.props.location.query.num_list.split(',')
    }
  },

  handleUpdateServings: function(e){
    var new_servings = this.state.servings;
    if (e.currentTarget.id == '+'){
      new_servings += 1;
    }
    else{
      if (new_servings > 1){
        new_servings-=1;
      }
    }
    var new_list = this.getNumList(new_servings);
    this.setState({
      servings: new_servings,
      num_list: new_list
    });
  },

  getNumList: function(new_servings){
    var factor = new_servings/this.state.servings
    var new_list = (this.state.num_list.map(function(num){
      return(num*factor)
    }));
    return new_list;
  },

  render: function(){
    return(
      <div>
        <Link to='/'>
          <FontAwesome
            name='arrow-left'
            size='3x'
            style={{color: 'white'}}/>
        </Link>
        <RecipeView
          query={this.props.location.query}
          onServingClick={this.handleUpdateServings}
          servings={this.state.servings}
          num_list={this.state.num_list}/>
      </div>

    )
  }
});

module.exports = RecipeViewContainer;
