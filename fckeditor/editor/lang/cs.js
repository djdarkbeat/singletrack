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
 * Czech language file.
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Skrt panel nstroj",
ToolbarExpand		: "Zobrazit panel nstroj",

// Toolbar Items and Context Menu
Save				: "Uloit",
NewPage				: "Nov strnka",
Preview				: "Nhled",
Cut					: "Vyjmout",
Copy				: "Koprovat",
Paste				: "Vloit",
PasteText			: "Vloit jako ist text",
PasteWord			: "Vloit z Wordu",
Print				: "Tisk",
SelectAll			: "Vybrat ve",
RemoveFormat		: "Odstranit formtovn",
InsertLinkLbl		: "Odkaz",
InsertLink			: "Vloit/zmnit odkaz",
RemoveLink			: "Odstranit odkaz",
Anchor				: "Vlot/zmnit zloku",
AnchorDelete		: "Odstranit kotvu",
InsertImageLbl		: "Obrzek",
InsertImage			: "Vloit/zmnit obrzek",
InsertFlashLbl		: "Flash",
InsertFlash			: "Vloit/Upravit Flash",
InsertTableLbl		: "Tabulka",
InsertTable			: "Vloit/zmnit tabulku",
InsertLineLbl		: "Linka",
InsertLine			: "Vloit vodorovnou linku",
InsertSpecialCharLbl: "Speciln znaky",
InsertSpecialChar	: "Vloit speciln znaky",
InsertSmileyLbl		: "Smajlky",
InsertSmiley		: "Vloit smajlk",
About				: "O aplikaci FCKeditor",
Bold				: "Tun",
Italic				: "Kurzva",
Underline			: "Podtren",
StrikeThrough		: "Pekrtnut",
Subscript			: "Doln index",
Superscript			: "Horn index",
LeftJustify			: "Zarovnat vlevo",
CenterJustify		: "Zarovnat na sted",
RightJustify		: "Zarovnat vpravo",
BlockJustify		: "Zarovnat do bloku",
DecreaseIndent		: "Zmenit odsazen",
IncreaseIndent		: "Zvtit odsazen",
Blockquote			: "Citace",
Undo				: "Zpt",
Redo				: "Znovu",
NumberedListLbl		: "slovn",
NumberedList		: "Vloit/odstranit slovan seznam",
BulletedListLbl		: "Odrky",
BulletedList		: "Vloit/odstranit odrky",
ShowTableBorders	: "Zobrazit okraje tabulek",
ShowDetails			: "Zobrazit podrobnosti",
Style				: "Styl",
FontFormat			: "Formt",
Font				: "Psmo",
FontSize			: "Velikost",
TextColor			: "Barva textu",
BGColor				: "Barva pozad",
Source				: "Zdroj",
Find				: "Hledat",
Replace				: "Nahradit",
SpellCheck			: "Zkontrolovat pravopis",
UniversalKeyboard	: "Univerzln klvesnice",
PageBreakLbl		: "Konec strnky",
PageBreak			: "Vloit konec strnky",

Form			: "Formul",
Checkbox		: "Zakrtvac polko",
RadioButton		: "Pepna",
TextField		: "Textov pole",
Textarea		: "Textov oblast",
HiddenField		: "Skryt pole",
Button			: "Tlatko",
SelectionField	: "Seznam",
ImageButton		: "Obrzkov tlatko",

FitWindow		: "Maximalizovat velikost editoru",
ShowBlocks		: "Ukzat bloky",

// Context Menu
EditLink			: "Zmnit odkaz",
CellCM				: "Buka",
RowCM				: "dek",
ColumnCM			: "Sloupec",
InsertRowAfter		: "Vloit dek za",
InsertRowBefore		: "Vloit dek ped",
DeleteRows			: "Smazat dky",
InsertColumnAfter	: "Vloit sloupec za",
InsertColumnBefore	: "Vloit sloupec ped",
DeleteColumns		: "Smazat sloupec",
InsertCellAfter		: "Vloit buku za",
InsertCellBefore	: "Vloit buku ped",
DeleteCells			: "Smazat buky",
MergeCells			: "Slouit buky",
MergeRight			: "Slouit doprava",
MergeDown			: "Slouit dol",
HorizontalSplitCell	: "Rozdlit buky vodorovn",
VerticalSplitCell	: "Rozdlit buky svisle",
TableDelete			: "Smazat tabulku",
CellProperties		: "Vlastnosti buky",
TableProperties		: "Vlastnosti tabulky",
ImageProperties		: "Vlastnosti obrzku",
FlashProperties		: "Vlastnosti Flashe",

AnchorProp			: "Vlastnosti zloky",
ButtonProp			: "Vlastnosti tlatka",
CheckboxProp		: "Vlastnosti zakrtvacho polka",
HiddenFieldProp		: "Vlastnosti skrytho pole",
RadioButtonProp		: "Vlastnosti pepnae",
ImageButtonProp		: "Vlastnost obrzkovho tlatka",
TextFieldProp		: "Vlastnosti textovho pole",
SelectionFieldProp	: "Vlastnosti seznamu",
TextareaProp		: "Vlastnosti textov oblasti",
FormProp			: "Vlastnosti formule",

FontFormats			: "Normln;Naformtovno;Adresa;Nadpis 1;Nadpis 2;Nadpis 3;Nadpis 4;Nadpis 5;Nadpis 6;Normln (DIV)",

// Alerts and Messages
ProcessingXHTML		: "Probh zpracovn XHTML. Prosm ekejte...",
Done				: "Hotovo",
PasteWordConfirm	: "Jak je vidt, vkldan text je koprovn z Wordu. Chcete jej ped vloenm vyistit?",
NotCompatiblePaste	: "Tento pkaz je dostupn pouze v Internet Exploreru verze 5.5 nebo vy. Chcete vloit text bez vyitn?",
UnknownToolbarItem	: "Neznm poloka panelu nstroj \"%1\"",
UnknownCommand		: "Neznm pkaz \"%1\"",
NotImplemented		: "Pkaz nen implementovn",
UnknownToolbarSet	: "Panel nstroj \"%1\" neexistuje",
NoActiveX			: "Nastaven bezpenosti Vaeho prohlee omezuje funknost nkterch jeho monost. Je teba zapnout volbu \"Spoutt ovldac prvky ActiveX a moduly plug-in\", jinak nebude mon vyuvat vechny dosputn schopnosti editoru.",
BrowseServerBlocked : "Przkumnk zdroj nelze otevt. Provte, zda nemte aktivovno blokovn popup oken.",
DialogBlocked		: "Nelze otevt dialogov okno. Provte, zda nemte aktivovno blokovn popup oken.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Storno",
DlgBtnClose			: "Zavt",
DlgBtnBrowseServer	: "Vybrat na serveru",
DlgAdvancedTag		: "Rozen",
DlgOpOther			: "<Ostatn>",
DlgInfoTab			: "Info",
DlgAlertUrl			: "Prosm vlote URL",

// General Dialogs Labels
DlgGenNotSet		: "<nenastaveno>",
DlgGenId			: "Id",
DlgGenLangDir		: "Orientace jazyka",
DlgGenLangDirLtr	: "Zleva do prava (LTR)",
DlgGenLangDirRtl	: "Zprava do leva (RTL)",
DlgGenLangCode		: "Kd jazyka",
DlgGenAccessKey		: "Pstupov kl",
DlgGenName			: "Jmno",
DlgGenTabIndex		: "Poad prvku",
DlgGenLongDescr		: "Dlouh popis URL",
DlgGenClass			: "Tda stylu",
DlgGenTitle			: "Pomocn titulek",
DlgGenContType		: "Pomocn typ obsahu",
DlgGenLinkCharset	: "Piazen znakov sada",
DlgGenStyle			: "Styl",

// Image Dialog
DlgImgTitle			: "Vlastnosti obrzku",
DlgImgInfoTab		: "Informace o obrzku",
DlgImgBtnUpload		: "Odeslat na server",
DlgImgURL			: "URL",
DlgImgUpload		: "Odeslat",
DlgImgAlt			: "Alternativn text",
DlgImgWidth			: "ka",
DlgImgHeight		: "Vka",
DlgImgLockRatio		: "Zmek",
DlgBtnResetSize		: "Pvodn velikost",
DlgImgBorder		: "Okraje",
DlgImgHSpace		: "H-mezera",
DlgImgVSpace		: "V-mezera",
DlgImgAlign			: "Zarovnn",
DlgImgAlignLeft		: "Vlevo",
DlgImgAlignAbsBottom: "Zcela dol",
DlgImgAlignAbsMiddle: "Doprosted",
DlgImgAlignBaseline	: "Na a",
DlgImgAlignBottom	: "Dol",
DlgImgAlignMiddle	: "Na sted",
DlgImgAlignRight	: "Vpravo",
DlgImgAlignTextTop	: "Na horn okraj textu",
DlgImgAlignTop		: "Nahoru",
DlgImgPreview		: "Nhled",
DlgImgAlertUrl		: "Zadejte prosm URL obrzku",
DlgImgLinkTab		: "Odkaz",

// Flash Dialog
DlgFlashTitle		: "Vlastnosti Flashe",
DlgFlashChkPlay		: "Automatick sputn",
DlgFlashChkLoop		: "Opakovn",
DlgFlashChkMenu		: "Nabdka Flash",
DlgFlashScale		: "Zobrazit",
DlgFlashScaleAll	: "Zobrazit ve",
DlgFlashScaleNoBorder	: "Bez okraje",
DlgFlashScaleFit	: "Pizpsobit",

// Link Dialog
DlgLnkWindowTitle	: "Odkaz",
DlgLnkInfoTab		: "Informace o odkazu",
DlgLnkTargetTab		: "Cl",

DlgLnkType			: "Typ odkazu",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Kotva v tto strnce",
DlgLnkTypeEMail		: "E-Mail",
DlgLnkProto			: "Protokol",
DlgLnkProtoOther	: "<jin>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Vybrat kotvu",
DlgLnkAnchorByName	: "Podle jmna kotvy",
DlgLnkAnchorById	: "Podle Id objektu",
DlgLnkNoAnchors		: "(Ve strnce nen definovna dn kotva!)",
DlgLnkEMail			: "E-Mailov adresa",
DlgLnkEMailSubject	: "Pedmt zprvy",
DlgLnkEMailBody		: "Tlo zprvy",
DlgLnkUpload		: "Odeslat",
DlgLnkBtnUpload		: "Odeslat na Server",

DlgLnkTarget		: "Cl",
DlgLnkTargetFrame	: "<rmec>",
DlgLnkTargetPopup	: "<vyskakovac okno>",
DlgLnkTargetBlank	: "Nov okno (_blank)",
DlgLnkTargetParent	: "Rodiovsk okno (_parent)",
DlgLnkTargetSelf	: "Stejn okno (_self)",
DlgLnkTargetTop		: "Hlavn okno (_top)",
DlgLnkTargetFrameName	: "Nzev clovho rmu",
DlgLnkPopWinName	: "Nzev vyskakovacho okna",
DlgLnkPopWinFeat	: "Vlastnosti vyskakovacho okna",
DlgLnkPopResize		: "Mniteln velikost",
DlgLnkPopLocation	: "Panel umstn",
DlgLnkPopMenu		: "Panel nabdky",
DlgLnkPopScroll		: "Posuvnky",
DlgLnkPopStatus		: "Stavov dek",
DlgLnkPopToolbar	: "Panel nstroj",
DlgLnkPopFullScrn	: "Cel obrazovka (IE)",
DlgLnkPopDependent	: "Zvislost (Netscape)",
DlgLnkPopWidth		: "ka",
DlgLnkPopHeight		: "Vka",
DlgLnkPopLeft		: "Lev okraj",
DlgLnkPopTop		: "Horn okraj",

DlnLnkMsgNoUrl		: "Zadejte prosm URL odkazu",
DlnLnkMsgNoEMail	: "Zadejte prosm e-mailovou adresu",
DlnLnkMsgNoAnchor	: "Vyberte prosm kotvu",
DlnLnkMsgInvPopName	: "Nzev vyskakovacho okna mus zanat psmenem a nesm obsahovat mezery",

// Color Dialog
DlgColorTitle		: "Vbr barvy",
DlgColorBtnClear	: "Vymazat",
DlgColorHighlight	: "Zvraznn",
DlgColorSelected	: "Vybran",

// Smiley Dialog
DlgSmileyTitle		: "Vkldn smajlk",

// Special Character Dialog
DlgSpecialCharTitle	: "Vbr specilnho znaku",

// Table Dialog
DlgTableTitle		: "Vlastnosti tabulky",
DlgTableRows		: "dky",
DlgTableColumns		: "Sloupce",
DlgTableBorder		: "Ohranien",
DlgTableAlign		: "Zarovnn",
DlgTableAlignNotSet	: "<nenastaveno>",
DlgTableAlignLeft	: "Vlevo",
DlgTableAlignCenter	: "Na sted",
DlgTableAlignRight	: "Vpravo",
DlgTableWidth		: "ka",
DlgTableWidthPx		: "bod",
DlgTableWidthPc		: "procent",
DlgTableHeight		: "Vka",
DlgTableCellSpace	: "Vzdlenost bunk",
DlgTableCellPad		: "Odsazen obsahu",
DlgTableCaption		: "Popis",
DlgTableSummary		: "Souhrn",

// Table Cell Dialog
DlgCellTitle		: "Vlastnosti buky",
DlgCellWidth		: "ka",
DlgCellWidthPx		: "bod",
DlgCellWidthPc		: "procent",
DlgCellHeight		: "Vka",
DlgCellWordWrap		: "Zalamovn",
DlgCellWordWrapNotSet	: "<nenanstaveno>",
DlgCellWordWrapYes	: "Ano",
DlgCellWordWrapNo	: "Ne",
DlgCellHorAlign		: "Vodorovn zarovnn",
DlgCellHorAlignNotSet	: "<nenastaveno>",
DlgCellHorAlignLeft	: "Vlevo",
DlgCellHorAlignCenter	: "Na sted",
DlgCellHorAlignRight: "Vpravo",
DlgCellVerAlign		: "Svisl zarovnn",
DlgCellVerAlignNotSet	: "<nenastaveno>",
DlgCellVerAlignTop	: "Nahoru",
DlgCellVerAlignMiddle	: "Doprosted",
DlgCellVerAlignBottom	: "Dol",
DlgCellVerAlignBaseline	: "Na a",
DlgCellRowSpan		: "Slouen dky",
DlgCellCollSpan		: "Slouen sloupce",
DlgCellBackColor	: "Barva pozad",
DlgCellBorderColor	: "Barva ohranien",
DlgCellBtnSelect	: "Vbr...",

// Find and Replace Dialog
DlgFindAndReplaceTitle	: "Najt a nahradit",

// Find Dialog
DlgFindTitle		: "Hledat",
DlgFindFindBtn		: "Hledat",
DlgFindNotFoundMsg	: "Hledan text nebyl nalezen.",

// Replace Dialog
DlgReplaceTitle			: "Nahradit",
DlgReplaceFindLbl		: "Co hledat:",
DlgReplaceReplaceLbl	: "m nahradit:",
DlgReplaceCaseChk		: "Rozliovat velikost psma",
DlgReplaceReplaceBtn	: "Nahradit",
DlgReplaceReplAllBtn	: "Nahradit ve",
DlgReplaceWordChk		: "Pouze cel slova",

// Paste Operations / Dialog
PasteErrorCut	: "Bezpenostn nastaven Vaeho prohlee nedovoluj editoru spustit funkci pro vyjmut zvolenho textu do schrnky. Prosm vyjmte zvolen text do schrnky pomoc klvesnice (Ctrl+X).",
PasteErrorCopy	: "Bezpenostn nastaven Vaeho prohlee nedovoluj editoru spustit funkci pro koprovn zvolenho textu do schrnky. Prosm zkoprujte zvolen text do schrnky pomoc klvesnice (Ctrl+C).",

PasteAsText		: "Vloit jako ist text",
PasteFromWord	: "Vloit text z Wordu",

DlgPasteMsg2	: "Do nsledujcho pole vlote poadovan obsah pomoc klvesnice (<STRONG>Ctrl+V</STRONG>) a stisknte <STRONG>OK</STRONG>.",
DlgPasteSec		: "Z dvod nastaven bezpenosti Vaeho prohlee neme editor pistupovat pmo do schrnky. Obsah schrnky prosm vlote znovu do tohoto okna.",
DlgPasteIgnoreFont		: "Ignorovat psmo",
DlgPasteRemoveStyles	: "Odstranit styly",

// Color Picker
ColorAutomatic	: "Automaticky",
ColorMoreColors	: "Vce barev...",

// Document Properties
DocProps		: "Vlastnosti dokumentu",

// Anchor Dialog
DlgAnchorTitle		: "Vlastnosti zloky",
DlgAnchorName		: "Nzev zloky",
DlgAnchorErrorName	: "Zadejte prosm nzev zloky",

// Speller Pages Dialog
DlgSpellNotInDic		: "Nen ve slovnku",
DlgSpellChangeTo		: "Zmnit na",
DlgSpellBtnIgnore		: "Peskoit",
DlgSpellBtnIgnoreAll	: "Peskakovat ve",
DlgSpellBtnReplace		: "Zamnit",
DlgSpellBtnReplaceAll	: "Zamovat ve",
DlgSpellBtnUndo			: "Zpt",
DlgSpellNoSuggestions	: "- dn nvrhy -",
DlgSpellProgress		: "Probh kontrola pravopisu...",
DlgSpellNoMispell		: "Kontrola pravopisu dokonena: dn pravopisn chyby nenalezeny",
DlgSpellNoChanges		: "Kontrola pravopisu dokonena: Beze zmn",
DlgSpellOneChange		: "Kontrola pravopisu dokonena: Jedno slovo zmnno",
DlgSpellManyChanges		: "Kontrola pravopisu dokonena: %1 slov zmnno",

IeSpellDownload			: "Kontrola pravopisu nen nainstalovna. Chcete ji nyn sthnout?",

// Button Dialog
DlgButtonText		: "Popisek",
DlgButtonType		: "Typ",
DlgButtonTypeBtn	: "Tlatko",
DlgButtonTypeSbm	: "Odeslat",
DlgButtonTypeRst	: "Obnovit",

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Nzev",
DlgCheckboxValue	: "Hodnota",
DlgCheckboxSelected	: "Zakrtnuto",

// Form Dialog
DlgFormName		: "Nzev",
DlgFormAction	: "Akce",
DlgFormMethod	: "Metoda",

// Select Field Dialog
DlgSelectName		: "Nzev",
DlgSelectValue		: "Hodnota",
DlgSelectSize		: "Velikost",
DlgSelectLines		: "dk",
DlgSelectChkMulti	: "Povolit mnohonsobn vbry",
DlgSelectOpAvail	: "Dostupn nastaven",
DlgSelectOpText		: "Text",
DlgSelectOpValue	: "Hodnota",
DlgSelectBtnAdd		: "Pidat",
DlgSelectBtnModify	: "Zmnit",
DlgSelectBtnUp		: "Nahoru",
DlgSelectBtnDown	: "Dol",
DlgSelectBtnSetValue : "Nastavit jako vybranou hodnotu",
DlgSelectBtnDelete	: "Smazat",

// Textarea Dialog
DlgTextareaName	: "Nzev",
DlgTextareaCols	: "Sloupc",
DlgTextareaRows	: "dk",

// Text Field Dialog
DlgTextName			: "Nzev",
DlgTextValue		: "Hodnota",
DlgTextCharWidth	: "ka ve znacch",
DlgTextMaxChars		: "Maximln poet znak",
DlgTextType			: "Typ",
DlgTextTypeText		: "Text",
DlgTextTypePass		: "Heslo",

// Hidden Field Dialog
DlgHiddenName	: "Nzev",
DlgHiddenValue	: "Hodnota",

// Bulleted List Dialog
BulletedListProp	: "Vlastnosti odrek",
NumberedListProp	: "Vlastnosti slovanho seznamu",
DlgLstStart			: "Zatek",
DlgLstType			: "Typ",
DlgLstTypeCircle	: "Krunice",
DlgLstTypeDisc		: "Kruh",
DlgLstTypeSquare	: "tverec",
DlgLstTypeNumbers	: "sla (1, 2, 3)",
DlgLstTypeLCase		: "Mal psmena (a, b, c)",
DlgLstTypeUCase		: "Velk psmena (A, B, C)",
DlgLstTypeSRoman	: "Mal msk slice (i, ii, iii)",
DlgLstTypeLRoman	: "Velk msk slice (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Obecn",
DlgDocBackTab		: "Pozad",
DlgDocColorsTab		: "Barvy a okraje",
DlgDocMetaTab		: "Metadata",

DlgDocPageTitle		: "Titulek strnky",
DlgDocLangDir		: "Smr jazyku",
DlgDocLangDirLTR	: "Zleva do prava ",
DlgDocLangDirRTL	: "Zprava doleva",
DlgDocLangCode		: "Kd jazyku",
DlgDocCharSet		: "Znakov sada",
DlgDocCharSetCE		: "Stedoevropsk jazyky",
DlgDocCharSetCT		: "Tradin ntina (Big5)",
DlgDocCharSetCR		: "Cyrilice",
DlgDocCharSetGR		: "etina",
DlgDocCharSetJP		: "Japontina",
DlgDocCharSetKR		: "Korejtina",
DlgDocCharSetTR		: "Turetina",
DlgDocCharSetUN		: "Unicode (UTF-8)",
DlgDocCharSetWE		: "Zpadoevropsk jazyky",
DlgDocCharSetOther	: "Dal znakov sada",

DlgDocDocType		: "Typ dokumentu",
DlgDocDocTypeOther	: "Jin typ dokumetu",
DlgDocIncXHTML		: "Zahrnou deklarace XHTML",
DlgDocBgColor		: "Barva pozad",
DlgDocBgImage		: "URL obrzku na pozad",
DlgDocBgNoScroll	: "Nerolovateln pozad",
DlgDocCText			: "Text",
DlgDocCLink			: "Odkaz",
DlgDocCVisited		: "Navtven odkaz",
DlgDocCActive		: "Vybran odkaz",
DlgDocMargins		: "Okraje strnky",
DlgDocMaTop			: "Horn",
DlgDocMaLeft		: "Lev",
DlgDocMaRight		: "Prav",
DlgDocMaBottom		: "Doln",
DlgDocMeIndex		: "Klov slova (oddlen rkou)",
DlgDocMeDescr		: "Popis dokumentu",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Autorsk prva",
DlgDocPreview		: "Nhled",

// Templates Dialog
Templates			: "ablony",
DlgTemplatesTitle	: "ablony obsahu",
DlgTemplatesSelMsg	: "Prosm zvolte ablonu pro oteven v editoru<br>(aktuln obsah editoru bude ztracen):",
DlgTemplatesLoading	: "Nahrvm peheld ablon. Prosm ekejte...",
DlgTemplatesNoTpl	: "(Nen definovna dn ablona)",
DlgTemplatesReplace	: "Nahradit aktuln obsah",

// About Dialog
DlgAboutAboutTab	: "O aplikaci",
DlgAboutBrowserInfoTab	: "Informace o prohlei",
DlgAboutLicenseTab	: "Licence",
DlgAboutVersion		: "verze",
DlgAboutInfo		: "Vce informac zskte na"
};
