import React, { Component } from 'react'

export class level2 extends Component {
  render() {
    const {data, shown,onClick} = this.props;
    let dataKeys = Object.keys(data);

    let renderList = (property, index) =>{
        return (
            <div>
                <ul key={index} className="flyover-ul">
                    <h4>{property}</h4>
                    {
                        data[property].map((item, i) =>(
                            <li onClick={onClick.bind(this,item)}  className="flyover-li">{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    
    return (
        <React.Fragment>
            {
                shown ? (
                    <div className="overlay" style={{display:"flex",paddingTop:"5px", paddingBottom:"5px", width:"500px"}}>
                        <div className="col-1-of-2">
                            {
                                dataKeys.slice(0,Math.ceil(dataKeys.length/2)).map((property, index) =>{
                                    if(index%2 !== 0){
                                        return renderList(property,index)
                                    }
                                })
                            }
                        </div>
                        <div className="col-1-of-2">
                            {
                                dataKeys.slice(Math.ceil(dataKeys.length/2)+1,dataKeys.length).map((property, index) =>{
                                    if(index%2 === 0){
                                        return renderList(property, index)
                                    }
                                })
                            }
                        </div>

                    </div>
                ): null
            }
        </React.Fragment>
    )
  }
}

export default level2
