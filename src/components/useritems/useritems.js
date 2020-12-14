import React, { Component } from 'react';
import UserTeaser from '../user/UserTeaser';
import './useritems.scss'

const getCategories = users => {
  let categoryItems = users.map(user => {
    
    let position =  user.relationships.field_position_category;
    let newitem = position.map(item => {return item.name}); 
    
    return newitem
  })
  let NewArray = Array.prototype.concat.apply([], categoryItems)
  let update = NewArray.filter(function( element ) {
   return element !== undefined;
   });
  let uniqueCategories = [...new Set(update)]
  let categories = Array.from(uniqueCategories)
  categories = ["All", ...categories]
  
  return categories
}

const activeButtonClass = {
  backgroundColor: "#313d42",
  color: "#fff",
}
class UserList extends Component {

  state = {
    items: this.props.users,
    UserItems: this.props.users,
    categories: getCategories(this.props.users),
    selectedItem:
      getCategories(this.props.users) &&
      getCategories(this.props.users)[0],
  }
  
  handleItems = category => {
    if (category === "All") {
      this.setState({
        UserItems: [...this.state.items],
        selectedItem: category,
      })
    } else {
      this.setState({
        UserItems: [
          ...this.state.items.filter(item => {
            let cat = item.relationships.field_position_category;
            let catelement = cat.map(value => {return value.name});
             return catelement.includes(category)
          }),
        ],
        selectedItem: category,
      })
    }
  }

   render() {
     console.log(this.state.selectedItem)
     console.log(this.state.UserItems)
     return (
       <>
       <div className="user__filter">
         {this.state.categories.map((category, index) => {
            return (
              
              <button
                className="button__filter"
                type="button"
                key={index}
                onClick={() => this.handleItems(category)}
                style={
                  this.state.selectedItem === category
                    ? activeButtonClass
                    : null
                }
              >
                
                {category}
              </button>
            )
          })}

       </div>
        <div className="user__listing">
        {this.state.UserItems.map(edge => {
          return (
            <UserTeaser key={ edge.id } {...edge} />
          )
        })}
         </div>
       </>
     )
   }
}

export default UserList

