import {connect} from 'react-redux'
import mainTable from '../component/mainTable'
import actions from '../actions'

const MainTableData = (state) => {
    return {
        mainTable: state.mainTable
    }
}
const onClickPage = (dispatch) => {
    return {
        onClick: (type, page) => {
            dispatch(actions.fetchPage(type, page))
        }
    }
}
const mainTableContainer = connect(
    MainTableData,
    onClickPage
)(mainTable);
export default mainTableContainer