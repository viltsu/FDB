import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from "./style.css";
import { fetchQuotes } from "./action";

export class QuotePage extends React.Component {
  
  componentWillUnmount() {
    this.props.actions.fetchQuotes();
  }

  render() {
    return (
      <div className={styles.content}>
        <div className={styles.columnLeft}>
          <img className={styles.authorImage} src={this.props.quotes.img} />
        </div>
        <div className={styles.columnRight}>
          <p className={styles.quote}>{this.props.quotes.quote}</p>
          <p className={styles.author}>&ndash; {this.props.quotes.by}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { quotes } = state;

  return {
    quotes
  }
}

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators({fetchQuotes}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotePage)