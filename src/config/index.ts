import { isDev } from '../utils/isDev';

export const BASE_NAME = isDev ? '/' : '/';

// TODO：非 dev 环境替换为线上地址
export const apiHost = isDev ? 'http://127.0.0.1:3000/' : 'http://127.0.0.1:3000/';

// SOCKET
export const apiSocket = isDev ? 'http://127.0.0.1:3000/' : 'http://127.0.0.1:3000/';
