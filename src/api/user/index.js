import request, {
	get,
	post
} from '@/utils/request'

export const userInfo = (data) => get('/mini/userinfo', data)