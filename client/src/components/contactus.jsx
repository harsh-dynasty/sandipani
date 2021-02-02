import React from 'react';
import{ Zoom , Fade }from 'react-reveal';
import '../assets/styles/newstyle.css'
import axios from 'axios'
export default class ContactUs extends React.Component{
  constructor(props){
    super(props)
    this.state={
      subject:'',
      message:'',
      email:''
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  async handleSubmit(){
      var res=await axios.post("/contactus",{email:this.state.email,subject:this.state.subject,message:this.state.message})
      this.setState({
        subject:'',
      message:'',
      email:''
      })
  }
  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
    render(){
        return( <section className="common_div pd-60">
        <div className="container">
            <div className="row">
              <div className="col-md-8 col-xs-12 col-sm-12">
                <Fade left>
                <div className="careers_from">
                  <div className="heading_main"><h3>Contact Us</h3></div>
                   
                        
                        <div className="form-group">
                          <label for="usr">Email:</label>
                          <input type="text" placeholder="Enter your email here" className="form-control" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                          <label for="usr">Subject:</label>
                          <input type="text" placeholder="Subject" className="form-control" name="subject" value={this.state.subject} onChange={this.handleChange}/>
                        </div>
                        
                        <div className="form-group">
                          <label for="pwd">Message:</label>
                          <textarea placeholder="Enter your message" className="form-control" rows="4" name="message" value={this.state.value}onChange={this.handleChange}></textarea>
                        </div>
                        <button className="btn_theme" onClick={this.handleSubmit}>Submit</button>
                    
                </div>
                </Fade>
               </div>
    
                <Zoom>
               <div className="col-md-4  col-xs-12 col-sm-8">
                    <div className="heading_main"><h5>Sandipani Classes</h5></div>
                    <address className="address-about">Sarv Suvidha Nagar<br/> Bicholi Hapsi Road, Behind Oriental Bank, Bangali Square
    <br/> Indore- 452016, India</address>
    <a href="mailto:#" className="link_sup">viveksoni18@gmail.com</a>
    <br/><br/>  
    
 
    
               </div>
               </Zoom>
            </div>
            
        </div>
    </section>)
    }
}