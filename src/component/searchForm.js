import React from 'react'
import api from '../api'
import $ from 'jquery'
import { Redirect ,withRouter} from 'react-router';

const ReusltList = ({reuslt, tit}) => {
    if (!reuslt.length || !reuslt) {
        return null
    } else {
        console.log('reuslt',reuslt);
        return (
            <div>
                <div className="tit">{tit}</div>
                <ul className="datalist ul1">
                    {reuslt.map(cell => {
                        const arr = cell.split('#');
                        switch (tit) {
                            case '货币':
                                return <li><a href={'/' + arr[1]}><img src={arr[5]} alt=""/>{arr[2]}</a></li>;
                            case "交易所":
                                return <li><a href={'/' + arr[1]}><img src={arr[4]} alt=""/>{arr[2]}</a></li>;
                            default:
                                return null
                        }
                    })}
                </ul>
            </div>
        )
    }
};

class searchItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            show_result: false,
            data: null,
            result_coin: [],
            result_exchange: [],
            history: [
                {
                    key: '',
                    result_coin: [],
                    result_exchange: [],
                    time_out: ''
                }
            ]
        };
        this.quickSearch = this.quickSearch.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.doSearch = this.doSearch.bind(this);
        this.onPressEnter = this.onPressEnter.bind(this)
    }

    componentDidMount() {
        if (!this.state.data) {
            $.ajax({
                url: api.search_data,
                type: 'get',
                success: (data) => {
                    this.setState({data})
                },
                error: (e) => {
                    console.log(e.message)
                }
            })
        }
    }

    async quickSearch(keyword) {
       await this.setState({keyword: keyword, result_coin: [], result_exchange: []});
        if (keyword === '') {
            await  this.setState({show_result: false})
        }
        keyword = keyword.toLowerCase();
        const data = this.state.data;
        for (let h = 0; h < data.length; h++) {//判断简称全等
            let cell = data[h].toLowerCase().split('#');
            if (cell[0][0] === '0' && cell[4] === keyword) {
                if (this.state.result_coin.length !== 5) {
                    console.log(data[h]);
                   await this.setState({result_coin: [...this.state.result_coin,data[h]]})
                }
            }
        }
        for (let g = 0; g < data.length; g++) {//判断全称全等
            let cell = data[g].toLowerCase().split('#');
            if (cell[0][0] === '0' && cell[2] === keyword && cell[4] !== keyword) {
                if (this.state.result_coin.length !== 5) {
                    console.log(data[g]);
                    await this.setState({result_coin: [...this.state.result_coin,data[g]]})
                }
            }
        }
        for (let i = 0; i < data.length; i++) {//单字符下判断全名的首字母和简称首字母中文
            let cell = data[i].toLowerCase().split('#');
            if (keyword.length === 1) {
                if (cell[0][0] === '0' && this.state.result_coin.length !== 5 && (cell[2].indexOf(keyword) === 0 || cell[3].indexOf(keyword) === 0 || cell[4].indexOf(keyword) === 0)) {
                    /*console.log('do', 2);*/
                    await this.setState({result_coin: [...this.state.result_coin,data[i]]})
                } else if (cell[0][0] === '1' && this.state.result_exchange.length !== 5 && (cell[2].indexOf(keyword) === 0 || cell[1].indexOf(keyword) === 0)) {
                    /*console.log('do', 2.5);*/
                    await this.setState({result_exchange: [...this.state.result_exchange,data[i]]})
                }
            }
        }
        for (let j = 0; j < data.length; j++) {//单字符下判断全名简称中文是否包含key
            let cell = data[j].toLowerCase().split('#');
            if (keyword.length === 1 && this.state.result_coin.length !== 5) {
                if (cell[0][0] === '0' && (cell[2].indexOf(keyword) > 0 || cell[3].indexOf(keyword) > 0 || cell[4].indexOf(keyword) > 0)) {
                    /*console.log('do', 5);*/
                    await this.setState({result_coin: [...this.state.result_coin,data[j]]})
                } else if (cell[0][0] === '1' && this.state.result_exchange.length !== 5 && (cell[2].indexOf(keyword) > 0 || cell[1].indexOf(keyword) > 0)) {
                    /*console.log('do', 5.5);*/
                    await this.setState({result_exchange: [...this.state.result_exchange,data[j]]})
                }
            }
        }
        for (let e = 0; e < data.length; e++) {//多个字母的情况下全称中文是否由关键字开头
            let cell = data[e].toLowerCase().split('#');
            if (cell[0][0] === '0' && this.state.result_coin.length !== 5 && keyword.length > 1) {
                if ((cell[2].indexOf(keyword) === 0 || cell[3].indexOf(keyword) === 0 || cell[4].indexOf(keyword) === 0) && cell[4] !== keyword && cell[2] !== keyword) {
                    /*console.log('do', 3);*/
                    await this.setState({result_coin: [...this.state.result_coin,data[e]]})
                }
            } else if (cell[0][0] === '1' && this.state.result_exchange.length !== 5 && keyword.length > 1 && (cell[2].indexOf(keyword) === 0 || cell[1].indexOf(keyword) === 0)) {
                /*console.log('do', 3.5);*/
                await this.setState({result_exchange: [...this.state.result_exchange,data[e]]})
            }
        }
        for (let f = 0; f < data.length; f++) {//多个字母的情况下全称中文是否包含key，而不是在开头
            let cell = data[f].toLowerCase().split('#');
            if (cell[0][0] === '0' && this.state.result_coin.length !== 5 && keyword.length > 1) {
                if ((cell[2].indexOf(keyword) > 0 && cell[3].indexOf(keyword) > 0 && cell[4].indexOf(keyword) > 0) && cell[4] !== keyword && cell[4][0] !== keyword) {
                    /*console.log('do', 4);*/
                    await this.setState({result_coin: [...this.state.result_coin,data[f]]})
                }
            } else if (cell[0][0] === '1' && this.state.result_exchange.length !== 5 && keyword.length > 1 && ((cell[2].indexOf(keyword) > 0 && cell[1].indexOf(keyword) !== 0) || (cell[1].indexOf(keyword) > 0 && cell[2].indexOf(keyword) !== 0))) {
                /*console.log('do', 4.5);*/
                await this.setState({result_exchange: [...this.state.result_exchange,data[f]]})
            }
        }
        if (this.state.result_coin.length || this.state.result_exchange.length) {
            this.setState({show_result: true})

        } else {
            this.setState({show_result: false})
        }
        console.log(this.state)
    }

    onBlur(){
        this.setState({show_result: false, result_coin: [], result_exchange: []});
    }

    doSearch(){
        const url = '/search?word='+ this.state.keyword;
        this.props.history.push(url);
    }
    onPressEnter(e){
        if(e.keyCode===13){
            this. doSearch()
        }else{
            return false
        }
    }
    render() {
        return (
            <div className="searchForm">
                <input type="text" id="search" placeholder="输入关键词..." autoComplete="off" value={this.state.keyword}
                       onChange={(e) => { this.quickSearch(e.target.value) }} onBlur={()=>{this.onBlur()}} onKeyDown={this.onPressEnter}/>
                <i className="icon-search" onClick={()=>{this.doSearch()}}><i className="fxh fxh-search"/></i>
                {this.state.show_result ?
                    <div className="autocomplete">
                        <ReusltList reuslt={this.state.result_coin} tit={"货币"}/>
                        <ReusltList reuslt={this.state.result_exchange} tit={"交易所"}/>
                    </div>:
                    null
                }
            </div>
        )
    }
}

const searchForm  = withRouter(searchItem);
export default searchForm