import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from "./style.css";

import { refreshMaps, getMap, nextMap } from "./action";

var timer;
var adding = false;

export class WeatherPage extends React.Component {
  componentDidMount() {
    this.props.actions.refreshMaps();
    timer = setInterval(() => {
      this.props.actions.nextMap();
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

  select(idx) {
    this.props.actions.getMap(idx);
    clearInterval(timer);
    if (!adding) {
      adding = true;
      setTimeout(() => {
        adding = false;
        timer = setInterval(() => {
          this.props.actions.nextMap();
        }, 500);
      }, 2000)
    }
  }

  render() {
    const {maps, active} = this.props.weather;
    return (
      <div className={styles.content}>
        {(active > -1) ? (
          <div className={styles.columnLeft}>
            <img src={maps[active].image} />
            {maps && maps.map(function(map, idx) {
              return <span key={idx} className={idx === active ? styles.active : ''} onClick={this.select.bind(this, idx)}>{map.time}&nbsp;</span>;
            }.bind(this))}
          </div>
        ) : null
        }
        <div className={styles.columnRight}>Forecast</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { weather } = state;

  return {
    weather
  }
}

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators({refreshMaps, getMap, nextMap}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage)