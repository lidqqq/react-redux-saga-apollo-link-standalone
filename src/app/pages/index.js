import React from "react";
import { connect } from "react-redux";
import { startClock, tickClock } from "../actions";
import Page from "../components/page";

class Index extends React.Component {
  static async getInitialProps({ ctx }) {
    const { store, isServer } = ctx;
    store.dispatch(tickClock(isServer));

    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />;
  }
}

export default connect()(Index);
