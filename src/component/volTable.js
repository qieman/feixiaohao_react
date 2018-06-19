import React from 'react'
import {Link} from 'react-router-dom'


const demoData = {
    volTable: {
        h1: [
            {
                tit: 'h1比特币',
                url: '/btc',
                icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                price: '123123',
                range: -5.8
            },
            {
                tit: 'h1比特币',
                url: '/btc',
                icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                price: '123123',
                range: -5.2
            },
            {
                tit: 'h1比特币',
                url: '/btc',
                icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                price: '123123',
                range: -5.3
            }
        ],
        h2: [
            {
                tit: 'h2比特币',
                url: '/btc',
                icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                price: '123123',
                range: -5.8
            },
            {
                tit: 'h2比特币',
                url: '/btc',
                icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                price: '123123',
                range: -5.2
            },
            {
                tit: 'h3比特币',
                url: '/btc',
                icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                price: '123123',
                range: -5.3
            }
        ],
        h3: [
            {
                tit: 'h3比特币',
                url: '/btc',
                icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                price: '123123',
                range: -5.8
            },
            {
                tit: 'h3比特币',
                url: '/btc',
                icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                price: '123123',
                range: -5.2
            },
            {
                tit: 'h3比特币',
                url: '/btc',
                icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
                price: '123123',
                range: -5.3
            }
        ]
    }
};


class volTable extends React.Component {
    constructor(prop){
        super(prop);
        this.state = {show:0};
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        this.setState({show:e})
    }
    render() {
        let {volTable} = this.props;
        volTable = demoData.volTable;
        return (
            <div className="new-side-box">
                <div className="new-box-tit">
                    <h2 className="new-cell-tit">成交量排行榜</h2>
                    <Link to="/" className="new-more" title="更多"/>
                </div>
                <div className="new-tab-cell new-tab-box">
                    <div className="new-tab-tit">
                        <div className={this.state.show===0?"new-tab-subtit active":"new-tab-subtit"} onClick={()=>{this.onClick(0)}}>1小时</div>
                        <div className={this.state.show===1?"new-tab-subtit active":"new-tab-subtit"} onClick={()=>{this.onClick(1)}}>24小时</div>
                        <div className={this.state.show===2?"new-tab-subtit active":"new-tab-subtit"} onClick={()=>{this.onClick(2)}}>1周</div>
                    </div>
                    <div className="new-tab-cell" style={{display:this.state.show===0?"block":"none"}}>
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
                            {volTable.h1.map((data,index) =>
                                <tr>
                                    <td>{index+1}</td>
                                    <td><Link to={data.url}><img
                                        src={data.icon}
                                        alt={data.tit}/>{data.tit}</Link></td>
                                    <td>{data.price}</td>
                                    <td><span className={data.range>=0?"rang-tag-green":"rang-tag-red"}>{data.range}</span></td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                    <div className="new-tab-cell" style={{display:this.state.show===1?"block":"none"}}>
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
                            {volTable.h2.map((data,index) =>
                                <tr>
                                    <td>{index+1}</td>
                                    <td><Link to={data.url}><img
                                        src={data.icon}
                                        alt={data.tit}/>{data.tit}</Link></td>
                                    <td>{data.price}</td>
                                    <td><span className={data.range>=0?"rang-tag-green":"rang-tag-red"}>{data.range}</span></td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                    <div className="new-tab-cell" style={{display:this.state.show===2?"block":"none"}}>
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
                            {volTable.h3.map((data,index) =>
                                <tr>
                                    <td>{index+1}</td>
                                    <td><Link to={data.url}><img
                                        src={data.icon}
                                        alt={data.tit}/>{data.tit}</Link></td>
                                    <td>{data.price}</td>
                                    <td><span className={data.range>=0?"rang-tag-green":"rang-tag-red"}>{data.range}</span></td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>)
    }
}

export default volTable