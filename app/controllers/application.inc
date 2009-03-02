<?LassoScript
var('STK_message' = array);
library:'/config/environment.inc';
library:'/app/helpers/application_helper.inc';
library:'/config/valuelists.inc';
library:'/app/helpers/routes_helper.inc';
library:'/config/routes.inc';
library:'/app/helpers/components_helper.inc';

/*
iterate: $STK_tagList, local:'STK_temptagName';
if: !(#STK_temptagName >> 'timer');
	library:'/components/inSite/' #STK_temptagName;
	(file_currentError)	>> 'No error' ?	'' | $STK_message->Insert:'tag include error';
/if;
/iterate;	
// */

//protect;
if($STK_Taxonomy);
/****************************************************************************
	Check the one that we have a taxonomy
*****************************************************************************/
	inline: $dbconn, 
			-table			='resources', 
			-op = 'eq',
			'page_url' = $STK_resp	, 
			-maxrecords = 1,
			-Search;
	
		var('inlpageshowingaction'	=action_statement,
				'inlpageshowingerror'		=error_currenterror,
				'inlpageshowingfound'		=found_count
				);
		$STK_message->Insert:'You have asked for the taxonomy errors. ' $inlpageshowingerror;
				/*
		$test;
		'<br />';
		$STK_langlink;
		'<br />';
		
		*/
		//$inlpageshowingaction;
		//library:'/components/inSite/categories.inc';
		rows;
			var('body'=(process(column('description'))));
			var('html_title'=((column('title'))));
			if:	error_currenterror != 'no error';
			error_currenterror;
			/if;
		/rows;
	/inline;
/if;
/****************************************************************************
	This is the best.
*****************************************************************************/
//protect;

include('/app/views/top.inc');
///protect;


include('/app/views/bottom.inc');
///protect;

?>