<?LassoScript
library:'/components/inSite/js_timer.inc';

//	library:'/components/inSite/results_navigation.inc';
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
$STK_message -> Insert('Routes Helper + ' $STK_timer);
include:'/app/helpers/components_helper.inc';
$STK_message -> Insert('Components Helper + ' $STK_timer);
library:'/config/routes.inc';
$STK_message -> Insert('Routes + ' $STK_timer);


//$STK_Controllers;

//$STK_Components;
?>