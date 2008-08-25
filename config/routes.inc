<?LassoScript
	
// BEGIN sample data.
var('STK_resp' 		=	(response_filepath));
Var('STK_resp_arr'=	($STK_resp -> (split:'/'))  -> (RemoveAll:'') &);
// END sample data.


// Scalable route code...
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



?>