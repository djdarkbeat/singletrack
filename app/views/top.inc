<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Yes</title>
	<script src="/public/javascripts/jquery-latest.pack.js" type="text/javascript" charset="utf-8"></script>
	<script src="/public/javascripts/thickbox.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript"><!-- 
		$(document).ready(function(){			
			$("a.expose").click(function () {
				$("p.hideme").slideToggle("slow");
			});
			$("a.expose2").click(function () {
				$("p.hideme2").slideToggle("slow");
			});
		});
		-->
		</script>
	<link rel="stylesheet" type="text/css" href="/public/stylesheets/reset.css" />
	<link rel="stylesheet" type="text/css" href="/public/stylesheets/text.css" />
	<link rel="stylesheet" type="text/css" href="/public/stylesheets/960.css" />
	<link rel="stylesheet" type="text/css" href="/public/stylesheets/design.css" />
	<link rel="stylesheet" type="text/css" href="/public/stylesheets/thickbox.css" />	
</head> 

<body>

<div class="container_16">
	<h2>
		16 Column Grid
	</h2>
	<div class="clear">&nbsp;</div>
	<div class="grid_5">
[var('cattable_resources'='resources',);	
encode_smart:(ul_taxonomy: -recurse=5, -css_id='calendar')]	
	</div>
	<!-- end .grid_4 -->
	<div class="grid_11">
		[encode_smart:(var('body'))]
	</div>
	<div class="clear">&nbsp;</div>	
	<!-- end .grid_4 -->
	<div class="grid_16">
[include:'/app/views/partials/debug.inc']
	</div>
</div>