<%@ Page Language="C#" AutoEventWireup="true" Inherits="Plumsys.Web.UI.Page.article_show" ValidateRequest="false" %>
<%@ Import namespace="System.Collections.Generic" %>
<%@ Import namespace="System.Text" %>
<%@ Import namespace="System.Data" %>
<%@ Import namespace="Plumsys.Common" %>

<script runat="server">
override protected void OnInit(EventArgs e)
{

	/* 
		This page was created by Plumsys Template Engine at 2016-06-16 6:29:36.
		本页面代码由Plumsys模板引擎生成于 2016-06-16 6:29:36. 
	*/

	base.OnInit(e);
	StringBuilder templateBuilder = new StringBuilder(220000);
	const string channel = "tourist_mall";

	templateBuilder.Append("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n<head>\r\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\r\n    <title>");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_title));
	templateBuilder.Append("</title>\r\n    <meta name=\"keywords\" content=\" ");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_keyword));
	templateBuilder.Append("\" />\r\n    <meta name=\"description\" content=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_description));
	templateBuilder.Append("\" />\r\n    <link href=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/css/info_detail.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n    <script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/jquery/jquery-1.11.2.min.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/common.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/CategoryInfo.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/jquery/jquery.jqzoom.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/picture.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/cart.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\">\r\n        $(function(){\r\n            //TAB切换\r\n            tabs('#goodsTabs','click');\r\n            //智能浮动层\r\n            $(\"#tabHead\").smartFloat();\r\n            //初始化规格事件\r\n            initGoodsSpec('");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("tools/submit_ajax.ashx?action=get_article_goods_info');\r\n        });\r\n    </");
	templateBuilder.Append("script>\r\n</head>\r\n<body>\r\n    <div class=\"wrap\">\r\n        <!--nav begin-->\r\n        <!--Header-->\r\n        ");

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

	templateBuilder.Append("\">退出</a>');\r\n                            $(\"#menu\").append('</span>');\r\n                        } else {\r\n                            $(\"#menu\").append('<span id=\"un_login\">');\r\n                            $(\"#menu\").append('<a class=\"singin\" href=\"");
	templateBuilder.Append(linkurl("login"));

	templateBuilder.Append("\">登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;');\r\n                            $(\"#menu\").append('<a class=\"singup\" href=\"");
	templateBuilder.Append(linkurl("register"));

	templateBuilder.Append("\">注册</a>');\r\n                            $(\"#menu\").append('</span>');\r\n                        }\r\n                    }\r\n                });\r\n            </");
	templateBuilder.Append("script>\r\n            <div id=\"menu\" class=\"RightNavi\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--nav end-->\r\n");


	templateBuilder.Append("\r\n        <!--/Header-->\r\n        <!--nav end-->\r\n        <!--content begin-->\r\n        <div class=\"content\">\r\n            <div class=\"position\">\r\n                <a style=\"color: black;\" href=\"http://www.youxing.com/\">\r\n                    首页\r\n                </a> &gt;<a style=\"color: black;\" href=\"#\">亚洲</a>\r\n                &gt;                <a style=\"color: black;\" href=\"#\">泰国</a>\r\n                &gt;                <a style=\"color: black;\" href=\"#\">普吉岛</a>\r\n            </div>\r\n            <div class=\"tour_show text\">\r\n                <div class=\"tour-title\">\r\n                    <div class=\"clear\"></div>\r\n                </div>\r\n                <div class=\"show-left\">\r\n                    <span class=\"jqzoom\">\r\n                        <img />\r\n                    </span>\r\n                    <!--缩略图-->\r\n                    <div class=\"pic-scroll\">\r\n                        <a class=\"prev\">&lt;</a>\r\n                        <a class=\"next\">&gt;</a>\r\n                        <div class=\"items\">\r\n                            <ul>\r\n                                ");
	if (model.albums!=null)
	{

	foreach(Plumsys.Model.article_albums modelt in model.albums)
	{

	templateBuilder.Append("\r\n                                <li><img bimg=\"");
	templateBuilder.Append(Utils.ObjectToStr(modelt.original_path));
	templateBuilder.Append("\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(modelt.thumb_path));
	templateBuilder.Append("\" onmousemove=\"preview(this);\" /></li>\r\n                                ");
	}	//end for if

	}	//end for if

	templateBuilder.Append("\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <!--缩略图-->\r\n                </div>\r\n                    <!--<div class=\"show-left\">\r\n            <div class=\"tour_img_slider\">\r\n                <ul class=\"rslides\" id=\"tour-slider\">\r\n                    ");
	if (model.albums!=null)
	{

	foreach(Plumsys.Model.article_albums modelt in model.albums)
	{

	templateBuilder.Append("\r\n                    <li style='width: 690px; height: 294px; '><img bimg=\"");
	templateBuilder.Append(Utils.ObjectToStr(modelt.original_path));
	templateBuilder.Append("\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(modelt.thumb_path));
	templateBuilder.Append("\" /></li>\r\n                    ");
	}	//end for if

	}	//end for if

	templateBuilder.Append("\r\n                </ul>\r\n            </div>\r\n        </div>-->\r\n                    <div class=\"show-right tour-buy\" id=\"showBuyHtml\">\r\n                        <h3>");
	templateBuilder.Append(Utils.ObjectToStr(model.title));
	templateBuilder.Append("</h3>\r\n                        <div class=\"price-unit\">\r\n                            <div class=\"floatL price-cur-wrap\">\r\n                                <p>\r\n                                    <span class=\"buy-price\"><b>¥" + Utils.ObjectToStr(model.fields["sell_price"]) + "</b>起</span>\r\n                                </p>\r\n                                <p>门市价 <s>¥" + Utils.ObjectToStr(model.fields["market_price"]) + "</s></p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"TourDetailGroup\">\r\n                            <!--<div class=\"BuyNumBox\">\r\n                    <span class=\"BuyNum\">已有<font>1</font>人购买</span>\r\n                </div>\r\n                <div class=\"NewTourStarBox\">\r\n                    <span class=\"CommentNum\">加载中...</span>\r\n                </div>-->\r\n                        </div>\r\n                        <div class=\"TagList\">\r\n                            <!--<span title=\"普吉经典跳岛路线，行程安排舒适\"\r\n                      class=\"Tag\">普吉经典跳岛路线，行程安排舒适</span>\r\n                <span title=\"避开拥挤人群，携老带幼优先选择\"\r\n                      class=\"Tag\">避开拥挤人群，携老带幼优先选择</span>\r\n                <span title=\"普吉最大最豪华船公司，保障安全\"\r\n                      class=\"Tag\">普吉最大最豪华船公司，保障安全</span>-->\r\n\r\n                        </div>\r\n                        <div class=\"spec-box\">\r\n                            <dl>\r\n                                <dt>购买数量</dt>\r\n                                <dd>\r\n                                    <div class=\"stock-box\">\r\n                                        <input id=\"commodityArticleId\" type=\"hidden\" value=\"");
	templateBuilder.Append(Utils.ObjectToStr(model.id));
	templateBuilder.Append("\" />\r\n                                        <input id=\"commodityGoodsId\" type=\"hidden\" value=\"0\" />\r\n                                        <input id=\"commoditySelectNum\" type=\"text\" maxlength=\"9\" value=\"1\" maxvalue=\"" + Utils.ObjectToStr(model.fields["stock_quantity"]) + "\" onkeydown=\"return checkNumber(event);\" />\r\n                                        <a class=\"add\" onclick=\"addCartNum(1);\">+</a>\r\n                                        <a class=\"remove\" onclick=\"addCartNum(-1);\">-</a>\r\n                                    </div>\r\n                                    <span class=\"stock-txt\">\r\n                                        库存<em id=\"commodityStockNum\">" + Utils.ObjectToStr(model.fields["stock_quantity"]) + "</em>件\r\n                                    </span>\r\n                                </dd>\r\n                            </dl>\r\n                            <dl>\r\n                                <dd>\r\n                                    <div id=\"buyButton\" class=\"btn-buy\">\r\n                                        <button class=\"buy over\" onclick=\"cartAdd(this,'");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("',1,'");
	templateBuilder.Append(linkurl("shopping"));

	templateBuilder.Append("');\" disable=\"disable\">立即购买</button>\r\n                                        <button class=\"add over\" onclick=\"cartAdd(this,'");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("',0,'");
	templateBuilder.Append(linkurl("cart"));

	templateBuilder.Append("');\" disable=\"disable\">加入购物车</button>\r\n                                    </div>\r\n                                </dd>\r\n                            </dl>\r\n                            <!--<span id=\"submbuy\">立即预订</span><span class=\"Love WishList\">加入购物车</span>-->\r\n                        </div>\r\n                    </div><!-- 售罄开始 -->\r\n                    <!-- 售罄结束  -->\r\n\r\n                    <div class=\"clear\"></div>\r\n                </div><input name=\"useremail\" id=\"useremail\" type=\"hidden\" />\r\n            <input name=\"userphone\" id=\"userphone\" type=\"hidden\" />\r\n            <input name=\"currencysignal\" id=\"currencysignal\" type=\"hidden\" value=\"¥\" />\r\n            <input name=\"currencycode\" id=\"currencycode\" type=\"hidden\" value=\"0\" />         <!--产品详细信息-->\r\n            <!--导航-->\r\n        </div>\r\n        <div class=\"tour-nav-wrap\">\r\n            <div class=\" tour-navcontent\">\r\n                <ul class=\"tour-nav\">\r\n                    <li>\r\n                        <a href=\"#tour_ccxq\">产品详情<b></b></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#tour_fysm\">费用说明<b></b></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#tour_ydxz\">预订须知<b></b></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#tour_syff\">使用方法<b></b></a>\r\n                    </li><!--如果评价数量为o则不显示-->\r\n\r\n                    <li><a class=\"tourreply\" style=\"display: none;\" href=\"#LJPJMD\">累计评价(0)<b></b></a></li>\r\n                </ul>\r\n                <div class=\"FixedBuy\">\r\n                    <div class=\"FixedPrice\">\r\n                        ¥349-409\r\n\r\n                    </div>\r\n                    <div class=\"FixedBuyBtn\" id=\"submbuy01\">立即预订</div>\r\n                    <div class=\"Love FixedWishBtn\">加入购物车</div>\r\n                    <div class=\"ShareTitle\">分享至</div>\r\n                    <div class=\"ShareBox\">\r\n                        <a class=\"Share wechat\" href=\"#\" target=\"_blank\"></a>\r\n                        <a class=\"Share weibo\" href=\"#\" target=\"_blank\"></a>\r\n                        <div class=\"Share more\">\r\n                            <div class=\"MoreGroup\">\r\n                                <a class=\"Share tweibo\" href=\"#\" target=\"_blank\"></a>\r\n                                <a class=\"Share qzone\" href=\"#\" target=\"_blank\"></a>\r\n                                <a class=\"Share douban\" href=\"#\" target=\"_blank\"></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tour-nav-wrap2\"></div>\r\n        <div class=\"contentdetail\">\r\n            <div id=\"tour_content_warp\" name=\"tour_content_warp\">\r\n                <div class=\"tour-info\">\r\n                    ");
	templateBuilder.Append(Utils.ObjectToStr(model.content));
	templateBuilder.Append("\r\n                </div>\r\n                <div class=\"RightLike\">\r\n                    <div class=\"RightGroup\">\r\n                        <span class=\"Head\">购买了该商品的用户还购买了</span>\r\n                        <a class=\"Product\" href=\"http://www.haiwan.com/tourDetail/127938.html\" target=\"_blank\">\r\n                            <i class=\"LazyImgBox\">\r\n                                <img width=\"262\" height=\"179\" class=\"lazy_img\" data-original=\"http://img01.haiwaner.com/images/tours/ff8080814f720d10014f7418d9903356.jpg?imageMogr2/quality/100!/thumbnail/!84x84r/gravity/Center/crop/!84x84\" />\r\n                            </i>\r\n                            <span>\r\n                                普吉BOX旅行礼盒——精选当地8项热门活动\r\n                                （双人体验套餐）\r\n                            </span><font>¥2,499</font>\r\n                        </a><a class=\"Product\" href=\"http://www.haiwan.com/tourDetail/167154.html\"\r\n                               target=\"_blank\">\r\n                            <i class=\"LazyImgBox\">\r\n                                <img width=\"262\" height=\"179\" class=\"lazy_img\"\r\n                                     data-original=\"http://img01.haiwaner.com/images/tours/8a2dae715138f85801513d3e169b034c.jpg?imageMogr2/quality/100!/thumbnail/!84x84r/gravity/Center/crop/!84x84\" />\r\n                            </i>\r\n\r\n                            <span>普吉24人定制团酒店费用</span><font>¥99,070</font>\r\n                        </a><a class=\"Product\" href=\"http://www.haiwan.com/tourDetail/162651.html\"\r\n                               target=\"_blank\">\r\n                            <i class=\"LazyImgBox\">\r\n                                <img width=\"262\" height=\"179\" class=\"lazy_img\"\r\n                                     data-original=\"http://img01.haiwaner.com/images/tours/8a2dae715089af290150dc58c7dd3421.jpg?imageMogr2/quality/100!/thumbnail/!84x84r/gravity/Center/crop/!84x84\" />\r\n                            </i>\r\n\r\n                            <span>【好色之途】泰国全境红灯区探秘体验之旅</span><font>¥299</font>\r\n                        </a><a class=\"Product\" href=\"http://www.haiwan.com/tourDetail/169510.html\"\r\n                               target=\"_blank\">\r\n                            <i class=\"LazyImgBox\">\r\n                                <img width=\"262\" height=\"179\" class=\"lazy_img\"\r\n                                     data-original=\"http://img01.haiwaner.com/images/tours/8a7ca890516356f101516ae980bd2308.jpg?imageMogr2/quality/100!/thumbnail/!84x84r/gravity/Center/crop/!84x84\" />\r\n                            </i>\r\n\r\n                            <span>普吉草地悠波球游玩套餐</span><font>¥215</font>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div><!-- 提交的业务数据 -->\r\n\r\n            <form class=\"fm\" action=\"/tour/fillorder.html\" method=\"get\">\r\n                <div id=\"hideMessage\">\r\n                    <input name=\"adultEnd\" id=\"adult\" type=\"hidden\" />\r\n                    <input name=\"childEnd\" id=\"children\" type=\"hidden\" />\r\n                    <input name=\"babyEnd\" id=\"baby\" type=\"hidden\" />                 <input name=\"olderEnd\" id=\"older\" type=\"hidden\" />\r\n                    <input name=\"visitorEnd\" id=\"visitor\" type=\"hidden\" />\r\n\r\n                    <input name=\"adult_num\" class=\"total_num\" id=\"adult_num\" type=\"hidden\" value=\"0\" />\r\n                    <input name=\"child_num\" class=\"total_num\" id=\"child_num\" type=\"hidden\" value=\"0\" />\r\n                    <input name=\"baby_num\" class=\"total_num\" id=\"baby_num\" type=\"hidden\" value=\"0\" />\r\n                    <input name=\"old_num\" class=\"total_num\" id=\"older_num\" type=\"hidden\" value=\"0\" />\r\n\r\n                    <input name=\"visitor_num\" class=\"total_num\" id=\"visitor_num\" type=\"hidden\" />\r\n                    <input name=\"tour_id\" id=\"tour_id\" type=\"hidden\" value=\"9559\" />\r\n                    <input name=\"start_time\" id=\"start_time\" type=\"hidden\" />\r\n                    <input name=\"total_amt\" id=\"total_amt\" type=\"hidden\" />\r\n                    <input name=\"sku_id\" id=\"sku_id\" type=\"hidden\" />                 <input name=\"sys_trade_no\" type=\"hidden\" value=\"B20160518100158198549276\" />\r\n                    <input id=\"tour_status\" type=\"hidden\" value=\"2\" />\r\n                    <input name=\"skuunit\" id=\"skuunit\" type=\"hidden\" />\r\n                </div>\r\n            </form>\r\n            <form id=\"submit_middle\" action=\"/user/middleLogin\" method=\"post\">\r\n                <input name=\"params\" id=\"middle_page\" type=\"hidden\" />\r\n            </form><!--tour的购买日期，数量等信息选择 end-->\r\n            <div class=\"clear\"></div>\r\n            <div class=\"RightBox\" style=\"display: none;\">\r\n\r\n                <div class=\"KeFu\"></div>\r\n                <div class=\"Line\"></div>\r\n                <div class=\"BackToTop\"></div>\r\n            </div>\r\n            <div class=\"KeFuGroup\" style=\"display: none; width: 120px; height: 200px; position: fixed; bottom: 152px; right: 52px; z-index: 99999; background-color: rgba(136, 180, 34, 1); \">\r\n                <div class=\"ACloseBtn\"></div>\r\n                <div class=\"kefurenyuan1\"><a href=\"#\"><img src=\"images/QQPic.png\" />客服1</a></div>\r\n                <div class=\"kefurenyuan2\"><a href=\"#\"><img src=\"images/QQPic.png\" />客服2</a></div>\r\n                <div class=\"kefurenyuan2\"><a href=\"#\"><img src=\"images/QQPic.png\" />客服3</a></div>\r\n            </div>\r\n        </div><!-- sku选择弹出框 -->\r\n        <div class=\"hwlayout_box\" id=\"paymentDiv\" style=\"display: none;\">\r\n            <a title=\"关闭\"\r\n               class=\"hwlayout_box_close paymentDiv_close\" href=\"javascript:void(0)\">\r\n                <img width=\"17\" src=\"detail页面_files/tourbeta_box_close.png\" />\r\n            </a>\r\n            <div class=\"hwlayout_box_text\">\r\n                <div class=\"hwlayout_box_lft\">\r\n                    <!-- 日历start -->\r\n                    <div class=\"datetime\">\r\n                        <div class=\"title\"><b></b><span id=\"errTips\">使用日期</span></div>\r\n                        <div class=\"annotation\">\r\n                            <!-- <span class=\"atn-01\"><b></b>今天</span> -->\r\n                            <span class=\"atn-02\"><b></b>不可选日期</span>\r\n                            <span class=\"atn-03\"><b></b>可选日期</span>                         <span class=\"atn-04\"><b></b>已选日期</span>\r\n                        </div>\r\n                        <div id=\"myDateTime\"></div>\r\n                    </div><!-- 日历end -->                 <!-- sku-selected start -->\r\n\r\n                    <div id=\"skuSelect\"></div><!-- sku-selected end -->\r\n                </div>\r\n                <div class=\"hwlayout_box_rgt\">\r\n                    <!--旅游信息-->\r\n                    <div class=\"ydxx\">\r\n                        <div class=\"field-title\">预订信息</div>\r\n                        <div class=\"field-text\" id=\"tripInfo\"></div>\r\n                    </div><!--乘客类型-->\r\n                    <div class=\"field-ctn rsxz\">\r\n                        <div class=\"field-title\" id=\"skuunit_name\"></div>\r\n                        <div class=\"field-text\" id=\"field-text\"></div>\r\n                    </div><!--购买相关-->\r\n                    <div class=\"field-ctn gmxg\">\r\n                        <div class=\"total\" id=\"totalMoney\"></div>\r\n                        <div class=\"saving\" id=\"savingMoney\"></div>\r\n                        <div class=\"btns\" id=\"buyNow\">立即预订</div>\r\n                    </div>\r\n                    <div class=\"bg02\">\r\n                        <!--错误提示-->\r\n                        <div class=\"field-ctn error\" id=\"errorTips\" style=\"display: none;\"></div><!-- 400-->\r\n\r\n                        <div class=\"field-ctn tel400\">\r\n                            <p style=\"cursor: pointer;\">\r\n                                有问题？点击这里找客服\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"clear\"></div>\r\n            </div>\r\n        </div><!--content end-->\r\n        <!--footer begin-->\r\n        ");

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


	templateBuilder.Append("\r\n        <!--footer end-->\r\n        <!--footer end-->\r\n    </div>\r\n    <div id=\"load_img\" style=\"display: none;\">\r\n        &nbsp;<img src=\"images/xubox_loading2.gif\" />&nbsp;购买中...&nbsp;\r\n    </div>\r\n    <script type=\"text/javascript\" src=\"js/jquery-1.9.1.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" src=\"js/infoDetail.js\"></");
	templateBuilder.Append("script>\r\n    <script>\r\n        $(\".zxkfli\").click(function () {\r\n            $(\"iframe\").css(\"margin-right\", \"\");\r\n        })\r\n\r\n        var tourId = '9559';\r\n        var imageHead = '';\r\n        var min_days_before_book = parseInt('1');\r\n        /**\r\n         * 异步加载热门图片\r\n         * @author tian\r\n         */\r\n        var public = common_checkbrowse();\r\n        var showeffect = \"\";\r\n        if ((public['is'] == 'msie' && public['ver'] < 8.0)) { //根据浏览器版本来显示不同的滤镜效果\r\n            showeffect = \"show\";\r\n        } else {\r\n            showeffect = \"fadeIn\";\r\n        }\r\n        //滚动停止加载\r\n        $(\"img.lazy_img\").lazyload({\r\n            event: \"scroll\",\r\n            effect: showeffect\r\n        });\r\n\r\n        var director = new Director(tourId);\r\n        director.defaultCurrentDay = '2016-05-29';\r\n        director.initialize();\r\n        var nowYear = 2016;\r\n        var nowMonth = 5 - 1;\r\n        var startYear = parseInt(director.sellstart_date.substr(0, 4));\r\n        var startMonth = parseInt(director.sellstart_date.substr(5, 2));\r\n        var endYear = parseInt(director.sellend_date.substr(0, 4));\r\n        var endMonth = parseInt(director.sellend_date.substr(5, 2));\r\n        if ((startYear == nowYear && startMonth > nowMonth) || startYear > nowYear) {\r\n            director.render(director.sellstart_date);\r\n        } else if ((endYear == nowYear && endMonth < nowMonth) || endYear < nowYear) {\r\n            director.render(director.sellend_date);\r\n        } else {\r\n            director.render(nowYear + (nowMonth < 9 ? \"-0\" : \"-\") + (nowMonth + 1));\r\n        }\r\n\r\n        // 当月无可售 跳下一月\r\n        while ($(\"#myDateTime table td.usable\").size() < 1 && director.currentScence.month < director.sellend_date) $(\".month-rgt\").click();\r\n\r\n        //判断是不是法国\r\n        $(\".position a\").each(function () {\r\n            if ($(this).text() == \"法国\") {\r\n                $(\".tour_zysx .order-content\").before(\"<p style='color:#E53333;font-size:14px;'>为了您的出行安全，请在游览景点时配合工作人员进行安检。如遇突发情况造成景点游览时间更改或关闭，请您理解并遵循当地工作人员的安排</p>\");\r\n            }\r\n        });\r\n\r\n        //推荐\r\n        $(\".recomm_title:first\").addClass(\"hover\");\r\n        $(\".related-img:first\").show();\r\n    </");
	templateBuilder.Append("script>\r\n    <!-- poi -->\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/js.js\"></");
	templateBuilder.Append("script>\r\n    <script>\r\n        var json = { \"errMsg\": \"fail\" };\r\n    </");
	templateBuilder.Append("script>\r\n\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/position.js\"></");
	templateBuilder.Append("script>\r\n</body>\r\n</html>\r\n");
	Response.Write(templateBuilder.ToString());
}
</script>
