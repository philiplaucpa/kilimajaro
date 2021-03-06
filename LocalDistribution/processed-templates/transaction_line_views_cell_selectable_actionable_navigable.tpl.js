define('transaction_line_views_cell_selectable_actionable_navigable.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " selected";
},"3":function(container,depth0,helpers,partials,data) {
    return "checked";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <tr class=\"transaction-line-views-cell-selectable-actionable-navigable-row"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLineChecked") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-action=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"actionType") || (depth0 != null ? compilerNameLookup(depth0,"actionType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actionType","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lineId","hash":{},"data":data}) : helper)))
    + "\"><td class=\"transaction-line-views-cell-selectable-actionable-navigable-select\"><input type=\"checkbox\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" data-action=\"select\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLineChecked") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></td><td class=\"transaction-line-views-cell-selectable-actionable-navigable-thumbnail\"><img class=\"transaction-line-views-cell-selectable-actionable-navigable-thumbnail-image\" src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"thumbnail",{"name":"resizeImage","hash":{},"data":data}))
    + "\" alt=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\"></td><td class=\"transaction-line-views-cell-selectable-actionable-navigable-details\"><div class=\"transaction-line-views-cell-selectable-actionable-navigable-name\"><a "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkAttributes","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " class=\"\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemName","hash":{},"data":data}) : helper)))
    + " </a></div><div class=\"transaction-line-views-cell-selectable-actionable-navigable-price\"><div data-view=\"Item.Price\"></div></div><div data-view=\"Item.Sku\"></div><div class=\"transaction-line-views-cell-selectable-actionable-navigable-options\"><div data-view=\"Item.SelectedOptions\"></div></div></td><td class=\"transaction-line-views-cell-selectable-actionable-navigable-extras\"><div class=\"\" data-view=\"Item.Summary.View\"></div></td><td class=\"transaction-line-views-cell-selectable-actionable-navigable-actions\"><div data-view=\"Item.Actions.View\" class=\"\"></div></td></tr>  ";
},"useData":true}); template.Name = 'transaction_line_views_cell_selectable_actionable_navigable'; return template;});