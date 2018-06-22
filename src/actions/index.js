import $ from 'jquery'
import api from '../api'

const actions = {
    fetchPage: (type, page) => {
        if (!type) {
            type = 'coinList'
        }
        if (!page) {
            page = 1
        }
        console.log('adasd', 'zfdzfzfzfzfd');
        return (dispatch) => {
            $.ajax({
                url: api.coin_list + '?type=' + type + '&page=' + page,
                type: 'get',
                success: (data) => {
                    dispatch(actions.fetchListSuccess(data))
                },
                error: (e) => {
                    dispatch(actions.fetchListError(e))
                }
            })
        }
    },
    fetchListSuccess: (data) => {
        return {
            type: 'FETCHLISTSUCCESS',
            currPage: data.curr_page,
            maxPage: data.max_page,
            tableType: data.table_type,
            data: data.data
        }
    },
    fetchListError: ({err}) => {
        return {type: 'FETCHLISTERROR', err}
    }
}

export default actions