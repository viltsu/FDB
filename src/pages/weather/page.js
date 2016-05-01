import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from "./style.css";

import { refreshMaps, getMap, nextMap } from "./action";

var timer = null;
var adding = false;

export class WeatherPage extends React.Component {
  componentDidMount() {
    this.props.actions.refreshMaps();
    if (timer === null) {
      timer = setInterval(() => {
        this.props.actions.nextMap();
      }, 500);
    }
  }

  componentWillUnmount() {
    clearInterval(timer);
    timer = null;
  }

  select(idx) {
    this.props.actions.getMap(idx);
    clearInterval(timer);
    timer = null;
    if (!adding) {
      adding = true;
      setTimeout(() => {
        adding = false;
        if (timer === null) {
          timer = setInterval(() => {
            this.props.actions.nextMap();
          }, 500);
        }
      }, 2000)
    }
  }

  render() {
    const {maps, active, forecast} = this.props.weather;
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
        <div className={styles.columnRight}>
          {(forecast) ? (
            <ul className={styles.forecastList}>
              {forecast.slice(0,10).map(function(data, idx) {
                var parts = data.dt_txt.split(' ');
                var date = parts[0].split('-');
                var time = parts[1].split(':');
                var suffix = '-n';
                var hourStyle = 'hour-' + time[0];
                if(time[0] >= 9 && time[0] < 21) {
                  suffix = '-d';
                }
                var iconClass = "owf owf-2x owf-" + data.weather[0].id + suffix;
                var rowClass = 'weather' + suffix;
                return <li key={idx} className={styles[hourStyle]}>
                  <div className={styles.icon}>
                    <i className={iconClass}></i>
                  </div>
                  <span className={styles.date}>{date[2]}.{date[1]}</span>
                  .&nbsp;
                  <span className={styles.time}>{time[0]}:{time[1]}</span>
                  <br />
                  {data.main.temp}&#8451;&nbsp;
                  {data.weather[0].description}
                </li>;
              }.bind(this))}
            </ul>
          ) : null
          }
        </div>
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