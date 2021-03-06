﻿[
/*----------------------------------------------------------------------------

[lp_logical_in]
Evaluates if a value is contained within a list of elements.  Returns true or false.

Author: Bil Corry
Last Modified: Dec. 03, 2005
License: Public Domain

Description:
Evaluates if a value is contained within a list of elements.  Returns true or 
false.


Sample Usage:
(lp_logical_in:'abc',(:'abc','def'));
(lp_logical_in:'abc','abc,def,ghi');
(lp_logical_in:'gh','abc,def,ghi');


Downloaded from tagSwap.net on Jun. 05, 2007.
Latest version available from <http://tagSwap.net/lp_logical_in>.

----------------------------------------------------------------------------*/
		
]

[

define_tag:'lp_logical_in',
	-description='Searches a list of elements for an item.  Returns true or false.',
	-priority='replace',
	-required='value', -copy,
	-required='list',
	-optional='list_delimiter';
	
	local:'trim' = true;
	if: params->(find:'-notrim') > 0;
		local:'trim' = false;
	else: #value->type == 'string';
		#value->trim;
	/if;

	if: #list->type == 'array';
		local:'listarray' = #list;
	else;
		if: local_defined:'list_delimiter';
			local:'listarray' = (string:#list)->(split:#list_delimiter);
		else; // assume comma-delimited
			local:'listarray' = (string:#list)->(split:',');
		/if;
	/if;

	iterate: #listarray, local:'item';
		if: #trim && #item->type == 'string';
			#item->trim;
		/if;
		if: #item == #value;
			return: true;
		/if;
	/iterate;
	return: false;

/define_tag;

]