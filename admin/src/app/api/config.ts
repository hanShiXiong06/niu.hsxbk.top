import request from '@/utils/request'


/**
 * 获取交易配置
 * @returns
 */
export function getShopTransaction() {
    return request.get('shop/transaction')
}
/**
 * 编辑交易配置
 * @returns
 */
export function setShopTransaction(param:any) {
    return request.post('shop/transaction',param, {showSuccessMessage: true})
}