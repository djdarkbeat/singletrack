[
/*----------------------------------------------------------------------------

[lp_string_firstwords]
Returns the first series of words in a string, up to a max length.

Author: Bil Corry
Last Modified: Dec. 03, 2005
License: Public Domain

Description:
Returns the first series of words in a string, up to a max length.

Note: Requires [lp_logical_in]


Sample Usage:
'"' (lp_string_firstwords: 'This is a test.  It\'s only a test.', 22) '"';

Returns:

"This is a test. It's"

Downloaded from tagSwap.net on Jun. 05, 2007.
Latest version available from <http://tagSwap.net/lp_string_firstwords>.

----------------------------------------------------------------------------*/
		
]

[

define_tag:'lp_string_firstwords',
	-description='Returns the first series of words in a string, up to a max length.',
	-priority='replace',
	-required='string',
	-required='max_length';

	if: (string:#string)->size == 0;
		return: '';
	/if;

	local:'words' = (string:#string)->(substring: 1, (integer: #max_length) + 1);
	
	local:'ptr' = #words->size;
	
	if: #ptr < #max_length;
		return: #words;
	/if;
	
	while: #ptr > 0 && !(lp_logical_in: #words->(get: #ptr), (array: '\r', '\n', '\t', ' '));
		#ptr -= 1;
	/while;

	while: #ptr > 0 && (lp_logical_in: #words->(get: #ptr), (array: '\r', '\n', '\t', ' '));
		#ptr -= 1;
	/while;
	
	if: #ptr == 0;
		#ptr = #words->size;
	/if;

	#words = #words->(substring: 1, #ptr);

	return: #words;

/define_tag;

]