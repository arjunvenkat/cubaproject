onOpenDialog=function(e){(e=$(".ui-dialog")).find(".ui-dialog-titlebar").corner("1px top"),$.browser.msie||e.corner("6px"),e.height()<$(window).height()&&(iframed()?$(parent.document.body).addClass("hide-overflow"):$(document.body).addClass("hide-overflow"))},onCloseDialog=function(e){iframed()?$(parent.document.body).removeClass("hide-overflow"):$(document.body).removeClass("hide-overflow")},WYMeditor.onload_functions=[];var wymeditor_inputs=[],wymeditors_loaded=0;typeof custom_wymeditor_boot_options=="undefined"&&(custom_wymeditor_boot_options={});var form_actions="<div id='dialog-form-actions' class='form-actions'><div class='form-actions-left'><input id='submit_button' class='wym_submit button' type='submit' value='{Insert}' class='button' /><a href='' class='wym_cancel close_dialog button'>{Cancel}</a></div></div>",wymeditor_boot_options=$.extend({skin:"refinery",basePath:"/",wymPath:"/assets/wymeditor/jquery.refinery.wymeditor.js",cssSkinPath:"/assets/wymeditor/skins/",jsSkinPath:"/assets/wymeditor/skins/",langPath:"/assets/wymeditor/lang/",iframeBasePath:"/",classesItems:[{name:"text-align",rules:[{name:"left",title:"{Left}"},{name:"center",title:"{Center}"},{name:"right",title:"{Right}"},{name:"justify",title:"{Justify}"}],join:"-",title:"{Text_Align}"},{name:"image-align",rules:[{name:"left",title:"{Left}"},{name:"right",title:"{Right}"}],join:"-",title:"{Image_Align}"},{name:"font-size",rules:[{name:"small",title:"{Small}"},{name:"normal",title:"{Normal}"},{name:"large",title:"{Large}"}],join:"-",title:"{Font_Size}"}],containersItems:[{name:"h1",title:"Heading_1",css:"wym_containers_h1"},{name:"h2",title:"Heading_2",css:"wym_containers_h2"},{name:"h3",title:"Heading_3",css:"wym_containers_h3"},{name:"p",title:"Paragraph",css:"wym_containers_p"}],toolsItems:[{name:"Bold",title:"Bold",css:"wym_tools_strong"},{name:"Italic",title:"Emphasis",css:"wym_tools_emphasis"},{name:"InsertUnorderedList",title:"Unordered_List",css:"wym_tools_unordered_list"},{name:"InsertOrderedList",title:"Ordered_List",css:"wym_tools_ordered_list"},{name:"CreateLink",title:"Link",css:"wym_tools_link"},{name:"Unlink",title:"Unlink",css:"wym_tools_unlink"},{name:"InsertImage",title:"Image",css:"wym_tools_image"},{name:"InsertTable",title:"Table",css:"wym_tools_table"},{name:"ToggleHtml",title:"HTML",css:"wym_tools_html"}],toolsHtml:"<ul class='wym_tools wym_section wym_buttons'>"+WYMeditor.TOOLS_ITEMS+"</ul>",toolsItemHtml:"<li class='"+WYMeditor.TOOL_CLASS+"'>"+"<a href='#' name='"+WYMeditor.TOOL_NAME+"' title='"+WYMeditor.TOOL_TITLE+"' class='no-tooltip'>"+WYMeditor.TOOL_TITLE+"</a>"+"</li>",classesHtml:"<ul class='wym_classes_container wym_section wym_buttons'><li class='wym_tools_class'><a href='#' name='"+WYMeditor.APPLY_CLASS+"' title='"+WYMeditor.APPLY_CLASS+"' class='no-tooltip'>"+WYMeditor.APPLY_CLASS+"</a>"+"<ul class='wym_classes wym_classes_hidden'>"+WYMeditor.CLASSES_ITEMS+"</ul>"+"</li>"+"</ul>",classesItemHtml:"<li><a href='#' name='"+WYMeditor.CLASS_NAME+"'>"+WYMeditor.CLASS_TITLE+"</a></li>",classesItemHtmlMultiple:"<li class='wym_tools_class_multiple_rules'><span>"+WYMeditor.CLASS_TITLE+"</span>"+"<ul>{classesItemHtml}</ul>"+"</li>",containersHtml:"<ul class='wym_containers wym_section'>"+WYMeditor.CONTAINERS_ITEMS+"</ul>",containersItemHtml:"<li class='"+WYMeditor.CONTAINER_CLASS+"'>"+"<a href='#' name='"+WYMeditor.CONTAINER_NAME+"' title='"+WYMeditor.CONTAINER_TITLE+"' class='no-tooltip'></a>"+"</li>",boxHtml:"<div class='wym_box'><div class='wym_area_top clearfix'>"+WYMeditor.CONTAINERS+WYMeditor.TOOLS+WYMeditor.CLASSES+"</div>"+"<div class='wym_area_main'>"+WYMeditor.HTML+WYMeditor.IFRAME+WYMeditor.STATUS+"</div>"+"</div>",iframeHtml:"<div class='wym_iframe wym_section'><iframe id='WYMeditor_"+WYMeditor.INDEX+"'"+($.browser.msie?" src='"+WYMeditor.IFRAME_BASE_PATH+"wymiframe'":"")+" frameborder='0' marginheight='0' marginwidth='0' border='0'"+" onload='this.contentWindow.parent.WYMeditor.INSTANCES["+WYMeditor.INDEX+"].loadIframe(this);'></iframe>"+"</div>",dialogImageHtml:"",dialogLinkHtml:"",dialogTableHtml:"<div class='wym_dialog wym_dialog_table'><form><input type='hidden' id='wym_dialog_type' class='wym_dialog_type' value='"+WYMeditor.DIALOG_TABLE+"' />"+"<div class='field'>"+"<label for='wym_caption'>{Caption}</label>"+"<input type='text' id='wym_caption' class='wym_caption' value='' size='40' />"+"</div>"+"<div class='field'>"+"<label for='wym_rows'>{Number_Of_Rows}</label>"+"<input type='text' id='wym_rows' class='wym_rows' value='3' size='3' />"+"</div>"+"<div class='field'>"+"<label for='wym_cols'>{Number_Of_Cols}</label>"+"<input type='text' id='wym_cols' class='wym_cols' value='2' size='3' />"+"</div>"+form_actions+"</form>"+"</div>",dialogPasteHtml:"<div class='wym_dialog wym_dialog_paste'><form><input type='hidden' id='wym_dialog_type' class='wym_dialog_type' value='"+WYMeditor.DIALOG_PASTE+"' />"+"<div class='field'>"+"<textarea class='wym_text' rows='10' cols='50'></textarea>"+"</div>"+form_actions+"</form>"+"</div>",dialogPath:"/refinery/dialogs/",dialogFeatures:{width:866,height:455,modal:!0,draggable:!0,resizable:!1,autoOpen:!0,open:onOpenDialog,close:onCloseDialog},dialogInlineFeatures:{width:600,height:485,modal:!0,draggable:!0,resizable:!1,autoOpen:!0,open:onOpenDialog,close:onCloseDialog},dialogId:"editor_dialog",dialogHtml:"<!DOCTYPE html><html dir='"+WYMeditor.DIRECTION+"'>"+"<head>"+"<link rel='stylesheet' type='text/css' media='screen' href='"+WYMeditor.CSS_PATH+"' />"+"<title>"+WYMeditor.DIALOG_TITLE+"</title>"+"<script type='text/javascript' src='"+WYMeditor.JQUERY_PATH+"'></script>"+"<script type='text/javascript' src='"+WYMeditor.WYM_PATH+"'></script>"+"</head>"+"<body>"+"<div id='page'>"+WYMeditor.DIALOG_BODY+"</div>"+"</body>"+"</html>",postInit:function(e){wymeditors_loaded+=1;if(WYMeditor.INSTANCES.length==wymeditors_loaded){$(".wym_loading_overlay").remove();for(i=0;i<WYMeditor.onload_functions.length;i++)WYMeditor.onload_functions[i]()}$(e._iframe).contents().find("body").addClass("wym_iframe_body"),$(".field.hide-overflow").removeClass("hide-overflow").css("height","auto")},postInitDialog:function(e){$.browser.msie&&($the_ui_dialog=$(".ui-dialog")).css("height",$the_ui_dialog.find("iframe").height()+$the_ui_dialog.find("iframe").contents().find(".form-actions").height()-12)},lang:"en"},custom_wymeditor_boot_options);WYMeditor.editor.prototype.loadIframe=function(e){var t=this,n=e.contentDocument||e.contentWindow;n.document&&(n=n.document);if(!$.browser.msie){n.open("text/html","replace"),html="<!DOCTYPE html>    <html>      <head>        <title>WYMeditor</title>        <meta charset='"+$("meta[charset]").attr("charset")+"' />        <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' />      </head>      <body class='wym_iframe'>      </body>    </html>",n.write(html),n.close();var r=n.head||$(n).find("head").get(0);$("<link href='/assets/wymeditor/skins/refinery/wymiframe.css' media='all' rel='stylesheet' />").appendTo(r),$("<link href='/assets/formatting.css' media='all' rel='stylesheet' />").appendTo(r),$("<link href='/assets/theme.css' media='all' rel='stylesheet' />").appendTo(r)}(id_of_editor=t._element.parent().attr("id"))!=null&&$(n.body).addClass(id_of_editor),t.initIframe(e)},WYMeditor.init=function(){wymeditor_inputs=$(".wymeditor").filter(function(e){for(i=0;i<WYMeditor.INSTANCES.length;i++)if(WYMeditor.INSTANCES[i]._element.attr("id")==$(this).attr("id"))return!1;return!0}),wymeditor_inputs.each(function(e){(containing_field=$(this).parents(".field")).length>0&&containing_field.get(0).style.height.replace("auto","")===""&&containing_field.addClass("hide-overflow").css("height",$(this).outerHeight()-containing_field.offset().top+$(this).offset().top+45),$(this).hide()}),wymeditor_inputs.wymeditor(wymeditor_boot_options)},$(function(){WYMeditor.init()});