
<style type="text/css">
* {font-size: 14px; font-family: "Lucida Grande", Verdana, Arial, sans-serif;}
.one:hover{
background-color: #EEEEE2;

}
a:hover, a:visited, a:active, a{
	color: #294A51;
}
.headme { border-bottom: 2px dotted #EEEEE2;}
</style>	
[//:  
library:'/components/inSite/js_timer.inc';

//library:'/components/inSite/results_navigation.inc';
//	library:'/components/inSite/unique_id.inc';
var('STK_message' = array);
var('STK_timer' = js_timer);
$STK_message -> Insert('Begin + ' $STK_timer);
library:'/config/environment.inc';
$STK_message -> Insert('Environment + ' $STK_timer);
library:'/app/helpers/application_helper.inc';
$STK_message -> Insert('Helper + ' $STK_timer);
library:'/config/valuelists.inc';
$STK_message -> Insert('ValueList + ' $STK_timer);
library:'/app/helpers/routes_helper.inc';
library:'/config/routes.inc';
$STK_message -> Insert('Routes + ' $STK_timer);


]
<h2>Page Sections Admin</h2><?LassoScript
	

var('cattable_resources'='resources');

$STK_message  -> Insert('cattable_resources = ' $cattable_resources);
var('gv_sql' = $dbconn);
var('br'='<br />');
var('gv_error'='');
var('comp_sql'='');
var(
		'id'=encode_sql(action_param:'id'),
		'do'=(action_param:'do'),
		'title'=encode_sql(action_param:'title'),
		'description'=encode_sql(action_param:'description'),
		'metaDescription'=encode_sql(action_param:'metaDescription'),
		'metatags'=encode_sql(action_param:'metatags'),
		'txt'=encode_sql(action_param:'txt'),
	//	'cattable_resources'='resources_en',
		);


include:'/components/inSite/category_ctags.inc';	


var(
		'33SQLd'=xs_cat->(subTreeSQL(-cattable= $cattable_resources ,-id=9))
		);
	
				
select: $do;
	case:'subNode';
		var(
				'33SQL'=xs_cat->(subTreeSQL(-cattable= $cattable_resources ,-xtraReturn=', node.lft, node.rgt, node.description, node.metatags, node.metadescription ',-xtraWhere='',-id=$id))
				);
	case;
		var(
				'33SQL'	=	xs_cat->(fullCatSQL(-cattable= $cattable_resources ,-xtraReturn=', node.lft, node.rgt, node.description, node.metatags, node.metadescription ',-xtraWhere='', -depth=5))
				);
				
				
/select;

//		$STK_message  -> Insert('do = ' $do);
select: $do;	
	case:'deleteNode';
		xs_cat->(deleteNode(-cattable= $cattable_resources ,-id=$id));
		
	case:'addChild';
		xs_cat->(addChild(-cattable= $cattable_resources ,-txt='New Child',-id=$id));
	
	case:'moveNode';
		xs_cat->(moveNode(-cattable= $cattable_resources ,-id=$id));
	
	case:'addSibling';
		xs_cat->(addSibling(-cattable= $cattable_resources ,-txt='New Sibling',-id=$id));	

	
		case:'modTitle';
		var('33SQLs'='UPDATE ' $cattable_resources ' set description =\''   $description  '\', metatags =\''   $metatags  '\', metaDescription =\''   $metaDescription  '\',  title =\''   $title  '\' WHERE id =\''  $id '\'');
		
		inline($gv_sql,-SQL=$33SQLs);
	//			$STK_message  -> Insert('33SQLs errors = ' error_currenterror);
	//				$STK_message  -> Insert('33SQLs action = ' action_statement);
		/inline;
		
	case;

/select;	

				inline($gv_sql,-SQL=$33SQL, -maxrecords='500');
	//				$STK_message  -> Insert('33SQL errors = ' error_currenterror);
	//				$STK_message  -> Insert('33SQL action = ' action_statement);
				'<br />';
					records;
	if: field('description') == '';
	var('yesno'='no');
	else;
	var('yesno'='yes');
	/if;
					var:'urlPath'=xs_cat->(getURLpath(-cattable= $cattable_resources ,-id=(field:'id')));
		//			$urlpath;
					//(loop_count)'&nbsp;&nbsp;&nbsp;';
				'<div class="one" id="A' loop_count '" style="width:100%; background-color:#44444; border-bottom: 1px dotted black;">';
				'<div style="float:right">' ;
				
			
				
				
				'<a href="?do=subNode&amp;id=' (field('id')) '"  title="Examine the whole tree under this node"><img src="/public/images/hr_subtree.png" alt="image"  width="16" height="16"  align="absmiddle" border="0" /></a> |\r'; 
						 ' Sub Page <a href="?do=addChild&amp;id=' (field('id')) '#'  loop_count '"  title="Add a  Child,  this will add a new area with depth equal to this one plus one from the document root"><img src="/public/images/hr_add_child.png" alt="image" width="16" height="16" align="absmiddle" border="0" /></a> |\r'; 
						  ' New Page <a href="?do=addSibling&amp;id=' (field('id')) '#'  loop_count '"  title="Add a Sibling, this will add a new area with depth equal to this one from the document root"><img src="/public/images/hr_dupe.png" alt="image"width="16" height="16" align="absmiddle" border="0" /></a> |\r'; 
						    ' Move this Area Up 1 Node<a href="?do=moveNode&amp;id=' (field('id')) '"  title="Move the Node, this will move this node and all its children up one level in the current hierachy, it will be the same distance from the document root."   onclick="return confirm(\'Are you sure you want to MOVE THIS RECORD and all of the CHILDREN underneath it UP ONE ROW?\')"><img src="/public/images/hr_switch_nodes.png" alt="image"width="16" height="16"  align="absmiddle" border="0" /></a> |';
						    ' <a href="?do=deleteNode&amp;id=' (field('id')) '"  title="Delete the whole node"  onclick="return confirm(\'Are you sure you want to DELETE THIS RECORD and all its CHILDREN underneath it?\')"><img src="/public/images/hr_delete_node.png" alt="image"width="16" height="16" align="absmiddle" border="0" /></a>';
						    '</div>\r';
			
				
		
				'<a href="?do=showField&amp;id=' (field('id')) '#'  loop_count '"  title="Edit this Document"><img src="/public/images/hr_edit.png" alt="image"  width="16" height="16"  align="top"  border="0" /></a> | ';
					'<a href="?do=showField&amp;id=' (field('id')) '#'  loop_count '"  title="Blank Check Denotes Missing Content">';
					'<img src="/public/images/checked_' $yesno '.png" alt="image" width="16" height="16"  align="top" border="0" />';
					'</a>\r';
					loop: -from=1, -to=(field('depth'));
			//		(loop_count);
					'&nbsp;&nbsp;&nbsp;&nbsp;';
					/loop;
					if:field('depth') == 0;
					'<strong>&bull;</strong>&nbsp;';
					/if;
					
					'<a href="'  (($STK_langlink + $urlPath)->(Lowercase) &) '" target="new" title="Preview page ' $urlPath '">' field('title')  '</a>';
						   $br;
						//    '<a href="' $urlPath '"  title="' $urlPath '">LINK</a> |'; 
						    if: $id ==(field:'id') && $do=='showField';
						   '<div style="			border-color: #216574;
			margin-bottom: 3px;
			margin-top: 3px;
			padding: 2px;
			border-width: 3px;
			border-style: dashed;">'; 
						    '<form action="' response_filepath '#' loop_count '" method="post">
						    <input type="hidden" name="do" value="modTitle"></input>
						    <input type="hidden" name="id" value="'  (field:'id') '"></input>
						    <input type="text" size="30" name="title" value="'  (field:'title') '">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</input><input type="submit" name="sub" value="Save Changes"></input><br />';
						    '<input type="text" size="30" name="metatags" value="'  (field:'metatags') '"></input> Metatags (comma separated)<br />';
						    '<input type="text" size="60" name="metadescription" value="'  (field:'metadescription') '"> Meta Description<br />';
						  '<div style="border: 1px solid black; padding: 2px; margin-top:2px;">';
	include('/app/models/fckeditor.inc');
	var('basepath') = '/fckeditor/';

	var('myeditor') = fck_editor(
		-instancename='description',
		-basepath=$basepath,
		-initialvalue=(field:'description')
	);

$myeditor->toolbarset = 'Basic2';

	$myeditor->create;
					'</div>';
						    '</form>
						    ';
						    '</div>';
						    /if;
						    '</div>'; 
						    	'<div style="clear:both">';
						 '</div>';  
						
						 	$comp_sql += 'UPDATE ' $cattable_resources ' set page_url=\'' encode_sql($urlPath)  '\' where id=\''  field('id') '\';';

					/records;
				/inline;
				
				  
					inline($gv_sql,-SQL=$comp_sql);
				/inline;
				error_currenterror;
//  SUBORDINATES				
var('sSQL57'=xs_cat->(subOrdinates(-cattable= $cattable_resources ,-id=1))	);
var('subOrds'=array);

	inline($gv_sql,-SQL=$sSQL57);
				records;
				$subOrds->(Insert:pair(field('title')=field('id')));
										//		field('title') + '<br />';
										

				/records;
			/inline;
//		$subOrds;
	
//		$sSQL57
//$comp_sql;
//xs_cat->(getURLpath(-cattable= $cattable_resources ,-id=400));

//include:'/app/views/layouts/bottom.lasso';
?>

