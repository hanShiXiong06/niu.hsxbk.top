<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

declare(strict_types=1);

namespace app\service\admin\generator\core;


use think\helper\Str;

/**
 * web-编辑生成器
 * Class WebEditGenerator
 * @package app\service\admin\generator\core
 */
class WebEditGenerator extends BaseGenerator
{

    /**
     * 替换模板中的变量
     * @return false|void
     */
    public function replaceText()
    {
        if($this->table['edit_type'] != 1) {
            $this->setText('');
            return false;
        }

        $old = [
            '{FORM_VIEW}',
            '{UCASE_NAME}',
            '{UCASE_CLASS_NAME}',
            '{FORM_DATA}',
            '{FORM_VALIDATE}',
            '{PK}',
            '{MODULE_NAME}',
            '{API_PATH}',
            '{DICT_DATA}',
            '{DICT_LIST}',

        ];

        $new = [
            $this->getFormView(),
            $this->getUCaseClassName(),
            $this->getUCaseClassName(),
            $this->getFormData(),
            $this->getFormValidate(),
            $this->getPk(),
            $this->moduleName,
            $this->getApiPath(),
            $this->getDictDataContent(),
            $this->getDictList(),
        ];
        $vmPath = $this->getvmPath('web_edit');

        // 替换内容

        $text = $this->replaceFileText($old, $new, $vmPath);

        $this->setText($text);
    }

    /**
     * 表单日期处理
     * @return string
     */
    public function getFormDate()
    {
        $content = '';
        foreach ($this->tableColumn as $column) {
            if (empty($column['view_type']) || $column['is_pk']) {
                continue;
            }
            if ($column['view_type'] != 'datetime' || $column['column_type'] != 'int') {
                continue;
            }
            $content .= '//@ts-ignore' . PHP_EOL;
            $content .= 'formData.' . $column['column_name'] . ' = timeFormat(formData.' . $column['column_name'] . ','."'yyyy-mm-dd hh:MM:ss'".') ' . PHP_EOL;
        }
        if (!empty($content)) {
            $content = substr($content, 0, -1);
        }
        return $this->setBlankSpace($content, '    ');
    }



    /**
     * 获取表单内容
     * @return string
     */
    public function getFormView()
    {
        $content = '';
        foreach ($this->tableColumn as $column) {
            if (!$column['is_insert'] || !$column['is_update'] || $column['is_pk']) {
                continue;
            }
            $old = [
                '{COLUMN_COMMENT}',
                '{COLUMN_NAME}',
                '{LCASE_COLUMN_NAME}',
                '{PROP}',
                '{DICT_TYPE}',

            ];
            if(empty($column['dict_type']))
            {
                $new = [
                    $column['column_comment'],
                    $column['column_name'],
                    Str::camel($column['column_name']),
                    $column['is_required'] ? 'prop="'.$column['column_name'].'"' : '',
                    ''
                ];
                if($column['view_type'] == 'select' || $column['view_type'] == 'radio' || $column['view_type'] == 'checkbox')
                {
                    $vmName = $column['view_type'].'2';
                }else{
                    $vmName = $column['view_type'];
                }

            }else{
                $new = [
                    $column['column_comment'],
                    $column['column_name'],
                    Str::camel($column['column_name']),
                    $column['is_required'] ? 'prop="'.$column['column_name'].'"' : '',
                    $column['column_name'].'List',
                ];
                $vmName = $column['view_type'];
            }

            $vmPath = $this->getvmPath('form/' . $vmName);
            if (!file_exists($vmPath)) {
                continue;
            }

            // 单选框值处理
            if ($column['view_type'] == 'radio' || $column['view_type'] == 'select') {
                $vmItemValue = 'item.value';
                $intFieldValue = ['tinyint', 'smallint', 'mediumint', 'int', 'integer', 'bigint'];
                if (in_array($column['column_type'], $intFieldValue)) {
                    $vmItemValue = 'parseInt(item.value)';
                }
                $old[] = '{ITEM_VALUE}';
                $new[] = $vmItemValue;
            }
            // 数字框处理
            if ($column['view_type'] == 'number') {
                if(!empty($column['validate_type']))
                {
                    $validate = json_decode($column['validate_type'],true);
                    if($validate[0] == 'min')
                    {
                        $rule = ':min = "'.$validate[1][0].'"';
                    }
                    if($validate[0] == 'max')
                    {
                        $rule = ':max = "'.$validate[1][0].'"';
                    }
                    if($validate[0] == 'between')
                    {
                        $rule = ':min = "'.$validate[1][0].'"'.' max = "'.$validate[1][1].'"';
                    }
                }else{
                    $rule = '';
                }
                $old[] = '{RULE}';
                $new[] = $rule;
            }
            $content .= $this->replaceFileText($old, $new, $vmPath) . PHP_EOL;

        }
        if (!empty($content)) {
            $content = substr($content, 0, -1);
        }

        return $this->setBlankSpace($content, '                ');
    }

    /**
     * 获取数据字典内容
     * @return string
     */
    public function getDictDataContent()
    {
        $content = '';
        $isExist = [];
        foreach ($this->tableColumn as $column) {
            if (empty($column['dict_type']) || $column['is_pk']) {
                continue;
            }
            if (in_array($column['dict_type'], $isExist)) {
                continue;
            }
            $content .= $column['dict_type'] . ': ' . "[]," . PHP_EOL;
            $isExist[] = $column['dict_type'];
        }
        if (!empty($content)) {
            $content = substr($content, 0, -1);
        }
        return $this->setBlankSpace($content, '    ');
    }


    /**
     * 获取API数据字典内容
     * @return string
     */
    public function getDictDataApiContent()
    {
        $content = '';
        $isExist = [];
        foreach ($this->tableColumn as $column) {
            if (empty($column['dict_type']) || $column['is_pk']) {
                continue;
            }
            if (in_array($column['dict_type'], $isExist)) {
                continue;
            }
            $needReplace = [
                '{DICT_TYPE}',
            ];
            $waitReplace = [
                $column['column_name'].'List',
            ];
            $templatePath = $this->getTemplatePath('/other/dictDataApi');
            if (!file_exists($templatePath)) {
                continue;
            }
            $content .= $this->replaceFileData($needReplace, $waitReplace, $templatePath) . '' . PHP_EOL;

            $isExist[] = $column['dict_type'];
        }
        $content = substr($content, 0, -1);
        return $content;
    }

    /**
     * 获取表单默认字段内容
     * @return string
     */
    public function getFormData()
    {
        $content = '';
        $isExist = [];
        foreach ($this->tableColumn as $column) {
            if ((!$column['is_insert'] || !$column['is_update']) && !$column['is_pk']) {
                continue;
            }
            if (in_array($column['column_name'], $isExist)) {
                continue;
            }

            if ($column['view_type'] == 'checkbox') {
                $content .= $column['column_name'] . ': ' . "[]," . PHP_EOL;
            } else {
                $content .= $column['column_name'] . ': ' . "''," . PHP_EOL;
            }

            $isExist[] = $column['column_name'];
        }
        if (!empty($content)) {
            $content = substr($content, 0, -1);
        }
        return $this->setBlankSpace($content, '    ');
    }


    /**
     * 表单验证内容
     * @return string
     */
    public function getFormValidate()
    {
        $content = '';
        $isExist = [];
        $specDictType = ['input', 'textarea', 'editor'];

        foreach ($this->tableColumn as $column) {
//            if (!$column['is_pk']) {
//                continue;
//            }
            if (!$column['is_insert'] || !$column['is_update'] ) {
                continue;
            }
            if (in_array($column['column_name'], $isExist)) {
                continue;
            }

            $validateMsg = Str::camel($column['column_name']).'Placeholder';

            $old = [
                '{COLUMN_NAME}',
                '{VALIDATE_MSG}',
                '{VERIFY}'
            ];
            if(!empty($column['validate_type']))
            {
                $validate = json_decode($column['validate_type'],true);
            }else{
                $validate = [];
            }
            $new = [
                $column['column_name'],
                $validateMsg,
                $this->getVerify($validate)
            ];
            $vmPath = $this->getvmPath('other/formValidate');
            if (!file_exists($vmPath)) {
                continue;
            }

            $content .= $this->replaceFileText($old, $new, $vmPath) . ',' . PHP_EOL;

            $isExist[] = $column['column_name'];
        }
        return substr($content, 0, -2);
    }

    public function getVerify($validateType)
    {
        if(!empty($validateType))
        {
            if(!empty($validateType[1]))
            {
                if($validateType[0] == 'min')
                {
                    $min = '0,'.$validateType[1][0];
                    $content = '{ validator: (rule: any, value: string, callback: any) => { '.
                        ' if (value && !/^\d{0,'.$min.'}$/.test(value)) {'.
                            "callback(new Error(t('".'generateMin'."')))".'} else { callback() }}},';
                }
                if($validateType[0] == 'max')
                {
                    $max = '0,'.$validateType[1][0];
                    $content = '{ validator: (rule: any, value: string, callback: any) => { '.
                        ' if (value && !/^\d{0,'.$max.'}$/.test(value)) {'.
                        " callback(new Error(t('".'generateMax'."')))".' } else { callback() }}},';
                }
                if($validateType[0] == 'between')
                {
                    $between = $validateType[1][0].','.$validateType[1][1];
                    $content = '{ validator: (rule: any, value: string, callback: any) => { '.
                        ' if (value && !/^\d{'.$between.'}$/.test(value)) {'. " callback(new Error(t('".'generateBetween'."')))".'} else { callback() }}},';
                }
            }else{
                $content = '';
            }
        }else{
            $content = '';
        }

        return $content;
    }

    /**
     * 获取文件生成到模块的文件夹路径
     * @return string
     */
    public function getModuleOutDir()
    {
        if($this->table['edit_type'] != 1) {
            return '';
        }
        $dir = dirname(app()->getRootPath()) . '/admin/src/views/' . $this->moduleName . '/';
        $this->checkDir($dir);
        return $dir;
    }


    /**
     * 获取文件生成到runtime的文件夹路径
     * @return string
     */
    public function getRuntimeOutDir()
    {
        if($this->table['edit_type'] != 1) {
            return '';
        }
        if(!empty($this->addonName))
        {
            $dir = $this->outDir . '/addon/'.$this->addonName.'/admin/src/views/' . $this->moduleName . '/';
        }else{
            $dir = $this->outDir . 'admin/src/app/views/' . $this->moduleName . '/';
        }

        $dir .= 'components/';
        $this->checkDir($dir);

        return $dir;
    }

    /**
     * 获取文件生成到项目中
     * @return string
     */
    public function getObjectOutDir()
    {
        if(!empty($this->addonName))
        {
            $dir = $this->rootDir . '/admin/src/'.$this->addonName.'/views/'. $this->moduleName . '/';
        }else{
            $dir = $this->rootDir . '/admin/src/app/views/'. $this->moduleName . '/';
        }

        $dir .= 'components/';
        $this->checkDir($dir);
        return $dir;
    }

    public function getFilePath()
    {
        if($this->table['edit_type'] != 1) {
            return '';
        }
        if(!empty($this->addonName))
        {
            $dir = 'addon/'.$this->addonName.'/admin/'.$this->addonName.'/views/' . $this->moduleName . '/';
        }else{
            $dir = 'admin/app/views/' . $this->moduleName . '/';
        }

        $dir .= 'components/';
        return $dir;
    }

    /**
     * 生成的文件名
     * @return string
     */
    public function getFileName()
    {
        if($this->table['edit_type'] != 1) {
            return '';
        }
        return 'edit.vue';

    }

    /**
     * 生成的API路径
     * @return string
     */
    public function getApiPath()
    {
        if(!empty($this->addonName))
        {
            return $this->addonName.'/api/'.$this->moduleName;
        }else{
            return '/app/api/'.$this->moduleName;
        }
    }


    /**
     * 调用字典方法
     * @return void
     */
    public function getDictList()
    {
        $content = '';
        foreach ($this->tableColumn as $column)
        {
            if(empty($column['dict_type']))
            {
                continue;
            }
            $content.= 'let '.$column['column_name'].'List = ref([])'.PHP_EOL.'const '.$column['column_name'].'DictList = async () => {'.PHP_EOL.$column['column_name'].'List.value = await (await useDictionary(' ."'".$column['dict_type']."'".')).data.dictionary'.PHP_EOL.'}'.PHP_EOL. $column['column_name'].'DictList();'.PHP_EOL;
        }

        if(!empty($content))
        {
            $content = substr($content, 0, -1);
        }
        return $this->setBlankSpace($content, '    ');
    }
}
