<?LassoScript
	
// BEGIN sample data.
var('STK_resp' 		=	(response_filepath));
Var('STK_resp_arr'=	($STK_resp -> (split:'/'))  -> (RemoveAll:'') &);
// END sample data.

// Scalable route code...
/****************************************************************************
	Check for the language links that have to give special priority.
*****************************************************************************/
if($STK_Languages >> $STK_resp_arr->(get(1)));
	var('STK_LangLink' = $STK_resp_arr->(get(1)));
	$STK_message->Insert:'You have asked for language links. ' $STK_LangLink;
	var:'test' = $STK_resp->(RemoveLeading: ('/' $STK_LangLink)) &;
	$STK_resp_arr->(RemoveFirst);
else;
	$STK_message->Insert:'You have asked for no language links. ';
/if;



Var:'intLevel'=Integer,
    'strType'=String;
Loop:$STK_resp_arr->(Size);
 If:(Loop_Count%3)==1;
  $strType='controller';
  $intLevel+=1;
 Else:(Loop_Count%3)==2;
  $strType='action';
 Else;
  $strType='action_id';
 /If;
 Var:('STK_' $strType (($intLevel>1) ? $intLevel))=$STK_resp_arr->(Get:Loop_Count);
 $STK_message -> Insert('STK_' $strType (($intLevel>1) ? $intLevel) '____' Var:('STK_' $strType (($intLevel>1) ? $intLevel)));
/Loop;

/****************************************************************************
	Check to see if the controller is allowed to be executed, if it's in the array 
	of the controllers we used, driven off of the file_listdirectory of the 
	controllers directory.
*****************************************************************************/
if($STK_Controllers >> $STK_controller);
	select: $STK_controller;
/****************************************************************************
	Additional conditions can be set here by adding cases.  The default is to do the expected 
	behaviors below.			
*****************************************************************************/			
		case;
		include: '/app/controllers/' $STK_controller '.inc';
			$STK_message->Insert:'You have asked for a controller. ' $STK_StrInclude;	
			if: var('STK_action');
				$STK_StrInclude  = '/app/views/layouts/' + $STK_controller + '/' + $STK_action + '.html';	
			/if;
	/select;
else;
	$STK_message->Insert:'This is not a valid route. ' $STK_StrInclude;
/if;

/****************************************************************************
	If the first part of the URL (which maps to the controller) is the name of the taxonomy.
	we can execute the code block below.
*****************************************************************************/
if($STK_taxonomy >> $STK_controller);
	include: '/app/controllers/taxonomy.inc';
	$STK_message->Insert:'You have asked for a taxonomy. ' $STK_controller;
else;
	$STK_message->Insert:'This is not a valid taxonomy route. ' $STK_controller;
/if;
?>