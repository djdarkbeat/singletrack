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
 * This file define the HTML entities handled by the editor.
 */

var FCKXHtmlEntities = new Object() ;

FCKXHtmlEntities.Initialize = function()
{
	if ( FCKXHtmlEntities.Entities )
		return ;

	var sChars = '' ;
	var oEntities, e ;

	if ( FCKConfig.ProcessHTMLEntities )
	{
		FCKXHtmlEntities.Entities = {
			// Latin-1 Entities
			'':'nbsp',
			'':'iexcl',
			'':'cent',
			'':'pound',
			'':'curren',
			'':'yen',
			'':'brvbar',
			'':'sect',
			'':'uml',
			'':'copy',
			'':'ordf',
			'':'laquo',
			'':'not',
			'':'shy',
			'':'reg',
			'':'macr',
			'':'deg',
			'':'plusmn',
			'':'sup2',
			'':'sup3',
			'':'acute',
			'':'micro',
			'':'para',
			'':'middot',
			'':'cedil',
			'':'sup1',
			'':'ordm',
			'':'raquo',
			'':'frac14',
			'':'frac12',
			'':'frac34',
			'':'iquest',
			'':'times',
			'':'divide',

			// Symbols

			'':'fnof',
			'':'bull',
			'':'hellip',
			'':'prime',
			'':'Prime',
			'':'oline',
			'':'frasl',
			'':'weierp',
			'':'image',
			'':'real',
			'':'trade',
			'':'alefsym',
			'':'larr',
			'':'uarr',
			'':'rarr',
			'':'darr',
			'':'harr',
			'':'crarr',
			'':'lArr',
			'':'uArr',
			'':'rArr',
			'':'dArr',
			'':'hArr',
			'':'forall',
			'':'part',
			'':'exist',
			'':'empty',
			'':'nabla',
			'':'isin',
			'':'notin',
			'':'ni',
			'':'prod',
			'':'sum',
			'':'minus',
			'':'lowast',
			'':'radic',
			'':'prop',
			'':'infin',
			'':'ang',
			'':'and',
			'':'or',
			'':'cap',
			'':'cup',
			'':'int',
			'':'there4',
			'':'sim',
			'':'cong',
			'':'asymp',
			'':'ne',
			'':'equiv',
			'':'le',
			'':'ge',
			'':'sub',
			'':'sup',
			'':'nsub',
			'':'sube',
			'':'supe',
			'':'oplus',
			'':'otimes',
			'':'perp',
			'':'sdot',
			'':'loz',
			'':'spades',
			'':'clubs',
			'':'hearts',
			'':'diams',

			// Other Special Characters

			'"':'quot',
		//	'&':'amp',		// This entity is automatically handled by the XHTML parser.
		//	'<':'lt',		// This entity is automatically handled by the XHTML parser.
		//	'>':'gt',		// This entity is automatically handled by the XHTML parser.
			'':'circ',
			'':'tilde',
			'':'ensp',
			'':'emsp',
			'':'thinsp',
			'':'zwnj',
			'':'zwj',
			'':'lrm',
			'':'rlm',
			'':'ndash',
			'':'mdash',
			'':'lsquo',
			'':'rsquo',
			'':'sbquo',
			'':'ldquo',
			'':'rdquo',
			'':'bdquo',
			'':'dagger',
			'':'Dagger',
			'':'permil',
			'':'lsaquo',
			'':'rsaquo',
			'':'euro'
		} ;

		// Process Base Entities.
		for ( e in FCKXHtmlEntities.Entities )
			sChars += e ;

		// Include Latin Letters Entities.
		if ( FCKConfig.IncludeLatinEntities )
		{
			oEntities = {
				'':'Agrave',
				'':'Aacute',
				'':'Acirc',
				'':'Atilde',
				'':'Auml',
				'':'Aring',
				'':'AElig',
				'':'Ccedil',
				'':'Egrave',
				'':'Eacute',
				'':'Ecirc',
				'':'Euml',
				'':'Igrave',
				'':'Iacute',
				'':'Icirc',
				'':'Iuml',
				'':'ETH',
				'':'Ntilde',
				'':'Ograve',
				'':'Oacute',
				'':'Ocirc',
				'':'Otilde',
				'':'Ouml',
				'':'Oslash',
				'':'Ugrave',
				'':'Uacute',
				'':'Ucirc',
				'':'Uuml',
				'':'Yacute',
				'':'THORN',
				'':'szlig',
				'':'agrave',
				'':'aacute',
				'':'acirc',
				'':'atilde',
				'':'auml',
				'':'aring',
				'':'aelig',
				'':'ccedil',
				'':'egrave',
				'':'eacute',
				'':'ecirc',
				'':'euml',
				'':'igrave',
				'':'iacute',
				'':'icirc',
				'':'iuml',
				'':'eth',
				'':'ntilde',
				'':'ograve',
				'':'oacute',
				'':'ocirc',
				'':'otilde',
				'':'ouml',
				'':'oslash',
				'':'ugrave',
				'':'uacute',
				'':'ucirc',
				'':'uuml',
				'':'yacute',
				'':'thorn',
				'':'yuml',
				'':'OElig',
				'':'oelig',
				'':'Scaron',
				'':'scaron',
				'':'Yuml'
			} ;

			for ( e in oEntities )
			{
				FCKXHtmlEntities.Entities[ e ] = oEntities[ e ] ;
				sChars += e ;
			}

			oEntities = null ;
		}

		// Include Greek Letters Entities.
		if ( FCKConfig.IncludeGreekEntities )
		{
			oEntities = {
				'':'Alpha',
				'':'Beta',
				'':'Gamma',
				'':'Delta',
				'':'Epsilon',
				'':'Zeta',
				'':'Eta',
				'':'Theta',
				'':'Iota',
				'':'Kappa',
				'':'Lambda',
				'':'Mu',
				'':'Nu',
				'':'Xi',
				'':'Omicron',
				'':'Pi',
				'':'Rho',
				'':'Sigma',
				'':'Tau',
				'':'Upsilon',
				'':'Phi',
				'':'Chi',
				'':'Psi',
				'':'Omega',
				'':'alpha',
				'':'beta',
				'':'gamma',
				'':'delta',
				'':'epsilon',
				'':'zeta',
				'':'eta',
				'':'theta',
				'':'iota',
				'':'kappa',
				'':'lambda',
				'':'mu',
				'':'nu',
				'':'xi',
				'':'omicron',
				'':'pi',
				'':'rho',
				'':'sigmaf',
				'':'sigma',
				'':'tau',
				'':'upsilon',
				'':'phi',
				'':'chi',
				'':'psi',
				'':'omega'
			} ;

			for ( e in oEntities )
			{
				FCKXHtmlEntities.Entities[ e ] = oEntities[ e ] ;
				sChars += e ;
			}

			oEntities = null ;
		}
	}
	else
	{
		FCKXHtmlEntities.Entities = {} ;

		// Even if we are not processing the entities, we must render the &nbsp;
		// correctly. As we don't want HTML entities, let's use its numeric
		// representation (&#160).
		sChars = '' ;
	}

	// Create the Regex used to find entities in the text.
	var sRegexPattern = '[' + sChars + ']' ;

	if ( FCKConfig.ProcessNumericEntities )
		sRegexPattern = '[^ -~]|' + sRegexPattern ;

	var sAdditional = FCKConfig.AdditionalNumericEntities ;

	if ( sAdditional && sAdditional.length > 0 )
		sRegexPattern += '|' + FCKConfig.AdditionalNumericEntities ;

	FCKXHtmlEntities.EntitiesRegex = new RegExp( sRegexPattern, 'g' ) ;
}