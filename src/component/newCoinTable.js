import React from 'react'
import {Link} from 'react-router-dom'


const demoDate = {
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
    ]
}

const newCoinTable =(newCoinTable)=>{
    newCoinTable = demoDate.newCoinTable
    return(
        <div className="new-side-box">
            <div className="new-box-tit">
                <h2 className="new-cell-tit">最近上市</h2><a href="" className="new-more" title="更多" />
            </div>
            <table className="new-side-table  newcoin-table">
                <thead>
                <tr>
                    <th>名称</th>
                    <th>价格</th>
                    <th>涨幅</th>
                    <th>时间</th>
                </tr>
                </thead>
                <tbody>
                {newCoinTable.map(data=>
                    <tr>
                        <td><Link to={data.url}><img
                            src={data.icon}
                            alt={data.tit} />{data.tit}</Link></td>
                        <td>{data.price}</td>
                        <td><span  className={data.range >= 0 ? "rang-tag-green" : "rang-tag-red"}>{data.range}</span></td>
                        <td>{data.post_time}</td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    )
}


export default  newCoinTable