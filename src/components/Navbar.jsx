import React from 'react';

import $ from 'jquery'
import {Link} from 'react-router-dom'

export default class Navbar extends React.Component{
    componentDidMount(){
        $("button").on("click",function(){
          $("#navbarNavAltMarkup").toggleClass("collapse")
        })
        $(".nav-item").on("click",function(){
            $("#navbarNavAltMarkup").toggleClass("collapse")
          })
    }
    render(){
        return(<nav style={{position:'fixed',zIndex:2,width:'100%',backdropFilter:'blur(10px)'}} class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
             
            <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
            <Link class="nav-item nav-link" to="/notifications">Notifications</Link>
            <Link class="nav-item nav-link" to="/contactus">Contact Us</Link>
           
            <Link class="nav-item nav-link" to="/admin">Admin</Link>
          </div>
        </div>
      </nav>)
    }
}