[
/*
	Description:
	----------------------------------------------------------------------------
	Auto_Record provides an easy way to create object intefaces to your tables.
	How it works is you create your own custom type and name it the singular
	version of your table name. The new type would be a sub-type, or sub-class,
	of Auto_Record. When the Type is created, the Auto_Record onCreate call back
	function will automatically read in your database fields and assign their
	values to the local variables you have created in your sub-type with the
	same name. You can then update your fields by using the set_ functions also
	provided by Auto_Record. Saving is done by calling ->save, deleting is done
	by calling ->delete, and so on.
	
	Auto_Record also gives you the ability to overload parent functions, like
	->save and ->load, so that you can have absolute control over your data
	coming back from your table. An example of this is when you call ->delete,
	you want to delete from multiple joined tables before, or after, you
	actually delete the row from the original table. This can be done simply by
	creating your own ->delete function in the sub-type which would do what you
	need to have done, but then you can call the original ->delete function
	after that to finish the job.
	
	The idea of Auto_Record is somewhat based on experiences I've had with
	Ruby's Active Record where a row is manipulated through a sub-classed
	object. It saves time because you don't have to write a lot of inlines from
	scratch, and it's very quick to set up a new type for a table.
	
	For more information about this tag, please visit:
	
	http://www.tagswap.net/Auto_Record


	Installation instructions:
	----------------------------------------------------------------------------
	Save this file as Auto.lasso and place it inside of the Lasso Professional
	8/LassoLibraries/ folder, or the LassoLibraries/ folder inside of your
	LassoSite directory. If you have troubles getting it to work, check your
	Site's LassoErrors.txt file.
*/

	namespace_using( '_global_Auto_' );

		/**
		* Auto_Record type. It only works if you sub-type it.
		*
		* @author 	Adam Randall [adam@xaren.net]
		* @version 	1.2
		* @date     2008-03-28
		*/
		define_type( 'Record' );

			/** @var String The table name to use in database queries. */
			local( 'dbtablename' = null );

			/** @var String The ID of the row in the table. */
			local( 'id'    = null );


			/**
			* Callback member tag when the type is created. Optionally requires an -ID value to load a row
			* identified by the id column into the type itself. During initialization, the id is set to
			* 0 and the table is set to the pluralization of the type name (eg: auto to autos and
			* community to communities).
			*
			* @access   public
			* @return   Tag
			* @param    Integer -ID The id to load from the table
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.1
			* @date    	2008-03-27
			*/
			define_tag( 'onCreate',
				-optional = 'id',
				-type     = 'integer' );

				// since the database name comes from outside of us, we need to throw an error when we do
				// not have one. This also counters a bug in 8.5 where an inline without a database name
				// will stop the processing of the page completely, with no error being provided.
				fail_if( ! database_name, -9956, 'No database name was provided.' );

				// set up the table name based on the pluralized type name.
				self->set_dbtablename;

				// if an ID has been provided
				if( local_defined( 'id' ) && #id > 0 );
					self->load( #id );
				else;
					self->'id' = 0;
				/if;

			/define_tag;


			/**
			* Callback member tag when doing type conversions to other built in primitives (such as the
			* string type). The value returned is always the the value of self->'id'.
			*
			* @access   public
			* @return   Integer
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.1
			* @date    	2008-03-27
			*/
			define_tag( 'onConvert' );
				return( self->'id' );
			/define_tag;


			/**
			* Callback member tag when doing comparisons. We always compare with the value of self->'id'.
			*
			* @access   public
			* @return   Integer
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.1
			* @date    	2008-03-27
			*/
			define_tag( 'onCompare' );
				if( integer( params->get(1) ) == self->'id' );
					return(0);
				else( integer( params->get(1) ) < self->'id' );
					return(1);
				else( integer( params->get(1) ) > self->'id' );
					return(-1);
				/if;
			/define_tag;


			/**
			* Member tag that will load a row into the type from the table specified by
			* self->'dbtablename' based on the ID field from from the row. This really is just a helper
			* member tag to the actual loader in ->load_from_field. The reason for this is it makes it
			* easier to replace on the sub-classed type, which then calls the parent version.
			*
			* @access   public
			* @return   Boolean
			* @param    Integer -ID the ID of the row to load
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.1
			* @date    	2008-03-27
			*/
			define_tag( 'load',
				-required = 'id',
				-type     = 'integer' );

				return( self->load_from_field( 'id', #id ) );

			/define_tag;


			/**
			* Member tag that will load a row into the type from the table specified by
			* self->'dbtablename' based on the field specified by -Field and the value specified by
			* -Value.
			*
			* @access   public
			* @return   Boolean
			* @param    String -Field The field used to identify which row to load.
			* @param    mixed -Value The value of the -Field used to identify which row to load.
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.1
			* @date    	2008-03-27
			*/
			define_tag( 'load_from_field',
				-required = 'field',
				-type     = 'string',
				-required = 'value' );

				local(
					'props' = self->properties->get(1)->keys,
					'i'     = null,
					'p'     = null );

				inline(
					-log        = 'none',
					-table      = self->'dbtablename',
					-op         = 'eq',
					#field      = #value,
					-maxrecords = 2, // 2 so that we can fail if we have more than one row found.
					-uselimit,
					-search );

					error_code != 0 || found_count != 1 ? return( false );

					iterate( field_names, #i );
						if( #i == 'id' || #props->find( #i )->size > 0 );
							self->#i = self->prop_format( field( #i ) );
						else( #props->find( #i '_' )->size > 0 );
							#p = #i '_';
							self->#p = self->prop_format( field( #i ) );
						/if;
					/iterate;

				/inline;

				return( true );

			/define_tag;


			/**
			* Member tag that will load a row into the type from the table specified by
			* self->'dbtablename' based on a SQL query provided by -SQL.
			*
			* @access   public
			* @return   Boolean
			* @param    String -Field The field used to identify which row to load.
			* @param    mixed -Value The value of the -Field used to identify which row to load.
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.1
			* @date    	2008-03-27
			*/
			define_tag( 'load_from_sql',
				-required = 'sql',
				-type     = 'string' );

				local(
					'props' = self->properties->get(1)->keys,
					'i'     = null,
					'p'     = null );

				inline(
					-log   = 'none',
					-table = self->'dbtablename',
					-sql   = #sql );

					error_code != 0 || found_count != 1 ? return( false );

					iterate( field_names, #i );
						if( #i == 'id' || #props->find( #i )->size > 0 );
							self->#i = self->prop_format( field( #i ) );
						else( #props->find( #i '_' )->size > 0 );
							#p = #i '_';
							self->#p = self->prop_format( field( #i ) );
						/if;
					/iterate;

				/inline;

				return( true );

			/define_tag;


			/**
			* Delete the row in the table identified by the value of self->'id'.
			*
			* @access   public
			* @return   Boolean
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.1
			* @date    	2008-03-27
			*/
			define_tag( 'delete' );

				// if there is no id set, don't attempt to delete
				self->'id'->type == 'null' || self->'id' <= 0 ?
					return( false );

				// check to see if row exists
				inline(
					-log   = 'none',
					-table = self->'dbtablename',
					-sql   = 'select count(*) as c from `' ( encode_sql( self->'dbtablename' ) ) '`' );
					error_code != 0 || integer( field( 'c' ) ) == 0 ?
						return( false );
				/inline;

				// delete the row if found
				inline(
					-log      = 'none',
					-table    = self->'dbtablename',
					-keyfield = 'id',
					-keyvalue = self->'id',
					-delete );
					return( error_code == 0 );
				/inline;

			/define_tag;


			/**
			* Save the properties of the type back to the table specified by self->'dbtablename', or the
			* properties specified by the -Properties array.
			*
			* @access   public
			* @return   Boolean
			* @param    Array -Properties [Optional] The properties you want to save back to the table. By default, all properties of the type will be saved back to the table.
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.1
			* @date    	2008-03-27
			*/
			define_tag( 'save',
				-optional = 'properties' );

				// if we are not an array, map or set, we return false because it's bad data.
				local_defined( 'properties' ) && ! #properties->isa( 'array' ) && ! #properties->isa( 'map' ) && ! #properties->isa( 'set' ) ? return( false );
				// if no properties were provided, just set it to false to cancel future logic.
				! local_defined( 'properties' ) ? local( 'properties' = false );

				local(
					'i'      = null,
					'update' = array );

				if( ! #properties );

					#properties = array;
					iterate( self->properties->get(1)->keys, #i );
						! #i->endswith( '_' ) && #i != 'id' && #i != 'dbtablename' ?
							#properties->insert( #i = self->#i );
					/iterate;

				else;
					#properties->removeall( 'id' ) & removeall( 'dbtablename' );
				/if;

				iterate( #properties, #i );
					if( #i->isa( 'pair' ) && #i->first->isa( 'string' ) && ! #i->first->beginswith( '_' ) );
						if( #i->second->type == 'boolean' );
							#update->insert( #i->first = ( #i->second ? 1 | 0 ) );
						else( #i->second->type == 'date' );
							#update->insert( #i->first = #i->second->format( '%Q %T' ) );
						else;
							#update->insert( #i->first = #i->second );
						/if;
					/if;
				/iterate;

				if( self->'id' > 0 );
					inline(
						#update,
						-log      = 'none',
						-table    = self->'dbtablename',
						-keyfield = 'id',
						-keyvalue = self->'id',
						-update );
						error_code != 0 ? return( false );
						return( self->load( self->'id' ) );
					/inline;
				else;
					inline(
						#update,
						-log   = 'none',
						-table = self->'dbtablename',
						-add );
						error_code != 0 ? return( false );
						return( self->load( keyfield_value ) );
					/inline;
				/if;

			/define_tag;


			/**
			* This member tag will return all ids from the table that match the field specifeid by -Field
			* and the value specified by -Value. If no rows are found, or the was an error, false will be
			* returned.
			*
			* @access   public
			* @return   mixed False if nothing found, or an array containing the ids found.
			* @param    String -Field The field used to match the rows in the table.
			* @param    mixed -Value The value of the -Field used to match the rows in the table.
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.2
			* @date    	2008-03-28
			*/
			define_tag( 'search',
				-required = 'field',
				-type     = 'string',
				-required = 'value' );

				! #field->size ? return( false );

				local( 'ids' = array );

				inline(
					-log         = 'none',
					-table       = self->'dbtablename',
					-op          = 'eq',
					#field       = #value,
					-returnfield = 'id',
					-search );
					! found_count || error_code != 0 ? return( false );
					records;
						#ids->insert( integer( field( 'id' ) ) );
					/records;
				/inline;

				return( @#ids );

			/define_tag;


			/**
			* Will cast provided data to a Lasso integer, decimal or date type.
			*
			* @access   public
			* @return   mixed Integer, Decimal, Date or original type.
			* @param    mixed -Data the field data to be evaluated and cast to integer, decimal or date.
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.1
			* @date    	2008-03-27
			*/
			define_tag( 'prop_format',
				-required = 'data' );

				#data->type != 'string' ? return( #data );

				if( string_findregexp( -find = '^-?\\d+$', #data )->size == 1 );
					return( integer( #data ) );
				else( string_findregexp( -find = '^-?\\d+\\.\\d+$', #data )->size == 1 );
					return( decimal( #data ) );
				else( string_findregexp( -find = '^\\d{2,4}-\\d{1,2}-\\d{1,2}(?: \\d{1,2}:\\d{1,2}:\\d{1,2})?$', #data )->size == 1 );
					return( #data == '0000-00-00 00:00:00' || #data == '0000-00-00' ? null | date( #data ) );
				else;
					return( #data );
				/if;

			/define_tag;


			/**
			* Sets the table used by the type. When no parameters are specified, which is the default, the
			* table will be set to the pluralization of the type name. If -Table is specified, it will use
			* that instead.
			*
			* @access   public
			* @return   Boolean
			* @param    String -Table [Optional] The table name to set self->'dbtablename' to.
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.1
			* @date    	2008-03-27
			*/
			define_tag( 'set_dbtablename',
				-optional = 'table',
				-type     = 'string' );

				if( local_defined( 'table' ) && #table->size );
					self->'dbtablename' = #table;
				else( self->type->endswith( 'y' ) );
					self->'dbtablename' = string_lowercase( self->type )->substring( 1, self->type->length - 1 ) 'ies';
				else( ! self->type->endswith( 's' ) );
					self->'dbtablename' = string_lowercase( self->type ) 's';
				else;
					self->'dbtablename' = self->type;
				/if;

			/define_tag;


			/**
			* Set the id of type that corresponds to the row in the table. Note: this should be used very
			* carefully as it will not reload the data from the row when you do this.
			*
			* @access   public
			* @return   Boolean
			* @param    Integer -ID The id of the row in the table. Must be greater than 0.
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.1
			* @date    	2008-03-27
			*/
			define_tag( 'set_id',
				-required = 'id',
				-type     = 'integer' );
				fail_if( #id < 0 , -9956, 'The tag \'' self->type '->' tag_name '\' expects the id to be a positive number.' );
				self->'id' = #id;
			/define_tag;


			/**
			* Generic getter that will return the value of the property specified or fail if one was not
			* found.
			*
			* @access   public
			* @return   mixed Value of the property specified
			* @param    String -Property the name of the proprty to return
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.2
			* @date    	2008-03-28
			*/
			define_tag( 'find',
				-required = 'property',
				-type     = 'string',
				-copy );

				#property = self->find_property( #property );

				#property ?
					return( @self->#property );

				fail( -9956, 'The specified Property was not found.' );
			/define_tag;


			/**
			* The primary purpose of this tag is to search for a property that has a trailing underscore
			* but was requested without it. Will return the property name back if found in the properties
			* list with an underscore if specified. If not found, will return false.
			*
			* @access   public
			* @return   mixed Either the param name or false if not found.
			* @param    String -Property The name of the property to find
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.2
			* @date    	2008-03-28
			*/
			define_tag( 'find_property',
				-required = 'property',
				-type     = 'string',
				-copy );

				local(
					'_properties'       = self->properties->get(1)->keys,
					'_parentproperties' = array( 'id', 'dbtablename' ) );

				if( #_properties->find( #property ) || #_parentproperties->find( #property ) );
					#property = #property;
				else( #_properties->find( #property '_' ) );
					#property = #property '_';
				else;
					#property = false;
				/if;

				return( #property );

			/define_tag;


			/**
			* Callback member tag when calling an unknown member tag of the type. Standard get_ and set_
			* tags are handled here. Not specified in the param section, but when using a set_ member tag,
			* the first parameter supplied will be used to set the property specified by the set_ call.
			*
			* @access   public
			* @return   Boolean
			* @author 	Adam Randall [adam@xaren.net]
			* @version 	1.2
			* @date    	2008-03-28
			*/
			define_tag( '_unknownTag' );

				local(
					'_get'      = tag_name->beginswith( 'get_' ),
					'_set'      = tag_name->beginswith( 'set_' ),
					'_prop'     = null );

				// if we are calling a missing getter or setter, execute templated code here.
				if( #_get || #_set );

					// get the property after the get_ or set_ name.
					#_prop = tag_name->substring( 5, tag_name->size );

					protect;
						if( #_get );
							return( self->find( #_prop ) );
						else( params );
							self->find( #_prop ) = params->get(1);
							return( null );
						/if;
					/protect;
					
					! params && #_set && self->find_property( #_prop ) ?
						fail( -9956, 'The tag \'' self->type '->' tag_name '\' expected a parameter but none was provided.' );
						fail( -9948, 'No tag, type or constant was defined under the name ' self->type '->' tag_name '.' );

				/if;

			/define_tag;

		/define_type;

	/namespace_using;

]