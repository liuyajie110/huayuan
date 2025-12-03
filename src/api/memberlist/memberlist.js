import request, {
	get,
	post
} from '@/utils/request'


export const getMemberPackages = () => get('/mini/vip/list')