<?LassoScript
		if:(server_name=='singletrack.emptybrand.org');
		'	<a href="#show_messages" class="expose">Expose</a>';
'<p class="hideme" id=""  style="color:black;padding:10px;">';
'Messages:<br />';

Iterate: $STK_message, local:'mymessage';
	(loop_count) '. ' #mymessage; $br;

/Iterate;
/if;

//vars;
'</p>';
?>