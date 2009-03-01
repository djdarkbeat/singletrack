<?LassoScript
var('STK_Response'				=response_filepath,
		'STK_ExtraSitePages'	=(array:'workshops', 'contact', 'services'),
		'CBSM_Categories'			=array('Conservation','Energy','Transportation','Water','Waste and Pollution'),
		'STK_TableNames'			=array('articles','reports','cases','graphics','strategies','pages'),
		'STK_Actions'					=array('search','update','add'),
		'STK_ActionTypes'			=array('activities','tools','category'),
		'STK_Others'					=array('search','email','guide','workshops','services','contact','user', 'advanced_search'),
		'forums'							=array('forums'),
		'STK_HeaderPossible'	=array('articles','cases','graphics','strategies','pages','forums','user'),
		'STK_PageTools'				=array('committment','prompts','norms','communication','incentives','convenience'),
		);


$STK_message -> Insert('Routes Helper + ' $STK_timer);
?>