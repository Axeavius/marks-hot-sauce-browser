import React, { Component } from 'react';
import './HotSauceCard.css';

class HotSauceCard extends Component {
  constructor(props) {
    super(props);
    this.onCardClicked = this.onCardClicked.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }  

  onCardClicked(event) {
    event.preventDefault();
    const {dataCallback} = this.props;

    dataCallback({
      title: this.props.hotSauce.title,
      desc: this.props.hotSauce.description,
      imageURL: this.props.hotSauce.imageURL
    });
  };

  onDeleteItem(event) {
    event.preventDefault();

    // Prevent the parent from being clicked
    event.stopPropagation();

    this.props.deleteItem(this.props.hotSauce.id);
  }
  
  render() {
    const {hotSauce} = this.props;

    return (
      <div className="card" onClick={this.onCardClicked}>
        <img src={hotSauce.imageURL} alt={hotSauce.title} />
        <button className="delete-btn" onClick={(e) => this.onDeleteItem(e)}>+</button>
        <div className="info-section">
          <span className="name">{hotSauce.title}</span>
          <span className="desc">{hotSauce.subtitle}</span>
        </div>
      </div>
    );
  }
}

export default HotSauceCard;
