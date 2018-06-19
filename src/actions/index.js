import $ from 'jquery'
import api from '../api'

const actions = {
    fetchPage: ({type, page}) => {
        if (!type) {
            type = 'coinList'
        }
        if (!page) {
            page = 1
        }
        return (dispatch) => {
            $.ajax({
                url: api.coin_list + '?type=' + type + '&page=' + page,
                type: 'get',
                success: (data) => {
                    return dispatch(actions.fetchListSuccess(data))
                },
                error: (e) => {
                    return dispatch(actions.fetchListError(e))
                }
            })
        }
    },
    fetchListSuccess: ({data}) => {
        return {type: 'FETCHLISTSUCCESS', currPage:data.curr_page, maxPage:data.max_page, tableType:listType.table_type, data:data.data}
    },
    fetchListError: ({err}) => {
        return {type: 'FETCHLISTERROR', err}
    }
}