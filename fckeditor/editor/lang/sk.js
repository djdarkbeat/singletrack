/*
 * FCKeditor - The text editor for Internet - http://www.fckeditor.net
 * Copyright (C) 2003-2008 Frederico Caldeira Knabben
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
 * Slovak language file.
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Skry panel nstrojov",
ToolbarExpand		: "Zobrazi panel nstrojov",

// Toolbar Items and Context Menu
Save				: "Uloit",
NewPage				: "Nov strnka",
Preview				: "Nhad",
Cut					: "Vystrihn",
Copy				: "Koprova",
Paste				: "Vloi",
PasteText			: "Vloi ako ist text",
PasteWord			: "Vloi z Wordu",
Print				: "Tla",
SelectAll			: "Vybra vetko",
RemoveFormat		: "Odstrni formtovanie",
InsertLinkLbl		: "Odkaz",
InsertLink			: "Vloi/zmeni odkaz",
RemoveLink			: "Odstrni odkaz",
Anchor				: "Vloi/zmeni kotvu",
AnchorDelete		: "Remove Anchor",	//MISSING
InsertImageLbl		: "Obrzok",
InsertImage			: "Vloi/zmeni obrzok",
InsertFlashLbl		: "Flash",
InsertFlash			: "Vloi/zmeni Flash",
InsertTableLbl		: "Tabuka",
InsertTable			: "Vloi/zmeni tabuku",
InsertLineLbl		: "iara",
InsertLine			: "Vloi vodorovn iaru",
InsertSpecialCharLbl: "pecilne znaky",
InsertSpecialChar	: "Vloi pecilne znaky",
InsertSmileyLbl		: "Smajlky",
InsertSmiley		: "Vloi smajlka",
About				: "O aplikci FCKeditor",
Bold				: "Tun",
Italic				: "Kurzva",
Underline			: "Podiarknut",
StrikeThrough		: "Preiarknut",
Subscript			: "Doln index",
Superscript			: "Horn index",
LeftJustify			: "Zarovna vavo",
CenterJustify		: "Zarovna na stred",
RightJustify		: "Zarovna vpravo",
BlockJustify		: "Zarovna do bloku",
DecreaseIndent		: "Zmeni odsadenie",
IncreaseIndent		: "Zvi odsadenie",
Blockquote			: "Blockquote",	//MISSING
Undo				: "Sp",
Redo				: "Znovu",
NumberedListLbl		: "slovanie",
NumberedList		: "Vloi/odstrni slovan zoznam",
BulletedListLbl		: "Odrky",
BulletedList		: "Vloi/odstrani odrky",
ShowTableBorders	: "Zobrazi okraje tabuliek",
ShowDetails			: "Zobrazi podrobnosti",
Style				: "tl",
FontFormat			: "Formt",
Font				: "Psmo",
FontSize			: "Vekos",
TextColor			: "Farba textu",
BGColor				: "Farba pozadia",
Source				: "Zdroj",
Find				: "Hada",
Replace				: "Nahradi",
SpellCheck			: "Kontrola pravopisu",
UniversalKeyboard	: "Univerzlna klvesnica",
PageBreakLbl		: "Oddeova strnky",
PageBreak			: "Vloi oddeova strnky",

Form			: "Formulr",
Checkbox		: "Zakrtvacie polko",
RadioButton		: "Prepna",
TextField		: "Textov pole",
Textarea		: "Textov oblas",
HiddenField		: "Skryt pole",
Button			: "Tlaidlo",
SelectionField	: "Rozbaovac zoznam",
ImageButton		: "Obrzkov tlaidlo",

FitWindow		: "Maximalizova vekos okna editora",
ShowBlocks		: "Show Blocks",	//MISSING

// Context Menu
EditLink			: "Zmeni odkaz",
CellCM				: "Bunka",
RowCM				: "Riadok",
ColumnCM			: "Stpec",
InsertRowAfter		: "Insert Row After",	//MISSING
InsertRowBefore		: "Insert Row Before",	//MISSING
DeleteRows			: "Vymaza riadok",
InsertColumnAfter	: "Insert Column After",	//MISSING
InsertColumnBefore	: "Insert Column Before",	//MISSING
DeleteColumns		: "Zmaza stpec",
InsertCellAfter		: "Insert Cell After",	//MISSING
InsertCellBefore	: "Insert Cell Before",	//MISSING
DeleteCells			: "Vymaza bunky",
MergeCells			: "Zli bunky",
MergeRight			: "Merge Right",	//MISSING
MergeDown			: "Merge Down",	//MISSING
HorizontalSplitCell	: "Split Cell Horizontally",	//MISSING
VerticalSplitCell	: "Split Cell Vertically",	//MISSING
TableDelete			: "Vymaza tabuku",
CellProperties		: "Vlastnosti bunky",
TableProperties		: "Vlastnosti tabuky",
ImageProperties		: "Vlastnosti obrzku",
FlashProperties		: "Vlastnosti Flashu",

AnchorProp			: "Vlastnosti kotvy",
ButtonProp			: "Vlastnosti tlaidla",
CheckboxProp		: "Vlastnosti zakrtvacieho polka",
HiddenFieldProp		: "Vlastnosti skrytho poa",
RadioButtonProp		: "Vlastnosti prepnaa",
ImageButtonProp		: "Vlastnosti obrzkovho tlaidla",
TextFieldProp		: "Vlastnosti textovho poa",
SelectionFieldProp	: "Vlastnosti rozbaovacieho zoznamu",
TextareaProp		: "Vlastnosti textovej oblasti",
FormProp			: "Vlastnosti formulra",

FontFormats			: "Normlny;Formtovan;Adresa;Nadpis 1;Nadpis 2;Nadpis 3;Nadpis 4;Nadpis 5;Nadpis 6;Odsek (DIV)",

// Alerts and Messages
ProcessingXHTML		: "Prebieha spracovanie XHTML. akajte prosm...",
Done				: "Dokonen.",
PasteWordConfirm	: "Vyzer to tak, e vkladan text je koprovan z Wordu. Chcete ho pred vloenm vyisti?",
NotCompatiblePaste	: "Tento prkaz je dostupn len v prehliadai Internet Explorer verzie 5.5 alebo vyej. Chcete vloi text bez vyistenia?",
UnknownToolbarItem	: "Neznma poloka panela nstrojov \"%1\"",
UnknownCommand		: "Neznmy prkaz \"%1\"",
NotImplemented		: "Prkaz nie je implementovan",
UnknownToolbarSet	: "Panel nstrojov \"%1\" neexistuje",
NoActiveX			: "Bezpenostn nastavenia vho prehliadaa mu obmedzova niektor funkcie editora. Pre ich pln funknos muste zapn vobu \"Spa ActiveX moduly a zsuvn moduly\", inak sa mete stretn s chybami a nefunknosou niektorch funkci.",
BrowseServerBlocked : "Prehliada zdrojovch prvkov nebolo mon otvori. Uistite sa, e mte vypnut vetky blokovae vyskakujcich okien.",
DialogBlocked		: "Dialgov okno nebolo mon otvori. Uistite sa, e mte vypnut vetky blokovae vyskakujcich okien.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Zrui",
DlgBtnClose			: "Zavrie",
DlgBtnBrowseServer	: "Prechdza server",
DlgAdvancedTag		: "Rozren",
DlgOpOther			: "<alie>",
DlgInfoTab			: "Info",
DlgAlertUrl			: "Prosm vlote URL",

// General Dialogs Labels
DlgGenNotSet		: "<nenastaven>",
DlgGenId			: "Id",
DlgGenLangDir		: "Orientcia jazyka",
DlgGenLangDirLtr	: "Zava doprava (LTR)",
DlgGenLangDirRtl	: "Sprava doava (RTL)",
DlgGenLangCode		: "Kd jazyka",
DlgGenAccessKey		: "Prstupov k",
DlgGenName			: "Meno",
DlgGenTabIndex		: "Poradie prvku",
DlgGenLongDescr		: "Dlh popis URL",
DlgGenClass			: "Trieda tlu",
DlgGenTitle			: "Pomocn titulok",
DlgGenContType		: "Pomocn typ obsahu",
DlgGenLinkCharset	: "Priraden znakov sada",
DlgGenStyle			: "tl",

// Image Dialog
DlgImgTitle			: "Vlastnosti obrzku",
DlgImgInfoTab		: "Informcie o obrzku",
DlgImgBtnUpload		: "Odosla na server",
DlgImgURL			: "URL",
DlgImgUpload		: "Odosla",
DlgImgAlt			: "Alternatvny text",
DlgImgWidth			: "rka",
DlgImgHeight		: "Vka",
DlgImgLockRatio		: "Zmok",
DlgBtnResetSize		: "Pvodn vekos",
DlgImgBorder		: "Okraje",
DlgImgHSpace		: "H-medzera",
DlgImgVSpace		: "V-medzera",
DlgImgAlign			: "Zarovnanie",
DlgImgAlignLeft		: "Vavo",
DlgImgAlignAbsBottom: "plne dole",
DlgImgAlignAbsMiddle: "Do stredu",
DlgImgAlignBaseline	: "Na zkladu",
DlgImgAlignBottom	: "Dole",
DlgImgAlignMiddle	: "Na stred",
DlgImgAlignRight	: "Vpravo",
DlgImgAlignTextTop	: "Na horn okraj textu",
DlgImgAlignTop		: "Nahor",
DlgImgPreview		: "Nhad",
DlgImgAlertUrl		: "Zadajte prosm URL obrzku",
DlgImgLinkTab		: "Odkaz",

// Flash Dialog
DlgFlashTitle		: "Vlastnosti Flashu",
DlgFlashChkPlay		: "Automatick prehrvanie",
DlgFlashChkLoop		: "Opakovanie",
DlgFlashChkMenu		: "Povoli Flash Menu",
DlgFlashScale		: "Mierka",
DlgFlashScaleAll	: "Zobrazi mierku",
DlgFlashScaleNoBorder	: "Bez okrajov",
DlgFlashScaleFit	: "Roztiahnu na cel",

// Link Dialog
DlgLnkWindowTitle	: "Odkaz",
DlgLnkInfoTab		: "Informcie o odkaze",
DlgLnkTargetTab		: "Cie",

DlgLnkType			: "Typ odkazu",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Kotva v tejto strnke",
DlgLnkTypeEMail		: "E-Mail",
DlgLnkProto			: "Protokol",
DlgLnkProtoOther	: "<in>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Vybra kotvu",
DlgLnkAnchorByName	: "Poda mena kotvy",
DlgLnkAnchorById	: "Poda Id objektu",
DlgLnkNoAnchors		: "(V strnke nie je definovan iadna kotva)",
DlgLnkEMail			: "E-Mailov adresa",
DlgLnkEMailSubject	: "Predmet sprvy",
DlgLnkEMailBody		: "Telo sprvy",
DlgLnkUpload		: "Odosla",
DlgLnkBtnUpload		: "Odosla na server",

DlgLnkTarget		: "Cie",
DlgLnkTargetFrame	: "<rmec>",
DlgLnkTargetPopup	: "<vyskakovacie okno>",
DlgLnkTargetBlank	: "Nov okno (_blank)",
DlgLnkTargetParent	: "Rodiovsk okno (_parent)",
DlgLnkTargetSelf	: "Rovnak okno (_self)",
DlgLnkTargetTop		: "Hlavn okno (_top)",
DlgLnkTargetFrameName	: "Meno rmu ciea",
DlgLnkPopWinName	: "Nzov vyskakovacieho okna",
DlgLnkPopWinFeat	: "Vlastnosti vyskakovacieho okna",
DlgLnkPopResize		: "Meniten vekos",
DlgLnkPopLocation	: "Panel umiestnenia",
DlgLnkPopMenu		: "Panel ponuky",
DlgLnkPopScroll		: "Posuvnky",
DlgLnkPopStatus		: "Stavov riadok",
DlgLnkPopToolbar	: "Panel nstrojov",
DlgLnkPopFullScrn	: "Cel obrazovka (IE)",
DlgLnkPopDependent	: "Zvislos (Netscape)",
DlgLnkPopWidth		: "rka",
DlgLnkPopHeight		: "Vka",
DlgLnkPopLeft		: "av okraj",
DlgLnkPopTop		: "Horn okraj",

DlnLnkMsgNoUrl		: "Zadajte prosm URL odkazu",
DlnLnkMsgNoEMail	: "Zadajte prosm e-mailov adresu",
DlnLnkMsgNoAnchor	: "Vyberte prosm kotvu",
DlnLnkMsgInvPopName	: "Nzov vyskakovacieho okna sa mus zana psmenom a neme obsahova medzery",

// Color Dialog
DlgColorTitle		: "Vber farby",
DlgColorBtnClear	: "Vymaza",
DlgColorHighlight	: "Zvraznen",
DlgColorSelected	: "Vybran",

// Smiley Dialog
DlgSmileyTitle		: "Vkladanie smajlkov",

// Special Character Dialog
DlgSpecialCharTitle	: "Vber pecilneho znaku",

// Table Dialog
DlgTableTitle		: "Vlastnosti tabuky",
DlgTableRows		: "Riadky",
DlgTableColumns		: "Stpce",
DlgTableBorder		: "Ohranienie",
DlgTableAlign		: "Zarovnanie",
DlgTableAlignNotSet	: "<nenastaven>",
DlgTableAlignLeft	: "Vavo",
DlgTableAlignCenter	: "Na stred",
DlgTableAlignRight	: "Vpravo",
DlgTableWidth		: "rka",
DlgTableWidthPx		: "pixelov",
DlgTableWidthPc		: "percent",
DlgTableHeight		: "Vka",
DlgTableCellSpace	: "Vzdialenos buniek",
DlgTableCellPad		: "Odsadenie obsahu",
DlgTableCaption		: "Popis",
DlgTableSummary		: "Prehad",

// Table Cell Dialog
DlgCellTitle		: "Vlastnosti bunky",
DlgCellWidth		: "rka",
DlgCellWidthPx		: "bodov",
DlgCellWidthPc		: "percent",
DlgCellHeight		: "Vka",
DlgCellWordWrap		: "Zalamovannie",
DlgCellWordWrapNotSet	: "<nenastaven>",
DlgCellWordWrapYes	: "no",
DlgCellWordWrapNo	: "Nie",
DlgCellHorAlign		: "Vodorovn zarovnanie",
DlgCellHorAlignNotSet	: "<nenastaven>",
DlgCellHorAlignLeft	: "Vavo",
DlgCellHorAlignCenter	: "Na stred",
DlgCellHorAlignRight: "Vpravo",
DlgCellVerAlign		: "Zvisl zarovnanie",
DlgCellVerAlignNotSet	: "<nenastaven>",
DlgCellVerAlignTop	: "Nahor",
DlgCellVerAlignMiddle	: "Doprostred",
DlgCellVerAlignBottom	: "Dole",
DlgCellVerAlignBaseline	: "Na zkladu",
DlgCellRowSpan		: "Zlen riadky",
DlgCellCollSpan		: "Zlen stpce",
DlgCellBackColor	: "Farba pozadia",
DlgCellBorderColor	: "Farba ohranienia",
DlgCellBtnSelect	: "Vber...",

// Find and Replace Dialog
DlgFindAndReplaceTitle	: "Find and Replace",	//MISSING

// Find Dialog
DlgFindTitle		: "Hada",
DlgFindFindBtn		: "Hada",
DlgFindNotFoundMsg	: "Hadan text nebol njden.",

// Replace Dialog
DlgReplaceTitle			: "Nahradi",
DlgReplaceFindLbl		: "o hada:",
DlgReplaceReplaceLbl	: "m nahradi:",
DlgReplaceCaseChk		: "Rozliova mal/vek psmen",
DlgReplaceReplaceBtn	: "Nahradi",
DlgReplaceReplAllBtn	: "Nahradi vetko",
DlgReplaceWordChk		: "Len cel slov",

// Paste Operations / Dialog
PasteErrorCut	: "Bezpenostn nastavenie Vho prehliadaa nedovouj editoru spusti funkciu pre vystrihnutie zvolenho textu do schrnky. Prosm vystrihnite zvolen text do schrnky pomocou klvesnice (Ctrl+X).",
PasteErrorCopy	: "Bezpenostn nastavenie Vho prehliadaa nedovouj editoru spusti funkciu pre koprovanie zvolenho textu do schrnky. Prosm skoprujte zvolen text do schrnky pomocou klvesnice (Ctrl+C).",

PasteAsText		: "Vloi ako ist text",
PasteFromWord	: "Vloi text z Wordu",

DlgPasteMsg2	: "Prosm vlote nasledovn rmek pouitm klvesnice (<STRONG>Ctrl+V</STRONG>) a stlate <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignorova nastavenia typu psma",
DlgPasteRemoveStyles	: "Odstrni formtovanie",

// Color Picker
ColorAutomatic	: "Automaticky",
ColorMoreColors	: "Viac farieb...",

// Document Properties
DocProps		: "Vlastnosti dokumentu",

// Anchor Dialog
DlgAnchorTitle		: "Vlastnosti kotvy",
DlgAnchorName		: "Meno kotvy",
DlgAnchorErrorName	: "Zadajte prosm meno kotvy",

// Speller Pages Dialog
DlgSpellNotInDic		: "Nie je v slovnku",
DlgSpellChangeTo		: "Zmeni na",
DlgSpellBtnIgnore		: "Ignorova",
DlgSpellBtnIgnoreAll	: "Ignorova vetko",
DlgSpellBtnReplace		: "Prepsat",
DlgSpellBtnReplaceAll	: "Prepsat vetko",
DlgSpellBtnUndo			: "Sp",
DlgSpellNoSuggestions	: "- iadny nvrh -",
DlgSpellProgress		: "Prebieha kontrola pravopisu...",
DlgSpellNoMispell		: "Kontrola pravopisu dokonen: bez chb",
DlgSpellNoChanges		: "Kontrola pravopisu dokonen: iadne slov nezmenen",
DlgSpellOneChange		: "Kontrola pravopisu dokonen: zmenen jedno slovo",
DlgSpellManyChanges		: "Kontrola pravopisu dokonen: zmenench %1 slov",

IeSpellDownload			: "Kontrola pravopisu nie je naitalovan. Chcete ju hne stiahnu?",

// Button Dialog
DlgButtonText		: "Text",
DlgButtonType		: "Typ",
DlgButtonTypeBtn	: "Tlaidlo",
DlgButtonTypeSbm	: "Odosla",
DlgButtonTypeRst	: "Vymaza",

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Nzov",
DlgCheckboxValue	: "Hodnota",
DlgCheckboxSelected	: "Vybran",

// Form Dialog
DlgFormName		: "Nzov",
DlgFormAction	: "Akcie",
DlgFormMethod	: "Metda",

// Select Field Dialog
DlgSelectName		: "Nzov",
DlgSelectValue		: "Hodnota",
DlgSelectSize		: "Vekos",
DlgSelectLines		: "riadkov",
DlgSelectChkMulti	: "Povoli viacnsobn vber",
DlgSelectOpAvail	: "Dostupn monosti",
DlgSelectOpText		: "Text",
DlgSelectOpValue	: "Hodnota",
DlgSelectBtnAdd		: "Prida",
DlgSelectBtnModify	: "Zmeni",
DlgSelectBtnUp		: "Hore",
DlgSelectBtnDown	: "Dole",
DlgSelectBtnSetValue : "Nastavi ako vybran hodnotu",
DlgSelectBtnDelete	: "Zmaza",

// Textarea Dialog
DlgTextareaName	: "Nzov",
DlgTextareaCols	: "Stpce",
DlgTextareaRows	: "Riadky",

// Text Field Dialog
DlgTextName			: "Nzov",
DlgTextValue		: "Hodnota",
DlgTextCharWidth	: "rka pola (znakov)",
DlgTextMaxChars		: "Maximlny poet znakov",
DlgTextType			: "Typ",
DlgTextTypeText		: "Text",
DlgTextTypePass		: "Heslo",

// Hidden Field Dialog
DlgHiddenName	: "Nzov",
DlgHiddenValue	: "Hodnota",

// Bulleted List Dialog
BulletedListProp	: "Vlastnosti odrok",
NumberedListProp	: "Vlastnosti slovania",
DlgLstStart			: "tart",
DlgLstType			: "Typ",
DlgLstTypeCircle	: "Krok",
DlgLstTypeDisc		: "Disk",
DlgLstTypeSquare	: "tvorec",
DlgLstTypeNumbers	: "slovanie (1, 2, 3)",
DlgLstTypeLCase		: "Mal psmen (a, b, c)",
DlgLstTypeUCase		: "Vek psmen (A, B, C)",
DlgLstTypeSRoman	: "Mal rmske slice (i, ii, iii)",
DlgLstTypeLRoman	: "Vek rmske slice (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Veobecn",
DlgDocBackTab		: "Pozadie",
DlgDocColorsTab		: "Farby a okraje",
DlgDocMetaTab		: "Meta Data",

DlgDocPageTitle		: "Titulok",
DlgDocLangDir		: "Orientcie jazyka",
DlgDocLangDirLTR	: "Zava doprava (LTR)",
DlgDocLangDirRTL	: "Sprava doava (RTL)",
DlgDocLangCode		: "Kd jazyka",
DlgDocCharSet		: "Kdov strnka",
DlgDocCharSetCE		: "Stredoeurpske",
DlgDocCharSetCT		: "ntina tradin (Big5)",
DlgDocCharSetCR		: "Cyrillika",
DlgDocCharSetGR		: "Grtina",
DlgDocCharSetJP		: "Japonina",
DlgDocCharSetKR		: "Korejina",
DlgDocCharSetTR		: "Turetina",
DlgDocCharSetUN		: "Unicode (UTF-8)",
DlgDocCharSetWE		: "Zpadn eurpa",
DlgDocCharSetOther	: "In kdov strnka",

DlgDocDocType		: "Typ zhlavia dokumentu",
DlgDocDocTypeOther	: "In typ zhlavia dokumentu",
DlgDocIncXHTML		: "Obsahuje deklarcie XHTML",
DlgDocBgColor		: "Farba pozadia",
DlgDocBgImage		: "URL adresa obrzku na pozad",
DlgDocBgNoScroll	: "Fixn pozadie",
DlgDocCText			: "Text",
DlgDocCLink			: "Odkaz",
DlgDocCVisited		: "Navtven odkaz",
DlgDocCActive		: "Aktvny odkaz",
DlgDocMargins		: "Okraje strnky",
DlgDocMaTop			: "Horn",
DlgDocMaLeft		: "av",
DlgDocMaRight		: "Prav",
DlgDocMaBottom		: "Doln",
DlgDocMeIndex		: "Kov slov pre indexovanie (oddelen iarkou)",
DlgDocMeDescr		: "Popis strnky",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Autorsk prva",
DlgDocPreview		: "Nhad",

// Templates Dialog
Templates			: "ablny",
DlgTemplatesTitle	: "ablny obsahu",
DlgTemplatesSelMsg	: "Prosm vyberte ablny na otvorenie v editore<br>(sasn obsah bude straten):",
DlgTemplatesLoading	: "Nahrvam zoznam abln. akajte prosm...",
DlgTemplatesNoTpl	: "(iadne ablny nenjden)",
DlgTemplatesReplace	: "Nahradi aktulny obsah",

// About Dialog
DlgAboutAboutTab	: "O aplikci",
DlgAboutBrowserInfoTab	: "Informcie o prehliadai",
DlgAboutLicenseTab	: "Licencia",
DlgAboutVersion		: "verzia",
DlgAboutInfo		: "Viac informci zskate na"
};
