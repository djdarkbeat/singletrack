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
 * Estonian language file.
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Voldi triistariba",
ToolbarExpand		: "Laienda triistariba",

// Toolbar Items and Context Menu
Save				: "Salvesta",
NewPage				: "Uus leht",
Preview				: "Eelvaade",
Cut					: "Lika",
Copy				: "Kopeeri",
Paste				: "Kleebi",
PasteText			: "Kleebi tavalise tekstina",
PasteWord			: "Kleebi Wordist",
Print				: "Prindi",
SelectAll			: "Vali kik",
RemoveFormat		: "Eemalda vorming",
InsertLinkLbl		: "Link",
InsertLink			: "Sisesta link / Muuda linki",
RemoveLink			: "Eemalda link",
Anchor				: "Sisesta ankur / Muuda ankrut",
AnchorDelete		: "Eemalda ankur",
InsertImageLbl		: "Pilt",
InsertImage			: "Sisesta pilt / Muuda pilti",
InsertFlashLbl		: "Flash",
InsertFlash			: "Sisesta flash / Muuda flashi",
InsertTableLbl		: "Tabel",
InsertTable			: "Sisesta tabel / Muuda tabelit",
InsertLineLbl		: "Joon",
InsertLine			: "Sisesta horisontaaljoon",
InsertSpecialCharLbl: "Erimrgid",
InsertSpecialChar	: "Sisesta erimrk",
InsertSmileyLbl		: "Emotikon",
InsertSmiley		: "Sisesta emotikon",
About				: "FCKeditor teave",
Bold				: "Paks",
Italic				: "Kursiiv",
Underline			: "Allajoonitud",
StrikeThrough		: "Lbijoonitud",
Subscript			: "Allindeks",
Superscript			: "laindeks",
LeftJustify			: "Vasakjoondus",
CenterJustify		: "Keskjoondus",
RightJustify		: "Paremjoondus",
BlockJustify		: "Rpjoondus",
DecreaseIndent		: "Vhenda taanet",
IncreaseIndent		: "Suurenda taanet",
Blockquote			: "Blokktsitaat",
Undo				: "Vta tagasi",
Redo				: "Korda toimingut",
NumberedListLbl		: "Nummerdatud loetelu",
NumberedList		: "Sisesta/Eemalda nummerdatud loetelu",
BulletedListLbl		: "Punktiseeritud loetelu",
BulletedList		: "Sisesta/Eemalda punktiseeritud loetelu",
ShowTableBorders	: "Nita tabeli jooni",
ShowDetails			: "Nita ksikasju",
Style				: "Laad",
FontFormat			: "Vorming",
Font				: "Kiri",
FontSize			: "Suurus",
TextColor			: "Teksti vrv",
BGColor				: "Tausta vrv",
Source				: "Lhtekood",
Find				: "Otsi",
Replace				: "Asenda",
SpellCheck			: "Kontrolli igekirja",
UniversalKeyboard	: "Universaalne klaviatuur",
PageBreakLbl		: "Lehepiir",
PageBreak			: "Sisesta lehevahetuskoht",

Form			: "Vorm",
Checkbox		: "Mrkeruut",
RadioButton		: "Raadionupp",
TextField		: "Tekstilahter",
Textarea		: "Tekstiala",
HiddenField		: "Varjatud lahter",
Button			: "Nupp",
SelectionField	: "Valiklahter",
ImageButton		: "Piltnupp",

FitWindow		: "Maksimeeri redaktori mtmed",
ShowBlocks		: "Nita blokke",

// Context Menu
EditLink			: "Muuda linki",
CellCM				: "Lahter",
RowCM				: "Rida",
ColumnCM			: "Veerg",
InsertRowAfter		: "Sisesta rida peale",
InsertRowBefore		: "Sisesta rida enne",
DeleteRows			: "Eemalda read",
InsertColumnAfter	: "Sisesta veerg peale",
InsertColumnBefore	: "Sisesta veerg enne",
DeleteColumns		: "Eemalda veerud",
InsertCellAfter		: "Sisesta lahter peale",
InsertCellBefore	: "Sisesta lahter enne",
DeleteCells			: "Eemalda lahtrid",
MergeCells			: "henda lahtrid",
MergeRight			: "henda paremale",
MergeDown			: "henda alla",
HorizontalSplitCell	: "Poolita lahter horisontaalselt",
VerticalSplitCell	: "Poolita lahter vertikaalselt",
TableDelete			: "Kustuta tabel",
CellProperties		: "Lahtri atribuudid",
TableProperties		: "Tabeli atribuudid",
ImageProperties		: "Pildi atribuudid",
FlashProperties		: "Flash omadused",

AnchorProp			: "Ankru omadused",
ButtonProp			: "Nupu omadused",
CheckboxProp		: "Mrkeruudu omadused",
HiddenFieldProp		: "Varjatud lahtri omadused",
RadioButtonProp		: "Raadionupu omadused",
ImageButtonProp		: "Piltnupu omadused",
TextFieldProp		: "Tekstilahtri omadused",
SelectionFieldProp	: "Valiklahtri omadused",
TextareaProp		: "Tekstiala omadused",
FormProp			: "Vormi omadused",

FontFormats			: "Tavaline;Vormindatud;Aadress;Pealkiri 1;Pealkiri 2;Pealkiri 3;Pealkiri 4;Pealkiri 5;Pealkiri 6;Tavaline (DIV)",

// Alerts and Messages
ProcessingXHTML		: "Ttlen XHTML'i. Palun oota...",
Done				: "Tehtud",
PasteWordConfirm	: "Tekst, mida soovid lisada paistab prinevat Word'ist. Kas soovid seda enne kleepimist puhastada?",
NotCompatiblePaste	: "See ksk on saadaval ainult Internet Explorer versioon 5.5 vi uuema puhul. Kas soovid kleepida ilma puhastamata?",
UnknownToolbarItem	: "Tundmatu triistarea ksus \"%1\"",
UnknownCommand		: "Tundmatu ksunimi \"%1\"",
NotImplemented		: "Ksku ei tidetud",
UnknownToolbarSet	: "Triistariba \"%1\" ei eksisteeri",
NoActiveX			: "Sinu veebisirvija turvalisuse seaded vivad limiteerida mningaid tekstirdaktori kasutusvimalusi. Sa peaksid vimaldama valiku \"Run ActiveX controls and plug-ins\" oma veebisirvija seadetes. Muidu vid sa theldada vigu tekstiredaktori ts ja mrgata puuduvaid funktsioone.",
BrowseServerBlocked : "Ressursside sirvija avamine ebannestus. Vimalda pop-up akende avanemine.",
DialogBlocked		: "Ei olenud vimalik avada dialoogi akent. Vimalda pop-up akende avanemine.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Loobu",
DlgBtnClose			: "Sulge",
DlgBtnBrowseServer	: "Sirvi serverit",
DlgAdvancedTag		: "Tpsemalt",
DlgOpOther			: "<Teine>",
DlgInfoTab			: "Info",
DlgAlertUrl			: "Palun sisesta URL",

// General Dialogs Labels
DlgGenNotSet		: "<mramata>",
DlgGenId			: "Id",
DlgGenLangDir		: "Keele suund",
DlgGenLangDirLtr	: "Vasakult paremale (LTR)",
DlgGenLangDirRtl	: "Paremalt vasakule (RTL)",
DlgGenLangCode		: "Keele kood",
DlgGenAccessKey		: "Juurdepsu vti",
DlgGenName			: "Nimi",
DlgGenTabIndex		: "Tab indeks",
DlgGenLongDescr		: "Pikk kirjeldus URL",
DlgGenClass			: "Stiilistiku klassid",
DlgGenTitle			: "Juhendav tiitel",
DlgGenContType		: "Juhendava sisu tp",
DlgGenLinkCharset	: "Lingitud ressurssi mrgistik",
DlgGenStyle			: "Laad",

// Image Dialog
DlgImgTitle			: "Pildi atribuudid",
DlgImgInfoTab		: "Pildi info",
DlgImgBtnUpload		: "Saada serverissee",
DlgImgURL			: "URL",
DlgImgUpload		: "Lae les",
DlgImgAlt			: "Alternatiivne tekst",
DlgImgWidth			: "Laius",
DlgImgHeight		: "Krgus",
DlgImgLockRatio		: "Lukusta kuvasuhe",
DlgBtnResetSize		: "Lhtesta suurus",
DlgImgBorder		: "Joon",
DlgImgHSpace		: "H. vaheruum",
DlgImgVSpace		: "V. vaheruum",
DlgImgAlign			: "Joondus",
DlgImgAlignLeft		: "Vasak",
DlgImgAlignAbsBottom: "Abs alla",
DlgImgAlignAbsMiddle: "Abs keskele",
DlgImgAlignBaseline	: "Baasjoonele",
DlgImgAlignBottom	: "Alla",
DlgImgAlignMiddle	: "Keskele",
DlgImgAlignRight	: "Paremale",
DlgImgAlignTextTop	: "Tekstit les",
DlgImgAlignTop		: "les",
DlgImgPreview		: "Eelvaade",
DlgImgAlertUrl		: "Palun kirjuta pildi URL",
DlgImgLinkTab		: "Link",

// Flash Dialog
DlgFlashTitle		: "Flash omadused",
DlgFlashChkPlay		: "Automaatne start ",
DlgFlashChkLoop		: "Korduv",
DlgFlashChkMenu		: "Vimalda flash men",
DlgFlashScale		: "Mastaap",
DlgFlashScaleAll	: "Nita kike",
DlgFlashScaleNoBorder	: "rist ei ole",
DlgFlashScaleFit	: "Tpne sobivus",

// Link Dialog
DlgLnkWindowTitle	: "Link",
DlgLnkInfoTab		: "Lingi info",
DlgLnkTargetTab		: "Sihtkoht",

DlgLnkType			: "Lingi tp",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Ankur sellel lehel",
DlgLnkTypeEMail		: "E-post",
DlgLnkProto			: "Protokoll",
DlgLnkProtoOther	: "<muu>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Vali ankur",
DlgLnkAnchorByName	: "Ankru nime jrgi",
DlgLnkAnchorById	: "Elemendi id jrgi",
DlgLnkNoAnchors		: "(Selles dokumendis ei ole ankruid)",
DlgLnkEMail			: "E-posti aadress",
DlgLnkEMailSubject	: "Snumi teema",
DlgLnkEMailBody		: "Snumi tekst",
DlgLnkUpload		: "Lae les",
DlgLnkBtnUpload		: "Saada serverisse",

DlgLnkTarget		: "Sihtkoht",
DlgLnkTargetFrame	: "<raam>",
DlgLnkTargetPopup	: "<hpikaken>",
DlgLnkTargetBlank	: "Uus aken (_blank)",
DlgLnkTargetParent	: "Esivanem aken (_parent)",
DlgLnkTargetSelf	: "Sama aken (_self)",
DlgLnkTargetTop		: "Pealmine aken (_top)",
DlgLnkTargetFrameName	: "Sihtmrk raami nimi",
DlgLnkPopWinName	: "Hpikakna nimi",
DlgLnkPopWinFeat	: "Hpikakna omadused",
DlgLnkPopResize		: "Suurendatav",
DlgLnkPopLocation	: "Aadressiriba",
DlgLnkPopMenu		: "Menriba",
DlgLnkPopScroll		: "Kerimisribad",
DlgLnkPopStatus		: "Olekuriba",
DlgLnkPopToolbar	: "Triistariba",
DlgLnkPopFullScrn	: "Tisekraan (IE)",
DlgLnkPopDependent	: "Sltuv (Netscape)",
DlgLnkPopWidth		: "Laius",
DlgLnkPopHeight		: "Krgus",
DlgLnkPopLeft		: "Vasak asukoht",
DlgLnkPopTop		: "lemine asukoht",

DlnLnkMsgNoUrl		: "Palun kirjuta lingi URL",
DlnLnkMsgNoEMail	: "Palun kirjuta E-Posti aadress",
DlnLnkMsgNoAnchor	: "Palun vali ankur",
DlnLnkMsgInvPopName	: "Hpikakna nimi peab algama alfabeetilise thega ja ei tohi sisaldada thikuid",

// Color Dialog
DlgColorTitle		: "Vali vrv",
DlgColorBtnClear	: "Thjenda",
DlgColorHighlight	: "Mrgi",
DlgColorSelected	: "Valitud",

// Smiley Dialog
DlgSmileyTitle		: "Sisesta emotikon",

// Special Character Dialog
DlgSpecialCharTitle	: "Vali erimrk",

// Table Dialog
DlgTableTitle		: "Tabeli atribuudid",
DlgTableRows		: "Read",
DlgTableColumns		: "Veerud",
DlgTableBorder		: "Joone suurus",
DlgTableAlign		: "Joondus",
DlgTableAlignNotSet	: "<Mramata>",
DlgTableAlignLeft	: "Vasak",
DlgTableAlignCenter	: "Kesk",
DlgTableAlignRight	: "Parem",
DlgTableWidth		: "Laius",
DlgTableWidthPx		: "pikslit",
DlgTableWidthPc		: "protsenti",
DlgTableHeight		: "Krgus",
DlgTableCellSpace	: "Lahtri vahe",
DlgTableCellPad		: "Lahtri tidis",
DlgTableCaption		: "Tabeli tiitel",
DlgTableSummary		: "Kokkuvte",

// Table Cell Dialog
DlgCellTitle		: "Lahtri atribuudid",
DlgCellWidth		: "Laius",
DlgCellWidthPx		: "pikslit",
DlgCellWidthPc		: "protsenti",
DlgCellHeight		: "Krgus",
DlgCellWordWrap		: "Sna lekanne",
DlgCellWordWrapNotSet	: "<Mramata>",
DlgCellWordWrapYes	: "Jah",
DlgCellWordWrapNo	: "Ei",
DlgCellHorAlign		: "Horisontaaljoondus",
DlgCellHorAlignNotSet	: "<Mramata>",
DlgCellHorAlignLeft	: "Vasak",
DlgCellHorAlignCenter	: "Kesk",
DlgCellHorAlignRight: "Parem",
DlgCellVerAlign		: "Vertikaaljoondus",
DlgCellVerAlignNotSet	: "<Mramata>",
DlgCellVerAlignTop	: "les",
DlgCellVerAlignMiddle	: "Keskele",
DlgCellVerAlignBottom	: "Alla",
DlgCellVerAlignBaseline	: "Baasjoonele",
DlgCellRowSpan		: "Reaulatus",
DlgCellCollSpan		: "Veeruulatus",
DlgCellBackColor	: "Tausta vrv",
DlgCellBorderColor	: "Joone vrv",
DlgCellBtnSelect	: "Vali...",

// Find and Replace Dialog
DlgFindAndReplaceTitle	: "Otsi ja asenda",

// Find Dialog
DlgFindTitle		: "Otsi",
DlgFindFindBtn		: "Otsi",
DlgFindNotFoundMsg	: "Valitud teksti ei leitud.",

// Replace Dialog
DlgReplaceTitle			: "Asenda",
DlgReplaceFindLbl		: "Leia mida:",
DlgReplaceReplaceLbl	: "Asenda millega:",
DlgReplaceCaseChk		: "Erista suur- ja vikethti",
DlgReplaceReplaceBtn	: "Asenda",
DlgReplaceReplAllBtn	: "Asenda kik",
DlgReplaceWordChk		: "Otsi terviklike snu",

// Paste Operations / Dialog
PasteErrorCut	: "Sinu veebisirvija turvaseaded ei luba redaktoril automaatselt ligata. Palun kasutage selleks klaviatuuri klahvikombinatsiooni (Ctrl+X).",
PasteErrorCopy	: "Sinu veebisirvija turvaseaded ei luba redaktoril automaatselt kopeerida. Palun kasutage selleks klaviatuuri klahvikombinatsiooni (Ctrl+C).",

PasteAsText		: "Kleebi tavalise tekstina",
PasteFromWord	: "Kleebi Wordist",

DlgPasteMsg2	: "Palun kleebi jrgnevasse kasti kasutades klaviatuuri klahvikombinatsiooni (<STRONG>Ctrl+V</STRONG>) ja vajuta seejrel <STRONG>OK</STRONG>.",
DlgPasteSec		: "Sinu veebisirvija turvaseadete tttu, ei oma redaktor otsest ligipsu likelaua andmetele. Sa pead kleepima need uuesti siia aknasse.",
DlgPasteIgnoreFont		: "Ignoreeri kirja definitsioone",
DlgPasteRemoveStyles	: "Eemalda stiilide definitsioonid",

// Color Picker
ColorAutomatic	: "Automaatne",
ColorMoreColors	: "Rohkem vrve...",

// Document Properties
DocProps		: "Dokumendi omadused",

// Anchor Dialog
DlgAnchorTitle		: "Ankru omadused",
DlgAnchorName		: "Ankru nimi",
DlgAnchorErrorName	: "Palun sisest ankru nimi",

// Speller Pages Dialog
DlgSpellNotInDic		: "Puudub snastikust",
DlgSpellChangeTo		: "Muuda",
DlgSpellBtnIgnore		: "Ignoreeri",
DlgSpellBtnIgnoreAll	: "Ignoreeri kiki",
DlgSpellBtnReplace		: "Asenda",
DlgSpellBtnReplaceAll	: "Asenda kik",
DlgSpellBtnUndo			: "Vta tagasi",
DlgSpellNoSuggestions	: "- Soovitused puuduvad -",
DlgSpellProgress		: "Toimub igekirja kontroll...",
DlgSpellNoMispell		: "igekirja kontroll sooritatud: igekirjuvigu ei leitud",
DlgSpellNoChanges		: "igekirja kontroll sooritatud: htegi sna ei muudetud",
DlgSpellOneChange		: "igekirja kontroll sooritatud: ks sna muudeti",
DlgSpellManyChanges		: "igekirja kontroll sooritatud: %1 sna muudetud",

IeSpellDownload			: "igekirja kontrollija ei ole installeeritud. Soovid sa selle alla laadida?",

// Button Dialog
DlgButtonText		: "Tekst (vrtus)",
DlgButtonType		: "Tp",
DlgButtonTypeBtn	: "Nupp",
DlgButtonTypeSbm	: "Saada",
DlgButtonTypeRst	: "Lhtesta",

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Nimi",
DlgCheckboxValue	: "Vrtus",
DlgCheckboxSelected	: "Valitud",

// Form Dialog
DlgFormName		: "Nimi",
DlgFormAction	: "Toiming",
DlgFormMethod	: "Meetod",

// Select Field Dialog
DlgSelectName		: "Nimi",
DlgSelectValue		: "Vrtus",
DlgSelectSize		: "Suurus",
DlgSelectLines		: "ridu",
DlgSelectChkMulti	: "Vimalda mitu valikut",
DlgSelectOpAvail	: "Vimalikud valikud",
DlgSelectOpText		: "Tekst",
DlgSelectOpValue	: "Vrtus",
DlgSelectBtnAdd		: "Lisa",
DlgSelectBtnModify	: "Muuda",
DlgSelectBtnUp		: "les",
DlgSelectBtnDown	: "Alla",
DlgSelectBtnSetValue : "Sea valitud olekuna",
DlgSelectBtnDelete	: "Kustuta",

// Textarea Dialog
DlgTextareaName	: "Nimi",
DlgTextareaCols	: "Veerge",
DlgTextareaRows	: "Ridu",

// Text Field Dialog
DlgTextName			: "Nimi",
DlgTextValue		: "Vrtus",
DlgTextCharWidth	: "Laius (themrkides)",
DlgTextMaxChars		: "Maksimaalselt themrke",
DlgTextType			: "Tp",
DlgTextTypeText		: "Tekst",
DlgTextTypePass		: "Parool",

// Hidden Field Dialog
DlgHiddenName	: "Nimi",
DlgHiddenValue	: "Vrtus",

// Bulleted List Dialog
BulletedListProp	: "Tpitud loetelu omadused",
NumberedListProp	: "Nummerdatud loetelu omadused",
DlgLstStart			: "Alusta",
DlgLstType			: "Tp",
DlgLstTypeCircle	: "Ring",
DlgLstTypeDisc		: "Ketas",
DlgLstTypeSquare	: "Ruut",
DlgLstTypeNumbers	: "Numbrid (1, 2, 3)",
DlgLstTypeLCase		: "Vikethed (a, b, c)",
DlgLstTypeUCase		: "Suurthed (A, B, C)",
DlgLstTypeSRoman	: "Viksed Rooma numbrid (i, ii, iii)",
DlgLstTypeLRoman	: "Suured Rooma numbrid (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "ldine",
DlgDocBackTab		: "Taust",
DlgDocColorsTab		: "Vrvid ja veerised",
DlgDocMetaTab		: "Meta andmed",

DlgDocPageTitle		: "Leheklje tiitel",
DlgDocLangDir		: "Kirja suund",
DlgDocLangDirLTR	: "Vasakult paremale (LTR)",
DlgDocLangDirRTL	: "Paremalt vasakule (RTL)",
DlgDocLangCode		: "Keele kood",
DlgDocCharSet		: "Mrgistiku kodeering",
DlgDocCharSetCE		: "Kesk-Euroopa",
DlgDocCharSetCT		: "Hiina traditsiooniline (Big5)",
DlgDocCharSetCR		: "Kirillisa",
DlgDocCharSetGR		: "Kreeka",
DlgDocCharSetJP		: "Jaapani",
DlgDocCharSetKR		: "Korea",
DlgDocCharSetTR		: "Trgi",
DlgDocCharSetUN		: "Unicode (UTF-8)",
DlgDocCharSetWE		: "Lne-Euroopa",
DlgDocCharSetOther	: "lejnud mrgistike kodeeringud",

DlgDocDocType		: "Dokumendi tppis",
DlgDocDocTypeOther	: "Teised dokumendi tppised",
DlgDocIncXHTML		: "Arva kaasa XHTML deklaratsioonid",
DlgDocBgColor		: "Taustavrv",
DlgDocBgImage		: "Taustapildi URL",
DlgDocBgNoScroll	: "Mittekeritav tagataust",
DlgDocCText			: "Tekst",
DlgDocCLink			: "Link",
DlgDocCVisited		: "Klastatud link",
DlgDocCActive		: "Aktiivne link",
DlgDocMargins		: "Leheklje rised",
DlgDocMaTop			: "laserv",
DlgDocMaLeft		: "Vasakserv",
DlgDocMaRight		: "Paremserv",
DlgDocMaBottom		: "Alaserv",
DlgDocMeIndex		: "Dokumendi vtmesnad (eraldatud komadega)",
DlgDocMeDescr		: "Dokumendi kirjeldus",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Autoriigus",
DlgDocPreview		: "Eelvaade",

// Templates Dialog
Templates			: "abloon",
DlgTemplatesTitle	: "Sisu abloonid",
DlgTemplatesSelMsg	: "Palun vali abloon, et avada see redaktoris<br />(praegune sisu lheb kaotsi):",
DlgTemplatesLoading	: "Laen abloonide nimekirja. Palun oota...",
DlgTemplatesNoTpl	: "(htegi ablooni ei ole defineeritud)",
DlgTemplatesReplace	: "Asenda tegelik sisu",

// About Dialog
DlgAboutAboutTab	: "Teave",
DlgAboutBrowserInfoTab	: "Veebisirvija info",
DlgAboutLicenseTab	: "Litsents",
DlgAboutVersion		: "versioon",
DlgAboutInfo		: "Tpsema info saamiseks mine"
};
