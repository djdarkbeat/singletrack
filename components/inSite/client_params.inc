[//lasso
/*----------------------------------------------------------------------------

[client_params]
Merged array of [client_getparams] and [client_postparams].

Author: Jason Huck
Last Modified: Jan. 16, 2006
License: 

Description:
Combines [client_getparams] and [client_postparams] into a single array. Can 
be used as an inline-safe replacement for [action_params] if you do not need 
the extra values added by Lasso.


Sample Usage:
client_params;

-> array: (pair: (id)=(12345)), (pair: (sometext)=(hi))

Downloaded from tagSwap.net on Jun. 13, 2008.
Latest version available from <http://tagSwap.net/client_params>.

----------------------------------------------------------------------------*/
		
if:!(Lasso_TagExists:'client_params');
	define_tag(
		'params',
		-namespace='client_',
		-priority='replace',
		-description='Returns an array that is a combination of [client_getparams] and [client_postparams].'
	);
		local('out') = array;
		#out->merge(client_getparams);
		#out->merge(client_postparams);
		return(#out);
	/define_tag;
/if;
]
