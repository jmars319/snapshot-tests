import React from "react"
import Card from "react-bootstrap/Card"
import JAM from './JAM.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={JAM} />
        <p>Source: https://github.com/jmars319</p>
        <Card.Body>
            <Card.Title><h1>Jason Marshall</h1></Card.Title>
            <Card.Text>
            <h3>I am still learning to program but I am certainly getting better at it every day.</h3>
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard