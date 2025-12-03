import request, {
	get,
	post
} from '@/utils/request'


export const getVideo = (data) => get('/mini/plan/video', data)
export const getPlanDetail = (data) => get('/mini/plan/detail', data)
export const getPlanData = (data) => get('/mini/plan/count', data)
export const getFileRelations = (data) => get('/mini/basic/file_relations', data)
export const getFileList = (data) => get('/mini/userinfo/file_list', data)
export const generate = (data) => post('/mini/plan/generate', data)

export const getPop = (data) => get('/mini/plan/pop', data)
export const getDone = (data) => post('/mini/plan/done', data)
export const feedback = (data) => post('/mini/plan/feedback', data)


