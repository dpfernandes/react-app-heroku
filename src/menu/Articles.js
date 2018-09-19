import React, { Component } from "react";
 
class Articles extends Component {
  render() {
    return (
      <div>
        <h2>Articles</h2>
        <p> 
          MVC - Model–view–controller is an architectural pattern commonly used for 
          developing user interfaces that divides an application into three 
          interconnected parts.
          <a href="https://medium.com/of-all-things-tech-progress/understanding-mvc-architecture-with-react-6cd38e91fefd">MVC</a> 
  
        </p> 
        <p>
          CRUD - In computer programming, create, read, update, and delete are the four basic 
          functions of persistent storage, in other words the basic functions of a computer 
          database.
          <a href="https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb">CRUD</a> 
        </p>  
        <p>
          Git is a version control system for tracking changes in computer files and coordinating
          work on those files among multiple people. GitHub is a web-based hosting service 
          for version control using Git.
          <a href="https://techcrunch.com/2012/07/14/what-exactly-is-github-anyway/">GIT</a> 
        </p>
      </div>
    );
  }
}
 
export default Articles;
