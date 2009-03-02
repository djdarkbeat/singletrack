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
 * Danish language file.
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Skjul vrktjslinier",
ToolbarExpand		: "Vis vrktjslinier",

// Toolbar Items and Context Menu
Save				: "Gem",
NewPage				: "Ny side",
Preview				: "Vis eksempel",
Cut					: "Klip",
Copy				: "Kopier",
Paste				: "Indst",
PasteText			: "Indst som ikke-formateret tekst",
PasteWord			: "Indst fra Word",
Print				: "Udskriv",
SelectAll			: "Vlg alt",
RemoveFormat		: "Fjern formatering",
InsertLinkLbl		: "Hyperlink",
InsertLink			: "Indst/rediger hyperlink",
RemoveLink			: "Fjern hyperlink",
Anchor				: "Indst/rediger bogmrke",
AnchorDelete		: "Remove Anchor",	//MISSING
InsertImageLbl		: "Indst billede",
InsertImage			: "Indst/rediger billede",
InsertFlashLbl		: "Flash",
InsertFlash			: "Indst/rediger Flash",
InsertTableLbl		: "Table",
InsertTable			: "Indst/rediger tabel",
InsertLineLbl		: "Linie",
InsertLine			: "Indst vandret linie",
InsertSpecialCharLbl: "Symbol",
InsertSpecialChar	: "Indst symbol",
InsertSmileyLbl		: "Smiley",
InsertSmiley		: "Indst smiley",
About				: "Om FCKeditor",
Bold				: "Fed",
Italic				: "Kursiv",
Underline			: "Understreget",
StrikeThrough		: "Overstreget",
Subscript			: "Snket skrift",
Superscript			: "Hvet skrift",
LeftJustify			: "Venstrestillet",
CenterJustify		: "Centreret",
RightJustify		: "Hjrestillet",
BlockJustify		: "Lige margener",
DecreaseIndent		: "Formindsk indrykning",
IncreaseIndent		: "Forg indrykning",
Blockquote			: "Blockquote",	//MISSING
Undo				: "Fortryd",
Redo				: "Annuller fortryd",
NumberedListLbl		: "Talopstilling",
NumberedList		: "Indst/fjern talopstilling",
BulletedListLbl		: "Punktopstilling",
BulletedList		: "Indst/fjern punktopstilling",
ShowTableBorders	: "Vis tabelkanter",
ShowDetails			: "Vis detaljer",
Style				: "Typografi",
FontFormat			: "Formatering",
Font				: "Skrifttype",
FontSize			: "Skriftstrrelse",
TextColor			: "Tekstfarve",
BGColor				: "Baggrundsfarve",
Source				: "Kilde",
Find				: "Sg",
Replace				: "Erstat",
SpellCheck			: "Stavekontrol",
UniversalKeyboard	: "Universaltastatur",
PageBreakLbl		: "Sidskift",
PageBreak			: "Indst sideskift",

Form			: "Indst formular",
Checkbox		: "Indst afkrydsningsfelt",
RadioButton		: "Indst alternativknap",
TextField		: "Indst tekstfelt",
Textarea		: "Indst tekstboks",
HiddenField		: "Indst skjult felt",
Button			: "Indst knap",
SelectionField	: "Indst liste",
ImageButton		: "Indst billedknap",

FitWindow		: "Maksimer editor vinduet",
ShowBlocks		: "Show Blocks",	//MISSING

// Context Menu
EditLink			: "Rediger hyperlink",
CellCM				: "Celle",
RowCM				: "Rkke",
ColumnCM			: "Kolonne",
InsertRowAfter		: "Insert Row After",	//MISSING
InsertRowBefore		: "Insert Row Before",	//MISSING
DeleteRows			: "Slet rkke",
InsertColumnAfter	: "Insert Column After",	//MISSING
InsertColumnBefore	: "Insert Column Before",	//MISSING
DeleteColumns		: "Slet kolonne",
InsertCellAfter		: "Insert Cell After",	//MISSING
InsertCellBefore	: "Insert Cell Before",	//MISSING
DeleteCells			: "Slet celle",
MergeCells			: "Flet celler",
MergeRight			: "Merge Right",	//MISSING
MergeDown			: "Merge Down",	//MISSING
HorizontalSplitCell	: "Split Cell Horizontally",	//MISSING
VerticalSplitCell	: "Split Cell Vertically",	//MISSING
TableDelete			: "Slet tabel",
CellProperties		: "Egenskaber for celle",
TableProperties		: "Egenskaber for tabel",
ImageProperties		: "Egenskaber for billede",
FlashProperties		: "Egenskaber for Flash",

AnchorProp			: "Egenskaber for bogmrke",
ButtonProp			: "Egenskaber for knap",
CheckboxProp		: "Egenskaber for afkrydsningsfelt",
HiddenFieldProp		: "Egenskaber for skjult felt",
RadioButtonProp		: "Egenskaber for alternativknap",
ImageButtonProp		: "Egenskaber for billedknap",
TextFieldProp		: "Egenskaber for tekstfelt",
SelectionFieldProp	: "Egenskaber for liste",
TextareaProp		: "Egenskaber for tekstboks",
FormProp			: "Egenskaber for formular",

FontFormats			: "Normal;Formateret;Adresse;Overskrift 1;Overskrift 2;Overskrift 3;Overskrift 4;Overskrift 5;Overskrift 6;Normal (DIV)",

// Alerts and Messages
ProcessingXHTML		: "Behandler XHTML...",
Done				: "Frdig",
PasteWordConfirm	: "Den tekst du forsger at indstte ser ud til at komme fra Word.<br>Vil du rense teksten fr den indsttes?",
NotCompatiblePaste	: "Denne kommando er tilgndelig i Internet Explorer 5.5 eller senere.<br>Vil du indstte teksten uden at rense den ?",
UnknownToolbarItem	: "Ukendt vrktjslinjeobjekt \"%1\"!",
UnknownCommand		: "Ukendt kommandonavn \"%1\"!",
NotImplemented		: "Kommandoen er ikke implementeret!",
UnknownToolbarSet	: "Vrktjslinjen \"%1\" eksisterer ikke!",
NoActiveX			: "Din browsers sikkerhedsindstillinger begrnser nogle af editorens muligheder.<br>Sl \"Kr ActiveX-objekter og plug-ins\" til, ellers vil du opleve fejl og manglende muligheder.",
BrowseServerBlocked : "Browseren kunne ikke bne de ndvendige ressourcer!<br>Sl pop-up blokering fra.",
DialogBlocked		: "Dialogvinduet kunne ikke bnes!<br>Sl pop-up blokering fra.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Annuller",
DlgBtnClose			: "Luk",
DlgBtnBrowseServer	: "Gennemse...",
DlgAdvancedTag		: "Avanceret",
DlgOpOther			: "<Andet>",
DlgInfoTab			: "Generelt",
DlgAlertUrl			: "Indtast URL",

// General Dialogs Labels
DlgGenNotSet		: "<intet valgt>",
DlgGenId			: "Id",
DlgGenLangDir		: "Tekstretning",
DlgGenLangDirLtr	: "Fra venstre mod hjre (LTR)",
DlgGenLangDirRtl	: "Fra hjre mod venstre (RTL)",
DlgGenLangCode		: "Sprogkode",
DlgGenAccessKey		: "Genvejstast",
DlgGenName			: "Navn",
DlgGenTabIndex		: "Tabulator indeks",
DlgGenLongDescr		: "Udvidet beskrivelse",
DlgGenClass			: "Typografiark",
DlgGenTitle			: "Titel",
DlgGenContType		: "Indholdstype",
DlgGenLinkCharset	: "Tegnst",
DlgGenStyle			: "Typografi",

// Image Dialog
DlgImgTitle			: "Egenskaber for billede",
DlgImgInfoTab		: "Generelt",
DlgImgBtnUpload		: "Upload",
DlgImgURL			: "URL",
DlgImgUpload		: "Upload",
DlgImgAlt			: "Alternativ tekst",
DlgImgWidth			: "Bredde",
DlgImgHeight		: "Hjde",
DlgImgLockRatio		: "Ls strrelsesforhold",
DlgBtnResetSize		: "Nulstil strrelse",
DlgImgBorder		: "Ramme",
DlgImgHSpace		: "HMargen",
DlgImgVSpace		: "VMargen",
DlgImgAlign			: "Justering",
DlgImgAlignLeft		: "Venstre",
DlgImgAlignAbsBottom: "Absolut nederst",
DlgImgAlignAbsMiddle: "Absolut centreret",
DlgImgAlignBaseline	: "Grundlinje",
DlgImgAlignBottom	: "Nederst",
DlgImgAlignMiddle	: "Centreret",
DlgImgAlignRight	: "Hjre",
DlgImgAlignTextTop	: "Toppen af teksten",
DlgImgAlignTop		: "verst",
DlgImgPreview		: "Vis eksempel",
DlgImgAlertUrl		: "Indtast stien til billedet",
DlgImgLinkTab		: "Hyperlink",

// Flash Dialog
DlgFlashTitle		: "Egenskaber for Flash",
DlgFlashChkPlay		: "Automatisk afspilning",
DlgFlashChkLoop		: "Gentagelse",
DlgFlashChkMenu		: "Vis Flash menu",
DlgFlashScale		: "Skalr",
DlgFlashScaleAll	: "Vis alt",
DlgFlashScaleNoBorder	: "Ingen ramme",
DlgFlashScaleFit	: "Tilpas strrelse",

// Link Dialog
DlgLnkWindowTitle	: "Egenskaber for hyperlink",
DlgLnkInfoTab		: "Generelt",
DlgLnkTargetTab		: "Ml",

DlgLnkType			: "Hyperlink type",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Bogmrke p denne side",
DlgLnkTypeEMail		: "E-mail",
DlgLnkProto			: "Protokol",
DlgLnkProtoOther	: "<anden>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Vlg et anker",
DlgLnkAnchorByName	: "Efter anker navn",
DlgLnkAnchorById	: "Efter element Id",
DlgLnkNoAnchors		: "(Ingen bogmrker dokumentet)",
DlgLnkEMail			: "E-mailadresse",
DlgLnkEMailSubject	: "Emne",
DlgLnkEMailBody		: "Brdtekst",
DlgLnkUpload		: "Upload",
DlgLnkBtnUpload		: "Upload",

DlgLnkTarget		: "Ml",
DlgLnkTargetFrame	: "<ramme>",
DlgLnkTargetPopup	: "<popup vindue>",
DlgLnkTargetBlank	: "Nyt vindue (_blank)",
DlgLnkTargetParent	: "Overordnet ramme (_parent)",
DlgLnkTargetSelf	: "Samme vindue (_self)",
DlgLnkTargetTop		: "Hele vinduet (_top)",
DlgLnkTargetFrameName	: "Destinationsvinduets navn",
DlgLnkPopWinName	: "Pop-up vinduets navn",
DlgLnkPopWinFeat	: "Egenskaber for pop-up",
DlgLnkPopResize		: "Skalering",
DlgLnkPopLocation	: "Adresselinje",
DlgLnkPopMenu		: "Menulinje",
DlgLnkPopScroll		: "Scrollbars",
DlgLnkPopStatus		: "Statuslinje",
DlgLnkPopToolbar	: "Vrktjslinje",
DlgLnkPopFullScrn	: "Fuld skrm (IE)",
DlgLnkPopDependent	: "Koblet/dependent (Netscape)",
DlgLnkPopWidth		: "Bredde",
DlgLnkPopHeight		: "Hjde",
DlgLnkPopLeft		: "Position fra venstre",
DlgLnkPopTop		: "Position fra toppen",

DlnLnkMsgNoUrl		: "Indtast hyperlink URL!",
DlnLnkMsgNoEMail	: "Indtast e-mailaddresse!",
DlnLnkMsgNoAnchor	: "Vlg bogmrke!",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "Vlg farve",
DlgColorBtnClear	: "Nulstil",
DlgColorHighlight	: "Markeret",
DlgColorSelected	: "Valgt",

// Smiley Dialog
DlgSmileyTitle		: "Vlg smiley",

// Special Character Dialog
DlgSpecialCharTitle	: "Vlg symbol",

// Table Dialog
DlgTableTitle		: "Egenskaber for tabel",
DlgTableRows		: "Rkker",
DlgTableColumns		: "Kolonner",
DlgTableBorder		: "Rammebredde",
DlgTableAlign		: "Justering",
DlgTableAlignNotSet	: "<intet valgt>",
DlgTableAlignLeft	: "Venstrestillet",
DlgTableAlignCenter	: "Centreret",
DlgTableAlignRight	: "Hjrestillet",
DlgTableWidth		: "Bredde",
DlgTableWidthPx		: "pixels",
DlgTableWidthPc		: "procent",
DlgTableHeight		: "Hjde",
DlgTableCellSpace	: "Celleafstand",
DlgTableCellPad		: "Cellemargen",
DlgTableCaption		: "Titel",
DlgTableSummary		: "Resume",

// Table Cell Dialog
DlgCellTitle		: "Egenskaber for celle",
DlgCellWidth		: "Bredde",
DlgCellWidthPx		: "pixels",
DlgCellWidthPc		: "procent",
DlgCellHeight		: "Hjde",
DlgCellWordWrap		: "Orddeling",
DlgCellWordWrapNotSet	: "<intet valgt>",
DlgCellWordWrapYes	: "Ja",
DlgCellWordWrapNo	: "Nej",
DlgCellHorAlign		: "Vandret justering",
DlgCellHorAlignNotSet	: "<intet valgt>",
DlgCellHorAlignLeft	: "Venstrestillet",
DlgCellHorAlignCenter	: "Centreret",
DlgCellHorAlignRight: "Hjrestillet",
DlgCellVerAlign		: "Lodret justering",
DlgCellVerAlignNotSet	: "<intet valgt>",
DlgCellVerAlignTop	: "verst",
DlgCellVerAlignMiddle	: "Centreret",
DlgCellVerAlignBottom	: "Nederst",
DlgCellVerAlignBaseline	: "Grundlinje",
DlgCellRowSpan		: "Hjde i antal rkker",
DlgCellCollSpan		: "Bredde i antal kolonner",
DlgCellBackColor	: "Baggrundsfarve",
DlgCellBorderColor	: "Rammefarve",
DlgCellBtnSelect	: "Vlg...",

// Find and Replace Dialog
DlgFindAndReplaceTitle	: "Find and Replace",	//MISSING

// Find Dialog
DlgFindTitle		: "Find",
DlgFindFindBtn		: "Find",
DlgFindNotFoundMsg	: "Sgeteksten blev ikke fundet!",

// Replace Dialog
DlgReplaceTitle			: "Erstat",
DlgReplaceFindLbl		: "Sg efter:",
DlgReplaceReplaceLbl	: "Erstat med:",
DlgReplaceCaseChk		: "Forskel p store og sm bogstaver",
DlgReplaceReplaceBtn	: "Erstat",
DlgReplaceReplAllBtn	: "Erstat alle",
DlgReplaceWordChk		: "Kun hele ord",

// Paste Operations / Dialog
PasteErrorCut	: "Din browsers sikkerhedsindstillinger tillader ikke editoren at klippe tekst automatisk!<br>Brug i stedet tastaturet til at klippe teksten (Ctrl+X).",
PasteErrorCopy	: "Din browsers sikkerhedsindstillinger tillader ikke editoren at kopiere tekst automatisk!<br>Brug i stedet tastaturet til at kopiere teksten (Ctrl+C).",

PasteAsText		: "Indst som ikke-formateret tekst",
PasteFromWord	: "Indst fra Word",

DlgPasteMsg2	: "Indst i feltet herunder (<STRONG>Ctrl+V</STRONG>) og klik <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignorer font definitioner",
DlgPasteRemoveStyles	: "Ignorer typografi",

// Color Picker
ColorAutomatic	: "Automatisk",
ColorMoreColors	: "Flere farver...",

// Document Properties
DocProps		: "Egenskaber for dokument",

// Anchor Dialog
DlgAnchorTitle		: "Egenskaber for bogmrke",
DlgAnchorName		: "Bogmrke navn",
DlgAnchorErrorName	: "Indtast bogmrke navn!",

// Speller Pages Dialog
DlgSpellNotInDic		: "Ikke i ordbogen",
DlgSpellChangeTo		: "Forslag",
DlgSpellBtnIgnore		: "Ignorer",
DlgSpellBtnIgnoreAll	: "Ignorer alle",
DlgSpellBtnReplace		: "Erstat",
DlgSpellBtnReplaceAll	: "Erstat alle",
DlgSpellBtnUndo			: "Tilbage",
DlgSpellNoSuggestions	: "- ingen forslag -",
DlgSpellProgress		: "Stavekontrolen arbejder...",
DlgSpellNoMispell		: "Stavekontrol frdig: Ingen fejl fundet",
DlgSpellNoChanges		: "Stavekontrol frdig: Ingen ord ndret",
DlgSpellOneChange		: "Stavekontrol frdig: Et ord ndret",
DlgSpellManyChanges		: "Stavekontrol frdig: %1 ord ndret",

IeSpellDownload			: "Stavekontrol ikke installeret.<br>Vil du hente den nu?",

// Button Dialog
DlgButtonText		: "Tekst",
DlgButtonType		: "Type",
DlgButtonTypeBtn	: "Button",	//MISSING
DlgButtonTypeSbm	: "Submit",	//MISSING
DlgButtonTypeRst	: "Reset",	//MISSING

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Navn",
DlgCheckboxValue	: "Vrdi",
DlgCheckboxSelected	: "Valgt",

// Form Dialog
DlgFormName		: "Navn",
DlgFormAction	: "Handling",
DlgFormMethod	: "Metod",

// Select Field Dialog
DlgSelectName		: "Navn",
DlgSelectValue		: "Vrdi",
DlgSelectSize		: "Strrelse",
DlgSelectLines		: "linier",
DlgSelectChkMulti	: "Tillad flere valg",
DlgSelectOpAvail	: "Valgmuligheder",
DlgSelectOpText		: "Tekst",
DlgSelectOpValue	: "Vrdi",
DlgSelectBtnAdd		: "Tilfj",
DlgSelectBtnModify	: "Rediger",
DlgSelectBtnUp		: "Op",
DlgSelectBtnDown	: "Ned",
DlgSelectBtnSetValue : "St som valgt",
DlgSelectBtnDelete	: "Slet",

// Textarea Dialog
DlgTextareaName	: "Navn",
DlgTextareaCols	: "Kolonner",
DlgTextareaRows	: "Rkker",

// Text Field Dialog
DlgTextName			: "Navn",
DlgTextValue		: "Vrdi",
DlgTextCharWidth	: "Bredde (tegn)",
DlgTextMaxChars		: "Max antal tegn",
DlgTextType			: "Type",
DlgTextTypeText		: "Tekst",
DlgTextTypePass		: "Adgangskode",

// Hidden Field Dialog
DlgHiddenName	: "Navn",
DlgHiddenValue	: "Vrdi",

// Bulleted List Dialog
BulletedListProp	: "Egenskaber for punktopstilling",
NumberedListProp	: "Egenskaber for talopstilling",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "Type",
DlgLstTypeCircle	: "Cirkel",
DlgLstTypeDisc		: "Udfyldt cirkel",
DlgLstTypeSquare	: "Firkant",
DlgLstTypeNumbers	: "Nummereret (1, 2, 3)",
DlgLstTypeLCase		: "Sm bogstaver (a, b, c)",
DlgLstTypeUCase		: "Store bogstaver (A, B, C)",
DlgLstTypeSRoman	: "Sm romertal (i, ii, iii)",
DlgLstTypeLRoman	: "Store romertal (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Generelt",
DlgDocBackTab		: "Baggrund",
DlgDocColorsTab		: "Farver og margen",
DlgDocMetaTab		: "Metadata",

DlgDocPageTitle		: "Sidetitel",
DlgDocLangDir		: "Sprog",
DlgDocLangDirLTR	: "Fra venstre mod hjre (LTR)",
DlgDocLangDirRTL	: "Fra hjre mod venstre (RTL)",
DlgDocLangCode		: "Landekode",
DlgDocCharSet		: "Tegnst kode",
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "Anden tegnst kode",

DlgDocDocType		: "Dokumenttype kategori",
DlgDocDocTypeOther	: "Anden dokumenttype kategori",
DlgDocIncXHTML		: "Inkludere XHTML deklartion",
DlgDocBgColor		: "Baggrundsfarve",
DlgDocBgImage		: "Baggrundsbillede URL",
DlgDocBgNoScroll	: "Fastlst baggrund",
DlgDocCText			: "Tekst",
DlgDocCLink			: "Hyperlink",
DlgDocCVisited		: "Besgt hyperlink",
DlgDocCActive		: "Aktivt hyperlink",
DlgDocMargins		: "Sidemargen",
DlgDocMaTop			: "verst",
DlgDocMaLeft		: "Venstre",
DlgDocMaRight		: "Hjre",
DlgDocMaBottom		: "Nederst",
DlgDocMeIndex		: "Dokument index ngleord (kommasepareret)",
DlgDocMeDescr		: "Dokument beskrivelse",
DlgDocMeAuthor		: "Forfatter",
DlgDocMeCopy		: "Copyright",
DlgDocPreview		: "Vis",

// Templates Dialog
Templates			: "Skabeloner",
DlgTemplatesTitle	: "Indholdsskabeloner",
DlgTemplatesSelMsg	: "Vlg den skabelon, som skal bnes i editoren.<br>(Nuvrende indhold vil blive overskrevet!):",
DlgTemplatesLoading	: "Henter liste over skabeloner...",
DlgTemplatesNoTpl	: "(Der er ikke defineret nogen skabelon!)",
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "Om",
DlgAboutBrowserInfoTab	: "Generelt",
DlgAboutLicenseTab	: "Licens",
DlgAboutVersion		: "version",
DlgAboutInfo		: "For yderlig information g til"
};
