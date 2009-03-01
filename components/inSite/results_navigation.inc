[//lasso
/*----------------------------------------------------------------------------

[results_navigation]
Generates links for found-set navigation.

Author: Jason Huck
Last Modified: Feb. 06, 2007
License: 

Description:
This tag outputs "Google-style" found-set navigation, including links for 
first page, previous page, a user-definable range of nearby pages, next page, 
and last page. 

It automatically includes all params passed to the current page into a form 
and submits to [response_filepath] via the post method so params aren't 
visible on the query string. Passes params called -max and -skip containing 
the appropriate values for -maxrecords and -skiprecords to be used in the 
inline that generates the results. 

Output can be styled using a class called "results_navigation." Requires 
[client_params], available here.

Note: This tag was previously called [c5_fsnav], but was updated to use 
default values when available and renamed to share a common namespace with 
[results_table] and [results_status].


Sample Usage:
var('procs') = map(
	'tag_name' = { 
		local(
			'row' = params->first,
			'cell' = params->second
		);
		return('<a href="http://reference.omnipilot.com/LDMLReference.0.LassoApp?tag=' 
			+ #row->second + '" target="_blank">' + #cell + '</a>');
	}
);
	
var('sortCol') = (action_param('sortfield') ? action_param('sortfield') | 'ID');
var('sortDir') = (action_param('sortorder') ? action_param('sortorder') | 'ascending');
	
inline(
	-search,
	-username='xxxxxx',
	-password='xxxxxx',
	-database='LDML8_Reference',
	-table='tags',
	-returnfield='ID',
	-returnfield='tag_id',
	-returnfield='tag_name',
	-returnfield='tag_category',
	-sortfield=$sortCol,
	-sortorder=$sortDir,
	-skiprows=skiprecords_value,
	-maxrows=20
);
	results_status;

	results_table( 
		-procs=$procs,
		-hidden=array('tag_id')
	);
	
	results_navigation;
/inline;


Downloaded from tagSwap.net on Jun. 01, 2007.
Latest version available from <http://tagSwap.net/results_navigation>.

----------------------------------------------------------------------------*/
		

define_tag(
		'navigation',
		-namespace='results_',
		-opt='found', -type='integer',
		-opt='shown', -type='integer',
		-opt='skipped', -type='integer',
		-opt='range', -type='integer',		
		-opt='id', -type='string',
		-priority='replace',
		-description='Generates links for found set navigation.'
	);
		!local_defined('id') ? local('id' = lasso_uniqueid);
	
		local(
			'found_count' = (local_defined('found') ? #found | found_count),
			'shown_count' = (local_defined('shown') ? #shown | maxrecords_value),
			'shown_page' = integer,
			'skip_counts' = array,
			'skip' = (local_defined('skipped') ? #skipped | skiprecords_value),
			'counter' = 0,
			'radius' = 2,
			'display' = string,
			'prev' = string,
			'next' = string,
			'first' = string,
			'last' = string,
			'lower' = integer,
			'upper' = integer,
			'out' = string
		);

		// no navigation is needed if #found_count < #shown_count
		if(#found_count > #shown_count);
			// range defaults to 5
			!local_defined('range') ? local('range' = 5);		
			#radius = #range / 2;
		
			// generate form to preserve search params
			local('form' = '\
<script type="text/javascript">
 function setNav' + #id + '(skipNum) {
	document.getElementById(\'skip' + #id + '\').value = skipNum;
	document.getElementById(\'' + #id + '\').submit();
 }
</script>
<form action="' + response_filepath + '" method="post" id="' + #id + '">
	<input id="skip' + #id + '" type="hidden" name="-skiprows" />
\			');
			
			iterate(client_params, local('this'));
				if((: '-skiprows') !>> #this->first);
					#form += '\t<input type="hidden" name="' + #this->first + '" value="' + #this->second + '" />\n';
				/if;
			/iterate;
			
			#form += '</form>\n';
			
			// calculate number of pages
			local('pages' = #found_count / #shown_count);	
			#found_count % #shown_count > 0 ? #pages += 1;
			
			// calculate skip count for each page
			loop(#pages);
				#skip_counts->insert(#counter);
				#counter += #shown_count;
			/loop;
			
			// find the current page
			#shown_page = #skip_counts->findposition(#skip)->get(1);
	
			// determine range of pages to show
			#lower = #skip - (#shown_count * #radius);
			#upper = #skip + (#shown_count * #radius);
		
			// find previous/next, first/last links
			if(#shown_page > 1);
				// #prev = '<a href="#" onClick="setNav' + #id + '(' + (#skip - #shown_count) + ');">&lt; Previous</a>&nbsp;&nbsp;';
				// #first = '<a href="#" onClick="setNav' + #id + '(0);">&lt;&lt; First</a>&nbsp;&nbsp;';		
				#prev = '<a href="javascript:setNav' + #id + '(' + (#skip - #shown_count) + ');">&lt; Previous</a>&nbsp;&nbsp;';
				#first = '<a href="javascript:setNav' + #id + '(0);">&lt;&lt; First</a>&nbsp;&nbsp;';		
			/if;
			
			if(#shown_page < #skip_counts->size);
				// #next = '&nbsp;&nbsp;<a href="#" onClick="setNav' + #id + '(' + (#skip + #shown_count) + ');">Next &gt;</a>';
				// #last = '&nbsp;&nbsp;<a href="#" onClick="setNav' + #id + '(' + #skip_counts->last + ');">Last &gt;&gt;</a>';
				#next = '&nbsp;&nbsp;<a href="javascript:setNav' + #id + '(' + (#skip + #shown_count) + ');">Next &gt;</a>';
				#last = '&nbsp;&nbsp;<a href="javascript:setNav' + #id + '(' + #skip_counts->last + ');">Last &gt;&gt;</a>';
			/if;
				
			// generate individual page nav links
			iterate(#skip_counts, local('this'));
				if(#this >= #lower && #this <= #upper);
					// #display += '<a href="#" onClick="setNav' + #id + '(' + #this + ');">';		
					#display += '<a href="javascript:setNav' + #id + '(' + #this + ');">';		
					#shown_page == loop_count ? #display += '<strong>[';
					#display += loop_count;
					#shown_page == loop_count ? #display += ']</strong>';	
					#display += '</a>';			
					(#this < #upper && #this != #skip_counts->last) ? #display += ' ';
				/if;
			/iterate;
			
			#out = #form + '<div class="results_navigation">' + #first + #prev + #display + #next + #last + '</div>\n';
			
			return(@#out);
		/if;
	/define_tag;
]
