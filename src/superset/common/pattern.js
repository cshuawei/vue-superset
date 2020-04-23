/* eslint-disable */
/* 
 * 正则库
 */
const pattern = {
  sum: /^(0|[1-9][0-9]*)(\.\d{1,2}|)$/i,                              // 金额：可以为0，第一位不能为0，小数位不超过2位
  discount: /^((0\.[1-9]{1})|(([1-9]{1})(\.\d{1,2})?))$/i,            // 折扣：0-10之间的数字，不等于临界值，小数位不超过2位
  num: /^(0|[1-9][0-9]*)$/i,                                          // 件数 / 次数 / 天数 / 积分：可以为0，第一个数字不能为0，整数
  numNoZero: /^([1-9][0-9]*)$/i,                                      // 件数 / 次数 / 天数 / 积分：不可以为0，第一个数字不能为0，整数
  hr: /((1|0)[0-9]|2[0-3])/i,                                         // 小时：00-24，不等于24
  min: /([0-5][0-9])/i,                                               // 分钟：00-60，不等于60
  phone: /^1[0-9]\d{9}$/i,                                            // 手机号验证
  telephone: /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/,                  // 座机号验证 021-1234567(8)
  nohanzi: /^[^\u4e00-\u9fa5]{0,}$/i,                                 // 不能输入中文汉字
  numbydot: /^(\d+,)*\d+$/i,                                          // 输入数字用英文逗号分离
  numEnbydot: /^([0-9a-zA-Z]+,)*[0-9a-zA-Z]+$/i,                      // 输入纯数字或者纯英文或者数字英文字母组合用英文逗号分离
  idCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/i,                // 身份证号
  bankCard: /^\d{16,19}$/i,                                           // 银行卡号
  noSpace: /^[^ ]+$/i,                                                // 不能有空格
  password: /^(?![d]+$)(?![a-zA-Z]+$)(?![^da-zA-Z]+$).{6,20}$/i,      // 至少包含两种6-20个英文字母、数字或字符（除空格）
  phonei18n: {                                                        // 国际手机号   
    'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
    'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
    'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
    'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
    'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
    'da-DK': /^(\+?45)?(\d{8})$/,
    'el-GR': /^(\+?30)?(69\d{8})$/,
    'en-AU': /^(\+?61|0)4\d{8}$/,
    'en-GB': /^(\+?44|0)7\d{9}$/,
    'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
    'en-IN': /^(\+?91|0)?[789]\d{9}$/,
    'en-NZ': /^(\+?64|0)2\d{7,9}$/,
    'en-ZA': /^(\+?27|0)\d{9}$/,
    'en-ZM': /^(\+?26)?09[567]\d{7}$/,
    'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
    'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,
    'fr-FR': /^(\+?33|0)[67]\d{8}$/,
    'he-IL': /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/,
    'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
    'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
    'ja-JP': /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,
    'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
    'nb-NO': /^(\+?47)?[49]\d{7}$/,
    'nl-BE': /^(\+?32|0)4?\d{8}$/,
    'nn-NO': /^(\+?47)?[49]\d{7}$/,
    'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
    'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
    'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
    'ru-RU': /^(\+?7|8)?9\d{9}$/,
    'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
    'tr-TR': /^(\+?90|0)?5\d{9}$/,
    'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
    'zh-CN': /^(\+?0?86\-?)?1[012345789]\d{9}$/,
    'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
  }
}

export default {
  install (Vue) {
    Vue.mixin({
      data () {
        return {
          pattern
        }
      }
    })
    Object.defineProperty(Vue.prototype, '$pattern', {
      get () {
        return this.$root.pattern
      }
    })
  }
}
