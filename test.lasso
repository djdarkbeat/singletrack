<?LassoScript
library:'/components/inSite/js_timer.inc';

//library:'/components/inSite/results_navigation.inc';
//	library:'/components/inSite/unique_id.inc';
var('STK_message' = array);
var('STK_timer' = js_timer);
$STK_message -> Insert('Begin + ' $STK_timer);
library:'/config/environment.inc';
$STK_message -> Insert('Environment + ' $STK_timer);
library:'/config/database.inc';
$STK_message -> Insert('Database + ' $STK_timer);
library:'/app/helpers/application_helper.inc';
$STK_message -> Insert('Helper + ' $STK_timer);
library:'/config/valuelists.inc';
$STK_message -> Insert('ValueList + ' $STK_timer);
library:'/config/routes.inc';
$STK_message -> Insert('Routes + ' $STK_timer);


/*
CREATE TABLE `examples` (
 `id` int(20) NOT NULL auto_increment,
 `admin` text NOT NULL,
 `firstname` text NOT NULL,
 `lastname` text NOT NULL,
 PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;

insert into `examples` values('1','0','BrianL','Loomis');
// */
	
library:'/components/inSite/auto.inc';
library:'/components/inSite/client_params.inc';
iterate: client_params, local('param');
	var:(#param->(Name))=#param->(Value);
/iterate;

define_type( 'example', 'auto_record' );
	local(
		'admin' = null,
		'firstname' = null,
		'lastname' = null );
/define_type;

inline( $dbconn,
 -nothing );
	if: (var('do')=='go'); 
		
		var( 'example' = example(integer(var('id'))));
		
		$example->set_firstname($firstname);
		$example->set_lastname($lastname);		
		$example->save;
		$STK_Message->Insert('Save_Error' error_code ': ' error_msg);
	/if;
/inline;
?>

[var('example')]
[action_params]
<form action=[response_filepath] method="post">
<input type="hidden" name="do" value="go" />
<input type="hidden" name="id" value="1" />
<input type="text" name="firstname" value="[Action_Param('firstname')]" />
<input type="text" name="lastname" value="[Action_Param('lastname')]" />
<input type="submit" name="" value="Submit" />
</form>


[include:'/app/debug.inc']