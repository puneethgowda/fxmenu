import React, { Component } from 'react'

export class Level extends Component {
  render() {
      const {data, onClick, activeListItem, arrowRequired, level, shown} = this.props;

    return (
        <React.Fragment>
            {
                shown ? (
                    <div className={"level"}>
                        <ul className="flyover-ul">
                            {
                                data.map((item, i) =>(
                                    <li
                                        key={i} className={activeListItem === item ? "active flyover-li": "flyover-li"}
                                        title={item}
                                        onClick={onClick.bind(this, item, level)}>
                                        {item.substring(0, 25)}
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
