import React, { Component } from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';

class LeadItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <div className="orig-portlet">
                    <div className="orig-portlet__body">
                        <div className="orig-widget orig-widget--user-profile-3">
                            <div className="orig-widget__top">
                                { true ?
                                <div className="orig-widget__media orig-hidden-">
                                    <img src="/assets/images/faces/face1.jpg" alt="image" />
                                </div> :
                                <div
                                    className="orig-widget__pic orig-widget__pic--danger orig-font-danger orig-font-boldest orig-font-light ">
                                    {this.props.obj.name.split(' ').map(function(str) { return str ? str[0].toUpperCase() : "";}).join('')}
                                </div> }
                                <div className="orig-widget__content">
                                    <div className="orig-widget__head">
                                        <Link to={{
                                            pathname: `/lead/edit/${this.props.obj.id}`,
                                            state: {
                                                lead: this.props.obj
                                            }
                                        }} className="orig-widget__username">
                                            {this.props.obj.name}
                                            { this.props.obj.status == 0 ? <i className="mdi mdi-close-circle-outline orig-font-danger"></i>
                                            : <i className="mdi mdi-checkbox-marked-circle orig-font-success"></i> }
                                        </Link>
                                        <div className="orig-widget__action">
                                            <Link to={{
                                                pathname: `/lead/edit/${this.props.obj.id}`,
                                                state: {
                                                    lead: this.props.obj
                                                }
                                            }} type="button" className="btn btn-outline-success btn-sm btn-upper">Edit</Link>&nbsp;
                                            <button type="button" className="btn btn-danger btn-sm btn-upper" onClick={() => this.props.onClickDeleteHandler(this.props.obj.id)}>Delete</button>
                                        </div>
                                    </div>
                                    <div className="orig-widget__subhead d-flex flex-column flex-md-row">
                                        <a href={void(0)}><i className="mdi mdi-email"></i>{this.props.obj.email}</a>
                                        <a href={void(0)}><i className="mdi mdi-phone"></i>{this.props.obj.phone} </a>
                                        { this.props.obj.address ? <a href={void(0)}><i className="mdi mdi-home"></i>{this.props.obj.address}</a> : '' }
                                    </div>
                                    <div className="orig-widget__info">
                                        <div className="orig-widget__desc">
                                            {this.props.obj.description}
                                        </div>
                                        <div className="orig-widget__progress">
                                            <div className="orig-widget__text">
                                                Progress
                                            </div>
                                            <div className="progress" style={{ height: '5px', width: '100%' }}>
                                                <div className="progress-bar orig-bg-success" role="progressbar" style={{ width: this.props.obj.progress+'%' }}
                                                    aria-valuenow={this.props.obj.progress} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="orig-widget__stats">
                                                {this.props.obj.progress}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="orig-widget__bottom d-flex flex-column flex-md-row">
                                <div className="orig-widget__item ">
                                    <div className="orig-widget__icon">
                                        <i className="mdi mdi-currency-usd"></i>
                                    </div>
                                    <div className="orig-widget__details d-flex flex-md-column flex-row">
                                        <span className="orig-widget__title">Earnings</span>
                                        <span className="orig-widget__value"><span>$</span>{this.props.obj.earnings}</span>
                                    </div>
                                </div>
                                <div className="orig-widget__item">
                                    <div className="orig-widget__icon">
                                        <i className="mdi mdi-cart-outline"></i>
                                    </div>
                                    <div className="orig-widget__details d-flex flex-md-column flex-row">
                                        <span className="orig-widget__title">Expenses</span>
                                        <span className="orig-widget__value"><span>$</span>{this.props.obj.expenses}</span>
                                    </div>
                                </div>
                                <div className="orig-widget__item">
                                    <div className="orig-widget__icon">
                                        <i className="mdi mdi-chart-arc"></i>
                                    </div>
                                    <div className="orig-widget__details d-flex flex-md-column flex-row">
                                        <span className="orig-widget__title">Net</span>
                                        <span className="orig-widget__value"><span>$</span>{this.props.obj.net}</span>
                                    </div>
                                </div>
                                <div className="orig-widget__item">
                                    <div className="orig-widget__icon">
                                        <i className="mdi mdi-calendar"></i>
                                    </div>
                                    <div className="orig-widget__details d-flex flex-md-column flex-row">
                                        <span className="orig-widget__title">Added On</span>
                                        <span className="orig-widget__value">{moment(this.props.obj.created_at).fromNow()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LeadItem
