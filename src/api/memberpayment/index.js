import {
	get,
	post
} from '@/utils/request'

export const memberpayment = (data) => post('/mini/vip/pay', data)