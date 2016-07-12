using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Plumsys.Model
{
    /// <summary>
    /// 阿里aip返回基类
    /// </summary>
    public class ali_api_response_base
    {
        private string _err_code;//错误码
        private string _model;//返回结果
        private bool _success;//true表示成功，false表示失败
        private string _msg; //成功 返回信息描述
        #region Model
        /// <summary>
        /// 错误码
        /// </summary>
        public string err_code
        {
            get { return _err_code; }
            set { _err_code = value; }
        }

        /// <summary>
        /// 返回结果
        /// </summary>
        public string model
        {
            get { return _model; }
            set { _model = value; }
        }

        /// <summary>
        /// 执行状态
        /// </summary>
        public bool success
        {
            get { return _success; }
            set { _success = value; }
        }

        /// <summary>
        /// 成功返回信息描述
        /// </summary>
        public string msg
        {
            get { return _msg; }
            set { _msg = value; }
        }
        #endregion

    }
}
