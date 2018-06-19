import React from 'react'
import logo from '../appstatic/images/logo2.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="new-row">
                <div className="footer-logo">
                    <Link to='/'><img src={logo} alt=""/></Link>
                        <div className="footer-media">
                            <Link to="" title="公众号" id="footer-weixin"><img
                                src="https://static.feixiaohao.com/themes/default/images/fwh.jpg"/>
                            </Link>
                            <Link to="" title="QQ" id="footer-qq"/>
                            <Link to="" title="微博" id="footer-weibo"/>
                        </div>
                        <div className="copy-right"> ©Copyright feixiaohao.com 2018<Link
                            to="/">备案号：粤ICP备16116847号-8 </Link></div>
                </div>
                <ul className="footer-group">
                    <li><a href="">关于我们</a></li>
                    <li><a href="">联系我们</a></li>
                    <li><a href="">友情链接</a></li>
                    <li><a href="">常见问题(F&Q)</a></li>
                    <li><a href="">免责声明</a></li>
                    <li><a href="">访问手机版</a></li>
                </ul>
            </div>
            <div className="totop">
                <div className="top"/>
            </div>
        </div>
)};

export default Footer;