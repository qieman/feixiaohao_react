import React from 'react'
import {Link} from 'react-router-dom'


const demoDate = {
    concept: [
        {
            tit: '热门概念', url: '/aisd', list: [
                {
                    tit: '1BTC-比特币',
                    url: '/btc',
                    icon: 'http://static.feixiaohao.com/Coin/c9eb965d2f25954f97cfd9d4d83fab6_small.png',
                    price: 123,
                    range: 8.4
                },
                {
                    tit: '1ETH-以太坊',
                    url: '/btc',
                    icon: 'http://static.feixiaohao.com/Coin/c9eb965d2f25954f97cfd9d4d83fab6_small.png',
                    price: 123,
                    range: 8.4
                },
                {
                    tit: '1EOS-比特币',
                    url: '/btc',
                    icon: 'http://static.feixiaohao.com/Coin/c9eb965d2f25954f97cfd9d4d83fab6_small.png',
                    price: 123,
                    range: 8.4
                },
            ]
        },
        {
            tit: '比特币山寨', url: '/aisd', list: [
                {
                    tit: '2BTC-比特币',
                    url: '/btc',
                    icon: 'http://static.feixiaohao.com/Coin/c9eb965d2f25954f97cfd9d4d83fab6_small.png',
                    price: 123,
                    range: 8.4
                },
                {
                    tit: '2ETH-以太坊',
                    url: '/btc',
                    icon: 'http://static.feixiaohao.com/Coin/c9eb965d2f25954f97cfd9d4d83fab6_small.png',
                    price: 123,
                    range: 8.4
                },
                {
                    tit: '2EOS-比特币',
                    url: '/btc',
                    icon: 'http://static.feixiaohao.com/Coin/c9eb965d2f25954f97cfd9d4d83fab6_small.png',
                    price: 123,
                    range: 8.4
                },
            ]
        },
        {
            tit: '公正防伪', url: '/aisd', list: [
                {
                    tit: '3BTC-比特币',
                    url: '/btc',
                    icon: 'http://static.feixiaohao.com/Coin/c9eb965d2f25954f97cfd9d4d83fab6_small.png',
                    price: 123,
                    range: 8.4
                },
                {
                    tit: '3ETH-以太坊',
                    url: '/btc',
                    icon: 'http://static.feixiaohao.com/Coin/c9eb965d2f25954f97cfd9d4d83fab6_small.png',
                    price: 123,
                    range: 8.4
                },
                {
                    tit: '3EOS-比特币',
                    url: '/btc',
                    icon: 'http://static.feixiaohao.com/Coin/c9eb965d2f25954f97cfd9d4d83fab6_small.png',
                    price: 123,
                    range: 8.4
                },
            ]
        }
    ]
};

class hotConcept extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: 0}
        this.onClick = this.onClick.bind(this);
    }

    onClick(a) {
        this.setState({show: a})
    }

    render() {
        let {concept} = this.props;
        concept = demoDate.concept;
        return (
            <div className="new-side-box">
                <div className="new-box-tit"><h2> 热门概念 </h2><a href="" className="new-more" title="更多"/></div>
                <div className="new-tab-box">
                    <div className="new-tab-tit">
                        {concept.map((data, index) => <div
                            className={index === this.state.show ? "new-tab-subtit active" : "new-tab-subtit"}
                            onClick={() => {
                                this.onClick(index)
                            }}>{data.tit}</div>)}
                    </div>
                    {concept.map((data, index) => {
                        return (
                            <div className="new-tab-cell" style={{display:this.state.show===index?"block":'none'}}>
                                <table className="new-side-table concept-table">
                                    <thead>
                                    <tr>
                                        <th>名称</th>
                                        <th>价格</th>
                                        <th>涨幅</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.list.map(list =>
                                        <tr>
                                            <td><Link to={list.url}><img
                                                src={list.icon}
                                                alt={list.tit}/>{list.tit}</Link></td>
                                            <td>{list.price}</td>
                                            <td><span
                                                className={list.range >= 0 ? "rang-tag-green" : "rang-tag-red"}>{list.range + "%"}</span>
                                            </td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>)
                    })}
                </div>
            </div>
        )
    }
}


export default hotConcept