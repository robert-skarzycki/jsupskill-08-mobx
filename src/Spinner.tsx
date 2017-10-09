import * as React from 'React';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import './../style/spinner.css';
import './../style/main.css';

export default class Spinner extends React.Component {
    render() {        
        return ( 
            <div className="spinner">
  <div className="double-bounce1"></div>
  <div className="double-bounce2"></div>
</div>
        );
    }
}