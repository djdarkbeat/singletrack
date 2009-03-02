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
 * Turkish language file.
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Ara ubuunu Kapat",
ToolbarExpand		: "Ara ubuunu A",

// Toolbar Items and Context Menu
Save				: "Kaydet",
NewPage				: "Yeni Sayfa",
Preview				: "n zleme",
Cut					: "Kes",
Copy				: "Kopyala",
Paste				: "Yaptr",
PasteText			: "Dzyaz Olarak Yaptr",
PasteWord			: "Word'den Yaptr",
Print				: "Yazdr",
SelectAll			: "Tmn Se",
RemoveFormat		: "Biimi Kaldr",
InsertLinkLbl		: "Kpr",
InsertLink			: "Kpr Ekle/Dzenle",
RemoveLink			: "Kpr Kaldr",
Anchor				: "apa Ekle/Dzenle",
AnchorDelete		: "Remove Anchor",	//MISSING
InsertImageLbl		: "Resim",
InsertImage			: "Resim Ekle/Dzenle",
InsertFlashLbl		: "Flash",
InsertFlash			: "Flash Ekle/Dzenle",
InsertTableLbl		: "Tablo",
InsertTable			: "Tablo Ekle/Dzenle",
InsertLineLbl		: "Satr",
InsertLine			: "Yatay Satr Ekle",
InsertSpecialCharLbl: "zel Karakter",
InsertSpecialChar	: "zel Karakter Ekle",
InsertSmileyLbl		: "fade",
InsertSmiley		: "fade Ekle",
About				: "FCKeditor Hakknda",
Bold				: "Kaln",
Italic				: "talik",
Underline			: "Alt izgili",
StrikeThrough		: "st izgili",
Subscript			: "Alt Simge",
Superscript			: "st Simge",
LeftJustify			: "Sola Dayal",
CenterJustify		: "Ortalanm",
RightJustify		: "Saa Dayal",
BlockJustify		: "ki Kenara Yaslanm",
DecreaseIndent		: "Sekme Azalt",
IncreaseIndent		: "Sekme Arttr",
Blockquote			: "Blockquote",	//MISSING
Undo				: "Geri Al",
Redo				: "Tekrarla",
NumberedListLbl		: "Numaral Liste",
NumberedList		: "Numaral Liste Ekle/Kaldr",
BulletedListLbl		: "Simgeli Liste",
BulletedList		: "Simgeli Liste Ekle/Kaldr",
ShowTableBorders	: "Tablo Kenarlarn Gster",
ShowDetails			: "Detaylar Gster",
Style				: "Biem",
FontFormat			: "Biim",
Font				: "Yaz Tr",
FontSize			: "Boyut",
TextColor			: "Yaz Rengi",
BGColor				: "Arka Renk",
Source				: "Kaynak",
Find				: "Bul",
Replace				: "Deitir",
SpellCheck			: "Yazm Denetimi",
UniversalKeyboard	: "Evrensel Klavye",
PageBreakLbl		: "Sayfa sonu",
PageBreak			: "Sayfa Sonu Ekle",

Form			: "Form",
Checkbox		: "Onay Kutusu",
RadioButton		: "Seenek Dmesi",
TextField		: "Metin Girii",
Textarea		: "ok Satrl Metin",
HiddenField		: "Gizli Veri",
Button			: "Dme",
SelectionField	: "Seim Mens",
ImageButton		: "Resimli Dme",

FitWindow		: "Dzenleyici boyutunu byt",
ShowBlocks		: "Show Blocks",	//MISSING

// Context Menu
EditLink			: "Kpr Dzenle",
CellCM				: "Hcre",
RowCM				: "Satr",
ColumnCM			: "Stun",
InsertRowAfter		: "Insert Row After",	//MISSING
InsertRowBefore		: "Insert Row Before",	//MISSING
DeleteRows			: "Satr Sil",
InsertColumnAfter	: "Insert Column After",	//MISSING
InsertColumnBefore	: "Insert Column Before",	//MISSING
DeleteColumns		: "Stun Sil",
InsertCellAfter		: "Insert Cell After",	//MISSING
InsertCellBefore	: "Insert Cell Before",	//MISSING
DeleteCells			: "Hcre Sil",
MergeCells			: "Hcreleri Birletir",
MergeRight			: "Merge Right",	//MISSING
MergeDown			: "Merge Down",	//MISSING
HorizontalSplitCell	: "Split Cell Horizontally",	//MISSING
VerticalSplitCell	: "Split Cell Vertically",	//MISSING
TableDelete			: "Tabloyu Sil",
CellProperties		: "Hcre zellikleri",
TableProperties		: "Tablo zellikleri",
ImageProperties		: "Resim zellikleri",
FlashProperties		: "Flash zellikleri",

AnchorProp			: "apa zellikleri",
ButtonProp			: "Dme zellikleri",
CheckboxProp		: "Onay Kutusu zellikleri",
HiddenFieldProp		: "Gizli Veri zellikleri",
RadioButtonProp		: "Seenek Dmesi zellikleri",
ImageButtonProp		: "Resimli Dme zellikleri",
TextFieldProp		: "Metin Girii zellikleri",
SelectionFieldProp	: "Seim Mens zellikleri",
TextareaProp		: "ok Satrl Metin zellikleri",
FormProp			: "Form zellikleri",

FontFormats			: "Normal;Biimli;Adres;Balk 1;Balk 2;Balk 3;Balk 4;Balk 5;Balk 6;Paragraf (DIV)",

// Alerts and Messages
ProcessingXHTML		: "XHTML ileniyor. Ltfen bekleyin...",
Done				: "Bitti",
PasteWordConfirm	: "Yaptrdnz yaz Word'den gelmie benziyor. Yaptrmadan nce gereksiz eklentileri silmek ister misiniz?",
NotCompatiblePaste	: "Bu komut Internet Explorer 5.5 ve ileriki srmleri iin mevcuttur. Temizlenmeden yaptrlmasn ister misiniz ?",
UnknownToolbarItem	: "Bilinmeyen ara ubugu esi \"%1\"",
UnknownCommand		: "Bilinmeyen komut \"%1\"",
NotImplemented		: "Komut uyarlanamad",
UnknownToolbarSet	: "\"%1\" ara ubuu esi mevcut deil",
NoActiveX			: "Kullandnz taraycnn gvenlik ayarlar baz zelliklerin kullanlmasn engelliyor. Bu zelliklerin almas iin \"Run ActiveX controls and plug-ins (Activex ve eklentileri altr)\" seeneinin aktif yaplmas gerekiyor. Kullanlamayan eklentiler ve hatalar konusunda daha fazla bilgi sahibi olun.",
BrowseServerBlocked : "Kaynak taraycs alamad. Tm \"popup blocker\" programlarnn devre d olduundan emin olun. (Yahoo toolbar, Msn toolbar, Google toolbar gibi)",
DialogBlocked		: "Diyalog amak mmkn olmad. Tm \"Popup Blocker\" programlarnn devre d olduundan emin olun.",

// Dialogs
DlgBtnOK			: "Tamam",
DlgBtnCancel		: "ptal",
DlgBtnClose			: "Kapat",
DlgBtnBrowseServer	: "Sunucuyu Gez",
DlgAdvancedTag		: "Gelimi",
DlgOpOther			: "<Dier>",
DlgInfoTab			: "Bilgi",
DlgAlertUrl			: "Ltfen URL girin",

// General Dialogs Labels
DlgGenNotSet		: "<tanmlanmam>",
DlgGenId			: "Kimlik",
DlgGenLangDir		: "Dil Yn",
DlgGenLangDirLtr	: "Soldan Saa (LTR)",
DlgGenLangDirRtl	: "Sadan Sola (RTL)",
DlgGenLangCode		: "Dil Kodlamas",
DlgGenAccessKey		: "Eriim Tuu",
DlgGenName			: "Ad",
DlgGenTabIndex		: "Sekme ndeksi",
DlgGenLongDescr		: "Uzun Tanml URL",
DlgGenClass			: "Biem Sayfas Snflar",
DlgGenTitle			: "Danma Bal",
DlgGenContType		: "Danma erik Tr",
DlgGenLinkCharset	: "Bal Kaynak Karakter Gurubu",
DlgGenStyle			: "Biem",

// Image Dialog
DlgImgTitle			: "Resim zellikleri",
DlgImgInfoTab		: "Resim Bilgisi",
DlgImgBtnUpload		: "Sunucuya Yolla",
DlgImgURL			: "URL",
DlgImgUpload		: "Karya Ykle",
DlgImgAlt			: "Alternatif Yaz",
DlgImgWidth			: "Genilik",
DlgImgHeight		: "Ykseklik",
DlgImgLockRatio		: "Oran Kilitle",
DlgBtnResetSize		: "Boyutu Baa Dndr",
DlgImgBorder		: "Kenar",
DlgImgHSpace		: "Yatay Boluk",
DlgImgVSpace		: "Dikey Boluk",
DlgImgAlign			: "Hizalama",
DlgImgAlignLeft		: "Sol",
DlgImgAlignAbsBottom: "Tam Alt",
DlgImgAlignAbsMiddle: "Tam Ortas",
DlgImgAlignBaseline	: "Taban izgisi",
DlgImgAlignBottom	: "Alt",
DlgImgAlignMiddle	: "Orta",
DlgImgAlignRight	: "Sa",
DlgImgAlignTextTop	: "Yaz Tepeye",
DlgImgAlignTop		: "Tepe",
DlgImgPreview		: "n zleme",
DlgImgAlertUrl		: "Ltfen resmin URL'sini yaznz",
DlgImgLinkTab		: "Kpr",

// Flash Dialog
DlgFlashTitle		: "Flash zellikleri",
DlgFlashChkPlay		: "Otomatik Oynat",
DlgFlashChkLoop		: "Dng",
DlgFlashChkMenu		: "Flash Mensn Kullan",
DlgFlashScale		: "Boyutlandr",
DlgFlashScaleAll	: "Hepsini Gster",
DlgFlashScaleNoBorder	: "Kenar Yok",
DlgFlashScaleFit	: "Tam Sdr",

// Link Dialog
DlgLnkWindowTitle	: "Kpr",
DlgLnkInfoTab		: "Kpr Bilgisi",
DlgLnkTargetTab		: "Hedef",

DlgLnkType			: "Kpr Tr",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Bu sayfada apa",
DlgLnkTypeEMail		: "E-Posta",
DlgLnkProto			: "Protokol",
DlgLnkProtoOther	: "<dier>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "apa Se",
DlgLnkAnchorByName	: "apa Ad ile",
DlgLnkAnchorById	: "Eleman Kimlik Numaras ile",
DlgLnkNoAnchors		: "(Bu belgede hi apa yok)",
DlgLnkEMail			: "E-Posta Adresi",
DlgLnkEMailSubject	: "leti Konusu",
DlgLnkEMailBody		: "leti Gvdesi",
DlgLnkUpload		: "Karya Ykle",
DlgLnkBtnUpload		: "Sunucuya Gnder",

DlgLnkTarget		: "Hedef",
DlgLnkTargetFrame	: "<ereve>",
DlgLnkTargetPopup	: "<yeni alan pencere>",
DlgLnkTargetBlank	: "Yeni Pencere(_blank)",
DlgLnkTargetParent	: "Anne Pencere (_parent)",
DlgLnkTargetSelf	: "Kendi Penceresi (_self)",
DlgLnkTargetTop		: "En st Pencere (_top)",
DlgLnkTargetFrameName	: "Hedef ereve Ad",
DlgLnkPopWinName	: "Yeni Alan Pencere Ad",
DlgLnkPopWinFeat	: "Yeni Alan Pencere zellikleri",
DlgLnkPopResize		: "Boyutlandrlabilir",
DlgLnkPopLocation	: "Yer ubuu",
DlgLnkPopMenu		: "Men ubuu",
DlgLnkPopScroll		: "Kaydrma ubuklar",
DlgLnkPopStatus		: "Durum ubuu",
DlgLnkPopToolbar	: "Ara ubuu",
DlgLnkPopFullScrn	: "Tam Ekran (IE)",
DlgLnkPopDependent	: "Baml (Netscape)",
DlgLnkPopWidth		: "Genilik",
DlgLnkPopHeight		: "Ykseklik",
DlgLnkPopLeft		: "Sola Gre Konum",
DlgLnkPopTop		: "Yukarya Gre Konum",

DlnLnkMsgNoUrl		: "Ltfen kpr URL'sini yazn",
DlnLnkMsgNoEMail	: "Ltfen E-posta adresini yazn",
DlnLnkMsgNoAnchor	: "Ltfen bir apa sein",
DlnLnkMsgInvPopName	: "Alr pencere ad abecesel bir karakterle balamal ve boluk iermemelidir",

// Color Dialog
DlgColorTitle		: "Renk Se",
DlgColorBtnClear	: "Temizle",
DlgColorHighlight	: "Vurgula",
DlgColorSelected	: "Seilmi",

// Smiley Dialog
DlgSmileyTitle		: "fade Ekle",

// Special Character Dialog
DlgSpecialCharTitle	: "zel Karakter Se",

// Table Dialog
DlgTableTitle		: "Tablo zellikleri",
DlgTableRows		: "Satrlar",
DlgTableColumns		: "Stunlar",
DlgTableBorder		: "Kenar Kalnl",
DlgTableAlign		: "Hizalama",
DlgTableAlignNotSet	: "<Tanmlanmam>",
DlgTableAlignLeft	: "Sol",
DlgTableAlignCenter	: "Merkez",
DlgTableAlignRight	: "Sa",
DlgTableWidth		: "Genilik",
DlgTableWidthPx		: "piksel",
DlgTableWidthPc		: "yzde",
DlgTableHeight		: "Ykseklik",
DlgTableCellSpace	: "Izgara kalnl",
DlgTableCellPad		: "Izgara yaz aras",
DlgTableCaption		: "Balk",
DlgTableSummary		: "zet",

// Table Cell Dialog
DlgCellTitle		: "Hcre zellikleri",
DlgCellWidth		: "Genilik",
DlgCellWidthPx		: "piksel",
DlgCellWidthPc		: "yzde",
DlgCellHeight		: "Ykseklik",
DlgCellWordWrap		: "Szck Kaydr",
DlgCellWordWrapNotSet	: "<Tanmlanmam>",
DlgCellWordWrapYes	: "Evet",
DlgCellWordWrapNo	: "Hayr",
DlgCellHorAlign		: "Yatay Hizalama",
DlgCellHorAlignNotSet	: "<Tanmlanmam>",
DlgCellHorAlignLeft	: "Sol",
DlgCellHorAlignCenter	: "Merkez",
DlgCellHorAlignRight: "Sa",
DlgCellVerAlign		: "Dikey Hizalama",
DlgCellVerAlignNotSet	: "<Tanmlanmam>",
DlgCellVerAlignTop	: "Tepe",
DlgCellVerAlignMiddle	: "Orta",
DlgCellVerAlignBottom	: "Alt",
DlgCellVerAlignBaseline	: "Taban izgisi",
DlgCellRowSpan		: "Satr Kapla",
DlgCellCollSpan		: "Stun Kapla",
DlgCellBackColor	: "Arka Plan Rengi",
DlgCellBorderColor	: "Kenar Rengi",
DlgCellBtnSelect	: "Se...",

// Find and Replace Dialog
DlgFindAndReplaceTitle	: "Find and Replace",	//MISSING

// Find Dialog
DlgFindTitle		: "Bul",
DlgFindFindBtn		: "Bul",
DlgFindNotFoundMsg	: "Belirtilen yaz bulunamad.",

// Replace Dialog
DlgReplaceTitle			: "Deitir",
DlgReplaceFindLbl		: "Aranan:",
DlgReplaceReplaceLbl	: "Bununla deitir:",
DlgReplaceCaseChk		: "Byk/kk harf duyarl",
DlgReplaceReplaceBtn	: "Deitir",
DlgReplaceReplAllBtn	: "Tmn Deitir",
DlgReplaceWordChk		: "Kelimenin tamam uysun",

// Paste Operations / Dialog
PasteErrorCut	: "Gezgin yazlmnzn gvenlik ayarlar dzenleyicinin otomatik kesme ilemine izin vermiyor. lem iin (Ctrl+X) tularn kullann.",
PasteErrorCopy	: "Gezgin yazlmnzn gvenlik ayarlar dzenleyicinin otomatik kopyalama ilemine izin vermiyor. lem iin (Ctrl+C) tularn kullann.",

PasteAsText		: "Dz Metin Olarak Yaptr",
PasteFromWord	: "Word'den yaptr",

DlgPasteMsg2	: "Ltfen aadaki kutunun iine yaptrn. (<STRONG>Ctrl+V</STRONG>) ve <STRONG>Tamam</STRONG> butonunu tklayn.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Yaz Tipi tanmlarn yoksay",
DlgPasteRemoveStyles	: "Biem Tanmlarn kar",

// Color Picker
ColorAutomatic	: "Otomatik",
ColorMoreColors	: "Dier renkler...",

// Document Properties
DocProps		: "Belge zellikleri",

// Anchor Dialog
DlgAnchorTitle		: "apa zellikleri",
DlgAnchorName		: "apa Ad",
DlgAnchorErrorName	: "Ltfen apa iin ad giriniz",

// Speller Pages Dialog
DlgSpellNotInDic		: "Szlkte Yok",
DlgSpellChangeTo		: "una deitir:",
DlgSpellBtnIgnore		: "Yoksay",
DlgSpellBtnIgnoreAll	: "Tmn Yoksay",
DlgSpellBtnReplace		: "Deitir",
DlgSpellBtnReplaceAll	: "Tmn Deitir",
DlgSpellBtnUndo			: "Geri Al",
DlgSpellNoSuggestions	: "- neri Yok -",
DlgSpellProgress		: "Yazm denetimi ilemde...",
DlgSpellNoMispell		: "Yazm denetimi tamamland: Yanl yazma rastlanmad",
DlgSpellNoChanges		: "Yazm denetimi tamamland: Hibir kelime deitirilmedi",
DlgSpellOneChange		: "Yazm denetimi tamamland: Bir kelime deitirildi",
DlgSpellManyChanges		: "Yazm denetimi tamamland: %1 kelime deitirildi",

IeSpellDownload			: "Yazm denetimi yklenmemi. imdi yklemek ister misiniz?",

// Button Dialog
DlgButtonText		: "Metin (Deer)",
DlgButtonType		: "Tip",
DlgButtonTypeBtn	: "Dme",
DlgButtonTypeSbm	: "Gnder",
DlgButtonTypeRst	: "Sfrla",

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Ad",
DlgCheckboxValue	: "Deer",
DlgCheckboxSelected	: "Seili",

// Form Dialog
DlgFormName		: "Ad",
DlgFormAction	: "lem",
DlgFormMethod	: "Yntem",

// Select Field Dialog
DlgSelectName		: "Ad",
DlgSelectValue		: "Deer",
DlgSelectSize		: "Boyut",
DlgSelectLines		: "satr",
DlgSelectChkMulti	: "oklu seime izin ver",
DlgSelectOpAvail	: "Mevcut Seenekler",
DlgSelectOpText		: "Metin",
DlgSelectOpValue	: "Deer",
DlgSelectBtnAdd		: "Ekle",
DlgSelectBtnModify	: "Dzenle",
DlgSelectBtnUp		: "Yukar",
DlgSelectBtnDown	: "Aa",
DlgSelectBtnSetValue : "Seili deer olarak ata",
DlgSelectBtnDelete	: "Sil",

// Textarea Dialog
DlgTextareaName	: "Ad",
DlgTextareaCols	: "Stunlar",
DlgTextareaRows	: "Satrlar",

// Text Field Dialog
DlgTextName			: "Ad",
DlgTextValue		: "Deer",
DlgTextCharWidth	: "Karakter Genilii",
DlgTextMaxChars		: "En Fazla Karakter",
DlgTextType			: "Tr",
DlgTextTypeText		: "Metin",
DlgTextTypePass		: "Parola",

// Hidden Field Dialog
DlgHiddenName	: "Ad",
DlgHiddenValue	: "Deer",

// Bulleted List Dialog
BulletedListProp	: "Simgeli Liste zellikleri",
NumberedListProp	: "Numaral Liste zellikleri",
DlgLstStart			: "Balang",
DlgLstType			: "Tip",
DlgLstTypeCircle	: "ember",
DlgLstTypeDisc		: "Disk",
DlgLstTypeSquare	: "Kare",
DlgLstTypeNumbers	: "Saylar (1, 2, 3)",
DlgLstTypeLCase		: "Kk Harfler (a, b, c)",
DlgLstTypeUCase		: "Byk Harfler (A, B, C)",
DlgLstTypeSRoman	: "Kk Romen Rakamlar (i, ii, iii)",
DlgLstTypeLRoman	: "Byk Romen Rakamlar (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Genel",
DlgDocBackTab		: "Arka Plan",
DlgDocColorsTab		: "Renkler ve Kenar Boluklar",
DlgDocMetaTab		: "Tanm Bilgisi (Meta)",

DlgDocPageTitle		: "Sayfa Bal",
DlgDocLangDir		: "Dil Yn",
DlgDocLangDirLTR	: "Soldan Saa (LTR)",
DlgDocLangDirRTL	: "Sadan Sola (RTL)",
DlgDocLangCode		: "Dil Kodu",
DlgDocCharSet		: "Karakter Kmesi Kodlamas",
DlgDocCharSetCE		: "Orta Avrupa",
DlgDocCharSetCT		: "Geleneksel ince (Big5)",
DlgDocCharSetCR		: "Kiril",
DlgDocCharSetGR		: "Yunanca",
DlgDocCharSetJP		: "Japonca",
DlgDocCharSetKR		: "Korece",
DlgDocCharSetTR		: "Trke",
DlgDocCharSetUN		: "Unicode (UTF-8)",
DlgDocCharSetWE		: "Bat Avrupa",
DlgDocCharSetOther	: "Dier Karakter Kmesi Kodlamas",

DlgDocDocType		: "Belge Tr Bal",
DlgDocDocTypeOther	: "Dier Belge Tr Bal",
DlgDocIncXHTML		: "XHTML Bildirimlerini Dahil Et",
DlgDocBgColor		: "Arka Plan Rengi",
DlgDocBgImage		: "Arka Plan Resim URLsi",
DlgDocBgNoScroll	: "Sabit Arka Plan",
DlgDocCText			: "Metin",
DlgDocCLink			: "Kpr",
DlgDocCVisited		: "Ziyaret Edilmi Kpr",
DlgDocCActive		: "Etkin Kpr",
DlgDocMargins		: "Kenar Boluklar",
DlgDocMaTop			: "Tepe",
DlgDocMaLeft		: "Sol",
DlgDocMaRight		: "Sa",
DlgDocMaBottom		: "Alt",
DlgDocMeIndex		: "Belge Dizinleme Anahtar Kelimeleri (virglle ayrlm)",
DlgDocMeDescr		: "Belge Tanm",
DlgDocMeAuthor		: "Yazar",
DlgDocMeCopy		: "Telif",
DlgDocPreview		: "n zleme",

// Templates Dialog
Templates			: "ablonlar",
DlgTemplatesTitle	: "erik ablonlar",
DlgTemplatesSelMsg	: "Dzenleyicide amak iin ltfen bir ablon sein.<br>(hali hazrdaki ierik kaybolacaktr.):",
DlgTemplatesLoading	: "ablon listesi yklenmekte. Ltfen bekleyiniz...",
DlgTemplatesNoTpl	: "(Belirli bir ablon seilmedi)",
DlgTemplatesReplace	: "Mevcut ierik ile deitir",

// About Dialog
DlgAboutAboutTab	: "Hakknda",
DlgAboutBrowserInfoTab	: "Gezgin Bilgisi",
DlgAboutLicenseTab	: "Lisans",
DlgAboutVersion		: "srm",
DlgAboutInfo		: "Daha fazla bilgi iin:"
};
