using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Plumsys.Model
{
    /// <summary>
    /// 阿里大鱼短信接口
    /// </summary>
    public class ali_api_sms_request : ali_api_request_base
    {
        private string _extend;//  String  可选  123456   公共回传参数，在“消息返回”中会透传回该参数；举例：用户可以传入自己下级的会员ID，在消息返回时，该会员ID会包含在内，用户可以根据该会员ID识别是哪位会员使用了你的应用  
        private string _sms_type;//  String  必须  normal   短信类型，传入值请填写normal  
        private string _sms_free_sign_name;//  String  必须  阿里大鱼   短信签名，传入的短信签名必须是在阿里大鱼“管理中心-短信签名管理”中的可用签名。如“阿里大鱼”已在短信签名管理中通过审核，则可传入”阿里大鱼“（传参时去掉引号）作为短信签名。短信效果示例：【阿里大鱼】欢迎使用阿里大鱼服务。  
        private string _sms_param;//  Json  可选  {"code":"1234","product":"alidayu"}   短信模板变量，传参规则{"key":"value"}，key的名字须和申请模板中的变量名一致，多个变量之间以逗号隔开。示例：针对模板“验证码${code}，您正在进行${product}身份验证，打死不要告诉别人哦！”，传参时需传入{"code":"1234","product":"alidayu"}  
        private string _rec_num;//  String  必须  13000000000   短信接收号码。支持单个或多个手机号码，传入号码为11位手机号码，不能加0或+86。群发短信需传入多个号码，以英文逗号分隔，一次调用最多传入200个号码。示例：18600000000,13911111111,13322222222  
        private string _sms_template_code;//  String  必须  SMS_585014   短信模板ID，传入的模板必须是在阿里大鱼“管理中心-短信模板管理”中的可用模板。示例：SMS_585014  
        #region Model
        /// <summary>
        /// 可选  123456   公共回传参数，在“消息返回”中会透传回该参数；举例：用户可以传入自己下级的会员ID，在消息返回时，该会员ID会包含在内，用户可以根据该会员ID识别是哪位会员使用了你的应用  
        /// </summary>
        public string extend
        {
            get { return _extend; }
            set { _extend = value; }
        }

        /// <summary>
        /// String  必须  normal   短信类型，传入值请填写normal 
        /// </summary>
        public string sms_type
        {
            get { return _sms_type; }
            set { _sms_type = value; }
        }

        /// <summary>
        /// 必须  阿里大鱼   短信签名，传入的短信签名必须是在阿里大鱼“管理中心-短信签名管理”中的可用签名。如“阿里大鱼”已在短信签名管理中通过审核，则可传入”阿里大鱼“（传参时去掉引号）作为短信签名。短信效果示例：【阿里大鱼】欢迎使用阿里大鱼服务。
        /// </summary>
        public string sms_free_sign_name
        {
            get { return _sms_free_sign_name; }
            set { _sms_free_sign_name = value; }
        }

        /// <summary>
        /// Json  可选  {"code":"1234","product":"alidayu"}   短信模板变量，传参规则{"key":"value"}，key的名字须和申请模板中的变量名一致，多个变量之间以逗号隔开。示例：针对模板“验证码${code}，您正在进行${product}身份验证，打死不要告诉别人哦！”，传参时需传入{"code":"1234","product":"alidayu"}  
        /// </summary>
        public string sms_param
        {
            get { return _sms_param; }
            set { _sms_param = value; }
        }

        /// <summary>
        /// 必须  13000000000   短信接收号码。支持单个或多个手机号码，传入号码为11位手机号码，不能加0或+86。群发短信需传入多个号码，以英文逗号分隔，一次调用最多传入200个号码。示例：18600000000,13911111111,13322222222  
        /// </summary>
        public string rec_num
        {
            get { return _rec_num; }
            set { _rec_num = value; }
        }

        /// <summary>
        /// 必须  SMS_585014   短信模板ID，传入的模板必须是在阿里大鱼“管理中心-短信模板管理”中的可用模板。示例：SMS_585014  
        /// </summary>
        public string sms_template_code
        {
            get { return _sms_template_code; }
            set { _sms_template_code = value; }
        }
        #endregion

    }
}
