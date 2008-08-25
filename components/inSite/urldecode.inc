[
/*----------------------------------------------------------------------------

[urldecode]
Emulates FileMaker's convenient fulltext search behavior with MySQL

Author: Brian Loomis
Last Modified: Mar. 20, 2007
License: Public Domain

Description:

*/
define_tag(
    'urldecode',
    -namespace='cbsm_',
    -priority='replace',
    -required='url_string', -Copy,
    -description='makes the url safe'
);

#url_string->(Replace:'+',' ') &
             (Replace:'-','.');
  
  	return: @#url_string;
/define_tag;
]