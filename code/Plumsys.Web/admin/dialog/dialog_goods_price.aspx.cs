using System;
using System.Text;
using System.Data;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Plumsys.Common;

namespace Plumsys.Web.admin.dialog
{
    public partial class dialog_goods_price : Web.UI.ManagePage
    {
        private string article_id = string.Empty;
        private string s_start_time = string.Empty;
        private string s_end_time = string.Empty;
        private DateTime? start_time;
        private DateTime? end_time;
        BLL.article bll = new BLL.article();

        protected void Page_Load(object sender, EventArgs e)
        {
            article_id = PLRequest.GetQueryString("article_id");
            s_start_time = PLRequest.GetQueryString("start_time");
            s_end_time = PLRequest.GetQueryString("end_time");
            if (article_id == "")
            {
                JscriptMsg("传输参数不正确！", "back");
                return;
            }
            if (!string.IsNullOrEmpty(s_start_time))
            {
                DateTime time;
                if (!DateTime.TryParse(s_start_time, out time))
                    start_time = null;
                else start_time = time;
            }
            if (!string.IsNullOrEmpty(s_end_time))
            {
                 DateTime time;
                 if (!DateTime.TryParse(s_end_time, out time))
                     end_time = null;
                 else end_time = time;
            }
            if (!bll.Exists(article_id))
            {
                JscriptMsg("商品不存在或已被删除！", "back");
                return;
            }
            if (!Page.IsPostBack)
            {
                ShowInfo(article_id);
            }
        }

        #region 赋值操作=================================
        private void ShowInfo(string article_id)
        {
            int _id = Convert.ToInt32(article_id);
            Model.article model = bll.GetModel(_id,start_time,end_time);
            //绑定商品规格
            List<Model.article_goods_spec> goodsSpecList = new BLL.article_goods_spec().GetList(model.id, "");
            hide_goods_spec_list.Value = JsonHelper.ObjectToJSON(goodsSpecList);
            rptGroupPrice.DataSource = model.goods;
            rptGroupPrice.DataBind();
        }
        #endregion
    }
}