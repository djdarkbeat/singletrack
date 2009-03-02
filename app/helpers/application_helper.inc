<?LassoScript
	var('hr'										='<hr />',
		'br'										='<br />',
		'login_status' 					= 'false' ,
		'STK_AllParams'					=action_params,
		'searchterm'						=action_param('s'),
		'referrer_page'					=Referrer_URL,
		'STK_response_full'			=('http://' server_name + response_filepath),
		'STK_response_part'			=(response_filepath),
		'skipvalue'							=skiprecords_value,
		'STK_PathArray'					=array,
		'sectionheader'					=String,
		'content_message'				=String,
		'KeyValue'							=String,
		'STK_StrInclude'				=String,
		'STK_XTRA_Params'				=Array,
		'STK_ExtraSitePages'		=(Array:'workshops', 'contact', 'services'),

		);


$STK_message -> Insert('Helper + ' $STK_timer);
?>