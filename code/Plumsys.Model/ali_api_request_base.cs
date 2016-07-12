using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Plumsys.Model
{
    /// <summary>
    /// 阿里请求参数基类
    /// </summary>
    public class ali_api_request_base
    {
        private string _method; //String 是 API接口名称。 
        private string _app_key; //String 是 TOP分配给应用的AppKey。 
        private string _session; //String 否 用户登录授权成功后，TOP颁发给应用的授权信息，详细介绍请点击这里。当此API的标签上注明：“需要授权”，则此参数必传；“不需要授权”，则此参数不需要传；“可选授权”，则此参数为可选。 
        private string _timestamp; //String 是 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2015-01-01 12:00:00。淘宝API服务端允许客户端请求最大时间误差为10分钟。 
        private string _format; //String 否 响应格式。默认为xml格式，可选值：xml，json。 
        private string _partner_id; //String 否 合作伙伴身份标识。 
        private string _v; //String 是 API协议版本，可选值：2.0。 
        private string _target_app_key; //String 否 被调用的目标AppKey，仅当被调用的API为第三方ISV提供时有效。 
        private bool _simplify=false; //Boolean 否 是否采用精简JSON返回格式，仅当format=json时有效，默认值为：false。 
        private string _sign_method; //String 是 签名的摘要算法，可选值为：hmac，md5。 
        private string _sign; //String 是 API输入参数签名结果，签名算法介绍请点击这里。

        #region Model
        /// <summary>
        /// 必填 API接口名称。
        /// </summary>
        public string method
        {
            get { return _method; }
            set { _method = value; }
        }
        /// <summary>
        /// 必填 TOP分配给应用的AppKey。 
        /// </summary>
        public string app_key
        {
            get { return _app_key; }
            set { _app_key = value; }
        }

       /// <summary>
        /// 非必填 用户登录授权成功后，TOP颁发给应用的授权信息，详细介绍请点击这里。当此API的标签上注明：“需要授权”，则此参数必传；“不需要授权”，则此参数不需要传；“可选授权”，则此参数为可选。 
       /// </summary>
        public string session
        {
            get { return _session; }
            set { _session = value; }
        }
        /// <summary>
        /// 必填 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2015-01-01 12:00:00。淘宝API服务端允许客户端请求最大时间误差为10分钟。 
        /// </summary>
        public string timestamp
        {
            get { return _timestamp; }
            set { _timestamp = value; }
        }

        /// <summary>
        /// 非必填 响应格式。默认为xml格式，可选值：xml，json。
        /// </summary>
        public string format
        {
            get { return _format; }
            set { _format = value; }
        }


        /// <summary>
        /// 非必填 合作伙伴身份标识
        /// </summary>
        public string partner_id
        {
            get { return _partner_id; }
            set { _partner_id = value; }
        }


        /// <summary>
        /// 必填 API协议版本，可选值：2.0。
        /// </summary>
        public string v
        {
            get { return _v; }
            set { _v = value; }
        }
        /// <summary>
        /// 非必填 被调用的目标AppKey，仅当被调用的API为第三方ISV提供时有效。
        /// </summary>
        public string target_app_key
        {
            get { return _target_app_key; }
            set { _target_app_key = value; }
        }

        /// <summary>
        /// 非必填 是否采用精简JSON返回格式，仅当format=json时有效，默认值为：false。 
        /// </summary>
        public bool simplify
        {
            get { return _simplify; }
            set { _simplify = value; }
        }

        /// <summary>
        /// 必填 签名的摘要算法，可选值为：hmac，md5。 
        /// </summary>
        public string sign_method
        {
            get { return _sign_method; }
            set { _sign_method = value; }
        }

        /// <summary>
        /// 必填 API输入参数签名结果，签名算法介绍请点击这里。
        /// </summary>
        public string sign
        {
            get { return _sign; }
            set { _sign = value; }
        }
        #endregion

    }
}
