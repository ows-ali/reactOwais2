const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const complexityOptions = {
  min: 6,
  max: 35,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 6,
};

const signUpValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .trim()
      .min(1)
      // .max(2)
      .max(16)
      .required()
      // .pattern(new RegExp("^[\u4e00-\u9fa5]{1,2}$"))
      .pattern(new RegExp("^[a-zA-Z- ]{1,25}$"))
      .messages({
        "string.empty": "<b>名字</b> 欄位不能空白.",
        "string.pattern.base": "<b>名字</b> 必須為<b>中文漢字</b>.",
      }),
    lastName: Joi.string()
      .trim()
      .min(1)
      // .max(2)
      .max(16)
      .required()
      // .pattern(new RegExp("^[\u4e00-\u9fa5]{1,2}$"))
      .pattern(new RegExp("^[a-zA-Z- ]{1,25}$"))
      .messages({
        "string.empty": "<b>姓氏</b> 欄位不能空白.",
        "string.pattern.base": "<b>姓氏</b> 必須為<b>中文漢字</b>.",
      }),
    email: Joi.string().trim().email({ minDomainSegments: 2 }).messages({
      "string.empty": "<b>Email</b> 欄位不能空白.",
      "string.email": "<b>Email</b> 格式不正確.",
    }),
    password: passwordComplexity(complexityOptions).messages({
      "string.empty":
        "<b>註冊失敗</b>. </br>請注意您的密碼必須包含以下: </br>至少<b>6個英文字母</b>,</br>至少<b>1個小寫英文字母</b>,</br>至少<b>1個大寫英文字母</b>,</br>至少<b>1個數字</b>和</br>至少<b>1個特殊字符</b>.",
      "passwordComplexity.tooShort": "<b>密碼</b> 必須包含至少 <b>6位字符</b>.",
      "passwordComplexity.lowercase":
        "<b>密碼</b> 必須包含至少 <b>1個小寫英文字母</b>.",
      "passwordComplexity.uppercase":
        "<b>密碼</b> 必須包含至少 <b>1個大寫英文字母</b>.",
      "passwordComplexity.symbol":
        "<b>密碼</b> 必須包含至少 <b>1個特別符號</b>.",
      "passwordComplexity.numeric": "<b>密碼</b> 必須包含至少 <b>1個數字</b>.",
    }),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .trim()
      .email({
        minDomainSegments: 2,
      })
      .messages({
        "string.empty": "<b>Email</b> 欄位不能空白.",
        "string.email": "<b>Email</b> 格式不正確.",
      }),
    password: passwordComplexity(complexityOptions).messages({
      "string.empty": "<b>密碼</b> 欄位不能空白.",
      "passwordComplexity.tooShort": "<b>密碼</b> 必須包含至少 <b>6位字符</b>.",
      "passwordComplexity.lowercase":
        "<b>Email</b> 或<b>密碼</b>不正確. 請確認再輸入.",
      "passwordComplexity.uppercase":
        "<b>Email</b> 或<b>密碼</b>不正確. 請確認再輸入.",
      "passwordComplexity.symbol":
        "<b>Email</b> 或<b>密碼</b>不正確. 請確認再輸入.",
      "passwordComplexity.numeric":
        "<b>Email</b> 或<b>密碼</b>不正確. 請確認再輸入.",
    }),
    remember: Joi.boolean(),
  });
  return schema.validate(data);
};

const detailsValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .trim()
      .min(1)
      .max(25)
      .required()
      .pattern(new RegExp("^[a-zA-Z- \u4e00-\u9fa5]{1,25}$"))
      .messages({
        "string.empty": "<b>名字</b> 欄位不能空白.",
        "string.pattern.base": "<b>名字</b> 必須為<b>中文漢字</b>.",
      }),
    lastName: Joi.string()
      .trim()
      .min(1)
      .max(25)
      .required()
      .pattern(new RegExp("^[a-zA-Z- \u4e00-\u9fa5]{1,25}$"))
      .messages({
        "string.empty": "<b>姓氏</b> 欄位不能空白.",
        "string.pattern.base": "<b>姓氏</b> 必須為<b>中文漢字</b>.",
      }),
    email: Joi.string()
      .trim()
      .email({
        minDomainSegments: 2,
      })
      .messages({
        "string.empty": "<b>Email</b> 欄位不能空白.",
        "string.email": "<b>Email</b> 格式不正確.",
      }),
    phone: Joi.string()
      .trim()
      .min(10)
      .max(10)
      .required()
      // .pattern(new RegExp("^[0-9]{10}$"))
      .pattern(new RegExp("^([0]{1})[0-9]{9}$"))
      .messages({
        "string.empty": "<b>行動電話</b> 欄位不能空白.",
        "string.min": "<b>行動電話</b> 必須有10個數字.",
        "string.pattern.base":
          "<b>行動電話</b> 必須為<b>數字, 且第一個數字必須為0</b>.",
      }),
    nationalId: Joi.string()
      .trim()
      .min(10)
      .max(10)
      .required()
      .pattern(new RegExp("^([A-Za-z]{1})[0-9]{9}$"))
      .messages({
        "string.empty": "<b>身份證字號</b> 欄位不能空白.",
        "string.min":
          "<b>身份證字號</b> 必須含有<b>一個英文字母及9位數字之合併</b>.",
        "string.pattern.base":
          "<b>身份證字號</b> 必須含有<b>一個英文字母及9位數字之合併</b>.",
      }),
    gender: Joi.string()
      .trim()
      .min(1)
      .max(1)
      .required()
      .pattern(new RegExp("^[\u4e00-\u9fa5]{1}$"))
      .messages({
        "string.empty": "<b>性別</b> 欄位不能空白.",
      }),
    birth: Joi.string()
      .trim()
      .min(1)
      .max(10)
      .required()
      .pattern(new RegExp("^[a-zA-Z-0-9\u4e00-\u9fa5]{1,10}$"))
      .messages({
        "string.empty": "<b>出生日期</b> 欄位不能空白.",
      }),
    survey: Joi.string()
      .trim()
      .min(1)
      .max(10)
      .required()
      .pattern(new RegExp("^[a-zA-Z- \u4e00-\u9fa5]{1,10}$"))
      .messages({
        "string.empty": "請幫我們填寫<b>問卷問題</b>.",
      }),
    // streetNo: Joi.string()
    //   .trim()
    //   .min(1)
    //   .max(10)
    //   .required()
    //   .pattern(new RegExp("^[a-zA-Z-0-9\u4e00-\u9fa5]{1,10}$"))
    //   .messages({
    //     "string.empty": "請幫我們填寫<b>問卷問題</b>.",
    //   }),
    // street: Joi.string()
    //   .trim()
    //   .min(1)
    //   .max(55)
    //   .required()
    //   .pattern(
    //     new RegExp("^[a-zA-Z- a-zàâçéèêëîïôûùüÿñæœ0-9\u4e00-\u9fa5]{1,55}$")
    //   )
    //   .messages({
    //     "string.empty": "<b>居住位置</b> 欄位不能空白.",
    //   }),
    // postalCode: Joi.string().trim().min(1).max(25).allow(""),
    // suburb: Joi.string().trim().min(1).max(25).allow(""),
    // city: Joi.string().trim().min(1).max(25).allow(""),
    // state: Joi.string().trim().min(1).max(25).allow(""),
    // country: Joi.string().trim().min(1).max(25).allow(""),
    // latitude: Joi.string().trim().allow(""),
    // longitude: Joi.string().trim().allow(""),
  });
  return schema.validate(data);
};

module.exports.loginValidation = loginValidation;
module.exports.signUpValidation = signUpValidation;
module.exports.detailsValidation = detailsValidation;
