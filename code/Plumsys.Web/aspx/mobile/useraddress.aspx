﻿<%@ Page Language="C#" AutoEventWireup="true" Inherits="Plumsys.Web.UI.Page.useraddress" ValidateRequest="false" %>
<%@ Import namespace="System.Collections.Generic" %>
<%@ Import namespace="System.Text" %>
<%@ Import namespace="System.Data" %>
<%@ Import namespace="Plumsys.Common" %>

<script runat="server">
override protected void OnInit(EventArgs e)
{

	/* 
		This page was created by Plumsys Template Engine at 2016-06-28 23:06:13.
		本页面代码由Plumsys模板引擎生成于 2016-06-28 23:06:13. 
	*/

	base.OnInit(e);
	StringBuilder templateBuilder = new StringBuilder(220000);

	templateBuilder.Append("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\r\n<title>收货地址 - ");
	templateBuilder.Append(Utils.ObjectToStr(site.name));
	templateBuilder.Append("</title>\r\n<meta name=\"keywords\" content=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_keyword));
	templateBuilder.Append("\" />\r\n<meta name=\"description\" content=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_description));
	templateBuilder.Append("\" />\r\n    <link href=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/css/common.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n<link href=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/css/style.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n<link href=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("css/pagination.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n<link href=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/artdialog/ui-dialog.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/jquery/jquery-1.11.2.min.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/artdialog/dialog-plus-min.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/common.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\">\r\n	function ExecPostBack(checkValue) {\r\n		if (arguments.length == 1) {\r\n			ExecDelete('");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("tools/submit_ajax.ashx?action=user_address_delete', checkValue, '#turl');\r\n		}else{\r\n			var valueArr = '';\r\n			$(\"input[name='checkId']:checked\").each(function(i){\r\n				valueArr += $(this).val();\r\n				if(i < $(\"input[name='checkId']:checked\").length - 1){\r\n					valueArr += \",\"\r\n				}\r\n			});\r\n			ExecDelete('");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("tools/submit_ajax.ashx?action=user_address_delete', valueArr, '#turl');\r\n		}\r\n    }\r\n</");
	templateBuilder.Append("script>\r\n</head>\r\n\r\n<body>\r\n<!--Header-->\r\n");

	templateBuilder.Append("        <!--nav begin-->\r\n<div class=\"HeadNormal\">\r\n    <div class=\"Navi\">\r\n        <div class=\"HeadMainPage\">\r\n            <div class=\"LogoNormal\">\r\n                <a title=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.name));
	templateBuilder.Append("\" href=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.domain));
	templateBuilder.Append("\">\r\n                    <img alt=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.name));
	templateBuilder.Append("\"\r\n                         src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/images/logonormal_v3.png\" />\r\n                </a>\r\n            </div>\r\n            <div class=\"Head_LeftNavi\">\r\n                <div class=\"nav\">\r\n                    <div class=\"c-wrapper\">\r\n                        <div></div>\r\n                        <div class=\"navitems floatL\">\r\n                            <ul class=\"header_themlist\">\r\n                                <!--类别-->\r\n                                ");
	DataTable GoodsCList = get_category_child_list("tourist_mall",0);

	int ncdr__loop__id=0;
	foreach(DataRow ncdr in GoodsCList.Rows)
	{
		ncdr__loop__id++;


	templateBuilder.Append("\r\n                                <li>\r\n                                    <a class=\"title\" href=\"");
	templateBuilder.Append(linkurl("tourist_mall_list",Utils.ObjectToStr(ncdr["id"])));

	templateBuilder.Append("\r\n                                        \" target=\"_self\">\r\n                                        " + Utils.ObjectToStr(ncdr["title"]) + "\r\n                                        <div class=\"navitag\" style=\"display: none;\"></div>\r\n                                    </a>\r\n                                </li>\r\n                                ");
	}	//end for if

	templateBuilder.Append("\r\n                                <!--/类别-->\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"clear\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"search_box\">\r\n                <div id=\"header_search_box\">\r\n                    <div class=\"s-lft\">\r\n                        <input id=\"defaultSearch\" type=\"hidden\" />\r\n                        <input id=\"keywords\" name=\"keywords\" class=\"typeahead city\" type=\"text\" onkeydown=\"if(event.keyCode==13){SiteSearch('");
	templateBuilder.Append(linkurl("search"));

	templateBuilder.Append("', '#keywords');return false};\" placeholder=\"输入回车搜索\" x-webkit-speech=\"\"/>\r\n                    </div>\r\n                    <div class=\"s-rgt\">\r\n                        <input class=\"btn\" type=\"submit\" onclick=\"SiteSearch('");
	templateBuilder.Append(linkurl("search"));

	templateBuilder.Append("', '#keywords');\" value=\" \" />\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                </div>\r\n            </div>\r\n            <script type=\"text/javascript\">\r\n                $.ajax({\r\n                    type: \"POST\",\r\n                    url: \"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("tools/submit_ajax.ashx?action=user_check_login\",\r\n                    dataType: \"json\",\r\n                    timeout: 20000,\r\n                    success: function (data, textStatus) {\r\n                        if (data.status == 1) {\r\n                            $(\"#menu\").append('<span id=\"au_login\">');\r\n                            $(\"#menu\").append('<a class=\"user\" href=\"");
	templateBuilder.Append(linkurl("usercenter","index"));

	templateBuilder.Append("\">我的优行</a>&nbsp;&nbsp;|&nbsp;&nbsp;');\r\n                            $(\"#menu\").append('<a id=\"uloginout\" href=\"");
	templateBuilder.Append(linkurl("usercenter","exit"));

	templateBuilder.Append("\">退出</a>');\r\n                            //$(\"#menu\").append(' <a href=\"");
	templateBuilder.Append("<%linkurl(\" cart\")%>");
	templateBuilder.Append("\">购物车<span id=\"shoppingCartCount\"> ');\r\n                            //$(\"#menu\").append('<script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("tools/submit_ajax.ashx?action=view_cart_count\"></span>件</a>');\r\n          \r\n                            $(\"#menu\").append('</span>');\r\n                        } else {\r\n                            $(\"#menu\").append('<span id=\"un_login\">');\r\n                            $(\"#menu\").append('<a class=\"singin\" href=\"");
	templateBuilder.Append(linkurl("login"));

	templateBuilder.Append("\">登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;');\r\n                            $(\"#menu\").append('<a class=\"singup\" href=\"");
	templateBuilder.Append(linkurl("register"));

	templateBuilder.Append("\">注册</a>');\r\n                            $(\"#menu\").append('</span>');\r\n                        }\r\n                    }\r\n                });\r\n            </");
	templateBuilder.Append("script>\r\n            <div id=\"menu\" class=\"RightNavi\">\r\n              <a href='");
	templateBuilder.Append("<%linkurl(\" cart\")%>");
	templateBuilder.Append("'>购物车<span id=\"shoppingCartCount\">\r\n                <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("tools/submit_ajax.ashx?action=view_cart_count\"></");
	templateBuilder.Append("script></span>件</a>&nbsp;&nbsp;|&nbsp;&nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--nav end-->\r\n");


	templateBuilder.Append("\r\n<!--/Header-->\r\n\r\n<div class=\"section clearfix\">\r\n  <div class=\"line30\"></div>\r\n\r\n  <div class=\"info-wrap\">\r\n    <!--左侧导航-->\r\n    ");

	templateBuilder.Append("    <div class=\"info-box\">\r\n      <div class=\"avatar-box\">\r\n        <a href=\"");
	templateBuilder.Append(linkurl("usercenter","avatar"));

	templateBuilder.Append("\" class=\"img-box\">\r\n          ");
	if (userModel.avatar!="")
	{

	templateBuilder.Append("\r\n            <img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(userModel.avatar));
	templateBuilder.Append("\" />\r\n          ");
	}
	else
	{

	templateBuilder.Append("\r\n            <img src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/images/user-avatar.png\" />\r\n          ");
	}	//end for if

	templateBuilder.Append("\r\n        </a>\r\n        <h3>\r\n        ");
	if (userModel.nick_name!="")
	{

	templateBuilder.Append("\r\n          ");
	templateBuilder.Append(Utils.ObjectToStr(userModel.nick_name));
	templateBuilder.Append("\r\n        ");
	}
	else
	{

	templateBuilder.Append("\r\n          ");
	templateBuilder.Append(Utils.ObjectToStr(userModel.user_name));
	templateBuilder.Append("\r\n        ");
	}	//end for if

	templateBuilder.Append("\r\n        </h3>\r\n        <!--<p>余额：");
	templateBuilder.Append(Utils.ObjectToStr(userModel.amount));
	templateBuilder.Append(" 元</p>\r\n        <p>积分：");
	templateBuilder.Append(Utils.ObjectToStr(userModel.point));
	templateBuilder.Append(" 分</p>-->					\r\n      </div>\r\n      <ul class=\"side-nav\">\r\n        <li>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("userorder","list"));

	templateBuilder.Append("\">我的订单</a>\r\n            <!--<a href=\"");
	templateBuilder.Append(linkurl("cart"));

	templateBuilder.Append("\">购物车</a>-->\r\n          <!--<a href=\"");
	templateBuilder.Append(linkurl("useraddress"));

	templateBuilder.Append("\">收货地址</a>-->\r\n        </li>\r\n        <!--<li>\r\n           \r\n          <a href=\"");
	templateBuilder.Append(linkurl("useramount","recharge"));

	templateBuilder.Append("\">账户余额</a>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("userpoint","convert"));

	templateBuilder.Append("\">我的积分</a>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("usermessage","system"));

	templateBuilder.Append("\">站内消息</a>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("usercenter","invite"));

	templateBuilder.Append("\">邀请好友</a>\r\n        </li>-->\r\n        <li>\r\n          \r\n          <a href=\"");
	templateBuilder.Append(linkurl("usercenter","proinfo"));

	templateBuilder.Append("\">个人资料</a>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("usercenter","avatar"));

	templateBuilder.Append("\">头像设置</a>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("usercenter","password"));

	templateBuilder.Append("\">修改密码</a>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("usercenter","exit"));

	templateBuilder.Append("\">退出登录</a>\r\n        </li>\r\n      </ul>\r\n    </div>");


	templateBuilder.Append("\r\n    <!--/左侧导航-->\r\n    \r\n    <!--右侧内容-->\r\n    <div class=\"home-box\">\r\n      <!--收货地址列表-->\r\n      <div class=\"u-tab-head\">\r\n        <p>\r\n          <a class=\"selected\" href=\"");
	templateBuilder.Append(linkurl("useraddress"));

	templateBuilder.Append("\">收货地址</a>\r\n        </p>\r\n        <span>\r\n          <a class=\"add\" href=\"");
	templateBuilder.Append(linkurl("useraddress_edit","add"));

	templateBuilder.Append("\">添加新地址</a>\r\n        </span>\r\n      </div>\r\n      <div class=\"u-tab-content\">\r\n        <div class=\"title-div\">\r\n          <strong>我的收货地址</strong>\r\n        </div>\r\n        <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"ftable\">\r\n          <tr>\r\n            <th width=\"30\">选择</td>\r\n            <th align=\"left\">收货地址</td>\r\n            <th width=\"18%\" align=\"left\">手机</td>\r\n            <th width=\"20%\" align=\"left\">邮箱</td>\r\n            <th width=\"100\">操作</td>\r\n          </tr>\r\n          ");
	DataTable list = get_user_addr_book_list(15, page, "user_id="+userModel.id, out totalcount);

	templateBuilder.Append("<!--取得一个DataTable-->\r\n          ");
	string pagelist = get_page_link(15, page, totalcount, "useraddress", "__id__");

	templateBuilder.Append(" <!--取得分页页码列表-->\r\n          ");
	foreach(DataRow dr in list.Rows)
	{

	templateBuilder.Append("\r\n            <tr>\r\n              <td width=\"20\" align=\"center\">\r\n                <input name=\"checkId\" class=\"checkall\" type=\"checkbox\" value=\"" + Utils.ObjectToStr(dr["id"]) + "\" >\r\n              </td>\r\n              <td>\r\n                (" + Utils.ObjectToStr(dr["accept_name"]) + ") " + Utils.ObjectToStr(dr["area"]) + " " + Utils.ObjectToStr(dr["address"]) + "\r\n              </td>\r\n              <td>" + Utils.ObjectToStr(dr["mobile"]) + "</td>\r\n              <td>" + Utils.ObjectToStr(dr["email"]) + "</td>\r\n              <td align=\"center\">\r\n                <a href=\"");
	templateBuilder.Append(linkurl("useraddress_edit","edit",Utils.ObjectToStr(dr["id"])));

	templateBuilder.Append("\">编辑</a> | \r\n                ");
	if (Utils.ObjectToStr(dr["is_default"])=="0")
	{

	templateBuilder.Append("\r\n                <a onclick=\"clickSubmit('");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("tools/submit_ajax.ashx?action=user_address_default&id=" + Utils.ObjectToStr(dr["id"]) + "')\" href=\"javascript:;\">设为默认</a>\r\n                ");
	}
	else
	{

	templateBuilder.Append("\r\n                已默认\r\n                ");
	}	//end for if

	templateBuilder.Append(" \r\n              </td>\r\n            </tr>\r\n          ");
	}	//end for if

	if (list.Rows.Count==0)
	{

	templateBuilder.Append("\r\n            <tr><td colspan=\"5\" align=\"center\">暂无记录...</td></tr>\r\n          ");
	}	//end for if

	templateBuilder.Append("\r\n        </table>\r\n        <div class=\"page-foot\">\r\n          <div class=\"flickr right\">");
	templateBuilder.Append(Utils.ObjectToStr(pagelist));
	templateBuilder.Append("</div><!--放置页码列表-->\r\n          <div class=\"page-btns\">\r\n            <a onclick=\"checkAll(this);\" href=\"javascript:;\">全选</a>\r\n            <span class=\"pipe\">|</span>\r\n            <a onclick=\"ExecPostBack();\" href=\"javascript:;\">删除</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <input id=\"turl\" type=\"hidden\" value=\"");
	templateBuilder.Append(linkurl("useraddress"));

	templateBuilder.Append("\" /><!--存在跳转的URL值-->\r\n      <!--/收货地址列表-->\r\n    </div>\r\n    <!--/右侧内容-->\r\n  </div>\r\n    <div class=\"line30\"></div>\r\n</div>\r\n\r\n<!--Footer-->\r\n");

	templateBuilder.Append("        <div class=\"Foot\">\r\n            <div class=\"FootHead\">\r\n                <div class=\"MainPage\">\r\n                    <div class=\"FootListGroup\">\r\n                        <ul>\r\n                            <li><i></i>关于我们</li>\r\n                            <li>\r\n                                <a href=\"");
	templateBuilder.Append(linkurl("content","about"));

	templateBuilder.Append("\" target=\"_blank\">优行简介</a>\r\n                            </li>\r\n                            <li><a href=\"");
	templateBuilder.Append(linkurl("content","contact"));

	templateBuilder.Append("\" target=\"_blank\">联系我们</a></li>\r\n                            <li>\r\n                                <a href=\"");
	templateBuilder.Append(linkurl("content","advertises"));

	templateBuilder.Append("\" target=\"_blank\">\r\n                                    职位招聘\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"");
	templateBuilder.Append(linkurl("content","league"));

	templateBuilder.Append("\" target=\"_blank\">\r\n                                    加盟合作\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                        <ul>\r\n                            <li><i></i>网站条款</li>\r\n                            <li>\r\n                                <a href=\"");
	templateBuilder.Append(linkurl("content","agreement"));

	templateBuilder.Append("\" target=\"_blank\">用户协议</a>\r\n                            </li>\r\n                            <li><a href=\"");
	templateBuilder.Append(linkurl("content","privacy"));

	templateBuilder.Append("\" target=\"_blank\">隐私保护</a></li>\r\n                            <li> \r\n                                <a href=\"");
	templateBuilder.Append(linkurl("content","provision"));

	templateBuilder.Append("\" target=\"_blank\">版权声明</a>\r\n                            </li>\r\n                        </ul>\r\n                        <ul>\r\n                            <li><i></i>友情链接</li>\r\n                            ");
	DataTable linkList1 = get_plugin_method("Plumsys.Web.Plugin.Link", "link", "get_link_list", 0, "is_lock=0 and is_image=0 and is_red=1");

	foreach(DataRow dr in linkList1.Rows)
	{

	templateBuilder.Append("\r\n                            <li> <a target=\"_blank\" href=\"" + Utils.ObjectToStr(dr["site_url"]) + "\">" + Utils.ObjectToStr(dr["title"]) + "</a></li>\r\n                            ");
	}	//end for if

	templateBuilder.Append("\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"QrCodeBox\">\r\n                        <div class=\"QrCode\">\r\n                            <img src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/images/wechatcode.jpg\" />\r\n                            <span>官方微信</span>\r\n                        </div>\r\n                        <div class=\"telephone\">\r\n                            <img src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/images/telephone.png\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"FootLast\">\r\n                <div class=\"MainPage\">\r\n                    <p>Copyright © 2013-2016, All Rights Reserved.</p><span>\r\n                        ");
	templateBuilder.Append(site.company.ToString());

	templateBuilder.Append(" |\r\n                        京ICP证 140491号 | ");
	templateBuilder.Append(Utils.ObjectToStr(config.webcrod));
	templateBuilder.Append(" | 旅行社业务经营许可证 L-BJ-CJ00104\r\n                    </span>\r\n                    <div style=\"clear: both;\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      <!--footer end-->\r\n   \r\n   \r\n");


	templateBuilder.Append("\r\n<!--/Footer-->\r\n</body>\r\n</html>");
	Response.Write(templateBuilder.ToString());
}
</script>
