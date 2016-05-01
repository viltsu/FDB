import React from "react";
import moment from 'moment';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from "./style.css";
import { fetchTrains } from "./action";

var updater = null;

export class TransportationPage extends React.Component {

  componentDidMount() {
    this.props.actions.fetchTrains();
    updater = setInterval(() => {
      this.props.actions.fetchTrains();
    }, 10000);
  }

  componentWillUnmount() {
    clearTimeout(updater);
  }

  render() {
    const {trains} = this.props.transportation;
    return (
      <div className={styles.content}>
        <table>
          <thead>
            <tr>
              <th>Line</th>
              <th>Track</th>
              <th>Arriving</th>
              <th>Last stop</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            {trains.slice(0,10).map(function(data, idx) {
              return <tr key={idx}>
                <td>{data.line}</td>
                <td>{data.track}</td>
                <td className={data.late > 0 ? styles.late: ''}>
                  {data.cancelled ? 'cancelled!' : ''}&nbsp;
                  {
                  data.late > 0 ?
                    moment(data.arrival).locale('fi').format('LT') + ' -> ' + moment(data.estimate).locale('fi').format('LT') :
                    moment(data.arrival).locale('fi').format('LT')
                  }
                </td>
                <td>{data.lastStop}&nbsp;<span className={styles.lastTime}>{data.lastStop ? '(' + moment(data.lastTime).locale('fi').format('LTS') + ')' : ''}</span></td>
                <td>{data.destination}</td>
              </tr>;
            }.bind(this))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { transportation } = state;

  return {
    transportation
  }
}

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators({fetchTrains}, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransportationPage)