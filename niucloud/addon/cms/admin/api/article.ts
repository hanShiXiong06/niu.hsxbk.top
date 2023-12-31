import request from '@/utils/request'

/***************************************************** 文章表 ****************************************************/

/**
 * 获取文章表列表
 * @param params
 * @returns
 */
export function getArticleList(params: Record<string, any>) {
    return request.get(`cms/article`, {params})
}

/**
 * 获取文章表详情
 * @param id 文章表id
 * @returns
 */
export function getArticleInfo(id: number) {
    return request.get(`cms/article/${id}`);
}

/**
 * 添加文章表
 * @param params
 * @returns
 */
export function addArticle(params: Record<string, any>) {
    return request.post('cms/article', params, {showSuccessMessage: true})
}

/**
 * 编辑文章表
 * @param params
 */
export function editArticle(params: Record<string, any>) {
    return request.put(`cms/article/${params.id}`, params, {showSuccessMessage: true})
}

/**
 * 删除文章表
 * @param id
 * @returns
 */
export function deleteArticle(id: number) {
    return request.delete(`cms/article/${id}`, {showSuccessMessage: true})
}

/***************************************************** 文章分类管理 ****************************************************/

/**
 * 获取文章分类列表
 * @param params
 * @returns
 */
export function getArticleCategoryList(params: Record<string, any>) {
    return request.get(`cms/category`, {params})
}


/**
 * 获取文章全部分类
 * @param params
 * @returns
 */
export function getArticleCategoryAll(params: Record<string, any>) {
    return request.get(`cms/category/all`, params)
}

/**
 * 获取文章分类详情
 * @param category_id
 */
export function getArticleCategoryInfo(category_id: number) {
    return request.get(`cms/category/${category_id}`);
}

/**
 * 添加文章分类
 * @param params
 * @returns
 */
export function addArticleCategory(params: Record<string, any>) {
    return request.post('cms/category', params, {showSuccessMessage: true})
}

/**
 * 编辑文章分类
 * @param params
 * @returns
 */
export function editArticleCategory(params: Record<string, any>) {
    return request.put(`cms/category/${params.category_id}`, params, {showSuccessMessage: true})
}

/**
 * 文章分类删除
 * @param category_id
 */
export function deleteArticleCategory(category_id: number) {
    return request.delete(`cms/category/${category_id}`, {showSuccessMessage: true});
}