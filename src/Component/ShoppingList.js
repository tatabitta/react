import React from 'react';

class ShoppingList extends React.Component {
    render() {
    console.log(this.props);
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name} age: {this.props.age} </h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
}
  
export default ShoppingList;
