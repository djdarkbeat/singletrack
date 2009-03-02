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
 * German language file.
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Symbolleiste einklappen",
ToolbarExpand		: "Symbolleiste ausklappen",

// Toolbar Items and Context Menu
Save				: "Speichern",
NewPage				: "Neue Seite",
Preview				: "Vorschau",
Cut					: "Ausschneiden",
Copy				: "Kopieren",
Paste				: "Einfgen",
PasteText			: "aus Textdatei einfgen",
PasteWord			: "aus MS-Word einfgen",
Print				: "Drucken",
SelectAll			: "Alles auswhlen",
RemoveFormat		: "Formatierungen entfernen",
InsertLinkLbl		: "Link",
InsertLink			: "Link einfgen/editieren",
RemoveLink			: "Link entfernen",
Anchor				: "Anker einfgen/editieren",
AnchorDelete		: "Anker entfernen",
InsertImageLbl		: "Bild",
InsertImage			: "Bild einfgen/editieren",
InsertFlashLbl		: "Flash",
InsertFlash			: "Flash einfgen/editieren",
InsertTableLbl		: "Tabelle",
InsertTable			: "Tabelle einfgen/editieren",
InsertLineLbl		: "Linie",
InsertLine			: "Horizontale Linie einfgen",
InsertSpecialCharLbl: "Sonderzeichen",
InsertSpecialChar	: "Sonderzeichen einfgen/editieren",
InsertSmileyLbl		: "Smiley",
InsertSmiley		: "Smiley einfgen",
About				: "ber FCKeditor",
Bold				: "Fett",
Italic				: "Kursiv",
Underline			: "Unterstrichen",
StrikeThrough		: "Durchgestrichen",
Subscript			: "Tiefgestellt",
Superscript			: "Hochgestellt",
LeftJustify			: "Linksbndig",
CenterJustify		: "Zentriert",
RightJustify		: "Rechtsbndig",
BlockJustify		: "Blocksatz",
DecreaseIndent		: "Einzug verringern",
IncreaseIndent		: "Einzug erhhen",
Blockquote			: "Zitatblock",
Undo				: "Rckgngig",
Redo				: "Wiederherstellen",
NumberedListLbl		: "Nummerierte Liste",
NumberedList		: "Nummerierte Liste einfgen/entfernen",
BulletedListLbl		: "Liste",
BulletedList		: "Liste einfgen/entfernen",
ShowTableBorders	: "Zeige Tabellenrahmen",
ShowDetails			: "Zeige Details",
Style				: "Stil",
FontFormat			: "Format",
Font				: "Schriftart",
FontSize			: "Gre",
TextColor			: "Textfarbe",
BGColor				: "Hintergrundfarbe",
Source				: "Quellcode",
Find				: "Suchen",
Replace				: "Ersetzen",
SpellCheck			: "Rechtschreibprfung",
UniversalKeyboard	: "Universal-Tastatur",
PageBreakLbl		: "Seitenumbruch",
PageBreak			: "Seitenumbruch einfgen",

Form			: "Formular",
Checkbox		: "Checkbox",
RadioButton		: "Radiobutton",
TextField		: "Textfeld einzeilig",
Textarea		: "Textfeld mehrzeilig",
HiddenField		: "verstecktes Feld",
Button			: "Klickbutton",
SelectionField	: "Auswahlfeld",
ImageButton		: "Bildbutton",

FitWindow		: "Editor maximieren",
ShowBlocks		: "Blcke anzeigen",

// Context Menu
EditLink			: "Link editieren",
CellCM				: "Zelle",
RowCM				: "Zeile",
ColumnCM			: "Spalte",
InsertRowAfter		: "Zeile unterhalb einfgen",
InsertRowBefore		: "Zeile oberhalb einfgen",
DeleteRows			: "Zeile entfernen",
InsertColumnAfter	: "Spalte rechts danach einfgen",
InsertColumnBefore	: "Spalte links davor einfgen",
DeleteColumns		: "Spalte lschen",
InsertCellAfter		: "Zelle danach einfgen",
InsertCellBefore	: "Zelle davor einfgen",
DeleteCells			: "Zelle lschen",
MergeCells			: "Zellen verbinden",
MergeRight			: "nach rechts verbinden",
MergeDown			: "nach unten verbinden",
HorizontalSplitCell	: "Zelle horizontal teilen",
VerticalSplitCell	: "Zelle vertikal teilen",
TableDelete			: "Tabelle lschen",
CellProperties		: "Zellen-Eigenschaften",
TableProperties		: "Tabellen-Eigenschaften",
ImageProperties		: "Bild-Eigenschaften",
FlashProperties		: "Flash-Eigenschaften",

AnchorProp			: "Anker-Eigenschaften",
ButtonProp			: "Button-Eigenschaften",
CheckboxProp		: "Checkbox-Eigenschaften",
HiddenFieldProp		: "Verstecktes Feld-Eigenschaften",
RadioButtonProp		: "Optionsfeld-Eigenschaften",
ImageButtonProp		: "Bildbutton-Eigenschaften",
TextFieldProp		: "Textfeld (einzeilig) Eigenschaften",
SelectionFieldProp	: "Auswahlfeld-Eigenschaften",
TextareaProp		: "Textfeld (mehrzeilig) Eigenschaften",
FormProp			: "Formular-Eigenschaften",

FontFormats			: "Normal;Formatiert;Addresse;berschrift 1;berschrift 2;berschrift 3;berschrift 4;berschrift 5;berschrift 6;Normal (DIV)",

// Alerts and Messages
ProcessingXHTML		: "Bearbeite XHTML. Bitte warten...",
Done				: "Fertig",
PasteWordConfirm	: "Der Text, den Sie einfgen mchten, scheint aus MS-Word kopiert zu sein. Mchten Sie ihn zuvor bereinigen lassen?",
NotCompatiblePaste	: "Diese Funktion steht nur im Internet Explorer ab Version 5.5 zur Verfgung. Mchten Sie den Text unbereinigt einfgen?",
UnknownToolbarItem	: "Unbekanntes Menleisten-Objekt \"%1\"",
UnknownCommand		: "Unbekannter Befehl \"%1\"",
NotImplemented		: "Befehl nicht implementiert",
UnknownToolbarSet	: "Menleiste \"%1\" existiert nicht",
NoActiveX			: "Die Sicherheitseinstellungen Ihres Browsers beschrnken evtl. einige Funktionen des Editors. Aktivieren Sie die Option \"ActiveX-Steuerelemente und Plugins ausfhren\" in den Sicherheitseinstellungen, um diese Funktionen nutzen zu knnen",
BrowseServerBlocked : "Ein Auswahlfenster konnte nicht geffnet werden. Stellen Sie sicher, das alle Popup-Blocker ausgeschaltet sind.",
DialogBlocked		: "Das Dialog-Fenster konnte nicht geffnet werden. Stellen Sie sicher, das alle Popup-Blocker ausgeschaltet sind.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Abbrechen",
DlgBtnClose			: "Schlieen",
DlgBtnBrowseServer	: "Server durchsuchen",
DlgAdvancedTag		: "Erweitert",
DlgOpOther			: "<andere>",
DlgInfoTab			: "Info",
DlgAlertUrl			: "Bitte tragen Sie die URL ein",

// General Dialogs Labels
DlgGenNotSet		: "<nichts>",
DlgGenId			: "ID",
DlgGenLangDir		: "Schreibrichtung",
DlgGenLangDirLtr	: "Links nach Rechts (LTR)",
DlgGenLangDirRtl	: "Rechts nach Links (RTL)",
DlgGenLangCode		: "Sprachenkrzel",
DlgGenAccessKey		: "Zugriffstaste",
DlgGenName			: "Name",
DlgGenTabIndex		: "Tab-Index",
DlgGenLongDescr		: "Langform URL",
DlgGenClass			: "Stylesheet Klasse",
DlgGenTitle			: "Titel Beschreibung",
DlgGenContType		: "Inhaltstyp",
DlgGenLinkCharset	: "Ziel-Zeichensatz",
DlgGenStyle			: "Style",

// Image Dialog
DlgImgTitle			: "Bild-Eigenschaften",
DlgImgInfoTab		: "Bild-Info",
DlgImgBtnUpload		: "Zum Server senden",
DlgImgURL			: "Bildauswahl",
DlgImgUpload		: "Upload",
DlgImgAlt			: "Alternativer Text",
DlgImgWidth			: "Breite",
DlgImgHeight		: "Hhe",
DlgImgLockRatio		: "Grenverhltniss beibehalten",
DlgBtnResetSize		: "Gre zurcksetzen",
DlgImgBorder		: "Rahmen",
DlgImgHSpace		: "H-Abstand",
DlgImgVSpace		: "V-Abstand",
DlgImgAlign			: "Ausrichtung",
DlgImgAlignLeft		: "Links",
DlgImgAlignAbsBottom: "Abs Unten",
DlgImgAlignAbsMiddle: "Abs Mitte",
DlgImgAlignBaseline	: "Baseline",
DlgImgAlignBottom	: "Unten",
DlgImgAlignMiddle	: "Mitte",
DlgImgAlignRight	: "Rechts",
DlgImgAlignTextTop	: "Text Oben",
DlgImgAlignTop		: "Oben",
DlgImgPreview		: "Vorschau",
DlgImgAlertUrl		: "Bitte geben Sie die Bild-URL an",
DlgImgLinkTab		: "Link",

// Flash Dialog
DlgFlashTitle		: "Flash-Eigenschaften",
DlgFlashChkPlay		: "autom. Abspielen",
DlgFlashChkLoop		: "Endlosschleife",
DlgFlashChkMenu		: "Flash-Men aktivieren",
DlgFlashScale		: "Skalierung",
DlgFlashScaleAll	: "Alles anzeigen",
DlgFlashScaleNoBorder	: "ohne Rand",
DlgFlashScaleFit	: "Passgenau",

// Link Dialog
DlgLnkWindowTitle	: "Link",
DlgLnkInfoTab		: "Link-Info",
DlgLnkTargetTab		: "Zielseite",

DlgLnkType			: "Link-Typ",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Anker in dieser Seite",
DlgLnkTypeEMail		: "E-Mail",
DlgLnkProto			: "Protokoll",
DlgLnkProtoOther	: "<anderes>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Anker auswhlen",
DlgLnkAnchorByName	: "nach Anker Name",
DlgLnkAnchorById	: "nach Element Id",
DlgLnkNoAnchors		: "(keine Anker im Dokument vorhanden)",
DlgLnkEMail			: "E-Mail Addresse",
DlgLnkEMailSubject	: "Betreffzeile",
DlgLnkEMailBody		: "Nachrichtentext",
DlgLnkUpload		: "Upload",
DlgLnkBtnUpload		: "Zum Server senden",

DlgLnkTarget		: "Zielseite",
DlgLnkTargetFrame	: "<Frame>",
DlgLnkTargetPopup	: "<Pop-up Fenster>",
DlgLnkTargetBlank	: "Neues Fenster (_blank)",
DlgLnkTargetParent	: "Oberes Fenster (_parent)",
DlgLnkTargetSelf	: "Gleiches Fenster (_self)",
DlgLnkTargetTop		: "Oberstes Fenster (_top)",
DlgLnkTargetFrameName	: "Ziel-Fenster-Name",
DlgLnkPopWinName	: "Pop-up Fenster-Name",
DlgLnkPopWinFeat	: "Pop-up Fenster-Eigenschaften",
DlgLnkPopResize		: "Vergrerbar",
DlgLnkPopLocation	: "Adress-Leiste",
DlgLnkPopMenu		: "Men-Leiste",
DlgLnkPopScroll		: "Rollbalken",
DlgLnkPopStatus		: "Statusleiste",
DlgLnkPopToolbar	: "Werkzeugleiste",
DlgLnkPopFullScrn	: "Vollbild (IE)",
DlgLnkPopDependent	: "Abhngig (Netscape)",
DlgLnkPopWidth		: "Breite",
DlgLnkPopHeight		: "Hhe",
DlgLnkPopLeft		: "Linke Position",
DlgLnkPopTop		: "Obere Position",

DlnLnkMsgNoUrl		: "Bitte geben Sie die Link-URL an",
DlnLnkMsgNoEMail	: "Bitte geben Sie e-Mail Adresse an",
DlnLnkMsgNoAnchor	: "Bitte whlen Sie einen Anker aus",
DlnLnkMsgInvPopName	: "Der Name des Popups muss mit einem Buchstaben beginnen und darf keine Leerzeichen enthalten",

// Color Dialog
DlgColorTitle		: "Farbauswahl",
DlgColorBtnClear	: "Keine Farbe",
DlgColorHighlight	: "Vorschau",
DlgColorSelected	: "Ausgewhlt",

// Smiley Dialog
DlgSmileyTitle		: "Smiley auswhlen",

// Special Character Dialog
DlgSpecialCharTitle	: "Sonderzeichen auswhlen",

// Table Dialog
DlgTableTitle		: "Tabellen-Eigenschaften",
DlgTableRows		: "Zeile",
DlgTableColumns		: "Spalte",
DlgTableBorder		: "Rahmen",
DlgTableAlign		: "Ausrichtung",
DlgTableAlignNotSet	: "<keine>",
DlgTableAlignLeft	: "Links",
DlgTableAlignCenter	: "Zentriert",
DlgTableAlignRight	: "Rechts",
DlgTableWidth		: "Breite",
DlgTableWidthPx		: "Pixel",
DlgTableWidthPc		: "%",
DlgTableHeight		: "Hhe",
DlgTableCellSpace	: "Zellenabstand auen",
DlgTableCellPad		: "Zellenabstand innen",
DlgTableCaption		: "berschrift",
DlgTableSummary		: "Inhaltsbersicht",

// Table Cell Dialog
DlgCellTitle		: "Zellen-Eigenschaften",
DlgCellWidth		: "Breite",
DlgCellWidthPx		: "Pixel",
DlgCellWidthPc		: "%",
DlgCellHeight		: "Hhe",
DlgCellWordWrap		: "Umbruch",
DlgCellWordWrapNotSet	: "<keiner>",
DlgCellWordWrapYes	: "Ja",
DlgCellWordWrapNo	: "Nein",
DlgCellHorAlign		: "Horizontale Ausrichtung",
DlgCellHorAlignNotSet	: "<keine>",
DlgCellHorAlignLeft	: "Links",
DlgCellHorAlignCenter	: "Zentriert",
DlgCellHorAlignRight: "Rechts",
DlgCellVerAlign		: "Vertikale Ausrichtung",
DlgCellVerAlignNotSet	: "<keine>",
DlgCellVerAlignTop	: "Oben",
DlgCellVerAlignMiddle	: "Mitte",
DlgCellVerAlignBottom	: "Unten",
DlgCellVerAlignBaseline	: "Grundlinie",
DlgCellRowSpan		: "Zeilen zusammenfassen",
DlgCellCollSpan		: "Spalten zusammenfassen",
DlgCellBackColor	: "Hintergrundfarbe",
DlgCellBorderColor	: "Rahmenfarbe",
DlgCellBtnSelect	: "Auswahl...",

// Find and Replace Dialog
DlgFindAndReplaceTitle	: "Suchen und Ersetzen",

// Find Dialog
DlgFindTitle		: "Finden",
DlgFindFindBtn		: "Finden",
DlgFindNotFoundMsg	: "Der gesuchte Text wurde nicht gefunden.",

// Replace Dialog
DlgReplaceTitle			: "Ersetzen",
DlgReplaceFindLbl		: "Suche nach:",
DlgReplaceReplaceLbl	: "Ersetze mit:",
DlgReplaceCaseChk		: "Gro-Kleinschreibung beachten",
DlgReplaceReplaceBtn	: "Ersetzen",
DlgReplaceReplAllBtn	: "Alle Ersetzen",
DlgReplaceWordChk		: "Nur ganze Worte suchen",

// Paste Operations / Dialog
PasteErrorCut	: "Die Sicherheitseinstellungen Ihres Browsers lassen es nicht zu, den Text automatisch auszuschneiden. Bitte benutzen Sie die System-Zwischenablage ber STRG-X (ausschneiden) und STRG-V (einfgen).",
PasteErrorCopy	: "Die Sicherheitseinstellungen Ihres Browsers lassen es nicht zu, den Text automatisch kopieren. Bitte benutzen Sie die System-Zwischenablage ber STRG-C (kopieren).",

PasteAsText		: "Als Text einfgen",
PasteFromWord	: "Aus Word einfgen",

DlgPasteMsg2	: "Bitte fgen Sie den Text in der folgenden Box ber die Tastatur (mit <STRONG>Strg+V</STRONG>) ein und besttigen Sie mit <STRONG>OK</STRONG>.",
DlgPasteSec		: "Aufgrund von Sicherheitsbeschrnkungen Ihres Browsers kann der Editor nicht direkt auf die Zwischenablage zugreifen. Bitte fgen Sie den Inhalt erneut in diesem Fenster ein.",
DlgPasteIgnoreFont		: "Ignoriere Schriftart-Definitionen",
DlgPasteRemoveStyles	: "Entferne Style-Definitionen",

// Color Picker
ColorAutomatic	: "Automatisch",
ColorMoreColors	: "Weitere Farben...",

// Document Properties
DocProps		: "Dokument-Eigenschaften",

// Anchor Dialog
DlgAnchorTitle		: "Anker-Eigenschaften",
DlgAnchorName		: "Anker Name",
DlgAnchorErrorName	: "Bitte geben Sie den Namen des Ankers ein",

// Speller Pages Dialog
DlgSpellNotInDic		: "Nicht im Wrterbuch",
DlgSpellChangeTo		: "ndern in",
DlgSpellBtnIgnore		: "Ignorieren",
DlgSpellBtnIgnoreAll	: "Alle Ignorieren",
DlgSpellBtnReplace		: "Ersetzen",
DlgSpellBtnReplaceAll	: "Alle Ersetzen",
DlgSpellBtnUndo			: "Rckgngig",
DlgSpellNoSuggestions	: " - keine Vorschlge - ",
DlgSpellProgress		: "Rechtschreibprfung luft...",
DlgSpellNoMispell		: "Rechtschreibprfung abgeschlossen - keine Fehler gefunden",
DlgSpellNoChanges		: "Rechtschreibprfung abgeschlossen - keine Worte gendert",
DlgSpellOneChange		: "Rechtschreibprfung abgeschlossen - ein Wort gendert",
DlgSpellManyChanges		: "Rechtschreibprfung abgeschlossen - %1 Wrter gendert",

IeSpellDownload			: "Rechtschreibprfung nicht installiert. Mchten Sie sie jetzt herunterladen?",

// Button Dialog
DlgButtonText		: "Text (Wert)",
DlgButtonType		: "Typ",
DlgButtonTypeBtn	: "Button",
DlgButtonTypeSbm	: "Absenden",
DlgButtonTypeRst	: "Zurcksetzen",

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Name",
DlgCheckboxValue	: "Wert",
DlgCheckboxSelected	: "ausgewhlt",

// Form Dialog
DlgFormName		: "Name",
DlgFormAction	: "Action",
DlgFormMethod	: "Method",

// Select Field Dialog
DlgSelectName		: "Name",
DlgSelectValue		: "Wert",
DlgSelectSize		: "Gre",
DlgSelectLines		: "Linien",
DlgSelectChkMulti	: "Erlaube Mehrfachauswahl",
DlgSelectOpAvail	: "Mgliche Optionen",
DlgSelectOpText		: "Text",
DlgSelectOpValue	: "Wert",
DlgSelectBtnAdd		: "Hinzufgen",
DlgSelectBtnModify	: "ndern",
DlgSelectBtnUp		: "Hoch",
DlgSelectBtnDown	: "Runter",
DlgSelectBtnSetValue : "Setze als Standardwert",
DlgSelectBtnDelete	: "Entfernen",

// Textarea Dialog
DlgTextareaName	: "Name",
DlgTextareaCols	: "Spalten",
DlgTextareaRows	: "Reihen",

// Text Field Dialog
DlgTextName			: "Name",
DlgTextValue		: "Wert",
DlgTextCharWidth	: "Zeichenbreite",
DlgTextMaxChars		: "Max. Zeichen",
DlgTextType			: "Typ",
DlgTextTypeText		: "Text",
DlgTextTypePass		: "Passwort",

// Hidden Field Dialog
DlgHiddenName	: "Name",
DlgHiddenValue	: "Wert",

// Bulleted List Dialog
BulletedListProp	: "Listen-Eigenschaften",
NumberedListProp	: "Nummerierte Listen-Eigenschaften",
DlgLstStart			: "Start",
DlgLstType			: "Typ",
DlgLstTypeCircle	: "Ring",
DlgLstTypeDisc		: "Kreis",
DlgLstTypeSquare	: "Quadrat",
DlgLstTypeNumbers	: "Nummern (1, 2, 3)",
DlgLstTypeLCase		: "Kleinbuchstaben (a, b, c)",
DlgLstTypeUCase		: "Grobuchstaben (A, B, C)",
DlgLstTypeSRoman	: "Kleine rmische Zahlen (i, ii, iii)",
DlgLstTypeLRoman	: "Groe rmische Zahlen (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Allgemein",
DlgDocBackTab		: "Hintergrund",
DlgDocColorsTab		: "Farben und Abstnde",
DlgDocMetaTab		: "Metadaten",

DlgDocPageTitle		: "Seitentitel",
DlgDocLangDir		: "Schriftrichtung",
DlgDocLangDirLTR	: "Links nach Rechts",
DlgDocLangDirRTL	: "Rechts nach Links",
DlgDocLangCode		: "Sprachkrzel",
DlgDocCharSet		: "Zeichenkodierung",
DlgDocCharSetCE		: "Zentraleuropisch",
DlgDocCharSetCT		: "traditionell Chinesisch (Big5)",
DlgDocCharSetCR		: "Kyrillisch",
DlgDocCharSetGR		: "Griechisch",
DlgDocCharSetJP		: "Japanisch",
DlgDocCharSetKR		: "Koreanisch",
DlgDocCharSetTR		: "Trkisch",
DlgDocCharSetUN		: "Unicode (UTF-8)",
DlgDocCharSetWE		: "Westeuropisch",
DlgDocCharSetOther	: "Andere Zeichenkodierung",

DlgDocDocType		: "Dokumententyp",
DlgDocDocTypeOther	: "Anderer Dokumententyp",
DlgDocIncXHTML		: "Beziehe XHTML Deklarationen ein",
DlgDocBgColor		: "Hintergrundfarbe",
DlgDocBgImage		: "Hintergrundbild URL",
DlgDocBgNoScroll	: "feststehender Hintergrund",
DlgDocCText			: "Text",
DlgDocCLink			: "Link",
DlgDocCVisited		: "Besuchter Link",
DlgDocCActive		: "Aktiver Link",
DlgDocMargins		: "Seitenrnder",
DlgDocMaTop			: "Oben",
DlgDocMaLeft		: "Links",
DlgDocMaRight		: "Rechts",
DlgDocMaBottom		: "Unten",
DlgDocMeIndex		: "Schlsselwrter (durch Komma getrennt)",
DlgDocMeDescr		: "Dokument-Beschreibung",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Copyright",
DlgDocPreview		: "Vorschau",

// Templates Dialog
Templates			: "Vorlagen",
DlgTemplatesTitle	: "Vorlagen",
DlgTemplatesSelMsg	: "Klicken Sie auf eine Vorlage, um sie im Editor zu ffnen (der aktuelle Inhalt wird dabei gelscht!):",
DlgTemplatesLoading	: "Liste der Vorlagen wird geladen. Bitte warten...",
DlgTemplatesNoTpl	: "(keine Vorlagen definiert)",
DlgTemplatesReplace	: "Aktuellen Inhalt ersetzen",

// About Dialog
DlgAboutAboutTab	: "ber",
DlgAboutBrowserInfoTab	: "Browser-Info",
DlgAboutLicenseTab	: "Lizenz",
DlgAboutVersion		: "Version",
DlgAboutInfo		: "Fr weitere Informationen siehe"
};
