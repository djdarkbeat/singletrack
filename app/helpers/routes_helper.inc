<?LassoScript
var('STK_Response'				=response_filepath,
		'STK_ExtraSitePages'	=array(),
		'STK_Taxonomy'				=array('pages'),
		'STK_TableNames'			=array(),
		'STK_Actions'					=array('search','update','add','destroy'),
		'STK_ActionTypes'			=array(),
		'STK_Others'					=array(),
		'STK_Languages'				=array('en','fi','be','fr','es','no','se','de','it'),
		'STK_Components'			=array(),
		'forums'							=array('forums'),
		'STK_HeaderPossible'	=array(),
		'STK_Controllers'			=array(),
		);

	iterate: (file_listdirectory:'/app/controllers/'), local('file');		
		$STK_Controllers->Insert(#file->split('.')->(get(1)));
		$STK_Controllers->RemoveAll('application');
	/iterate;

?>