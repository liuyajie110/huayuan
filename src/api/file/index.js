import request, {
	get,
	post
} from '@/utils/request'


export const addFile = (data) => post('/mini/userinfo/add_file', data)
export const editFile = (data) => post('/mini/userinfo/update_file', data)
export const getTimeZoneList = (data) => get('/mini/basic/timezone', data)
export const getAreaList = (data) => get('/mini/basic/area_list', data)
export const getFileRelations = (data) => get('/mini/basic/file_relations', data)
export const ge = (data) => get('/mini/userinfo/file_list', data)
export const getfileInfo = (data) => get('/mini/userinfo/file_info', data)
export const delFile = (data) => post('/mini/userinfo/delete_file', data)
export const upLoadAvatar = (data) => post('/mini/userinfo/avatar', data)