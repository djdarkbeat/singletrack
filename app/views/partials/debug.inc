<?LassoScript
//$STK_message;
//	$STK_message -> Insert('Vars = ' vars);
//*
//$STK_message -> Insert('End + ' $STK_timer);
if: server_name != 'www.cbsm.com';
//	if:((var: 'CBSM_user') == '081005.233656177498545725');
'<a href="#show_messages" class="expose">Expose</a>';
'<p class="hideme">';
'Messages:<br />';

Iterate: $STK_message, local:'mymessage';
	(loop_count) '. ' #mymessage; $br;

/Iterate;
var('STK_ReturnMe');
'</p>';
'<div id="show_messages"></div>';
/if;

// *///
?>
