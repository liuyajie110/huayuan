import request, {
	get,
	post
} from '@/utils/request'

//积分列表
export const pointsApi = () => get('/mini/score/list')

//充值积分

export const rechargeApi = (data) => post('/mini/score/pay', data)

// 积分记录
export const scoreRecordApi = (data) => get('/mini/score/record', data)
