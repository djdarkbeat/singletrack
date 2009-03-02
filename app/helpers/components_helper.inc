<?LassoScript
		iterate: (file_listdirectory:'/components/inSite/'), local('file');
		local('include_file'=#file->split('.')->(get(1)));		
			$STK_Components->Insert(#include_file);
			//if: (lasso_tagexists: #include_file);
				include('/components/inSite/' #include_file '.inc');
		//	#include_file;	'no';'<br />';
				//else;
		//#include_file;	'yes';'<br />';
			///if;
		/iterate;
		
			
?>