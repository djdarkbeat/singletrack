<?LassoScript

define_type:'mytable';
/*	~~~~~~~~~~~~~~~~~ this initializes the arrays  ~~~~~~~~~~~~~~~	*/
	local('me_id' = string);
	local('me_name' = string);

/*	~~~~~~~ this is the oncreate ~~~~~~ */		
	define_tag:'oncreate', -description = 'on create';
		self->'me_id' = lasso_uniqueid;
	/define_tag;

/*	~~~~~~~ this is the reference to self ~~~~~~ */		
	define_tag:'me', -description = 'me reference to self';
		if: self->'me_name'->size;
			return: self->'me_name';
		else;
			iterate: vars, local:'i';
				if: (var: #i->name)->properties->first->(find:'me_id') == self->'me_id';
					self->'me_name' = #i->name;
					return: #i->name;
				/if;
			/iterate;
			self->'me_name' = 'unknown';
		/if;
		return: self->'me_name';
	/define_tag;

/*	~~~~~~~ this is on assign ~~~~~~ */		
	define_tag:'onassign', -description = 'on assign';
		self->'me_name' = string;
		self->'me_id' = lasso_uniqueid;
	/define_tag;

/*	~~~~~~~ this is on convert ~~~~~~ */		
	define_tag:'onconvert', -description = 'on convert';
		return: self->me;
	/define_tag;
	
/*	~~~~~~~ this returns the methods of this type ~~~~~~ */		
	define_tag('show.methods', -description = 'shows methods & descriptions for this type'); 
		local('myFeedback' = 'METHODS<br/>\r');
		iterate(self->properties->second, local('thisMember'));
			#myFeedback += #thisMember '<br/>';
		/iterate;
		#myFeedback += '<br/>';
		return(@#myFeedback);
	/define_tag;

/*	~~~~~~~ this returns the size of the search array ~~~~~~ */	
	define_tag('show.name', -description = 'shows the name of the type');
	    return(self);
	/define_tag;

/*	~~~~~~~ this returns the properties of this type ~~~~~~ */		
	define_tag('show.properties', -description = 'displays properties in a nicer matter'); 
		local('myFeedback' = string,
			'myProps' = self->properties->first);
		#myFeedback += 'LOCALS<br/>\r';
		iterate(#myProps, local('thislocal'));
			local('myPropName') = #thislocal->first;
			#myFeedback += ' • ' #thislocal->first ' (' self->#myPropname->type ') = ' #thislocal->second '<br/>';
		/iterate;
		#myFeedback += '<br/>';
		return(@#myFeedback);
	/define_tag;

/*	~~~~~~~ this is the part STK_PathArray finds us all the records ~~~~~~ */		
	define_tag('search.records', -description = 'finds us all the records',
	-optional = 'statement'
		);
		local('myquery' = string);
			inline: -inlinename	= 'search.' self->me,
					$STK_AllParams,
					-Table		=self->me,
					-op			='EQ',
					local:'statement',
					-Search;
					local('returnarray' = action_statement);	

					if: error_currenterror!= 0 ;
						return: error_currenterror;
						
					else:  found_count == 0;
						return: #returnarray; //'no records were found';
					else;
						return: #returnarray;
					/if;
			/inline;
		
	/define_tag;

/*	~~~~~~~ this is the part STK_PathArray shows us the database size and action~~~~~~ */	
	define_tag('search.found', -description = 'shows us the database size');
	//	local('myCount' = integer);
		local('myquery' = string);
			inline: -inlinename	= 'count.' self->me,
					$STK_AllParams,
					-Table		=self->me,
					-op			='EQ',
					local:'statement',
					-Search;
				local('myAction' = action_statement);	
				local('myCount' = found_count);	
				local('returnarray' =array(found_count,action_statement));
			/inline;
			
		return: #returnarray;
		//return: #myAction;

	/define_tag;
	
	
	
		define_tag('search.found.action', -description = 'shows us the database size');
	//	local('myCount' = integer);
		local('myquery' = string);
			inline: -inlinename	= 'count.' self->me,
					$STK_AllParams,
					-Table		=self->me,
					-op			='EQ',
					local:'statement',
					-Search;
				local('myAction' = action_statement);	
				local('myCount' = found_count);	
				local('returnarray' =array(found_count,action_statement));
			/inline;
		
		return: #myAction;
		//return: #myAction;

	/define_tag;
	
	
	
	
	
	
	
	
/*	~~~~~~~ this is the part STK_PathArray updates the database  ~~~~~~ */	
	define_tag('update.record', -description = 'updates the records ',
		-required = 'id',
		-required = 'statement'
		);
	//	local('myCount' = integer);
		local('myquery' = string);
			inline: -inlinename	= 'update.' self->me,
					$STK_AllParams,
					-Table		=self->me,
					local:'statement',
					-Keyfield	='id',
					-KeyValue	=#id,
					-Update;
				local('returnarray' = action_statement);	
				local('myCount' = found_count);	
				
				
					if: error_currenterror!= 0 ;
						return: error_currenterror;
						
					else:  found_count != 1;
						return: 'no record was updated';
					else;
						return: #returnarray;
					/if;
				
			/inline;
		
	

	/define_tag;

/*	~~~~~~~ this is the part STK_PathArray adds records to the database  ~~~~~~ */		
	define_tag('add.record', -description = 'adds records to the database',
		-required = 'statement'
		);
		local('myquery' = string);
			inline: -inlinename	= 'add.' self->me,
					$STK_AllParams,
					-Table		=self->me,
					local:'statement',
					-Add;
				local('returnarray' = action_statement);	
				local('myCount' = found_count);	
				
					if: error_currenterror!= 0;
						return: #error_currenterror;
					else;
						return: #returnarray;
					/if;
				
			/inline;	

	/define_tag;

/define_type;



?>