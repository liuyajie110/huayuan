import {
	get,
	post
} from '../../utils/request';

const getSliderChatRecordApi = (data) => get('/mini/ai/chat_list', data)
const getHistoryChatListApi = (data) => post('/mini/ai/msg_list', data)
const removeHistoryApi = (data) => post('/mini/ai/clear_record', data)
const removeCurentChatApi = (data) => post('/mini/ai/delete_chat', data)

export {
	getSliderChatRecordApi,
	getHistoryChatListApi,
	removeHistoryApi,
	removeCurentChatApi
}