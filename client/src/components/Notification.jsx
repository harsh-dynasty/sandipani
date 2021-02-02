import React from 'react';


import '../assets/styles/newstyle.css'



import {Fade } from 'react-reveal';
import axios from 'axios';

export default class NotificationSection extends React.Component{ 
    constructor(props){
        super(props)
        this.state={
            notifications:[]
        }
    }
    async componentDidMount(){
        var res=await axios.get('/getNotifications')
        console.log(res)
        var data=await res.data.docs
        this.setState({notifications:data})
    }
    render(){
      
       
        return(
        <div>
        
        <section className="common_div pd-60 off_white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 text-center col-sm-12">
                        <div className="heading_main"><h3>Notifications!</h3></div><hr/>
                    </div>
                  
                      
                      <div className="tab-content">
                        <div className="tab-pane  active">
                          <div className="row" >
                              {this.state.notifications.map(notification=>{
                                return(
                                <Fade left>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="box_carrers_inner">
                                        <h3>{notification.date}</h3><hr/>
                                        <p>{notification.mssg}</p>
                                        
                                    </div>
                                </div>
                                </Fade>
                                )
                            })}
                              
                            
                          </div>
                        </div>
                       
                        
                        
        
                        
                      </div>
                </div>
            </div>
        </section>
        </div>
       
        )
    }
}