<?LassoScript

library:'/components/inSite/js_timer.inc';
var('STK_timer' = js_timer);
$STK_message -> Insert('Begin + ' $STK_timer);
!(lasso_tagexists: 'auto') ?
library:'/components/inSite/auto.inc';
!(lasso_tagexists: 'client_params') ?
library:'/components/inSite/client_params.inc';
!(lasso_tagexists: 'lp_logical_in') ?
library:'/components/inSite/lp_logical_in.inc';
!(lasso_tagexists: 'lp_string_firstwords') ?
library:'/components/inSite/lp_string_firstwords.inc';
!(lasso_tagexists: 'results_navigation') ?
library:'/components/inSite/results_navigation.inc';
!(lasso_tagexists: 'tables') ?
library:'/components/inSite/tables.inc';
!(lasso_tagexists: 'unique_id') ?
library:'/components/inSite/unique_id.inc';
!(lasso_tagexists: 'cbsm_urldecode') ?
library:'/components/inSite/urldecode.inc';
!(lasso_tagexists: 'cbsm_urlencode') ?
library:'/components/inSite/urlencode.inc';

if:(server_name=='betaadmin.virtualrelations.us');
	library:'/config/environments/production.inc';
else:(server_name=='beta.cbsm.dev');
	library:'/config/environments/development.inc';
else;
	library:'/config/environments/test.inc';
/if;

$STK_message -> Insert('Environment + ' $STK_timer);
?>