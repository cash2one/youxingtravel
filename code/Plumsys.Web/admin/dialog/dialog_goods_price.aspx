<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="dialog_goods_price.aspx.cs" Inherits="Plumsys.Web.admin.dialog.dialog_goods_price" %>
<%@ Import namespace="Plumsys.Common" %>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0,user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<title>会员组价格</title>
<link href="../skin/default/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" charset="utf-8" src="../../scripts/jquery/jquery-1.11.2.min.js"></script>
<script type="text/javascript" charset="utf-8" src="../../scripts/webuploader/webuploader.min.js"></script>
<script type="text/javascript" charset="utf-8" src="../js/uploader.js"></script>
<script type="text/javascript" charset="utf-8" src="../js/common.js"></script>
<script type="text/javascript">
    //初始化规格窗口
    function showSpecDialog() {
        var d = top.dialog({
            id: 'specDialogId',
            padding: 0,
            title: "商品规格",
            url: 'dialog/dialog_spec_item.aspx'
        }).showModal();
        //将容器对象传进去
        d.data = $("#item_box");
    }
    var api = top.dialog.get(window); //获取父窗体对象
    $(function () {
        //设置窗口按钮及事件
        api.button([{
            value: '确定',
            callback: function () {
                setGroupPrice();
            },
            autofocus: true
        }, {
            value: '取消',
            callback: function () { }
        }
        ]);
        //初始化默认价格
        var sellprice = parseFloat($(api.data).parent().parent().find("input[name='spec_sell_price']").val()); //获取父对象的销售价
        if (sellprice > 0) {
            $("input[name='txtGroupPrice']").each(function () {
                var discount = parseFloat($(this).siblings("input[name='hideDiscount']").val()) / 100; //获得折扣
                $(this).val(ForDight(sellprice * discount, 2)); //计算出价格
            });
        }
        //获取父对象的价格
        var hideGroupPriceStr = $(api.data).parent().find("input[name='hide_group_price']").val();
        if (hideGroupPriceStr.length > 0) { //如果默认有值则用值来赋值
            var json = $.parseJSON(hideGroupPriceStr);
            for (var i = 0; i < json.length; i++) {
                $("input[name='hideGroupId'][value='" + json[i].group_id + "']").siblings("input[name='txtGroupPrice']").val(json[i].price);
            }
        }
    });

    //计算及赋值
    function setGroupPrice() {
        //组合的会员组价格参数
        var groupPriceStr = '';
        //遍历会员组价格
        $("input[name='txtGroupPrice']").each(function (i) {
            var groupid = $(this).siblings("input[name='hideGroupId']").val();
            groupPriceStr += '{"group_id": "' + groupid + '", "price": "' + $(this).val() + '"}';
            if (i < $("input[name='txtGroupPrice']").length - 1) {
                groupPriceStr += ",";
            }
        });
        //赋值给父对象隐藏域
        if (groupPriceStr.length > 0) {
            $(api.data).parent().find("input[name='hide_group_price']").val("[" + groupPriceStr + "]");
        }
        api.close().remove();
        return false;
    }
</script>
</head>

<body>
<form id="form1" runat="server">
<div class="div-content">
  <div class="table-container" style="padding-top:10px;">
        <asp:HiddenField ID="hide_goods_spec_list" runat="server" />
        <table border="0" cellspacing="0" cellpadding="0" class="border-table" width="82%">
          <thead>
          <tr>
            <th align="center" width="15%">货号</th>
            <th width="8%">市场价(元)</th>
            <th width="8%">销售价(元)</th>
            <th width="8%">库存(件)</th>
            <th width="35%">规格</th>
            <th width="8%">会员价</th>
          </tr>
          </thead>
          <tbody id="item_box">
          <asp:Repeater ID="rptGroupPrice" runat="server">
          <ItemTemplate>
          <tr>
            <td align="center">
              <input type="hidden" name="hide_goods_id" value="<%#Eval("id")%>" />
              <input type="text" name="spec_goods_no" class="td-input" value="<%#Eval("goods_no")%>" />
            </td>
            <td align="center"><input type="text" name="spec_market_price" maxlength="10" class="td-input" value="<%#Eval("market_price")%>" onkeydown="return checkForFloat(this,event);" onblur="countMarketPrice(this);" /></td>
            <td align="center"><input type="text" name="spec_sell_price" maxlength="10" class="td-input" value="<%#Eval("sell_price")%>" onkeydown="return checkForFloat(this,event);" onblur="countSellPrice(this);" /></td>
            <td align="center"><input type="text" name="spec_stock_quantity" maxlength="10" class="td-input" value="<%#Eval("stock_quantity")%>" onkeydown="return checkNumber(event);" onblur="countStockQuantity(this);" /></td>
            <td style="white-space:inherit;word-break:break-all;">
              <input type="hidden" name="hide_spec_ids" value="<%#Eval("spec_ids")%>" />
              <input type="hidden" name="hide_spec_text" value="<%#Eval("spec_text")%>" />
              <p><%#Eval("spec_text")%></p>
            </td>
            <td align="center">
              <input name="hide_group_price" type="hidden" value='<%#JsonHelper.ObjectToJSON(Eval("group_prices"))%>' />
              <a href="javascript:;" onclick="showPriceDialog(this);">设置</a>
            </td>
          </tr>
          </ItemTemplate>
          </asp:Repeater>
          </tbody>
        </table>
      </div>
</div>
</form>
</body>
</html>
