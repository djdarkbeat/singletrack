[
/*----------------------------------------------------------------------------

[urldecode]
Emulates FileMaker's convenient fulltext search behavior with MySQL

Author: Brian Loomis
Last Modified: Mar. 20, 2007
License: Public Domain

Description:

*/
if:!(Lasso_TagExists:'st_urldecode');
	define_tag(
	    'urldecode',
	    -namespace='st_',
	    -priority='replace',
	    -required='url_string', -Copy,
	    -description='makes the url safe'
	);
	
	#url_string->(Replace:'+',' ') &
	             (Replace:'-','.');
	  
	  	return: @#url_string;
	/define_tag;
/if;
]