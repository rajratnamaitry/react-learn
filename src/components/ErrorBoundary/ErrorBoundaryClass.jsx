import React, { Component } from 'react'

/**
 *  Error boundaries are React Componets that catch javascript error in their child
 *  component tree, log those errors, and display a fall-back UI.
 * 
 *  A class Component becomes an Error Boundary by defining either or both of 
 *  getDerivedStateFromError and ComponentDidCatch lifeCycle Method.
 * 
 *  The placement of the Error Boundary also matters as it controls if the entire app
 *  should have the fall-back UI or just the component causing the problem
 *  
 *  provide a way to gracefully handle error in application code.
 */
export default class ErrorBoundaryClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }
  render() {
    if(this.state.hasError){
        return <h2>Something went wrong</h2>
    }
    return this.props.children;
    
  }
}
