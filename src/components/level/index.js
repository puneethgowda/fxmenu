import React, { Component } from 'react'

export class Level extends Component {
  render() {
      const {data, onClick, activeListItem, arrowRequired, level, shown, boxShadow, styles} = this.props;
      console.log(activeListItem)
      
    return (
        <React.Fragment>
            {
                shown ? (
                    <div className={boxShadow? "level box-shadow": "level"}>
                        <ul style={styles}>
                            {
                                data.map((item, i) =>(
                                    <li
                                        key={i} className={activeListItem === item ? "active": ""}
                                        title={item}
                                        onClick={onClick.bind(this, item, level)}>
                                        <span>{item.substring(0, 25)}</span>
                                        {
                                            arrowRequired ?
                                                <i className="fa fa-chevron-right arrow-icon"></i>:
                                                null
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ) : null
            }
        </React.Fragment>
    )
  }
}

export default Level
