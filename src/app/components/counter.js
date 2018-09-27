import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset, gql } from "../actions";
import graphql from "../lib/gql";
const { operation } = graphql;

class Counter extends Component {
  increment = () => {
    this.props.dispatch(increment());
  };

  decrement = () => {
    this.props.dispatch(decrement());
  };

  reset = () => {
    this.props.dispatch(reset());
  };

  query = ope => () => {
    this.props.dispatch(gql(ope));
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.query(operation.books)}>books</button>
        <button onClick={this.query(operation.hello)}>hello</button>
        <button onClick={this.query(operation.getBooks(1))}>getBooks(1)</button>
        <button onClick={this.query(operation.getBooks(2))}>getBooks(2)</button>
        <button onClick={this.query(operation.addBook("new book"))}>
          addBook("new book")
        </button>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ count }) => ({ count });
export default connect(mapStateToProps)(Counter);
