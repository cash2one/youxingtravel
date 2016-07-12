using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Data;
using System.Collections.Generic;
using Plumsys.Common;
using Plumsys.Model;
using Top.Api;
using Top.Api.Request;
using Top.Api.Response;

namespace Plumsys.BLL
{
    /// <summary>
    /// 手机短信
    /// </summary>
    public partial class sms_message
    {
        private readonly Model.siteconfig siteConfig = new BLL.siteconfig().loadConfig(); //获得站点配置信息
        public sms_message()
        { }

        /// <summary>
        /// 检查账户信息是否正确
        /// </summary>
        /// <returns></returns>
        public bool Exists()
        {
            if (string.IsNullOrEmpty(siteConfig.smsapiurl) || string.IsNullOrEmpty(siteConfig.smsusername) || string.IsNullOrEmpty(siteConfig.smspassword))
            {
                return false;
            }
            return true;
        }

        /// <summary>
        /// 发送手机短信
        /// </summary>
        /// <param name="mobiles">手机号码，以英文“,”逗号分隔开</param>
        /// <param name="content">短信内容</param>
        /// <param name="pass">短信通道1验证码通道2广告通道</param>
        /// <param name="msg">返回提示信息</param>
        /// <returns>bool</returns>
        public bool Send(string mobiles, string content, int pass, out string msg)
        {
            #region 注视以前的代码 此处用阿里大鱼
            //检查是否设置好短信账号
            //if (!Exists())
            //{
            //    msg = "短信配置参数有误，请完善后再提交！";
            //    return false;
            //}

           #endregion 
            //检查手机号码，如果超过2000则分批发送
            int sucCount = 0; //成功提交数量
            string errorMsg = string.Empty; //错误消息
            string[] oldMobileArr = mobiles.Split(',');
            int batch = oldMobileArr.Length / 2000 + 1; //2000条为一批，求出分多少批

            for (int i = 0; i < batch; i++)
            {
                StringBuilder sb = new StringBuilder();
                int sendCount = 0; //发送数量
                int maxLenght = (i + 1) * 2000; //循环最大的数

                //检测号码，忽略不合格的，重新组合
                for (int j = 0; j < oldMobileArr.Length && j < maxLenght; j++)
                {
                    int arrNum = j + (i * 2000);
                    string pattern = @"^1\d{10}$";
                    string mobile = oldMobileArr[arrNum].Trim();
                    Regex r = new Regex(pattern, RegexOptions.IgnoreCase); //正则表达式实例，不区分大小写
                    Match m = r.Match(mobile); //搜索匹配项
                    if (m != null)
                    {
                        sendCount++;
                        sb.Append(mobile + ",");
                    }
                }

                //发送短信
                if (sb.ToString().Length > 0)
                {
                    try
                    {
                        ali_api_sms_request ali_sms = new ali_api_sms_request();
                        ali_sms.app_key = "23401454";
                        ali_sms.target_app_key = "0b3c42771e7e5223441a8e41080bba9f";
                        ali_sms.extend = "";
                        ali_sms.format = "json";
                        ali_sms.method = "alibaba.aliqin.fc.sms.num.send";
                        ali_sms.partner_id = string.Empty;
                        ali_sms.rec_num = "18652023049";
                        ali_sms.session = string.Empty;
                        ali_sms.sign = string.Empty;
                        ali_sms.sign_method = "md5";
                        ali_sms.simplify = false;
                        ali_sms.sms_free_sign_name = "大鱼测试";
                        ali_sms.sms_param = "{\"webname\":\"优行网\",\"username\":\"代剑\"}";
                        ali_sms.sms_template_code = "SMS_11670262";
                        ali_sms.sms_type = "normal";
                        ali_sms.timestamp = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ali_sms.v = "2.0";
                        //string result = Utils.HttpPost(siteConfig.smsapiurl,
                        //    "cmd=tx&pass=" + pass + "&uid=" + siteConfig.smsusername + "&pwd=" + siteConfig.smspassword + "&mobile=" + Utils.DelLastComma(sb.ToString()) + "&encode=utf8&content=" + Utils.UrlEncode(content));
                        //string result = Utils.HttpPost(siteConfig.smsapiurl,
                        //   "app_key=" + ali_sms.app_key + "&method=" + ali_sms.method + "&session=" + ali_sms.session + "&timestamp=" + ali_sms.timestamp + "&format=" + ali_sms.format + "&v=" + ali_sms.v + "&partner_id=" + ali_sms.partner_id + "&target_app_key=" + ali_sms.target_app_key + "&simplify=" + ali_sms.simplify + "&sign_method=" + ali_sms.sign_method + "&extend=" + ali_sms.extend + "&sms_type =" + ali_sms.sms_type + "&sms_free_sign_name =" + ali_sms.sms_free_sign_name + "&sms_param =" + ali_sms.sms_param + "&rec_num  =" + ali_sms.rec_num + "&sms_template_code =" + ali_sms.sms_template_code);
                        ITopClient client = new DefaultTopClient(siteConfig.smsapiurl, ali_sms.app_key, ali_sms.target_app_key);
                        AlibabaAliqinFcSmsNumSendRequest req = new AlibabaAliqinFcSmsNumSendRequest();
                        req.Extend = ali_sms.extend;
                        req.SmsType = ali_sms.sms_type ;
                        req.SmsFreeSignName = ali_sms.sms_free_sign_name;
                        req.SmsParam = ali_sms.sms_param;
                        req.RecNum = ali_sms.rec_num ;
                        req.SmsTemplateCode = ali_sms.sms_template_code ;
                        AlibabaAliqinFcSmsNumSendResponse rsp = client.Execute(req);
                        if (!rsp.Result.Success)
                        {
                            errorMsg = "提交失败，错误提示：" + rsp.Result.Msg;
                            continue;
                        }
                        sucCount += sendCount; //成功数量
                    }
                    catch
                    {
                        //没有动作
                    }
                }
            }

            //返回状态
            if (sucCount > 0)
            {
                msg = "成功提交" + sucCount + "条，失败" + (oldMobileArr.Length - sucCount) + "条";
                return true;
            }
            msg = errorMsg;
            return false;
        }

        /// <summary>
        /// 查询账户剩余短信数量
        /// </summary>
        public int GetAccountQuantity(out string code)
        {
            //检查是否设置好短信账号
            if (!Exists())
            {
                code = "115";
                return 0;
            }
            try
            {
                string result = Utils.HttpPost(siteConfig.smsapiurl, "cmd=mm&uid=" + siteConfig.smsusername + "&pwd=" + siteConfig.smspassword);
                string[] strArr = result.Split(new string[] { "||" }, StringSplitOptions.None);
                if (strArr[0] != "100")
                {
                    code = strArr[0];
                    return 0;
                }
                code = strArr[0];
                return Utils.StrToInt(strArr[1], 0);
            }
            catch
            {
                code = "115";
                return 0;
            }
        }

        /// <summary>
        /// 查询已发送数量
        /// </summary>
        public int GetSendQuantity(out string code)
        {
            //检查是否设置好短信账号
            if (!Exists())
            {
                code = "115";
                return 0;
            }
            try
            {
                string result = Utils.HttpPost(siteConfig.smsapiurl, "cmd=se&uid=" + siteConfig.smsusername + "&pwd=" + siteConfig.smspassword);
                string[] strArr = result.Split(new string[] { "||" }, StringSplitOptions.None);
                if (strArr[0] != "100")
                {
                    code = strArr[0];
                    return 0;
                }
                code = strArr[0];
                return Utils.StrToInt(strArr[1], 0);
            }
            catch
            {
                code = "115";
                return 0;
            }
        }

    }
}
