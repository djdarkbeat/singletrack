[
/*----------------------------------------------------------------------------

[unique_id]
Shorter unique ID string

Author: Johan Sölve
Last Modified: Sep. 06, 2006
License: Public Domain

Description:
Returns shortest possible (?) unique string based on current date, time, 
milliseconds and a random number. The length of the unique ID depends on the 
length of #charlist. This version use lowercase letters and numbers (a-z, 0-9) 
and the length of the unique ID becomes 11 to 13 characters. 
Making #charlist longer by including also uppercase letters (a-z, A-Z, 0-9) 
creates a slightly shorter string of 10-11 characters but will require case 
sensitive handling. By removing also the random number part, the length of the 
unique ID can be reduced to 8 characters. 

Johan Sölve 2004-11-17


Sample Usage:
[var: 'imagename' = unique_id + '.jpg']
[$imagename]

Result: dnnyunqa74z1.jpg

Downloaded from tagSwap.net on Jun. 04, 2008.
Latest version available from <http://tagSwap.net/unique_id>.

----------------------------------------------------------------------------*/
		
]

<?lassoscript
define_tag: 'unique_id';
	// returns shortest possible unique string based on current date, time, milliseconds, IP and a random number
	// Johan Sölve 2004-11-17
	
	local: 'charlist'='stu7ghi3jk4yz9ld0ef2vwx8mno5abc1pqr6',
		'date'=date, 
		'seconds'=0, 
		'output'='';
	local: 'base'=(#charlist -> size) - 1,
		'leapyear'=(date: (#date->format: '%Y-03-01 12:00:00'));
	#leapyear -> (subtract: -day=1);
	#leapyear=integer: ((#leapyear->day)==29);
	
	#seconds += ((#date->year%100) * (365 + #leapyear) + (#date -> dayofyear)) * 3600 * 24;
	#seconds += (#date->hour)*3600 + (#date->minute)*60 + (#date->second);
	#seconds *= 1000;
	#seconds += (#date -> millisecond);
	
	// add the client IP
	// local: 'ip'=(string: client_ip)->(split: '.');
	// use simulated random ip instead of real client ip to get more variation
	local: 'ip'=(array);
	loop: 2;
		#ip -> (insert: (math_random: -min=1, -max=255));
	/loop;
	
	local: 'ip_num'=0;

	iterate: #ip, (local: 'part');
		#ip_num += integer: (math_pow: 256, (#ip->size - loop_count)) * (integer: #part);
	/iterate;

	local: 'converted'=(array);
	
	while: #seconds>0;
		#converted->(insert: (#seconds % #base), 1);
		#seconds = #seconds / #base;
	/while;
	
	// add a single random char
	#converted -> insert: (math_random: -min=0, -max=#base);

	while: #ip_num>0;
		#converted->(insert: (#ip_num % #base), 1);
		#ip_num = #ip_num / #base;
	/while;

	while: #converted->size > 0;
		if: loop_count % 4 == 1;
			// try to distribute the last items as evenly as possible since they change the most
			#output += #charlist->(get: ((#converted->last) + 1));
			#converted->remove;
		/if;
		if: #converted->size > 0;
			#output += #charlist->(get: ((#converted->first) + 1));
			#converted->(remove: 1);
		/if;
	/while;

	return: #output;

/define_tag;
?>