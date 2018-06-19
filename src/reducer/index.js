import {combineReducers} from 'redux'


const mainTable = (store = {
    curr_page: 1,
    max_page: null,
    table_type: 'coinList',
    data: []
}, action) => {
    switch (action.type) {
        case 'FETCHLISTSUCCESS':
            return Object.assign({}, store, {
                curr_page: action.currPage,
                max_page:action.maxPage,
                data:action.data,
                table_type:action.tableType,
            });
        case 'FETCHLISTERROR':
            return store;
        default:
             return store
    }
}
const rootReducer= combineReducers({
    mainTable
})

export default rootReducer