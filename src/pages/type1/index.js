import React, { Component } from 'react';
import {MenuData} from '../../data'
import Level from '../../components/level'

export class Type1 extends Component {

  state = {
    source: MenuData,
    activeLevel1: '',
    activeLevel2: '',
    level2Shown: false,
    level3Shown: false
  }

  componentWillMount(){
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount(){
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick = (e) =>{
      if(!this.node.contains(e.target)){
      this.setState({activeLevel1: '', activeLevel2: '', level2Shown: false, level3Shown: false});
      return;
      }
  }

  onLevelClick = (activeItem, levelNumber) =>{ 
    switch(levelNumber){
      case 1: 
        this.setState({activeLevel1: activeItem, activeLevel2: '', level2Shown: true});
        break;
      case 2:   
        this.setState({activeLevel2: activeItem,level3Shown: true});
        break;
      case 3: console.log(activeItem);
        break;  
    }
  }


  render() {

    const { source, activeLevel1 ,activeLevel2, level2Shown, level3Shown} = this.state;

    return (
      <div className="menu"  ref={node => this.node = node}>
        <Level 
          arrowRequired   
          activeListItem={activeLevel1} 
          onClick={this.onLevelClick} 
          data={Object.keys(source)}
          level= {1}
          shown
          styles={{marginTop:"20px", paddingTop:"20px"}}
          />
          <div className="overlay" style={{display:"flex",paddingTop:"5px", paddingBottom:"5px"}}>
            <Level
                arrowRequired
                activeListItem={activeLevel2}
                onClick={this.onLevelClick}
                data={activeLevel1 === '' ? [] : Object.keys(source[activeLevel1])}
                level= {2}
                shown={level2Shown}
            />
            <Level
                arrowRequired={false}
                onClick={this.onLevelClick}
                data={activeLevel2 === '' ? [] : (source[activeLevel1])[activeLevel2]}
                level= {3}
                shown={level3Shown}
            />
          </div>
      </div>
    )
  }
}

export default Type1
