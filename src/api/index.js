import ajax from './ajax'
const BASE_URL = 'http://localhost:7001';
//const BASE_URL = 'http://10.16.5.88:7001';
//const BASE_URL = 'http://info.windd.cn/collection'
/**
 * 1. 用户登录
 */
export const userLogin = (params, requestMethod) => ajax(`${BASE_URL}/info/bing`, params, requestMethod);

/**
 * 2. 修改密码
 */
export const updatePwd = (params, requestMethod) => ajax(`${BASE_URL}/info/updatePwd`, params, requestMethod);
/**
 * 3. 看薰全部出局
 */
export const dataList = (params, requestMethod) => ajax(`${BASE_URL}/info/list`, params, requestMethod);
/**
 * 4. 数据删除
 *
 */
export const dataDelete = (params, requestMethod) => ajax(`${BASE_URL}/info/delete`, params, requestMethod);
/**
 * 5 数据提交
 *
 */
export const dataAdd = (params, requestMethod) => ajax(`${BASE_URL}/info/add`, params, requestMethod);