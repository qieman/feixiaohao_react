import { logger } from 'redux-logger'
import { thunkMiddleware } from 'redux-thunk'
import rootReducer from '../reducer'
import { createStore ,applyMiddleware} from 'redux'




const demoStore = {

     mainTable: {
         curr_page: 1,
         max_page: 22,
         table_type:'coinList',
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
   /** nav: {
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
    },
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
     ],
     newCoinTable:[
         {
             tit: 'h1比特币',
             url: '/btc',
             icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
             price: '123123',
             range: -5.8,
             post_time:"2天前"
         },
         {
             tit: 'h2比特币',
             url: '/btc',
             icon: 'https://static.feixiaohao.com/coin/7033f2f2c2a16094bbb3bafc47205ba8_small.png',
             price: '123123',
             range: -5.8,
             post_time:"2天前"
         }
     ],
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
     },
     exchange_news: [
         {
             tit: '11111云币网严格自律的公开信11111云币网严格自律的公开信11111云币网严格自律的公开信11111云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '暂时停用第三方交易接口的通知11111云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '唯链 VeChain 上线11111云币网严格自律的公开信11111云币网严格自律的公开信公告',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '唯链 VeChain云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '暂时停用第三唯链 VeChain云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '暂时停用第三方交易接口的通知11111云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '暂时停用第三方交易接口的通知11111云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         }
     ],
     project_news: [
         {
             tit: '222222云币网严格自律的公开信11111云币网严格自律的公开信11111云币网严格自律的公开信11111云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '暂时停用第三方交易接口的通知11111云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '唯链 VeChain 上线11111云币网严格自律的公开信11111云币网严格自律的公开信公告',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '唯链 VeChain云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '暂时停用第三唯链 VeChain云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '暂时停用第三方交易接口的通知11111云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '暂时停用第三方交易接口的通知11111云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         }
     ],
     shot_news: [
         {
             tit: '333333333云币网严格自律的公开信11111云币网严格自律的公开信11111云币网严格自律的公开信11111云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '暂时停用第三方交易接口的通知11111云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '唯链 VeChain 上线11111云币网严格自律的公开信11111云币网严格自律的公开信公告',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '唯链 VeChain云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '暂时停用第三唯链 VeChain云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '暂时停用第三方交易接口的通知11111云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         },
         {
             tit: '暂时停用第三方交易接口的通知11111云币网严格自律的公开信',
             url: "/",
             icon: 'http://static.feixiaohao.com/Coin/343cde22866a94e9f0e2d0827dde9950_small.png',
             post_time: 1529027975000
         }
     ],
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
     }*/
 }


const store = ()=>{
    return createStore(rootReducer,demoStore,applyMiddleware(logger,applyMiddleware));
};

export default store