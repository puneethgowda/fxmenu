import React, { Component } from 'react';
import Level from '../../components/level';
import Leve2 from '../../components/level2';

import {MenuData} from '../../data'



export class Type2 extends Component {
    state = {
        source: MenuData,
        activeLevel1: '',
        activeLevel2: '',
        level2Shown: false
      }

      onLevelClick = (activeItem)=>{
        this.setState({activeLevel1:activeItem, level2Shown: true});
        console.log(activeItem)
      }

      componentWillMount(){
        document.addEventListener('click', this.handleOutsideClick, false);
      }
    
      componentWillUnmount(){
        document.removeEventListener('click', this.handleOutsideClick, false);
      }

      handleOutsideClick = (e) =>{
        if(!this.node.contains(e.target)){
            this.setState({activeLevel1: '',level2Shown: false});
            return;
            }
      }

      onItemClick = (item) =>{
        console.log(item);
      }

  render() {
    const { source, activeLevel1, level2Shown } = this.state;

    return (
      <div style={{display:"flex",position:"relative"}} ref={node => this.node = node}>
        <Level 
          arrowRequired   
          activeListItem={activeLevel1} 
          onClick={this.onLevelClick} 
          data={Object.keys(source)}
          level= {1}
          shown
          />
            <Leve2
                data={activeLevel1 === '' ? {} : source[activeLevel1]}
                onClick={this.onItemClick}
                shown={level2Shown}
            />
      </div>
    )
  }
}

export default Type2
