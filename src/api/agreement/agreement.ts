import { get } from '@/utils/request';

export const agreementApi = (data: any) => get('/mini/basic/config_info', data);
