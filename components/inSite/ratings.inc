<?LassoScript
	Define_Tag:'getRating',
           -Namespace='DMM_',
           -Priority='Replace',
           -Required='ArticleID', -Copy;
           
var:'summary'=0;
 	inline: $dbconn, 
		-table			='rating', 
		-inlinename		='rating_inl1',
		'ArticleID'		=#ArticleID,
		-MaxRows=All,
		-Search;
		var('rating_inl1found'=found_count);	
	/inline;

rows:	-inlinename		='rating_inl1';
var:'summary' = (math_add: $summary, integer(column('Rating')));
var:'average' = (math_div: $summary, $rating_inl1found);
/rows;
//Return:$rating_inl1found;

if: !($rating_inl1found == 0);
Return:$rating_inl1found ' votes-> ' $average ' rating!.';

else;
Return:'No votes-> 0 rating!.';

/if;


//Return:	((Field:'ProductName'));
/Define_Tag;

Define_Tag:'getRatingNumber',
           -Namespace='DMM_',
           -Priority='Replace',
           -Required='ArticleID', -Copy;
           
var:'summary'=0;
 	inline: $dbconn, 
		-table			='rating', 
		-inlinename		='rating_inl1',
		'ArticleID'		=#ArticleID,
		-MaxRows=All,
		-Search;
		var('rating_inl1found'=found_count);	
	/inline;

rows:	-inlinename		='rating_inl1';
var:'summary' = (math_add: $summary, integer(column('Rating')));
var:'average' = (math_div: $summary, $rating_inl1found);
/rows;
//Return:$rating_inl1found;
if: !($rating_inl1found == 0);
Return:$average;
else;
return: 0;
/if;

//Return:	((Field:'ProductName'));
/Define_Tag;


Define_Tag:'getRatingImages',
           -Namespace='DMM_',
           -Priority='Replace',
           -Required='Rating', -Copy,
           -Required='Position', -Copy;
           select: #position;
           	case: 1;
           		#rating < 1 ? local:'graphic'='gray_star.gif' | local:'graphic'='green_star.gif';
           	case: 2;
							#rating < 2 ? local:'graphic'='gray_star.gif' | local:'graphic'='green_star.gif';          	
           	case: 3;
           		#rating < 3 ? local:'graphic'='gray_star.gif' | local:'graphic'='green_star.gif';           	
           	case: 4;
           		#rating < 4 ? local:'graphic'='gray_star.gif' | local:'graphic'='green_star.gif';           	
           	case: 5;
           		#rating < 5 ? local:'graphic'='gray_star.gif' | local:'graphic'='green_star.gif';           	
           	case;
           /select; 
           return: #graphic;        
/Define_Tag;



?>