﻿[//lasso
/*
 * FCKeditor - The text editor for Internet - http://www.fckeditor.net
 * Copyright (C) 2003-2007 Frederico Caldeira Knabben
 *
 * == BEGIN LICENSE ==
 *
 * Licensed under the terms of any of the following licenses at your
 * choice:
 *
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 *
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 *
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 *
 * == END LICENSE ==
 *
 * Sample page.
 */
]
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
	<head>
	<style type="text/css">

.fck_border {
width:500px; 
border-left:1px solid #333333;
border-right:1px solid #666666;
border-top:1px solid #333333;
border-bottom:1px solid #666666;
}

	</style>
		<title>FCKeditor - Sample</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
			</head>
	<body>
		<form action="sampleposteddata.lasso" method="post" target="_blank">
	
	[//lasso
	'<div class="fck_border">';
	include('/fckeditor/fckeditor.lasso');
	var('basepath') = '/fckeditor/'; //:	response_filepath->split('_samples')->get(1);

	var('myeditor') = fck_editor(
		-instancename='monaco',
		-basepath=$basepath,
		-initialvalue='This is some <strong>sample text</strong>. You are using <a href="http://www.fckeditor.net/">FCKeditor</a>.'
	);
$myeditor->toolbarset = 'Basic';
	$myeditor->create;
	'</div>' $basepath]
			<br>
			<input type="submit" value="Submit">
		</form>
	</body>
</html>