import React, { Component } from 'react'

export class level2 extends Component {
  render() {
    const {data} = this.props;

    
    return (
      <div style={{width:"600px"}}>
        
          <div className="col-1-of-2">
            {
              Object.keys(data).map((property, index) =>{
                if(index%2 !== 0){
                  return (
                    <div>
                    <ul key={index}>
                    <h4>{property}</h4>
                    {
                      data[property].map((item, i) =>(
                        <li>{item}</li>
                      ))
                    }
                  </ul>
                  </div> 
                  )
                }
              })
            }
          </div>
          <div className="col-1-of-2">
          {
              Object.keys(data).map((property, index) =>{
                if(index%2 === 0){
                  return (
                    <div key={index}>
                    <ul >
                    <h4>{property}</h4>
                    {
                      data[property].map((item, i) =>(
                        <li>{item}</li>
                      ))
                    }
                  </ul>
                  </div> 
                  )
                }
              })
            }
          </div>
      
      </div>
    )
  }
}

export default level2
