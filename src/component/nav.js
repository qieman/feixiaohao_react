import React from 'react'
import logo from '../appstatic/images/logo.png'
import SearchForm from './searchForm'
import $ from '../tools/jquery.peity.min'
import {Link, NavLink} from 'react-router-dom'

const demoDate = {
    nav: {
        active: '',
        subactive: '/new/coin',
        total: [
            {tit: '虚拟币', url: '/currency', val: '152'},
            {tit: '代币', url: '/token', val: '123'},
            {tit: '交易平台', url: '/exchange', val: '1231'},
            {tit: '24小时成交量', url: '/vol24', val: '118123'},
            {tit: '总市值', url: '/marketcap', val: '1112323'},
            {tit: 'GBI指数', url: '/gbi', val: '123118123'}
        ],
        app_download: '/download',
        login: '/login',
        signin: '/signin',
        hot_pair: [
            {
                tit: 'BTC',
                url: '/btc',
                price: 61710.40,
                kline: '5,3,9,6,5,9,7,2,5,3,9,6,5',
                img: 'https://static.feixiaohao.com/coin/20180607/4bad12fe7cae404195e9fc3f58f7f03a_16_16.png'
            },
            {
                tit: 'ETH',
                url: '/btc',
                price: 61710.40,
                kline: '5,3,9,6,5,9,7,2,5,3,9,6,5',
                img: 'https://static.feixiaohao.com/coin/20180607/4bad12fe7cae404195e9fc3f58f7f03a_16_16.png'
            },
            {
                tit: 'EOS',
                url: '/btc',
                price: 61710.40,
                kline: '5,3,9,6,5,9,7,2,5,3,9,6,5',
                img: 'https://static.feixiaohao.com/coin/20180607/4bad12fe7cae404195e9fc3f58f7f03a_16_16.png'
            },
            {
                tit: 'BQT',
                url: '/btc',
                price: 61710.40,
                kline: '5,3,9,6,5,9,7,2,5,3,9,6,5',
                img: 'https://static.feixiaohao.com/coin/20180607/4bad12fe7cae404195e9fc3f58f7f03a_16_16.png'
            },
        ],
        statement: [
            {tit: '11关于非小号发行代', url: '/statement1'},
            {tit: '22关于非小号发行代币谣言的公告于非小号发行代币谣言的公告于非小号发行代币谣言的公告', url: '/statement2'},
            {tit: '33关于非小号发行代币谣言的公告', url: '/statement3'}
        ],
        hot_search: [
            {tit: 'ETH', url: '/eth'},
            {tit: 'BTC', url: '/btc'},
            {tit: 'EOS', url: '/eos'},
            {tit: 'BQT', url: '/bqt'},
        ],
        nav_btn: [{
            tit: '市场行情',
            url: '/',
            subLink: [
                {tit: '全部', item_id: 1, url: '/'},
                {tit: '货币', item_id: 2, url: '/curries'},
                {tit: '代币', item_id: 3, url: '/token'},
            ],
            btn_id: 1,
            showsub: true,
            activesub: 1,
            icon_class: 'fxh fxh-market'
        }, {
            tit: '交易所',
            url: '/exchange',
            subLink: [
                {tit: '全部', item_id: 1, url: '/'},
                {tit: '现货', item_id: 2, url: '/exchange?type=1'},
                {tit: '期货', item_id: 3, url: '/exchange?type=2'},
                {tit: '法币', item_id: 4, url: '/exchange?type=3'}
            ],
            btn_id: 2,
            showsub: false,
            activesub: 2,
            icon_class: 'fxh fxh-exchange'
        }]
    }
};

class NavBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {btns: []};
        this.onhover = this.onhover.bind(this);
    }

    componentDidMount() {
        const {btns} = this.props;
        this.setState({btns});
        console.log(this.state);
        console.log('NavBtn', this.state);
    }

   onhover(id) {
        console.log(id);
     const nextstate = this.state.btns.map(btn => {
            if(btn.btn_id === id ){
                btn.showsub = true
            }else{
                btn.showsub = false
            }
            return btn
        })
        this.setState({btns: nextstate})
    }

    render() {
            return (
                this.state.btns.length > 0?
                this.state.btns.map(btn =>
                    <div className={btn.showsub ? "new-nav-slide active show-sub" : "new-nav-slide"} key={btn.btn_id} onMouseEnter={() =>{this.onhover(btn.btn_id)}}>
                        <NavLink to={btn.url} activeClassName='active' exact><i className={btn.icon_class}  />{btn.tit}</NavLink>
                        <div className="sub">
                            <div className="new-row">
                                {btn.subLink.map(data => <Link key={data.item_id} to={data.url}    className={btn.activesub === data.item_id ? 'active' : ''} exact="true">{data.tit}</Link>)}
                            </div>
                        </div>
                    </div>):null
            )
}}

class Nav extends React.Component {
    render() {
        let {navdata} = this.props;
        navdata = demoDate.nav;
        return (
            <div className="new-nav">
                <div className="new-total">
                    <div className="new-row">
                        <div className="new-left-side">
                            {navdata.total.map(cell => {
                                return (<div>{cell.tit}:<Link to={cell.url} title={cell.tit}>{cell.val}</Link></div>)
                            })}
                        </div>
                        <div className="new-right-size">
                            <Link to={navdata.app_download} className="new-app-download"><i
                                className="fxh fxh-appdownload"/>app
                                下载</Link>
                            <Link to={navdata.login}>登陆</Link>
                            <Link to={navdata.signin}>注册</Link>
                        </div>
                    </div>
                </div>
                <div className="new-main-nav">
                    <div className="new-row">
                        <div className="new-left-side">
                            <Link to="" className="new-logo"><img src={logo}/></Link>
                            <div className="new-hot-pair">
                                {navdata.hot_pair.map(cell => {
                                    return <Link className="new-cell" to={cell.url}>
                                        <div className="tit"><img
                                            src={cell.img}
                                            alt=""/>{cell.tit}
                                        </div>
                                        <div className="val">{cell.price}<span className="line" ref={(node) => {
                                            $(node).peity('line', {
                                                width: 50,
                                                height: 13,
                                                fill: '#f5f5f5',
                                                strokeWidth: 1,
                                                stroke: '#0291d6'
                                            })
                                        }}>{cell.kline}</span>
                                        </div>
                                    </Link>
                                })}
                            </div>
                        </div>
                        <div className="new-right-size">
                            <SearchForm/>
                        </div>
                        <div className="new-statement">
                            <ul>
                                {navdata.statement.map(cell => {
                                    return (
                                        <li><Link to={cell.url} title={cell.tit}>{cell.tit}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="new-nav-menu">
                    <div className="new-row">
                        <NavBtn btns={navdata.nav_btn}/>
                        <div className="new-nav-slide">
                            <Link to=""><i className="fxh fxh-rank"/>排行榜</Link>
                            <div className="sub">
                                <div className="new-row">
                                    <Link to="" className="active">所有</Link>
                                    <Link to="">货币</Link>
                                    <Link to="">代币</Link>
                                </div>
                            </div>
                        </div>
                        <div className="new-nav-slide">
                            <Link to=""><i className="fxh fxh-concet"/>概念行情</Link>
                            <div className="sub">
                                <div className="new-row">
                                    <Link to="/" className="active">所有</Link>
                                    <Link to="/">货币</Link>
                                    <Link to="/">代币</Link>
                                    <Link to="/">代币</Link>
                                    <Link to="/">代币</Link>
                                    <Link to="/">代币</Link>
                                </div>
                            </div>
                        </div>
                        <div className="new-hot-search">
                            {navdata.hot_search.map(data=> <Link to={data.url}>{data.tit}</Link>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}


export default Nav
