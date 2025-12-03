import { post } from '@/utils/request';

export const authLoginApi = (data: any) => post('/mini/auth/login', data);

export const captchaApi = (data: any) => post('/mini/auth/login_sms', data);
