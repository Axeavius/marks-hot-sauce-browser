import React, { Component } from 'react';
import HotSauceData from '../hotsauces.json';
import './HotSauceList.css';
import './HotSauceDetail.css';

import HotSauceCard from './HotSauceCard';

class HotSauceList extends Component {
  constructor(props) {
    super(props);

    const hotSauces = HotSauceData.list.map((hotSauceItem, index) => {
      return hotSauceItem;
    })

    this.state = {
      hotSauceList: hotSauces,
      showHotSauceDetail: false,
      detailTitle: "",
      detailDesc: "",
      detailImageURL: ""
    };

    this.hotSauceDetailCallback = this.hotSauceDetailCallback.bind(this);
    this.backToHotSauceList = this.backToHotSauceList.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  hotSauceDetailCallback(hotSauceDetail) {
    this.setState({
      showHotSauceDetail: true,
      detailTitle: hotSauceDetail.title,
      detailDesc: hotSauceDetail.desc,
      detailImageURL: hotSauceDetail.imageURL
    });
  }

  backToHotSauceList() {
    this.setState({
      showHotSauceDetail: false
    });
  }

  onDeleteItem(id) {
    this.setState(prevState => ({
      hotSauceList: prevState.hotSauceList.filter(item => item.id !== id )
    }));
  }

  render() {
    const {showHotSauceDetail} = this.state;

    if (showHotSauceDetail === true) {
      return (
        <div className="hot-sauce-detail">
          <div className="left">
            <div className="header">
              <h3>
                <button type="button" onClick={this.backToHotSauceList}>&lt; Back to Hot Sauce List</button>
              </h3>
              <h1>{this.state.detailTitle}</h1>
            </div>
            <div className="img-wrapper">
              <img src={this.state.detailImageURL} alt={this.state.detailTitle} />
            </div>
          </div>
          <div className="right">
            <p>{this.state.detailDesc}</p>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="hot-sauce-grid">
          <h2>Mark's Hot Sauce Browser</h2>
          <div>
            {this.state.hotSauceList.map((hotSauceItem, index) => {
              return (
                <HotSauceCard 
                  hotSauce={hotSauceItem} 
                  key={`hot-sauce-key ${index}`}
                  dataCallback={this.hotSauceDetailCallback}
                  deleteItem={this.onDeleteItem.bind(this)} 
                />
              )
            })}
          </div>
        </div>
      )
    }
  }
}

export default HotSauceList;
