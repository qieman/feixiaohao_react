import React from 'react'
import {Link} from 'react-router-dom'


const demoDate = {
    rankTable: {
        rise: {
            h1: [
                {
                    tit: 'BTC-比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: 5.8
                },
                {
                    tit: 'BTC-比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: 5.2
                },
                {
                    tit: 'BTC-比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: 5.3
                },
            ],
            h2: [
                {
                    tit: 'h2比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: 5.8
                },
                {
                    tit: 'h2比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: 5.2
                },
                {
                    tit: 'h2比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: 5.3
                },
            ],
            h3: [
                {
                    tit: 'h3比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: 5.8
                },
                {
                    tit: 'h3比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: 5.2
                },
                {
                    tit: 'h3比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: 5.3
                }
            ]
        },
        drop: {
            h1: [
                {
                    tit: 'h1比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: -5.8
                },
                {
                    tit: 'h1比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: -5.2
                },
                {
                    tit: 'h1比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: -5.3
                }
            ],
            h2: [
                {
                    tit: 'h2比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: -5.8
                },
                {
                    tit: 'h2比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: -5.2
                },
                {
                    tit: 'h3比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: -5.3
                }
            ],
            h3: [
                {
                    tit: 'h3比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: -5.8
                },
                {
                    tit: 'h3比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: -5.2
                },
                {
                    tit: 'h3比特币',
                    ulr: '/btc',
                    icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                    price: '123123',
                    range: -5.3
                }
            ],
        }
    }
};

class rankTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show1: 1, show2: 1};
        this.onClick = this.onClick.bind(this);
        this.onClick2 = this.onClick2.bind(this);
    }

    onClick(a) {
        this.setState({show1: a})
    }

    onClick2(a) {
        this.setState({show2: a})
    }

    render() {
        let {rise, drop} = this.props;
        rise = demoDate.rankTable.rise;
        drop = demoDate.rankTable.drop;
        return (
            <div className="new-side-box new-tab-box ">
                <div className="new-box-tit new-tab-tit">
                    <div className={this.state.show1 === 1 ? "new-cell-tit active" : "new-cell-tit"} onClick={() => {
                        this.onClick(1)
                    }}>涨幅榜
                    </div>
                    <div className={this.state.show1 === 2 ? "new-cell-tit active" : "new-cell-tit"} onClick={() => {
                        this.onClick(2)
                    }}>跌幅榜
                    </div>
                    <Link to="/" className="new-more" title="更多"/>
                </div>
                <div className="new-tab-cell new-tab-box" style={{display: this.state.show1 === 1 ? "block" : 'none'}}>
                    <div className="new-tab-tit">
                        <div
                            className={(this.state.show2 === 1 && this.state.show1 === 1) ? "new-tab-subtit active" : "new-tab-subtit "}
                            onClick={() => {
                                this.onClick2(1)
                            }}>1小时
                        </div>
                        <div className={(this.state.show2 === 2&& this.state.show1 === 1)? "new-tab-subtit active" : "new-tab-subtit "}
                             onClick={() => {
                                 this.onClick2(2)
                             }}>24小时
                        </div>
                        <div className={(this.state.show2 === 3 && this.state.show1 === 1) ?  "new-tab-subtit active" : "new-tab-subtit "}
                             onClick={() => {
                                 this.onClick2(3)
                             }}>1周
                        </div>
                    </div>
                    <div className="new-tab-cell"
                         style={{display: (this.state.show1 === 1 && this.state.show2 === 1) ? "block" : 'none'}}>
                        <table className="new-side-table range-table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>名称</th>
                                <th>价格</th>
                                <th>涨幅</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rise.h1.map((data, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td><Link to={data.ulr}><img
                                        src={data.icon}
                                        alt={data.tit}/>{data.tit}</Link></td>
                                    <td>{data.price}</td>
                                    <td><span
                                        className={data.range > 0 ? "rang-tag-green" : "rang-tag-red"}>{data.range + '%'}</span>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    <div className="new-tab-cell"
                         style={{display: (this.state.show1 === 1 && this.state.show2 === 2) ? "block" : 'none'}}>
                        <table className="new-side-table range-table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>名称</th>
                                <th>价格</th>
                                <th>涨幅</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rise.h2.map((data, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td><Link to={data.ulr}><img
                                        src={data.icon}
                                        alt={data.tit}/>{data.tit}</Link></td>
                                    <td>{data.price}</td>
                                    <td><span
                                        className={data.range > 0 ? "rang-tag-green" : "rang-tag-red"}>{data.range + '%'}</span>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    <div className="new-tab-cell"
                         style={{display: (this.state.show1 === 1 && this.state.show2 === 3) ? "block" : 'none'}}>
                        <table className="new-side-table range-table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>名称</th>
                                <th>价格</th>
                                <th>涨幅</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rise.h3.map((data, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td><Link to={data.ulr}><img
                                        src={data.icon}
                                        alt={data.tit}/>{data.tit}</Link></td>
                                    <td>{data.price}</td>
                                    <td><span
                                        className={data.range > 0 ? "rang-tag-green" : "rang-tag-red"}>{data.range + '%'}</span>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="new-tab-cell new-tab-box" style={{display: this.state.show1 === 2 ? "block" : 'none'}}>
                    <div className="new-tab-tit">
                        <div className={(this.state.show2 === 1 && this.state.show1 === 2)?  "new-tab-subtit active" : "new-tab-subtit "} onClick={() => {
                            this.onClick2(1)
                        }}>1小时
                        </div>
                        <div className={(this.state.show2 === 2 && this.state.show1 === 2)?  "new-tab-subtit active" : "new-tab-subtit "} onClick={() => {
                            this.onClick2(2)
                        }}>24小时
                        </div>
                        <div className={(this.state.show2 === 3 && this.state.show1 === 2)?  "new-tab-subtit active" : "new-tab-subtit "} onClick={() => {
                            this.onClick2(3)
                        }}>1周
                        </div>
                    </div>
                    <div className="new-tab-cell"
                         style={{display: (this.state.show1 === 2 && this.state.show2 === 1) ? "block" : 'none'}}>
                        <table className="new-side-table range-table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>名称</th>
                                <th>价格</th>
                                <th>涨幅</th>
                            </tr>
                            </thead>
                            <tbody>
                            {drop.h1.map((data, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td><Link to={data.ulr}><img
                                        src={data.icon}
                                        alt={data.tit}/>{data.tit}</Link></td>
                                    <td>{data.price}</td>
                                    <td><span
                                        className={data.range > 0 ? "rang-tag-green" : "rang-tag-red"}>{data.range + '%'}</span>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    <div className="new-tab-cell"
                         style={{display: (this.state.show1 === 2 && this.state.show2 === 2) ? "block" : 'none'}}>
                        <table className="new-side-table range-table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>名称</th>
                                <th>价格</th>
                                <th>涨幅</th>
                            </tr>
                            </thead>
                            <tbody>
                            {drop.h2.map((data, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td><Link to={data.ulr}><img
                                        src={data.icon}
                                        alt={data.tit}/>{data.tit}</Link></td>
                                    <td>{data.price}</td>
                                    <td><span
                                        className={data.range > 0 ? "rang-tag-green" : "rang-tag-red"}>{data.range + '%'}</span>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    <div className="new-tab-cell"
                         style={{display: (this.state.show1 === 2 && this.state.show2 === 3) ? "block" : 'none'}}>
                        <table className="new-side-table range-table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>名称</th>
                                <th>价格</th>
                                <th>涨幅</th>
                            </tr>
                            </thead>
                            <tbody>
                            {drop.h3.map((data, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td><Link to={data.ulr}><img
                                        src={data.icon}
                                        alt={data.tit}/>{data.tit}</Link></td>
                                    <td>{data.price}</td>
                                    <td><span
                                        className={data.range > 0 ? "rang-tag-green" : "rang-tag-red"}>{data.range + '%'}</span>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default rankTable