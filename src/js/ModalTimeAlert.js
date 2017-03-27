/**
 * Created by beeraman on 3/27/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var ModalAlertTimeout = React.createClass({
    componentDidMount(){
        setTimeout(()=> {
            let timeoutModal = ReactDOM.findDOMNode(this.refs.timeoutModal);
            $(timeoutModal).modal('show');
        }, 100);
    },
    render(){
        return (
            <div className="modal fade" ref='timeoutModal'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"></button>
                            <h4 className="modal-title">Timeout</h4>
                        </div>
                        <div className="modal-body">
                            <p>The cart has timed-out. Please try again!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default ModalAlertTimeout;