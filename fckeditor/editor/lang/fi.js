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
 * Finnish language file.
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Piilota tykalurivi",
ToolbarExpand		: "Nyt tykalurivi",

// Toolbar Items and Context Menu
Save				: "Tallenna",
NewPage				: "Tyhjenn",
Preview				: "Esikatsele",
Cut					: "Leikkaa",
Copy				: "Kopioi",
Paste				: "Liit",
PasteText			: "Liit tekstin",
PasteWord			: "Liit Wordista",
Print				: "Tulosta",
SelectAll			: "Valitse kaikki",
RemoveFormat		: "Poista muotoilu",
InsertLinkLbl		: "Linkki",
InsertLink			: "Lis linkki/muokkaa linkki",
RemoveLink			: "Poista linkki",
Anchor				: "Lis ankkuri/muokkaa ankkuria",
AnchorDelete		: "Poista ankkuri",
InsertImageLbl		: "Kuva",
InsertImage			: "Lis kuva/muokkaa kuvaa",
InsertFlashLbl		: "Flash",
InsertFlash			: "Lis/muokkaa Flashia",
InsertTableLbl		: "Taulu",
InsertTable			: "Lis taulu/muokkaa taulua",
InsertLineLbl		: "Murtoviiva",
InsertLine			: "Lis murtoviiva",
InsertSpecialCharLbl: "Erikoismerkki",
InsertSpecialChar	: "Lis erikoismerkki",
InsertSmileyLbl		: "Hymi",
InsertSmiley		: "Lis hymi",
About				: "FCKeditorista",
Bold				: "Lihavoitu",
Italic				: "Kursivoitu",
Underline			: "Alleviivattu",
StrikeThrough		: "Yliviivattu",
Subscript			: "Alaindeksi",
Superscript			: "Ylindeksi",
LeftJustify			: "Tasaa vasemmat reunat",
CenterJustify		: "Keskit",
RightJustify		: "Tasaa oikeat reunat",
BlockJustify		: "Tasaa molemmat reunat",
DecreaseIndent		: "Pienenn sisennyst",
IncreaseIndent		: "Suurenna sisennyst",
Blockquote			: "Lainaus",
Undo				: "Kumoa",
Redo				: "Toista",
NumberedListLbl		: "Numerointi",
NumberedList		: "Lis/poista numerointi",
BulletedListLbl		: "Luottelomerkit",
BulletedList		: "Lis/poista luottelomerkit",
ShowTableBorders	: "Nyt taulun rajat",
ShowDetails			: "Nyt muotoilu",
Style				: "Tyyli",
FontFormat			: "Muotoilu",
Font				: "Fontti",
FontSize			: "Koko",
TextColor			: "Tekstivri",
BGColor				: "Taustavri",
Source				: "Koodi",
Find				: "Etsi",
Replace				: "Korvaa",
SpellCheck			: "Tarkista oikeinkirjoitus",
UniversalKeyboard	: "Universaali nppimist",
PageBreakLbl		: "Sivun vaihto",
PageBreak			: "Lis sivun vaihto",

Form			: "Lomake",
Checkbox		: "Valintaruutu",
RadioButton		: "Radiopainike",
TextField		: "Tekstikentt",
Textarea		: "Tekstilaatikko",
HiddenField		: "Piilokentt",
Button			: "Painike",
SelectionField	: "Valintakentt",
ImageButton		: "Kuvapainike",

FitWindow		: "Suurenna editori koko ikkunaan",
ShowBlocks		: "Nyt elementit",

// Context Menu
EditLink			: "Muokkaa linkki",
CellCM				: "Solu",
RowCM				: "Rivi",
ColumnCM			: "Sarake",
InsertRowAfter		: "Lis rivi alapuolelle",
InsertRowBefore		: "Lis rivi ylpuolelle",
DeleteRows			: "Poista rivit",
InsertColumnAfter	: "Lis sarake oikealle",
InsertColumnBefore	: "Lis sarake vasemmalle",
DeleteColumns		: "Poista sarakkeet",
InsertCellAfter		: "Lis solu pern",
InsertCellBefore	: "Lis solu eteen",
DeleteCells			: "Poista solut",
MergeCells			: "Yhdist solut",
MergeRight			: "Yhdist oikealla olevan kanssa",
MergeDown			: "Yhdist alla olevan kanssa",
HorizontalSplitCell	: "Jaa solu vaakasuunnassa",
VerticalSplitCell	: "Jaa solu pystysuunnassa",
TableDelete			: "Poista taulu",
CellProperties		: "Solun ominaisuudet",
TableProperties		: "Taulun ominaisuudet",
ImageProperties		: "Kuvan ominaisuudet",
FlashProperties		: "Flash ominaisuudet",

AnchorProp			: "Ankkurin ominaisuudet",
ButtonProp			: "Painikkeen ominaisuudet",
CheckboxProp		: "Valintaruudun ominaisuudet",
HiddenFieldProp		: "Piilokentn ominaisuudet",
RadioButtonProp		: "Radiopainikkeen ominaisuudet",
ImageButtonProp		: "Kuvapainikkeen ominaisuudet",
TextFieldProp		: "Tekstikentn ominaisuudet",
SelectionFieldProp	: "Valintakentn ominaisuudet",
TextareaProp		: "Tekstilaatikon ominaisuudet",
FormProp			: "Lomakkeen ominaisuudet",

FontFormats			: "Normaali;Muotoiltu;Osoite;Otsikko 1;Otsikko 2;Otsikko 3;Otsikko 4;Otsikko 5;Otsikko 6",

// Alerts and Messages
ProcessingXHTML		: "Prosessoidaan XHTML:. Odota hetki...",
Done				: "Valmis",
PasteWordConfirm	: "Teksti, jonka haluat liitt, nytt olevan kopioitu Wordista. Haluatko puhdistaa sen ennen liittmist?",
NotCompatiblePaste	: "Tm komento toimii vain Internet Explorer 5.5:ssa tai uudemmassa. Haluatko liitt ilman puhdistusta?",
UnknownToolbarItem	: "Tuntemanton tykalu \"%1\"",
UnknownCommand		: "Tuntematon komento \"%1\"",
NotImplemented		: "Komentoa ei ole liitetty sovellukseen",
UnknownToolbarSet	: "Tykalukokonaisuus \"%1\" ei ole olemassa",
NoActiveX			: "Selaimesi turvallisuusasetukset voivat rajoittaa joitain editorin ominaisuuksia. Sinun pit ottaa kyttn asetuksista \"Suorita ActiveX komponentit ja -plugin-laajennukset\". Saatat kohdata virheit ja huomata puuttuvia ominaisuuksia.",
BrowseServerBlocked : "Resurssiselainta ei voitu avata. Varmista, ett ponnahdusikkunoiden estjt eivt ole pll.",
DialogBlocked		: "Apuikkunaa ei voitu avaata. Varmista, ett ponnahdusikkunoiden estjt eivt ole pll.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Peruuta",
DlgBtnClose			: "Sulje",
DlgBtnBrowseServer	: "Selaa palvelinta",
DlgAdvancedTag		: "Lisominaisuudet",
DlgOpOther			: "Muut",
DlgInfoTab			: "Info",
DlgAlertUrl			: "Lis URL",

// General Dialogs Labels
DlgGenNotSet		: "<ei asetettu>",
DlgGenId			: "Tunniste",
DlgGenLangDir		: "Kielen suunta",
DlgGenLangDirLtr	: "Vasemmalta oikealle (LTR)",
DlgGenLangDirRtl	: "Oikealta vasemmalle (RTL)",
DlgGenLangCode		: "Kielikoodi",
DlgGenAccessKey		: "Pikanppin",
DlgGenName			: "Nimi",
DlgGenTabIndex		: "Tabulaattori indeksi",
DlgGenLongDescr		: "Pitkn kuvauksen URL",
DlgGenClass			: "Tyyliluokat",
DlgGenTitle			: "Avustava otsikko",
DlgGenContType		: "Avustava sislln tyyppi",
DlgGenLinkCharset	: "Linkitetty kirjaimisto",
DlgGenStyle			: "Tyyli",

// Image Dialog
DlgImgTitle			: "Kuvan ominaisuudet",
DlgImgInfoTab		: "Kuvan tiedot",
DlgImgBtnUpload		: "Lhet palvelimelle",
DlgImgURL			: "Osoite",
DlgImgUpload		: "Lis kuva",
DlgImgAlt			: "Vaihtoehtoinen teksti",
DlgImgWidth			: "Leveys",
DlgImgHeight		: "Korkeus",
DlgImgLockRatio		: "Lukitse suhteet",
DlgBtnResetSize		: "Alkuperinen koko",
DlgImgBorder		: "Raja",
DlgImgHSpace		: "Vaakatila",
DlgImgVSpace		: "Pystytila",
DlgImgAlign			: "Kohdistus",
DlgImgAlignLeft		: "Vasemmalle",
DlgImgAlignAbsBottom: "Aivan alas",
DlgImgAlignAbsMiddle: "Aivan keskelle",
DlgImgAlignBaseline	: "Alas (teksti)",
DlgImgAlignBottom	: "Alas",
DlgImgAlignMiddle	: "Keskelle",
DlgImgAlignRight	: "Oikealle",
DlgImgAlignTextTop	: "Yls (teksti)",
DlgImgAlignTop		: "Yls",
DlgImgPreview		: "Esikatselu",
DlgImgAlertUrl		: "Kirjoita kuvan osoite (URL)",
DlgImgLinkTab		: "Linkki",

// Flash Dialog
DlgFlashTitle		: "Flash ominaisuudet",
DlgFlashChkPlay		: "Automaattinen kynnistys",
DlgFlashChkLoop		: "Toisto",
DlgFlashChkMenu		: "Nyt Flash-valikko",
DlgFlashScale		: "Levit",
DlgFlashScaleAll	: "Nyt kaikki",
DlgFlashScaleNoBorder	: "Ei rajaa",
DlgFlashScaleFit	: "Tarkka koko",

// Link Dialog
DlgLnkWindowTitle	: "Linkki",
DlgLnkInfoTab		: "Linkin tiedot",
DlgLnkTargetTab		: "Kohde",

DlgLnkType			: "Linkkityyppi",
DlgLnkTypeURL		: "Osoite",
DlgLnkTypeAnchor	: "Ankkuri tss sivussa",
DlgLnkTypeEMail		: "Shkposti",
DlgLnkProto			: "Protokolla",
DlgLnkProtoOther	: "<muu>",
DlgLnkURL			: "Osoite",
DlgLnkAnchorSel		: "Valitse ankkuri",
DlgLnkAnchorByName	: "Ankkurin nimen mukaan",
DlgLnkAnchorById	: "Ankkurin ID:n mukaan",
DlgLnkNoAnchors		: "(Ei ankkureita tss dokumentissa)",
DlgLnkEMail			: "Shkpostiosoite",
DlgLnkEMailSubject	: "Aihe",
DlgLnkEMailBody		: "Viesti",
DlgLnkUpload		: "Lis tiedosto",
DlgLnkBtnUpload		: "Lhet palvelimelle",

DlgLnkTarget		: "Kohde",
DlgLnkTargetFrame	: "<kehys>",
DlgLnkTargetPopup	: "<popup ikkuna>",
DlgLnkTargetBlank	: "Uusi ikkuna (_blank)",
DlgLnkTargetParent	: "Emoikkuna (_parent)",
DlgLnkTargetSelf	: "Sama ikkuna (_self)",
DlgLnkTargetTop		: "Pllimmisin ikkuna (_top)",
DlgLnkTargetFrameName	: "Kohdekehyksen nimi",
DlgLnkPopWinName	: "Popup ikkunan nimi",
DlgLnkPopWinFeat	: "Popup ikkunan ominaisuudet",
DlgLnkPopResize		: "Venytettv",
DlgLnkPopLocation	: "Osoiterivi",
DlgLnkPopMenu		: "Valikkorivi",
DlgLnkPopScroll		: "Vierityspalkit",
DlgLnkPopStatus		: "Tilarivi",
DlgLnkPopToolbar	: "Vakiopainikkeet",
DlgLnkPopFullScrn	: "Tysi ikkuna (IE)",
DlgLnkPopDependent	: "Riippuva (Netscape)",
DlgLnkPopWidth		: "Leveys",
DlgLnkPopHeight		: "Korkeus",
DlgLnkPopLeft		: "Vasemmalta (px)",
DlgLnkPopTop		: "Ylhlt (px)",

DlnLnkMsgNoUrl		: "Linkille on kirjoitettava URL",
DlnLnkMsgNoEMail	: "Kirjoita shkpostiosoite",
DlnLnkMsgNoAnchor	: "Valitse ankkuri",
DlnLnkMsgInvPopName	: "Popup-ikkunan nimi pit alkaa aakkosella ja ei saa sislt vlej",

// Color Dialog
DlgColorTitle		: "Valitse vri",
DlgColorBtnClear	: "Tyhjenn",
DlgColorHighlight	: "Kohdalla",
DlgColorSelected	: "Valittu",

// Smiley Dialog
DlgSmileyTitle		: "Lis hymi",

// Special Character Dialog
DlgSpecialCharTitle	: "Valitse erikoismerkki",

// Table Dialog
DlgTableTitle		: "Taulun ominaisuudet",
DlgTableRows		: "Rivit",
DlgTableColumns		: "Sarakkeet",
DlgTableBorder		: "Rajan paksuus",
DlgTableAlign		: "Kohdistus",
DlgTableAlignNotSet	: "<ei asetettu>",
DlgTableAlignLeft	: "Vasemmalle",
DlgTableAlignCenter	: "Keskelle",
DlgTableAlignRight	: "Oikealle",
DlgTableWidth		: "Leveys",
DlgTableWidthPx		: "pikseli",
DlgTableWidthPc		: "prosenttia",
DlgTableHeight		: "Korkeus",
DlgTableCellSpace	: "Solujen vli",
DlgTableCellPad		: "Solujen sisennys",
DlgTableCaption		: "Otsikko",
DlgTableSummary		: "Yhteenveto",

// Table Cell Dialog
DlgCellTitle		: "Solun ominaisuudet",
DlgCellWidth		: "Leveys",
DlgCellWidthPx		: "pikseli",
DlgCellWidthPc		: "prosenttia",
DlgCellHeight		: "Korkeus",
DlgCellWordWrap		: "Tekstikierrtys",
DlgCellWordWrapNotSet	: "<Ei asetettu>",
DlgCellWordWrapYes	: "Kyll",
DlgCellWordWrapNo	: "Ei",
DlgCellHorAlign		: "Vaakakohdistus",
DlgCellHorAlignNotSet	: "<Ei asetettu>",
DlgCellHorAlignLeft	: "Vasemmalle",
DlgCellHorAlignCenter	: "Keskelle",
DlgCellHorAlignRight: "Oikealle",
DlgCellVerAlign		: "Pystykohdistus",
DlgCellVerAlignNotSet	: "<Ei asetettu>",
DlgCellVerAlignTop	: "Yls",
DlgCellVerAlignMiddle	: "Keskelle",
DlgCellVerAlignBottom	: "Alas",
DlgCellVerAlignBaseline	: "Tekstin alas",
DlgCellRowSpan		: "Rivin jatkuvuus",
DlgCellCollSpan		: "Sarakkeen jatkuvuus",
DlgCellBackColor	: "Taustavri",
DlgCellBorderColor	: "Rajan vri",
DlgCellBtnSelect	: "Valitse...",

// Find and Replace Dialog
DlgFindAndReplaceTitle	: "Etsi ja korvaa",

// Find Dialog
DlgFindTitle		: "Etsi",
DlgFindFindBtn		: "Etsi",
DlgFindNotFoundMsg	: "Etsitty teksti ei lytynyt.",

// Replace Dialog
DlgReplaceTitle			: "Korvaa",
DlgReplaceFindLbl		: "Etsi mit:",
DlgReplaceReplaceLbl	: "Korvaa tll:",
DlgReplaceCaseChk		: "Sama kirjainkoko",
DlgReplaceReplaceBtn	: "Korvaa",
DlgReplaceReplAllBtn	: "Korvaa kaikki",
DlgReplaceWordChk		: "Koko sana",

// Paste Operations / Dialog
PasteErrorCut	: "Selaimesi turva-asetukset eivt salli editorin toteuttaa leikkaamista. Kyt nppimist leikkaamiseen (Ctrl+X).",
PasteErrorCopy	: "Selaimesi turva-asetukset eivt salli editorin toteuttaa kopioimista. Kyt nppimist kopioimiseen (Ctrl+C).",

PasteAsText		: "Liit tekstin",
PasteFromWord	: "Liit Wordista",

DlgPasteMsg2	: "Liit painamalla (<STRONG>Ctrl+V</STRONG>) ja painamalla <STRONG>OK</STRONG>.",
DlgPasteSec		: "Selaimesi turva-asetukset eivt salli editorin kytt leikepyt suoraan. Sinun pit suorittaa liittminen tss ikkunassa.",
DlgPasteIgnoreFont		: "Jt huomioimatta fonttimritykset",
DlgPasteRemoveStyles	: "Poista tyylimritykset",

// Color Picker
ColorAutomatic	: "Automaattinen",
ColorMoreColors	: "Lis vrej...",

// Document Properties
DocProps		: "Dokumentin ominaisuudet",

// Anchor Dialog
DlgAnchorTitle		: "Ankkurin ominaisuudet",
DlgAnchorName		: "Nimi",
DlgAnchorErrorName	: "Ankkurille on kirjoitettava nimi",

// Speller Pages Dialog
DlgSpellNotInDic		: "Ei sanakirjassa",
DlgSpellChangeTo		: "Vaihda",
DlgSpellBtnIgnore		: "Jt huomioimatta",
DlgSpellBtnIgnoreAll	: "Jt kaikki huomioimatta",
DlgSpellBtnReplace		: "Korvaa",
DlgSpellBtnReplaceAll	: "Korvaa kaikki",
DlgSpellBtnUndo			: "Kumoa",
DlgSpellNoSuggestions	: "Ei ehdotuksia",
DlgSpellProgress		: "Tarkistus kynniss...",
DlgSpellNoMispell		: "Tarkistus valmis: Ei virheit",
DlgSpellNoChanges		: "Tarkistus valmis: Yhtn sanaa ei muutettu",
DlgSpellOneChange		: "Tarkistus valmis: Yksi sana muutettiin",
DlgSpellManyChanges		: "Tarkistus valmis: %1 sanaa muutettiin",

IeSpellDownload			: "Oikeinkirjoituksen tarkistusta ei ole asennettu. Haluatko ladata sen nyt?",

// Button Dialog
DlgButtonText		: "Teksti (arvo)",
DlgButtonType		: "Tyyppi",
DlgButtonTypeBtn	: "Painike",
DlgButtonTypeSbm	: "Lhet",
DlgButtonTypeRst	: "Tyhjenn",

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Nimi",
DlgCheckboxValue	: "Arvo",
DlgCheckboxSelected	: "Valittu",

// Form Dialog
DlgFormName		: "Nimi",
DlgFormAction	: "Toiminto",
DlgFormMethod	: "Tapa",

// Select Field Dialog
DlgSelectName		: "Nimi",
DlgSelectValue		: "Arvo",
DlgSelectSize		: "Koko",
DlgSelectLines		: "Rivit",
DlgSelectChkMulti	: "Salli usea valinta",
DlgSelectOpAvail	: "Ominaisuudet",
DlgSelectOpText		: "Teksti",
DlgSelectOpValue	: "Arvo",
DlgSelectBtnAdd		: "Lis",
DlgSelectBtnModify	: "Muuta",
DlgSelectBtnUp		: "Yls",
DlgSelectBtnDown	: "Alas",
DlgSelectBtnSetValue : "Aseta valituksi",
DlgSelectBtnDelete	: "Poista",

// Textarea Dialog
DlgTextareaName	: "Nimi",
DlgTextareaCols	: "Sarakkeita",
DlgTextareaRows	: "Rivej",

// Text Field Dialog
DlgTextName			: "Nimi",
DlgTextValue		: "Arvo",
DlgTextCharWidth	: "Leveys",
DlgTextMaxChars		: "Maksimi merkkimr",
DlgTextType			: "Tyyppi",
DlgTextTypeText		: "Teksti",
DlgTextTypePass		: "Salasana",

// Hidden Field Dialog
DlgHiddenName	: "Nimi",
DlgHiddenValue	: "Arvo",

// Bulleted List Dialog
BulletedListProp	: "Luettelon ominaisuudet",
NumberedListProp	: "Numeroinnin ominaisuudet",
DlgLstStart			: "Alku",
DlgLstType			: "Tyyppi",
DlgLstTypeCircle	: "Keh",
DlgLstTypeDisc		: "Ympyr",
DlgLstTypeSquare	: "Neli",
DlgLstTypeNumbers	: "Numerot (1, 2, 3)",
DlgLstTypeLCase		: "Pienet kirjaimet (a, b, c)",
DlgLstTypeUCase		: "Isot kirjaimet (A, B, C)",
DlgLstTypeSRoman	: "Pienet roomalaiset numerot (i, ii, iii)",
DlgLstTypeLRoman	: "Isot roomalaiset numerot (Ii, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Yleiset",
DlgDocBackTab		: "Tausta",
DlgDocColorsTab		: "Vrit ja marginaalit",
DlgDocMetaTab		: "Meta-tieto",

DlgDocPageTitle		: "Sivun nimi",
DlgDocLangDir		: "Kielen suunta",
DlgDocLangDirLTR	: "Vasemmalta oikealle (LTR)",
DlgDocLangDirRTL	: "Oikealta vasemmalle (RTL)",
DlgDocLangCode		: "Kielikoodi",
DlgDocCharSet		: "Merkistkoodaus",
DlgDocCharSetCE		: "Keskieurooppalainen",
DlgDocCharSetCT		: "Kiina, perinteinen (Big5)",
DlgDocCharSetCR		: "Kyrillinen",
DlgDocCharSetGR		: "Kreikka",
DlgDocCharSetJP		: "Japani",
DlgDocCharSetKR		: "Korealainen",
DlgDocCharSetTR		: "Turkkilainen",
DlgDocCharSetUN		: "Unicode (UTF-8)",
DlgDocCharSetWE		: "Lnsieurooppalainen",
DlgDocCharSetOther	: "Muu merkistkoodaus",

DlgDocDocType		: "Dokumentin tyyppi",
DlgDocDocTypeOther	: "Muu dokumentin tyyppi",
DlgDocIncXHTML		: "Lis XHTML julistukset",
DlgDocBgColor		: "Taustavri",
DlgDocBgImage		: "Taustakuva",
DlgDocBgNoScroll	: "Paikallaanpysyv tausta",
DlgDocCText			: "Teksti",
DlgDocCLink			: "Linkki",
DlgDocCVisited		: "Vierailtu linkki",
DlgDocCActive		: "Aktiivinen linkki",
DlgDocMargins		: "Sivun marginaalit",
DlgDocMaTop			: "Yl",
DlgDocMaLeft		: "Vasen",
DlgDocMaRight		: "Oikea",
DlgDocMaBottom		: "Ala",
DlgDocMeIndex		: "Hakusanat (pilkulla erotettuna)",
DlgDocMeDescr		: "Kuvaus",
DlgDocMeAuthor		: "Tekij",
DlgDocMeCopy		: "Tekijnoikeudet",
DlgDocPreview		: "Esikatselu",

// Templates Dialog
Templates			: "Pohjat",
DlgTemplatesTitle	: "Sisltpohjat",
DlgTemplatesSelMsg	: "Valitse pohja editoriin<br>(aiempi sislt menetetn):",
DlgTemplatesLoading	: "Ladataan listaa pohjista. Hetkinen...",
DlgTemplatesNoTpl	: "(Ei mriteltyj pohjia)",
DlgTemplatesReplace	: "Korvaa editorin koko sislt",

// About Dialog
DlgAboutAboutTab	: "Editorista",
DlgAboutBrowserInfoTab	: "Selaimen tiedot",
DlgAboutLicenseTab	: "Lisenssi",
DlgAboutVersion		: "versio",
DlgAboutInfo		: "Lis tietoa osoitteesta"
};
