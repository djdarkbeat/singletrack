<?LassoScript
var('STK_message' = array);
library:'/config/environment.inc';
library:'/app/helpers/application_helper.inc';
library:'/config/valuelists.inc';
library:'/app/helpers/routes_helper.inc';
library:'/config/routes.inc';


/*
iterate: $STK_tagList, local:'STK_temptagName';
if: !(#STK_temptagName >> 'timer');
	library:'/components/inSite/' #STK_temptagName;
	(file_currentError)	>> 'No error' ?	'' | $STK_message->Insert:'tag include error';
/if;
/iterate;	
// */

//protect;
include('/app/views/top.inc');
///protect;

//protect;
include('/app/views/bottom.inc');
///protect;

?>