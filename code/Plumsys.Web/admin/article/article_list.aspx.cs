﻿using System;
using System.Text;
using System.Data;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Plumsys.Common;

namespace Plumsys.Web.admin.article
{
    public partial class article_list : Web.UI.ManagePage
    {
        protected int channel_id;
        protected int totalCount;
        protected int page;
        protected int pageSize;

        protected int category_id;
        protected int area_id;
        protected string channel_name = string.Empty;
        protected string property = string.Empty;
        protected string keywords = string.Empty;
        protected string prolistview = string.Empty;
        protected int user_id = 0;
        protected BLL.manage_auth_groups auths;

        protected void Page_Load(object sender, EventArgs e)
        {
            this.channel_id = PLRequest.GetQueryInt("channel_id");
            this.category_id = PLRequest.GetQueryInt("category_id");
            this.area_id = PLRequest.GetQueryInt("area_id");
            this.keywords = PLRequest.GetQueryString("keywords");
            this.property = PLRequest.GetQueryString("property");
            if (channel_id == 0)
            {
                JscriptMsg("频道参数不正确！", "back");
                return;
            }
            this.channel_name = new BLL.channel().GetChannelName(this.channel_id); //取得频道名称
            this.pageSize = GetPageSize(10); //每页数量
            this.prolistview = Utils.GetCookie("article_list_view"); //显示方式
            //获取页面所有操作权限
            auths=GetAdminAuth("channel_" + this.channel_name + "_list");
            btnSave.Visible = auths[PLEnums.ActionEnum.Edit];
            btnAudit.Visible = auths[PLEnums.ActionEnum.Audit];
            btnReturned.Visible = auths[PLEnums.ActionEnum.Returned];
            btnDelete.Visible = auths[PLEnums.ActionEnum.Delete];
            if (!Page.IsPostBack)
            {
                ChkAdminLevel("channel_" + this.channel_name + "_list", PLEnums.ActionEnum.View.ToString()); //检查权限
                TreeBind(this.channel_id); //绑定类别
                TreeBindArea();//绑定地区
                RptBind(this.channel_id, this.category_id,this.area_id, "id>0" + CombSqlTxt(this.keywords, this.property), "sort_id asc,add_time desc,id desc");
            }
        }

        #region 绑定类别=================================
        private void TreeBind(int _channel_id)
        {
            BLL.article_category bll = new BLL.article_category();
            DataTable dt = bll.GetList(0, _channel_id);

            this.ddlCategoryId.Items.Clear();
            this.ddlCategoryId.Items.Add(new ListItem("所有类别", ""));
            this.ddlMoveId.Items.Clear();
            this.ddlMoveId.Items.Add(new ListItem("批量移动...", ""));
            foreach (DataRow dr in dt.Rows)
            {
                string Id = dr["id"].ToString();
                int ClassLayer = int.Parse(dr["class_layer"].ToString());
                string Title = dr["title"].ToString().Trim();

                if (ClassLayer == 1)
                {
                    this.ddlCategoryId.Items.Add(new ListItem(Title, Id));
                    this.ddlMoveId.Items.Add(new ListItem(Title, Id));
                }
                else
                {
                    Title = "├ " + Title;
                    Title = Utils.StringOfChar(ClassLayer - 1, "　") + Title;
                    this.ddlCategoryId.Items.Add(new ListItem(Title, Id));
                    this.ddlMoveId.Items.Add(new ListItem(Title, Id));
                }
            }
        }
        #endregion
        #region 绑定地区=================================
        private void TreeBindArea()
        {
            BLL.area_category bll = new BLL.area_category();
            DataTable dt = bll.GetList(0);

            this.ddlAreaId.Items.Clear();
            this.ddlAreaId.Items.Add(new ListItem("所有地区", ""));
            this.ddlMoveAreaId.Items.Clear();
            this.ddlMoveAreaId.Items.Add(new ListItem("批量移动...", ""));
            foreach (DataRow dr in dt.Rows)
            {
                string Id = dr["id"].ToString();
                int ClassLayer = int.Parse(dr["class_layer"].ToString());
                string Title = dr["title"].ToString().Trim();

                if (ClassLayer == 1)
                {
                    this.ddlAreaId.Items.Add(new ListItem(Title, Id));
                    this.ddlMoveAreaId.Items.Add(new ListItem(Title, Id));
                }
                else
                {
                    Title = "├ " + Title;
                    Title = Utils.StringOfChar(ClassLayer - 1, "　") + Title;
                    this.ddlAreaId.Items.Add(new ListItem(Title, Id));
                    this.ddlMoveAreaId.Items.Add(new ListItem(Title, Id));
                }
            }
        }
        #endregion

        #region 数据绑定=================================
        private void RptBind(int _channel_id, int _category_id,int _area_id, string _strWhere, string _orderby)
        {
            Model.manager manage = GetAdminInfo();
            if (manage.role_type != 1) _strWhere += "and user_id=" + manage.id;
            this.page = PLRequest.GetQueryInt("page", 1);
            if (this.category_id > 0)
            {
                this.ddlCategoryId.SelectedValue = _category_id.ToString();
            }
            if (this.area_id > 0)
            {
                this.ddlAreaId.SelectedValue = _area_id.ToString();
            }
            this.ddlProperty.SelectedValue = this.property;
            this.txtKeywords.Text = this.keywords;
            //图表或列表显示
            BLL.article bll = new BLL.article();
            switch (this.prolistview)
            {
                case "Txt":
                    this.rptList2.Visible = false;
                    this.rptList1.DataSource = bll.GetList(_channel_id, _category_id, _area_id, this.pageSize, this.page, _strWhere, _orderby, out this.totalCount);
                    this.rptList1.DataBind();
                    break;
                default:
                    this.rptList1.Visible = false;
                    this.rptList2.DataSource = bll.GetList(_channel_id, _category_id, _area_id, this.pageSize, this.page, _strWhere, _orderby, out this.totalCount);
                    this.rptList2.DataBind();
                    break;
            }
            //绑定页码
            txtPageNum.Text = this.pageSize.ToString();
            string pageUrl = Utils.CombUrlTxt("article_list.aspx", "channel_id={0}&category_id={1}&keywords={2}&property={3}&page={4}&area_id={5}",
                _channel_id.ToString(), _category_id.ToString(), this.keywords, this.property, "__id__",_area_id.ToString());
            PageContent.InnerHtml = Utils.OutPageList(this.pageSize, this.page, this.totalCount, pageUrl, 8);
        }
        #endregion

        #region 组合SQL查询语句==========================
        protected string CombSqlTxt(string _keywords, string _property)
        {
            StringBuilder strTemp = new StringBuilder();
            _keywords = _keywords.Replace("'", "");
            if (!string.IsNullOrEmpty(_keywords))
            {
                strTemp.Append(" and title like '%" + _keywords + "%'");
            }
            if (!string.IsNullOrEmpty(_property))
            {
                switch (_property)
                {
                    case "isLock":
                        strTemp.Append(" and status=1");
                        break;
                    case "unIsLock":
                        strTemp.Append(" and status=0");
                        break;
                    case "isReturned":
                        strTemp.Append(" and status=3");
                        break;
                    case "isMsg":
                        strTemp.Append(" and is_msg=1");
                        break;
                    case "isTop":
                        strTemp.Append(" and is_top=1");
                        break;
                    case "isRed":
                        strTemp.Append(" and is_red=1");
                        break;
                    case "isHot":
                        strTemp.Append(" and is_hot=1");
                        break;
                    case "isSlide":
                        strTemp.Append(" and is_slide=1");
                        break;
                }
            }
            return strTemp.ToString();
        }
        #endregion

        #region 返回图文每页数量=========================
        private int GetPageSize(int _default_size)
        {
            int _pagesize;
            if (int.TryParse(Utils.GetCookie("article_page_size", "PlumsysPage"), out _pagesize))
            {
                if (_pagesize > 0)
                {
                    return _pagesize;
                }
            }
            return _default_size;
        }
        #endregion

        //设置操作
        protected void rptList_ItemCommand(object source, RepeaterCommandEventArgs e)
        {
            ChkAdminLevel("channel_" + this.channel_name + "_list", PLEnums.ActionEnum.Edit.ToString()); //检查权限
            int id = Convert.ToInt32(((HiddenField)e.Item.FindControl("hidId")).Value);
            BLL.article bll = new BLL.article();
            Model.article model = bll.GetModel(id);
            switch (e.CommandName)
            {
                case "lbtnIsMsg":
                    if (model.is_msg == 1)
                        bll.UpdateField(id, "is_msg=0");
                    else
                        bll.UpdateField(id, "is_msg=1");
                    break;
                case "lbtnIsTop":
                    if (model.is_top == 1)
                        bll.UpdateField(id, "is_top=0");
                    else
                        bll.UpdateField(id, "is_top=1");
                    break;
                case "lbtnIsRed":
                    if (model.is_red == 1)
                        bll.UpdateField(id, "is_red=0");
                    else
                        bll.UpdateField(id, "is_red=1");
                    break;
                case "lbtnIsHot":
                    if (model.is_hot == 1)
                        bll.UpdateField(id, "is_hot=0");
                    else
                        bll.UpdateField(id, "is_hot=1");
                    break;
                case "lbtnIsSlide":
                    if (model.is_slide == 1)
                        bll.UpdateField(id, "is_slide=0");
                    else
                        bll.UpdateField(id, "is_slide=1");
                    break;
            }
            this.RptBind(this.channel_id, this.category_id,this.area_id, "id>0" + CombSqlTxt(this.keywords, this.property), "sort_id asc,add_time desc,id desc");
        }

        //关健字查询
        protected void btnSearch_Click(object sender, EventArgs e)
        {
            Response.Redirect(Utils.CombUrlTxt("article_list.aspx", "channel_id={0}&category_id={1}&keywords={2}&property={3}&area_id={4}",
                this.channel_id.ToString(), this.category_id.ToString(), txtKeywords.Text, this.property,this.area_id.ToString()));
        }

        //筛选类别
        protected void ddlCategoryId_SelectedIndexChanged(object sender, EventArgs e)
        {
            Response.Redirect(Utils.CombUrlTxt("article_list.aspx", "channel_id={0}&category_id={1}&keywords={2}&property={3}&area_id={4}",
               this.channel_id.ToString(), ddlCategoryId.SelectedValue, this.keywords, this.property, this.area_id.ToString()));
        }
        //筛选地区
        protected void ddlAreaId_SelectedIndexChanged(object sender, EventArgs e)
        {
            Response.Redirect(Utils.CombUrlTxt("article_list.aspx", "channel_id={0}&category_id={1}&keywords={2}&property={3}&area_id={4}",
               this.channel_id.ToString(), this.category_id.ToString(), this.keywords, this.property, ddlAreaId.SelectedValue));
        }
        //筛选属性
        protected void ddlProperty_SelectedIndexChanged(object sender, EventArgs e)
        {
            Response.Redirect(Utils.CombUrlTxt("article_list.aspx", "channel_id={0}&category_id={1}&keywords={2}&property={3}&area_id={4}",
               this.channel_id.ToString(), this.category_id.ToString(), this.keywords, ddlProperty.SelectedValue,this.area_id.ToString()));
        }

        //设置文字列表显示
        protected void lbtnViewTxt_Click(object sender, EventArgs e)
        {
            Utils.WriteCookie("article_list_view", "Txt", 14400);
            Response.Redirect(Utils.CombUrlTxt("article_list.aspx", "channel_id={0}&category_id={1}&keywords={2}&property={3}&page={4}&area_id={5}",
                this.channel_id.ToString(), this.category_id.ToString(), this.keywords, this.property, this.page.ToString(),this.area_id.ToString()));
        }

        //设置图文列表显示
        protected void lbtnViewImg_Click(object sender, EventArgs e)
        {
            Utils.WriteCookie("article_list_view", "Img", 14400);
            Response.Redirect(Utils.CombUrlTxt("article_list.aspx", "channel_id={0}&category_id={1}&keywords={2}&property={3}&page={4}&area_id={5}",
                this.channel_id.ToString(), this.category_id.ToString(), this.keywords, this.property, this.page.ToString(), this.area_id.ToString()));
        }

        //设置分页数量
        protected void txtPageNum_TextChanged(object sender, EventArgs e)
        {
            int _pagesize;
            if (int.TryParse(txtPageNum.Text.Trim(), out _pagesize))
            {
                if (_pagesize > 0)
                {
                    Utils.WriteCookie("article_page_size", "PlumsysPage", _pagesize.ToString(), 43200);
                }
            }
            Response.Redirect(Utils.CombUrlTxt("article_list.aspx", "channel_id={0}&category_id={1}&keywords={2}&property={3}&area_id={4}",
                this.channel_id.ToString(), this.category_id.ToString(), this.keywords, this.property,this.area_id.ToString()));
        }

        //保存排序
        protected void btnSave_Click(object sender, EventArgs e)
        {
            ChkAdminLevel("channel_" + this.channel_name + "_list", PLEnums.ActionEnum.Edit.ToString()); //检查权限
            BLL.article bll = new BLL.article();
            Repeater rptList = new Repeater();
            switch (this.prolistview)
            {
                case "Txt":
                    rptList = this.rptList1;
                    break;
                default:
                    rptList = this.rptList2;
                    break;
            }
            for (int i = 0; i < rptList.Items.Count; i++)
            {
                int id = Convert.ToInt32(((HiddenField)rptList.Items[i].FindControl("hidId")).Value);
                int sortId;
                if (!int.TryParse(((TextBox)rptList.Items[i].FindControl("txtSortId")).Text.Trim(), out sortId))
                {
                    sortId = 99;
                }
                bll.UpdateField(id, "sort_id=" + sortId.ToString());
            }
            AddAdminLog(PLEnums.ActionEnum.Edit.ToString(), "保存" + this.channel_name + "频道内容排序"); //记录日志
            JscriptMsg("保存排序成功！", Utils.CombUrlTxt("article_list.aspx", "channel_id={0}&category_id={1}&keywords={2}&property={3}&area_id={4}",
                this.channel_id.ToString(), this.category_id.ToString(), this.keywords, this.property,this.area_id.ToString()));
        }

        //批量移动地区
        protected void ddlMoveAreaId_SelectedIndexChanged(object sender, EventArgs e)
        {
            ChkAdminLevel("channel_" + this.channel_name + "_list", PLEnums.ActionEnum.Edit.ToString()); //检查权限
            int sucCount = 0; //成功数量
            if (ddlMoveAreaId.SelectedValue == "")
            {
                ddlMoveAreaId.SelectedIndex = 0;
                JscriptMsg("请选择要移动的地区！", string.Empty);
                return;
            }
            BLL.article bll = new BLL.article();
            Repeater rptList = new Repeater();
            switch (this.prolistview)
            {
                case "Txt":
                    rptList = this.rptList1;
                    break;
                default:
                    rptList = this.rptList2;
                    break;
            }
            for (int i = 0; i < rptList.Items.Count; i++)
            {
                int id = Convert.ToInt32(((HiddenField)rptList.Items[i].FindControl("hidId")).Value);
                CheckBox cb = (CheckBox)rptList.Items[i].FindControl("chkId");
                if (cb.Checked)
                {
                    sucCount++;
                    bll.UpdateField(id, "area_id=" + ddlMoveAreaId.SelectedValue);
                }
            }
            AddAdminLog(PLEnums.ActionEnum.Edit.ToString(), "批量移动" + this.channel_name + "频道地区分类"); //记录日志
            JscriptMsg("批量移动成功" + sucCount + "条", Utils.CombUrlTxt("article_list.aspx", "channel_id={0}&category_id={1}&keywords={2}&property={3}&area_id={4}",
                this.channel_id.ToString(), this.category_id.ToString(), this.keywords, this.property,this.area_id.ToString()));
        }

        //批量移动分类
        protected void ddlMoveId_SelectedIndexChanged(object sender, EventArgs e)
        {
            ChkAdminLevel("channel_" + this.channel_name + "_list", PLEnums.ActionEnum.Edit.ToString()); //检查权限
            int sucCount = 0; //成功数量
            if (ddlMoveId.SelectedValue == "")
            {
                ddlMoveId.SelectedIndex = 0;
                JscriptMsg("请选择要移动的类别！", string.Empty);
                return;
            }
            BLL.article bll = new BLL.article();
            Repeater rptList = new Repeater();
            switch (this.prolistview)
            {
                case "Txt":
                    rptList = this.rptList1;
                    break;
                default:
                    rptList = this.rptList2;
                    break;
            }
            for (int i = 0; i < rptList.Items.Count; i++)
            {
                int id = Convert.ToInt32(((HiddenField)rptList.Items[i].FindControl("hidId")).Value);
                CheckBox cb = (CheckBox)rptList.Items[i].FindControl("chkId");
                if (cb.Checked)
                {
                    sucCount++;
                    bll.UpdateField(id, "category_id=" + ddlMoveId.SelectedValue);
                }
            }
            AddAdminLog(PLEnums.ActionEnum.Edit.ToString(), "批量移动" + this.channel_name + "频道内容分类"); //记录日志
            JscriptMsg("批量移动成功" + sucCount + "条", Utils.CombUrlTxt("article_list.aspx", "channel_id={0}&category_id={1}&keywords={2}&property={3}&area_id={4}",
                this.channel_id.ToString(), this.category_id.ToString(), this.keywords, this.property, this.area_id.ToString()));
        }

        //批量审核
        protected void btnAudit_Click(object sender, EventArgs e)
        {
            ChkAdminLevel("channel_" + this.channel_name + "_list", PLEnums.ActionEnum.Audit.ToString()); //检查权限
            BLL.article bll = new BLL.article();
            Repeater rptList = new Repeater();
            switch (this.prolistview)
            {
                case "Txt":
                    rptList = this.rptList1;
                    break;
                default:
                    rptList = this.rptList2;
                    break;
            }
            for (int i = 0; i < rptList.Items.Count; i++)
            {
                int id = Convert.ToInt32(((HiddenField)rptList.Items[i].FindControl("hidId")).Value);
                CheckBox cb = (CheckBox)rptList.Items[i].FindControl("chkId");
                if (cb.Checked)
                {
                    bll.UpdateField(id, "status=0");
                }
            }
            AddAdminLog(PLEnums.ActionEnum.Audit.ToString(), "审核" + this.channel_name + "频道内容信息"); //记录日志
            JscriptMsg("批量审核成功！", Utils.CombUrlTxt("article_list.aspx", "channel_id={0}&category_id={1}&keywords={2}&property={3}&area_id={4}",
                this.channel_id.ToString(), this.category_id.ToString(), this.keywords, this.property,this.area_id.ToString()));
        }

        //批量退回
        protected void btnReturned_Click(object sender, EventArgs e)
        {
            ChkAdminLevel("channel_" + this.channel_name + "_list", PLEnums.ActionEnum.Returned.ToString()); //检查权限
            BLL.article bll = new BLL.article();
            Repeater rptList = new Repeater();
            switch (this.prolistview)
            {
                case "Txt":
                    rptList = this.rptList1;
                    break;
                default:
                    rptList = this.rptList2;
                    break;
            }
            for (int i = 0; i < rptList.Items.Count; i++)
            {
                int id = Convert.ToInt32(((HiddenField)rptList.Items[i].FindControl("hidId")).Value);
                CheckBox cb = (CheckBox)rptList.Items[i].FindControl("chkId");
                if (cb.Checked)
                {
                    bll.UpdateField(id, "status=3");
                }
            }
            AddAdminLog(PLEnums.ActionEnum.Returned.ToString(), "退回" + this.channel_name + "频道内容信息"); //记录日志
            JscriptMsg("批量退回成功！", Utils.CombUrlTxt("article_list.aspx", "channel_id={0}&category_id={1}&keywords={2}&property={3}&area_id={4}",
                this.channel_id.ToString(), this.category_id.ToString(), this.keywords, this.property, this.area_id.ToString()));
        }
        //批量删除
        protected void btnDelete_Click(object sender, EventArgs e)
        {
            ChkAdminLevel("channel_" + this.channel_name + "_list", PLEnums.ActionEnum.Delete.ToString()); //检查权限
            int sucCount = 0; //成功数量
            int errorCount = 0; //失败数量
            BLL.article bll = new BLL.article();
            Repeater rptList = new Repeater();
            switch (this.prolistview)
            {
                case "Txt":
                    rptList = this.rptList1;
                    break;
                default:
                    rptList = this.rptList2;
                    break;
            }
            for (int i = 0; i < rptList.Items.Count; i++)
            {
                int id = Convert.ToInt32(((HiddenField)rptList.Items[i].FindControl("hidId")).Value);
                CheckBox cb = (CheckBox)rptList.Items[i].FindControl("chkId");
                if (cb.Checked)
                {
                    if (bll.Delete(id))
                    {
                        sucCount++;
                    }
                    else
                    {
                        errorCount++;
                    }
                }
            }
            AddAdminLog(PLEnums.ActionEnum.Edit.ToString(), "删除" + this.channel_name + "频道内容成功" + sucCount + "条，失败" + errorCount + "条"); //记录日志
            JscriptMsg("删除成功" + sucCount + "条，失败" + errorCount + "条！", Utils.CombUrlTxt("article_list.aspx", "channel_id={0}&category_id={1}&keywords={2}&property={3}&area_id={4}",
                this.channel_id.ToString(), this.category_id.ToString(), this.keywords, this.property,this.area_id.ToString()));
        }

    }
}