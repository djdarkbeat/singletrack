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
 * Swedish language file.
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Dlj verktygsflt",
ToolbarExpand		: "Visa verktygsflt",

// Toolbar Items and Context Menu
Save				: "Spara",
NewPage				: "Ny sida",
Preview				: "Frhandsgranska",
Cut					: "Klipp ut",
Copy				: "Kopiera",
Paste				: "Klistra in",
PasteText			: "Klistra in som text",
PasteWord			: "Klistra in frn Word",
Print				: "Skriv ut",
SelectAll			: "Markera allt",
RemoveFormat		: "Radera formatering",
InsertLinkLbl		: "Lnk",
InsertLink			: "Infoga/Redigera lnk",
RemoveLink			: "Radera lnk",
Anchor				: "Infoga/Redigera ankarlnk",
AnchorDelete		: "Remove Anchor",	//MISSING
InsertImageLbl		: "Bild",
InsertImage			: "Infoga/Redigera bild",
InsertFlashLbl		: "Flash",
InsertFlash			: "Infoga/Redigera Flash",
InsertTableLbl		: "Tabell",
InsertTable			: "Infoga/Redigera tabell",
InsertLineLbl		: "Linje",
InsertLine			: "Infoga horisontal linje",
InsertSpecialCharLbl: "Utkade tecken",
InsertSpecialChar	: "Klistra in utkat tecken",
InsertSmileyLbl		: "Smiley",
InsertSmiley		: "Infoga Smiley",
About				: "Om FCKeditor",
Bold				: "Fet",
Italic				: "Kursiv",
Underline			: "Understruken",
StrikeThrough		: "Genomstruken",
Subscript			: "Nedsnkta tecken",
Superscript			: "Upphjda tecken",
LeftJustify			: "Vnsterjustera",
CenterJustify		: "Centrera",
RightJustify		: "Hgerjustera",
BlockJustify		: "Justera till marginaler",
DecreaseIndent		: "Minska indrag",
IncreaseIndent		: "ka indrag",
Blockquote			: "Blockquote",	//MISSING
Undo				: "ngra",
Redo				: "Gr om",
NumberedListLbl		: "Numrerad lista",
NumberedList		: "Infoga/Radera numrerad lista",
BulletedListLbl		: "Punktlista",
BulletedList		: "Infoga/Radera punktlista",
ShowTableBorders	: "Visa tabellkant",
ShowDetails			: "Visa radbrytningar",
Style				: "Anpassad stil",
FontFormat			: "Teckenformat",
Font				: "Typsnitt",
FontSize			: "Storlek",
TextColor			: "Textfrg",
BGColor				: "Bakgrundsfrg",
Source				: "Klla",
Find				: "Sk",
Replace				: "Erstt",
SpellCheck			: "Stavningskontroll",
UniversalKeyboard	: "Universellt tangentbord",
PageBreakLbl		: "Sidbrytning",
PageBreak			: "Infoga sidbrytning",

Form			: "Formulr",
Checkbox		: "Kryssruta",
RadioButton		: "Alternativknapp",
TextField		: "Textflt",
Textarea		: "Textruta",
HiddenField		: "Dolt flt",
Button			: "Knapp",
SelectionField	: "Flervalslista",
ImageButton		: "Bildknapp",

FitWindow		: "Anpassa till fnstrets storlek",
ShowBlocks		: "Show Blocks",	//MISSING

// Context Menu
EditLink			: "Redigera lnk",
CellCM				: "Cell",
RowCM				: "Rad",
ColumnCM			: "Kolumn",
InsertRowAfter		: "Insert Row After",	//MISSING
InsertRowBefore		: "Insert Row Before",	//MISSING
DeleteRows			: "Radera rad",
InsertColumnAfter	: "Insert Column After",	//MISSING
InsertColumnBefore	: "Insert Column Before",	//MISSING
DeleteColumns		: "Radera kolumn",
InsertCellAfter		: "Insert Cell After",	//MISSING
InsertCellBefore	: "Insert Cell Before",	//MISSING
DeleteCells			: "Radera celler",
MergeCells			: "Sammanfoga celler",
MergeRight			: "Merge Right",	//MISSING
MergeDown			: "Merge Down",	//MISSING
HorizontalSplitCell	: "Split Cell Horizontally",	//MISSING
VerticalSplitCell	: "Split Cell Vertically",	//MISSING
TableDelete			: "Radera tabell",
CellProperties		: "Cellegenskaper",
TableProperties		: "Tabellegenskaper",
ImageProperties		: "Bildegenskaper",
FlashProperties		: "Flashegenskaper",

AnchorProp			: "Egenskaper fr ankarlnk",
ButtonProp			: "Egenskaper fr knapp",
CheckboxProp		: "Egenskaper fr kryssruta",
HiddenFieldProp		: "Egenskaper fr dolt flt",
RadioButtonProp		: "Egenskaper fr alternativknapp",
ImageButtonProp		: "Egenskaper fr bildknapp",
TextFieldProp		: "Egenskaper fr textflt",
SelectionFieldProp	: "Egenskaper fr flervalslista",
TextareaProp		: "Egenskaper fr textruta",
FormProp			: "Egenskaper fr formulr",

FontFormats			: "Normal;Formaterad;Adress;Rubrik 1;Rubrik 2;Rubrik 3;Rubrik 4;Rubrik 5;Rubrik 6;Normal (DIV)",

// Alerts and Messages
ProcessingXHTML		: "Bearbetar XHTML. Var god vnta...",
Done				: "Klar",
PasteWordConfirm	: "Texten du vill klistra in verkar vara kopierad frn Word. Vill du rensa innan du klistar in?",
NotCompatiblePaste	: "Denna tgrd r inte tillgngligt fr Internet Explorer version 5.5 eller hgre. Vill du klistra in utan att rensa?",
UnknownToolbarItem	: "Oknt verktygsflt \"%1\"",
UnknownCommand		: "Oknt kommando \"%1\"",
NotImplemented		: "Kommandot finns ej",
UnknownToolbarSet	: "Verktygsflt \"%1\" finns ej",
NoActiveX			: "Din weblsares skerhetsinstllningar kan begrnsa funktionaliteten. Du br aktivera \"Kr ActiveX kontroller och plug-ins\". Fel och avsaknad av funktioner kan annars uppst.",
BrowseServerBlocked : "Kunde Ej ppna resursfnstret. Var god och avaktivera alla popup-blockerare.",
DialogBlocked		: "Kunde Ej ppna dialogfnstret. Var god och avaktivera alla popup-blockerare.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Avbryt",
DlgBtnClose			: "Stng",
DlgBtnBrowseServer	: "Blddra p server",
DlgAdvancedTag		: "Avancerad",
DlgOpOther			: "vrigt",
DlgInfoTab			: "Information",
DlgAlertUrl			: "Var god och ange en URL",

// General Dialogs Labels
DlgGenNotSet		: "<ej angivet>",
DlgGenId			: "Id",
DlgGenLangDir		: "Sprkriktning",
DlgGenLangDirLtr	: "Vnster till Hger (VTH)",
DlgGenLangDirRtl	: "Hger till Vnster (HTV)",
DlgGenLangCode		: "Sprkkod",
DlgGenAccessKey		: "Behrighetsnyckel",
DlgGenName			: "Namn",
DlgGenTabIndex		: "Tabindex",
DlgGenLongDescr		: "URL-beskrivning",
DlgGenClass			: "Stylesheet class",
DlgGenTitle			: "Titel",
DlgGenContType		: "Innehllstyp",
DlgGenLinkCharset	: "Teckenuppstllning",
DlgGenStyle			: "Style",

// Image Dialog
DlgImgTitle			: "Bildegenskaper",
DlgImgInfoTab		: "Bildinformation",
DlgImgBtnUpload		: "Skicka till server",
DlgImgURL			: "URL",
DlgImgUpload		: "Ladda upp",
DlgImgAlt			: "Alternativ text",
DlgImgWidth			: "Bredd",
DlgImgHeight		: "Hjd",
DlgImgLockRatio		: "Ls hjd/bredd frhllanden",
DlgBtnResetSize		: "terstll storlek",
DlgImgBorder		: "Kant",
DlgImgHSpace		: "Horis. marginal",
DlgImgVSpace		: "Vert. marginal",
DlgImgAlign			: "Justering",
DlgImgAlignLeft		: "Vnster",
DlgImgAlignAbsBottom: "Absolut nederkant",
DlgImgAlignAbsMiddle: "Absolut centrering",
DlgImgAlignBaseline	: "Baslinje",
DlgImgAlignBottom	: "Nederkant",
DlgImgAlignMiddle	: "Mitten",
DlgImgAlignRight	: "Hger",
DlgImgAlignTextTop	: "Text verkant",
DlgImgAlignTop		: "verkant",
DlgImgPreview		: "Frhandsgranska",
DlgImgAlertUrl		: "Var god och ange bildens URL",
DlgImgLinkTab		: "Lnk",

// Flash Dialog
DlgFlashTitle		: "Flashegenskaper",
DlgFlashChkPlay		: "Automatisk uppspelning",
DlgFlashChkLoop		: "Upprepa/Loopa",
DlgFlashChkMenu		: "Aktivera Flashmeny",
DlgFlashScale		: "Skala",
DlgFlashScaleAll	: "Visa allt",
DlgFlashScaleNoBorder	: "Ingen ram",
DlgFlashScaleFit	: "Exakt passning",

// Link Dialog
DlgLnkWindowTitle	: "Lnk",
DlgLnkInfoTab		: "Lnkinformation",
DlgLnkTargetTab		: "Ml",

DlgLnkType			: "Lnktyp",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Ankare i sidan",
DlgLnkTypeEMail		: "E-post",
DlgLnkProto			: "Protokoll",
DlgLnkProtoOther	: "<vrigt>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Vlj ett ankare",
DlgLnkAnchorByName	: "efter ankarnamn",
DlgLnkAnchorById	: "efter objektid",
DlgLnkNoAnchors		: "(Inga ankare kunde hittas)",
DlgLnkEMail			: "E-postadress",
DlgLnkEMailSubject	: "mne",
DlgLnkEMailBody		: "Innehll",
DlgLnkUpload		: "Ladda upp",
DlgLnkBtnUpload		: "Skicka till servern",

DlgLnkTarget		: "Ml",
DlgLnkTargetFrame	: "<ram>",
DlgLnkTargetPopup	: "<popup-fnster>",
DlgLnkTargetBlank	: "Nytt fnster (_blank)",
DlgLnkTargetParent	: "Fregende Window (_parent)",
DlgLnkTargetSelf	: "Detta fnstret (_self)",
DlgLnkTargetTop		: "versta fnstret (_top)",
DlgLnkTargetFrameName	: "Mlets ramnamn",
DlgLnkPopWinName	: "Popup-fnstrets namn",
DlgLnkPopWinFeat	: "Popup-fnstrets egenskaper",
DlgLnkPopResize		: "Kan ndra storlek",
DlgLnkPopLocation	: "Adressflt",
DlgLnkPopMenu		: "Menyflt",
DlgLnkPopScroll		: "Scrolllista",
DlgLnkPopStatus		: "Statusflt",
DlgLnkPopToolbar	: "Verktygsflt",
DlgLnkPopFullScrn	: "Helskrm (endast IE)",
DlgLnkPopDependent	: "Beroende (endest Netscape)",
DlgLnkPopWidth		: "Bredd",
DlgLnkPopHeight		: "Hjd",
DlgLnkPopLeft		: "Position frn vnster",
DlgLnkPopTop		: "Position frn sidans topp",

DlnLnkMsgNoUrl		: "Var god ange lnkens URL",
DlnLnkMsgNoEMail	: "Var god ange E-postadress",
DlnLnkMsgNoAnchor	: "Var god ange ett ankare",
DlnLnkMsgInvPopName	: "Popup-rutans namn mste brja med en alfabetisk bokstav och fr inte innehlla mellanslag",

// Color Dialog
DlgColorTitle		: "Vlj frg",
DlgColorBtnClear	: "Rensa",
DlgColorHighlight	: "Markera",
DlgColorSelected	: "Vald",

// Smiley Dialog
DlgSmileyTitle		: "Infoga smiley",

// Special Character Dialog
DlgSpecialCharTitle	: "Vlj utkat tecken",

// Table Dialog
DlgTableTitle		: "Tabellegenskaper",
DlgTableRows		: "Rader",
DlgTableColumns		: "Kolumner",
DlgTableBorder		: "Kantstorlek",
DlgTableAlign		: "Justering",
DlgTableAlignNotSet	: "<ej angivet>",
DlgTableAlignLeft	: "Vnster",
DlgTableAlignCenter	: "Centrerad",
DlgTableAlignRight	: "Hger",
DlgTableWidth		: "Bredd",
DlgTableWidthPx		: "pixlar",
DlgTableWidthPc		: "procent",
DlgTableHeight		: "Hjd",
DlgTableCellSpace	: "Cellavstnd",
DlgTableCellPad		: "Cellutfyllnad",
DlgTableCaption		: "Rubrik",
DlgTableSummary		: "Sammanfattning",

// Table Cell Dialog
DlgCellTitle		: "Cellegenskaper",
DlgCellWidth		: "Bredd",
DlgCellWidthPx		: "pixlar",
DlgCellWidthPc		: "procent",
DlgCellHeight		: "Hjd",
DlgCellWordWrap		: "Automatisk radbrytning",
DlgCellWordWrapNotSet	: "<Ej angivet>",
DlgCellWordWrapYes	: "Ja",
DlgCellWordWrapNo	: "Nej",
DlgCellHorAlign		: "Horisontal justering",
DlgCellHorAlignNotSet	: "<Ej angivet>",
DlgCellHorAlignLeft	: "Vnster",
DlgCellHorAlignCenter	: "Centrerad",
DlgCellHorAlignRight: "Hger",
DlgCellVerAlign		: "Vertikal justering",
DlgCellVerAlignNotSet	: "<Ej angivet>",
DlgCellVerAlignTop	: "Topp",
DlgCellVerAlignMiddle	: "Mitten",
DlgCellVerAlignBottom	: "Nederkant",
DlgCellVerAlignBaseline	: "Underst",
DlgCellRowSpan		: "Radomfng",
DlgCellCollSpan		: "Kolumnomfng",
DlgCellBackColor	: "Bakgrundsfrg",
DlgCellBorderColor	: "Kantfrg",
DlgCellBtnSelect	: "Vlj...",

// Find and Replace Dialog
DlgFindAndReplaceTitle	: "Find and Replace",	//MISSING

// Find Dialog
DlgFindTitle		: "Sk",
DlgFindFindBtn		: "Sk",
DlgFindNotFoundMsg	: "Angiven text kunde ej hittas.",

// Replace Dialog
DlgReplaceTitle			: "Erstt",
DlgReplaceFindLbl		: "Sk efter:",
DlgReplaceReplaceLbl	: "Erstt med:",
DlgReplaceCaseChk		: "Skiftlge",
DlgReplaceReplaceBtn	: "Erstt",
DlgReplaceReplAllBtn	: "Erstt alla",
DlgReplaceWordChk		: "Inkludera hela ord",

// Paste Operations / Dialog
PasteErrorCut	: "Skerhetsinstllningar i Er weblsare tillter inte tgrden Klipp ut. Anvnd (Ctrl+X) istllet.",
PasteErrorCopy	: "Skerhetsinstllningar i Er weblsare tillter inte tgrden Kopiera. Anvnd (Ctrl+C) istllet",

PasteAsText		: "Klistra in som vanlig text",
PasteFromWord	: "Klistra in frn Word",

DlgPasteMsg2	: "Var god och klistra in Er text i rutan nedan genom att anvnda (<STRONG>Ctrl+V</STRONG>) klicka sen p <STRONG>OK</STRONG>.",
DlgPasteSec		: "P grund av din weblsares skerhetsinstllningar kan verktyget inte f tkomst till urklippsdatan. Var god och anvnd detta fnster istllet.",
DlgPasteIgnoreFont		: "Ignorera typsnittsdefinitioner",
DlgPasteRemoveStyles	: "Radera Stildefinitioner",

// Color Picker
ColorAutomatic	: "Automatisk",
ColorMoreColors	: "Fler frger...",

// Document Properties
DocProps		: "Dokumentegenskaper",

// Anchor Dialog
DlgAnchorTitle		: "Ankaregenskaper",
DlgAnchorName		: "Ankarnamn",
DlgAnchorErrorName	: "Var god ange ett ankarnamn",

// Speller Pages Dialog
DlgSpellNotInDic		: "Saknas i ordlistan",
DlgSpellChangeTo		: "ndra till",
DlgSpellBtnIgnore		: "Ignorera",
DlgSpellBtnIgnoreAll	: "Ignorera alla",
DlgSpellBtnReplace		: "Erstt",
DlgSpellBtnReplaceAll	: "Erstt alla",
DlgSpellBtnUndo			: "ngra",
DlgSpellNoSuggestions	: "- Frslag saknas -",
DlgSpellProgress		: "Stavningskontroll pgr...",
DlgSpellNoMispell		: "Stavningskontroll slutfrd: Inga stavfel ptrffades.",
DlgSpellNoChanges		: "Stavningskontroll slutfrd: Inga ord rttades.",
DlgSpellOneChange		: "Stavningskontroll slutfrd: Ett ord rttades.",
DlgSpellManyChanges		: "Stavningskontroll slutfrd: %1 ord rttades.",

IeSpellDownload			: "Stavningskontrollen r ej installerad. Vill du gra det nu?",

// Button Dialog
DlgButtonText		: "Text (Vrde)",
DlgButtonType		: "Typ",
DlgButtonTypeBtn	: "Knapp",
DlgButtonTypeSbm	: "Skicka",
DlgButtonTypeRst	: "terstll",

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Namn",
DlgCheckboxValue	: "Vrde",
DlgCheckboxSelected	: "Vald",

// Form Dialog
DlgFormName		: "Namn",
DlgFormAction	: "Funktion",
DlgFormMethod	: "Metod",

// Select Field Dialog
DlgSelectName		: "Namn",
DlgSelectValue		: "Vrde",
DlgSelectSize		: "Storlek",
DlgSelectLines		: "Linjer",
DlgSelectChkMulti	: "Tillt flerval",
DlgSelectOpAvail	: "Befintliga val",
DlgSelectOpText		: "Text",
DlgSelectOpValue	: "Vrde",
DlgSelectBtnAdd		: "Lgg till",
DlgSelectBtnModify	: "Redigera",
DlgSelectBtnUp		: "Upp",
DlgSelectBtnDown	: "Ner",
DlgSelectBtnSetValue : "Markera som valt vrde",
DlgSelectBtnDelete	: "Radera",

// Textarea Dialog
DlgTextareaName	: "Namn",
DlgTextareaCols	: "Kolumner",
DlgTextareaRows	: "Rader",

// Text Field Dialog
DlgTextName			: "Namn",
DlgTextValue		: "Vrde",
DlgTextCharWidth	: "Teckenbredd",
DlgTextMaxChars		: "Max antal tecken",
DlgTextType			: "Typ",
DlgTextTypeText		: "Text",
DlgTextTypePass		: "Lsenord",

// Hidden Field Dialog
DlgHiddenName	: "Namn",
DlgHiddenValue	: "Vrde",

// Bulleted List Dialog
BulletedListProp	: "Egenskaper fr punktlista",
NumberedListProp	: "Egenskaper fr numrerad lista",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "Typ",
DlgLstTypeCircle	: "Cirkel",
DlgLstTypeDisc		: "Punkt",
DlgLstTypeSquare	: "Ruta",
DlgLstTypeNumbers	: "Nummer (1, 2, 3)",
DlgLstTypeLCase		: "Gemener (a, b, c)",
DlgLstTypeUCase		: "Versaler (A, B, C)",
DlgLstTypeSRoman	: "Sm romerska siffror (i, ii, iii)",
DlgLstTypeLRoman	: "Stora romerska siffror (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Allmn",
DlgDocBackTab		: "Bakgrund",
DlgDocColorsTab		: "Frg och marginal",
DlgDocMetaTab		: "Metadata",

DlgDocPageTitle		: "Sidtitel",
DlgDocLangDir		: "Sprkriktning",
DlgDocLangDirLTR	: "Vnster till Hger",
DlgDocLangDirRTL	: "Hger till Vnster",
DlgDocLangCode		: "Sprkkod",
DlgDocCharSet		: "Teckenuppsttningar",
DlgDocCharSetCE		: "Central Europa",
DlgDocCharSetCT		: "Traditionell Kinesisk (Big5)",
DlgDocCharSetCR		: "Kyrillisk",
DlgDocCharSetGR		: "Grekiska",
DlgDocCharSetJP		: "Japanska",
DlgDocCharSetKR		: "Koreanska",
DlgDocCharSetTR		: "Turkiska",
DlgDocCharSetUN		: "Unicode (UTF-8)",
DlgDocCharSetWE		: "Vst Europa",
DlgDocCharSetOther	: "vriga teckenuppsttningar",

DlgDocDocType		: "Sidhuvud",
DlgDocDocTypeOther	: "vriga sidhuvuden",
DlgDocIncXHTML		: "Inkludera XHTML deklaration",
DlgDocBgColor		: "Bakgrundsfrg",
DlgDocBgImage		: "Bakgrundsbildens URL",
DlgDocBgNoScroll	: "Fast bakgrund",
DlgDocCText			: "Text",
DlgDocCLink			: "Lnk",
DlgDocCVisited		: "Beskt lnk",
DlgDocCActive		: "Aktiv lnk",
DlgDocMargins		: "Sidmarginal",
DlgDocMaTop			: "Topp",
DlgDocMaLeft		: "Vnster",
DlgDocMaRight		: "Hger",
DlgDocMaBottom		: "Botten",
DlgDocMeIndex		: "Sidans nyckelord",
DlgDocMeDescr		: "Sidans beskrivning",
DlgDocMeAuthor		: "Frfattare",
DlgDocMeCopy		: "Upphovsrtt",
DlgDocPreview		: "Frhandsgranska",

// Templates Dialog
Templates			: "Sidmallar",
DlgTemplatesTitle	: "Sidmallar",
DlgTemplatesSelMsg	: "Var god vlj en mall att anvnda med editorn<br>(allt nuvarande innehll raderas):",
DlgTemplatesLoading	: "Laddar mallar. Var god vnta...",
DlgTemplatesNoTpl	: "(Ingen mall r vald)",
DlgTemplatesReplace	: "Erstt aktuellt innehll",

// About Dialog
DlgAboutAboutTab	: "Om",
DlgAboutBrowserInfoTab	: "Weblsare",
DlgAboutLicenseTab	: "Licens",
DlgAboutVersion		: "version",
DlgAboutInfo		: "Fr mer information se"
};
