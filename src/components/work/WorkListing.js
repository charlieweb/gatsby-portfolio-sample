import React, { Component } from 'react';
import WorkTile from '../worktile/worktile';
import './work.scss'

const getCategories = works => {
  let categoryItems = works.map(work => {
    
    let industrie =  work.relationships.field_industry;
    let newitem = industrie.map(item => {return item.name}); 
    
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
class WorkListing extends Component {

  state = {
    items: this.props.works,
    UserItems: this.props.works,
    categories: getCategories(this.props.works),
    selectedItem:
      getCategories(this.props.works) &&
      getCategories(this.props.works)[0],
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
            let cat = item.relationships.field_industry;
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
        <div className="work__listing" data-column-arrangement="two--equal">
        {this.state.UserItems.map(edge => {
          
           const logo_image = edge.relationships.field_teaser_hover_image?.relationships.field_image; 
           const logo = logo_image ? logo_image : '';
           const teaser_image = edge.relationships.field_teaser_background_image?.relationships.field_image;
           const items = {
              title: edge.title,
              text : edge.field_teaser_hover_text,
              logo : logo.localFile ? logo.localFile.childImageSharp.fluid : null,
              image : teaser_image.localFile ? teaser_image.localFile.childImageSharp.fluid : null,
              link: edge.path.alias,
            }
          return (
            <WorkTile key={edge.id} {...items} />
          )
        })}
         </div>
       </>
     )
   }
}

export default WorkListing

