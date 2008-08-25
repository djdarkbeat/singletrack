[
/*----------------------------------------------------------------------------

[js_timer]
Custom type to handle page timers

Author: Johan Sölve
Last Modified: Sep. 06, 2006
License: Public Domain

Description:
Create one or more page timers that shows elapsed time when the timer is 
called. 

The timer shows the elapsed time in milliseconds since it was created, or 
since it was reset. 

As default the timer is returned as a formatted string, but it can also be 
returned as an integer value or as a decimal seconds value. 

Works with Lasso 6 and later (maybe also Lasso 5).


Sample Usage:
// create a timer instance
var: 't'=js_timer;

// simulate a lengthy code run
sleep: 1234;

// output the timer as string formatted as "1 234 ms"
$t;

// simulate some more code
sleep: 200;

// output the timer as seconds (decimal value)
$t -> seconds;

// reset the timer
$t -> reset;

// simulate some more code
sleep: 321;

// output the timer as an integer value
$t -> integer;


Downloaded from tagSwap.net on Nov. 21, 2007.
Latest version available from <http://tagSwap.net/js_timer>.

----------------------------------------------------------------------------*/
		
]

[
define_type: 'js_timer', 'integer', -prototype;
	local: 'timer'=integer;
	
	define_tag: 'oncreate';
		(self->'timer') = _date_msec;
	/define_tag;
	
	define_tag: 'onconvert';
		local: 'output'=(_date_msec - (self->'timer'));
		#output ->(setformat: -groupchar=' ');
		return: #output + ' ms';
	/define_tag;
	
	define_tag: 'reset';
		(self->'timer') = _date_msec;
	/define_tag;

	define_tag: 'integer';
		return: (_date_msec - (self->'timer'));
	/define_tag;

	define_tag: 'seconds';
		return: (_date_msec - (self->'timer')) / 1000.0;
	/define_tag;

/define_type;


]