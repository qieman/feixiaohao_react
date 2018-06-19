import {connect} from 'react-redux'
import mainTable from '../component/mainTable'

const MainTableData = (state)=>{
        return {
            mainTable:state.mainTable
        }
}
const  mainTableContainer = connect(MainTableData)(mainTable)
export default  mainTableContainer