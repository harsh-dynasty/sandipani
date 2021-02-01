import React from 'react';


import '../assets/styles/newstyle.css'

import careers1 from '../assets/images/careers1.png'
import careersBanner from '../assets/images/careers-banner.jpg'

import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import {Fade , Flip } from 'react-reveal';


export default class NotificationSection extends React.Component{ 
    render(){
        return(
        <div >
            <section className="below_header_section">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-8 offset-md-2 col-xs-12 col-sm-12 h-100">
                    
                        <div className="middle_section animatable">
                        <Zoom>
                                <h1>Sandipani Classes</h1>
                                <p>Give a momentum to your career.</p>
                                </Zoom>
                        </div>
                   
                    </div>
                </div>
            </div>
        </section>
        
        
        <section className="common_div pd-60">
            <div className="container">
                <div className="row">
                   <div className="col-md-8 offset-md-2 col-xs-12 col-sm-12">
                        <div className="common_text">
                            <Fade left> <div className="heading_main"><h3>global marketplace</h3></div></Fade>
                            
                            <Fade right><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
        
        <section className="common_div pd-60">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="divide_text">
                            <span>SHARE OUR VALUES</span>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 ">
                    <Roll left>
                            <div className="box_sharevalue" >
                                <img src={careers1}/>
                                <span>TAKE CHARGE</span>
                            </div>
                        </Roll>
                        
                    </div>
        
                    <div className="col-md-2 col-sm-2 col-xs-6 ">
                   <Roll down>
                            <div className="box_sharevalue" >
                                <img src={careers1}/>
                                <span>TAKE CHARGE</span>
                            </div>
                        </Roll>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 ">
                    <Roll up>
                            <div className="box_sharevalue" >
                                <img src={careers1}/>
                                <span>TAKE CHARGE</span>
                            </div>
                        </Roll>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 ">
                    <Roll right>
                            <div className="box_sharevalue" >
                                <img src={careers1}/>
                                <span>TAKE CHARGE</span>
                            </div>
                        </Roll>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 ">
                        <Roll left>
                            <div className="box_sharevalue" >
                                <img src={careers1}/>
                                <span>TAKE CHARGE</span>
                            </div>
                        </Roll>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 ">
                       <Roll down>
                            <div className="box_sharevalue"  >
                                <img src={careers1}/>
                                <span>TAKE CHARGE</span>
                            </div>
                        </Roll>
                    </div>
        
                </div>
            </div>
        </section>
        
        
        <section className="common_div pd-60">
            <div className="container">
                <div className="row">
                   <div className="col-md-8 offset-md-2 col-xs-12 col-sm-12">
                        <div className="common_text">
                        <Fade left> <div className="heading_main"><h3>Love your job</h3></div></Fade>
                        <Fade right> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Fade> </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="common_div pd-60">
            <div className="container">
                <div className="row">
                    <Zoom>
                        <div className="col-md-12 col-xs-12 col-sm-12 img_res">
                            <img src={careersBanner}/>
                        </div>
                    </Zoom>
                  
                </div>
            </div>
        </section>
        
        
        
        <section className="common_div pd-60">
            <div className="container">
                <div className="row">
                   <div className="col-md-8 offset-md-2 col-xs-12 col-sm-12">
                        <div className="common_text">
                            <Flip left>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </Flip>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
        </div>
       
        )
    }
}