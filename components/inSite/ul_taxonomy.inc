[//lasso
/*----------------------------------------------------------------------------

[ul_taxonomy]
Gives you unordered lists from taxonomies.

Author: Brian Loomis
Last Modified: Jun. 28, 2008
License: Public Domain

Description:
This tag is used to return an unordered list based off of the xs_cat tags so 
that css flyout menus, or javascript jQuery madness can be applied for 
ultimate styling and sliding pleasure. http://www.cssplay.co.uk/menus/ See 
Stuart Nichols stuff. Once you get this tag implemented with xs_cat you will 
see how easy it is to optimize dynamic css menus from your database content. 
You can also modify the SQL generation easily enough to show only subnodes etc.


Sample Usage:
<?LassoScript
var('br'='<br />');
var('gv_error'='');
var('comp_sql'='');
!(lasso_tagexists: 'xs_cat') ?
library:'/components/inSite/category_ctags.inc';
var(
		'cattable_resources'='pages',

		);



define_tag(
	'taxonomy',
	-namespace='ul_',
	-req='css_id',  -type='string',
	-req='recurse', -type='integer',
	-priority='replace',
	-description='Returns nested unordered lists of elements of a taxonomy within the given path.'
);
local('out')='';
var('SQL'	=	xs_cat->(fullCatSQL(-cattable= $cattable_resources ,-xtraReturn=', node.lft, node.rgt, node.description, node.metatags, node.metadescription, node.title_tag ',-xtraWhere='', -depth=#recurse)));
				
				inline(-username='xxx',-password='yyy', -database='zzz',,-SQL=$SQL, -maxrecords='500');
				var('depth'= integer(column('depth')));
					var('c_depth'= integer(column('depth')));
				#out += '<ul id="' #css_id '">\n' ('\t' * ($depth )) 
									records;
						var('c_depth'= integer(column('depth')));
					 if: integer(column('depth'))==$depth;;
					#out += ('\t' * ($depth + 1)) '<li class="li_' $c_depth  '">' column('title')  '</li>\n';
	
					else: integer(column('depth'))>$depth;
					#out += ('\t' * ($depth + 1)) '<ul>\n' ('\t' * ($depth + 2)) '<li class="li_' $c_depth  '">' column('title')  '</li>\n';

					else: integer(column('depth')) < $depth;
					#out += ('\t' * ($depth ))  ('</ul>\n' * ($depth )) '</ul>\n<ul>\n' ('\t' * ($depth )) '<li class="li_' $c_depth  '">' column('title')  '</li>\n';

					else;
					
					/if;
					var('depth'= integer(column('depth')));
					/records;
					#out += '<ul>\n';
				/inline;	
				return: #out;
		
/define_tag;

encode_smart:(ul_taxonomy: -recurse=2, -css_id='calendar');

?>

gets you:

<ul id="calendar">
	<li class="li_0">Databases</li>
	<ul>
		<li class="li_1">PostGreSQL</li>
		<li class="li_1">MySQL</li>
		<li class="li_1">FileMaker</li>
	</ul>

</ul>


Downloaded from tagSwap.net on Feb. 28, 2009.
Latest version available from <http://tagSwap.net/ul_taxonomy>.

----------------------------------------------------------------------------*/
		

define_tag(
	'taxonomy',
	-namespace='ul_',
	-req='css_id',  -type='string',
	-req='recurse', -type='integer',
	-priority='replace',
	-description='Returns nested unordered lists of elements of a taxonomy within the given path.'
);
local('out')='';
var('SQL'	=	xs_cat->(fullCatSQL(-cattable= $cattable_resources ,-xtraReturn=', node.lft, node.rgt, node.description, node.metatags, node.metadescription, node.title_tag, node.page_url ',-xtraWhere='', -depth=#recurse)));
				
				inline($dbconn, -SQL=$SQL, -maxrecords='500'); var('this')=action_statement;
				var('depth'= integer(column('depth')));
				
					var('c_depth'= integer(column('depth')));
				#out += '<ul id="' #css_id '">\n' ('\t' * ($depth )) ;//'<li class="li_' $c_depth  '">' column('title')  '</li>\n';
					records;
					var('page_url'= (column('page_url'))->Lowercase &);
						var('c_depth'= integer(column('depth')));
					 if: integer(column('depth'))==$depth;;
					#out += ('\t' * ($depth + 1)) '<li class="li_' $c_depth  '"><a href="' var('page_url') '" class="">' column('title')  '</a></li>\n';
	
					else: integer(column('depth'))>$depth;
					#out->(removetrailing('</li>\n'));
					#out += '\r' ('\t' * ($depth + 2 )) '<ul>\n' ('\t' * ($depth + 2)) '<li class="li_' $c_depth  '"><a href="' var('page_url') '" class="">' column('title')  '</a></li>\n';

					else: integer(column('depth')) < $depth;
					var('newdepth'= ($depth - integer(column('depth'))));
					loop: -from=1, -to=($newdepth );
					#out += ('\t' * ($depth + 1))   '</ul>\n' ('\t' * ($depth  )) '</li>\n'   ;
					/loop;
					#out +=('\t' * ($depth -1 )) '</ul>\n' ('\t' * ($depth - 1)) '<ul>\n' ('\t' * ($depth )) '<li class="li_' $c_depth  '"><a href="' var('page_url') '" class="">'  column('title')  '</a></li>\n';;
		
					else;
					
					/if;
				//	var('newdepth'= ($depth - integer(column('depth'))));
							
					var('depth'= integer(column('depth')));
					/records;
					loop: -from=1, -to=($depth);
				#out += 	 ('\t' * ($depth + 1)) '</ul>\n' ('\t' * ($depth + 1)) '</li>\n' ;
				/loop;
					#out += '</ul>\n';
				/inline;	
				//return: $this;
				return: #out;
		
/define_tag;
]
