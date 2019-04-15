import React, { Component } from 'react';
import Level from '../../components/level';
import Leve2 from '../../components/level2';

import {MenuData} from '../../data'



export class Type2 extends Component {
    state = {
        source: MenuData,
        activeLevel1: '',
        activeLevel2: '',
      }

      onLevelClick = (activeItem)=>{
        this.setState({activeLevel1:activeItem})
      }

      componentWillMount(){
        document.addEventListener('click', this.handleOutsideClick, false);
      }
    
      componentWillUnmount(){
        document.removeEventListener('click', this.handleOutsideClick, false);
      }

      handleOutsideClick = (e) =>{
        if(!this.node.contains(e.target)){
            this.setState({activeLevel1: ''});
            return;
            }
      }

  render() {
    const { source, activeLevel1 } = this.state;

    return (
      <div style={{display:"flex"}} ref={node => this.node = node}>
        <Level 
          arrowRequired   
          activeListItem={activeLevel1} 
          onClick={this.onLevelClick} 
          data={Object.keys(source)}
          level= {1}
          />
        <Leve2 
          data={activeLevel1 === '' ? {} : source[activeLevel1]}
        />
      </div>
    )
  }
}

export default Type2
