import React from 'react'
import {Link, withRouter, NavLink} from 'react-router-dom'
import $ from '../tools/jquery.peity.min'


const slideBtns = [
    {
        tit: '货币', sub: [
            {tit: "前100", url: '/'},
            {tit: "全部", url: '/'},
            {tit: "前100", url: '/'},
            {tit: "流通市值排序", url: '/'},
            {tit: "总市值排序", url: '/'}
        ]
    },
    {
        tit: '代币', sub: [
            {tit: "全部", url: '/'},
            {tit: "前100", url: '/'},
            {tit: "流通市值排序", url: '/'},
            {tit: "总市值排序", url: '/'}
        ]
    },
    {
        tit: '人民币', sub: [
            {tit: "CNY", url: '/cmy'},
            {tit: "USD", url: '/USD'},
            {tit: "BTC", url: '/BTC'},
            {tit: "ZFD", url: '/ZFD'},
            {tit: "ABC", url: '/ABC'}
        ]
    }

];

const demoDate = {
    mainTable: {
        curr_page: 1,
        max_page: 22,
        table_type: 'coinList',
        data: [
            {
                name: 'BTC',
                coin_code: 'bitcoin',
                mc: 19827,
                price: 123,
                flow: 123123,
                vol: 123123123,
                rank: '5.3',
                kline: '1,112,445,25,10,45,12,44,99,57,255',
                icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png'
            },
            {
                name: 'ETH',
                coin_code: 'etherent',
                mc: 19827,
                price: 123,
                flow: 123123,
                vol: 123123123,
                rank: '5.3',
                kline: '1,112,445,25,10,45,12,44,99,57,255',
                icon: 'https://static.feixiaohao.com/coin/8cc736e4abd44c3d689eb1599a27edb_small.png'
            }
        ]
    }
};

class PageList extends React.Component {
    render() {
        const {curr, max ,pageClick} = this.props;
        let list = [];
        if (max <= 6) {
            for (let i = 1; i < max + 1; i++) {
                list = [...list, i]
            }
        } else if (max > 6 && curr <= 3) {
            list = [1, 2, 3, 4, 5, '...', max]
        } else if (max > 6 && curr > 3 && curr <= max - 2) {
            list = [curr - 2, curr - 1, curr, curr + 1, curr + 2, '...', max]
        } else if (max > 6 && curr > 4 && curr <= max - 2) {
            list = [1, "...", curr - 2, curr - 1, curr, curr + 1, curr + 2, '...', max]
        } else if (max > 6 && curr > max - 2) {
            list = [1, "...", curr - 2, curr - 1, curr, curr + 1, curr + 2]
        }
        return (<div className="new-page-list">
            <Link to="/" onClick={()=>{pageClick('coinList',1)}}>&lt;</Link>
            {list.map(data => <NavLink to={data !== '...' ? "/list_" + data : '#'}  activeClassName='active' onClick={()=>{pageClick('coinList',1)}} >{data}</NavLink>)}
            <Link to="/" onClick={()=>{pageClick('coinList',1)}}>&gt;</Link>
        </div>)
    }
}


class SlideBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...this.props.btndata, show: false};
        this.onClickTit = this.onClickTit.bind(this);
        this.onClicksub = this.onClicksub.bind(this)
    }

    onClickTit() {
        this.setState({show: !this.state.show})
    }

    onClicksub(tit) {
        this.setState({show: false, tit})
    }

    render() {
        return (
            <div className="new-slide-btn">
                <button onClick={() => {
                    this.onClickTit()
                }}>{this.state.tit}</button>
                <ul className="new-slide-sub" style={{display: this.state.show ? 'block' : 'none'}}>
                    {this.state.sub.map(data => <li><Link to={data.url} onClick={() => {
                        this.onClicksub(data.tit)
                    }}>{data.tit}</Link></li>)}
                </ul>
            </div>
        )
    }
}

const mainTable = ({mainTable,onClick}) => {
   /* mainTable = demoDate.mainTable;*/
    console.log('mainTable', mainTable);
    const {curr_page, max_page, data} = mainTable;
    console.log('data',data);
    return (
        <div className="new-main-box">
            <div className="new-box-tit new-tab-tit">
                <h1 className="new-cell-tit active">所有货币</h1>
                <Link className="new-cell-tit" to="/custon">自选库</Link>
                <div className="new-box-tools">
                    <SlideBtn btndata={slideBtns[0]}/>
                    <SlideBtn btndata={slideBtns[1]}/>
                    <SlideBtn btndata={slideBtns[2]}/>
                    <a className="new-link-btn">下载表格<i className="fxh fxh-download"/></a>
                </div>
                <PageList curr={curr_page} max={max_page} pageClick={onClick}/>

            </div>

            <table className="new-table new-coin-list" id="table">
                <thead>
                <tr>
                    <th className="th-num">#</th>
                    <th className="th-coin-name">名称</th>
                    <th className="th-marketcap">市值</th>
                    <th className="th-price">价格</th>
                    <th className="th-turnover">流通数量</th>
                    <th className="th-vol">成交量(24h)</th>
                    <th className="th-rank">涨幅(24h)</th>
                    <th data-sort-method='none' className="th-coin-char">价格趋势(7d)</th>
                </tr>
                </thead>
                <tbody>
                {data.map((cell, index) =>
                    <tr id={cell.coin_code}>
                        <td>{index + 1 + 100 * (curr_page - 1)}</td>
                        <td><Link to={'/curreries/' + cell.coin_code}><img
                            src={cell.icon}
                            alt={cell.name}/>{cell.name}</Link></td>
                        <td>{cell.mc}</td>
                        <td><Link to={'/curreries/' + cell.coin_code} className="">{cell.price}</Link></td>
                        <td>{cell.flow}<i className="ifo"/>**</td>
                        <td><Link to={'/curreries/' + cell.coin_code}>{cell.vol}</Link></td>
                        <td><span className={cell.rank > 0 ? 'new-arrow-up' : 'new-arrow-down'}>{cell.rank + '%'}</span>
                        </td>
                        <td><span className="line2" data-peity='{"stroke": "#3ca316"}' ref={(code) => {
                            $(code).peity('line', {
                                width: 80,
                                height: 13,
                                fill: '#f5f5f5',
                                strokeWidth: 1,
                                stroke: '#0291d6'
                            })
                        }}>{cell.kline}</span>
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <div className="new-table-bar">
                <PageList curr={curr_page} max={max_page} pageClick={onClick}/>
                备注：* Not Mineable ** Significantly Premined
            </div>
        </div>
    )
}


export default mainTable

