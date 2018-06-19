import React from 'react'
import Nav from '../component/nav';

import ScrollNews from '../component/scrollNews'
import RankTable from '../component/rankTable'
import HotConpect from '../component/hotConcept'
import VolTable from '../component/volTable'
import NewCoinTable from '../component/newCoinTable'
import Footer  from '../component/footer'

import MainTable from '../container/mainTable'

const index = ()=> <div>
    <Nav/>
    <div className="m120"/>
    <div className="new-wrapper">
        <MainTable />
        <ScrollNews />
        <RankTable />
        <HotConpect />
        <VolTable />
        <NewCoinTable />
    </div>
    <Footer />
</div>;

export  default  index