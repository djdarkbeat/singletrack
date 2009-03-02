[
/*----------------------------------------------------------------------------

[urlencode]
Emulates FileMaker's convenient fulltext search behavior with MySQL

Author: Brian Loomis
Last Modified: Mar. 20, 2007
License: Public Domain

Description:

*/
if:!(Lasso_TagExists:'st_urlencode');
	define_tag(
	    'urlencode',
	    -namespace='st_',
	    -priority='replace',
	    -required='url_string', -Copy,
	    -description='makes the url safe'
	);
	
	#url_string->(Replace:':','') &
					(Replace:';','') &
				  (Replace:'-','') &
				  (Replace:'(','') &
				  (Replace:')','') &
				  (Replace:'"','') &
				  (Replace:'\'','') &
				 (Replace:'.','') &
				 (Replace:'#','Number') &
				 (Replace:',','') &
				 (Replace:'/','+') &
				 (Replace:'&','') &
	             (Replace:' ','+');
	#url_string->(lowercase) &;
	
	while: #url_string >> '++';
	
	#url_string->(Replace:'++','+') &;
	
	/while;
	#url_string->(removeleading:'+');
		return: @#url_string;
	/define_tag;
/if;
]