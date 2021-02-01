import React from 'react';
import{ Zoom , Fade }from 'react-reveal';
import '../assets/styles/newstyle.css'
import $ from 'jquery'
import axios from 'axios'
export default class ContactUs extends React.Component{
    constructor(props){
        super(props)
        this.state={
            post:false,
            notDate:'',
            mssg:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handlePost=this.handlePost.bind(this)
    }
    handlePost(){
        if($("#pin").val()=='123456'){
           
            axios.post("http://localhost:5000/addNotification",{notDate:this.state.notDate,mssg:this.state.mssg})
            .then(res=>{
                this.setState({post:false})
            })
        }
    }
    handleChange(e){
        this.setState(prevState=>{
            if(e.target.name=='post')
                return {post:!prevState['post']}
            else{
                return{[e.target.name]:e.target.value}
            }
        })
    }
    componentDidMount(){
        $("#error-mssg").hide('fast')
        $("#post-btn").on('click',function(){
            if($("#pin").val()!='123456')
                $("#error-mssg").show('fast')
            else{
                $("#error-mssg").hide('fast')
               
            }
        })
    }
    render(){
        return( <section className="common_div pd-60">
        <div className="container">
            <div className="row">
              <div className="col-md-12 col-xs-12 col-sm-12">
                <Zoom>
                <div className="careers_from">
                  <div className="heading_main"><h3>Add a new Notification</h3></div>
                   
                        
                        <div className="form-group">
                          <label for="usr">Date</label>
                          <input type="date" name="notDate" onChange={this.handleChange}className="form-control"/>
                        </div>
                        
                        <div className="form-group">
                          <label for="pwd">Message:</label>
                          <textarea name="mssg" onChange={this.handleChange} className="form-control" rows="4"></textarea>
                        </div>
                        <button className="btn_theme" name="post" onClick={this.handleChange}>Continue</button>
                    
                </div>
                </Zoom>
               </div>
    
               
            </div>
            <div style={{display:this.state.post?'flex' : 'none',alignItems:'center',justifyContent:'center',width:'100vw',height:'100vh',overflow:'hidden',position:'fixed',top:0,left:0,zIndex:2,backdropFilter:'blur(3px)'}}>
                <div style={{borderRadius:10,backgroundColor:'white',boxShadow:'5px 10px 8px #888888'}}>
                    <div className="pd_title_panel">
                                        <h3>Enter pin</h3>
                                      
                                    </div>
                                    <div className="pd_panel_details">
                                    <input id="pin" type="number" className="form-control"/>
                                        
                                        <div>
                                           
                                            <div className="col-md-12 col-sm-12 col-xs-12 text-right">
                                                <br />
                                                <button className="theme_btn" style={{marginRight:15,backgroundColor:'grey'}} onClick={this.handlePlaceBidButton} name="post" onClick={this.handleChange}>Cancel</button>
                                                <button className="theme_btn" id='post-btn'onClick={this.handlePost}>Post</button>
                                                <p id="error-mssg"style={{color:'red'}}>Incorrect pin</p>
                                            </div>
                                        </div>
                                          
                                        
                                       
                                    </div>
                </div>
            </div>
        </div>
    </section>)
    }
}