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
 * Portuguese language file.
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Fechar Barra",
ToolbarExpand		: "Expandir Barra",

// Toolbar Items and Context Menu
Save				: "Guardar",
NewPage				: "Nova Pgina",
Preview				: "Pr-visualizar",
Cut					: "Cortar",
Copy				: "Copiar",
Paste				: "Colar",
PasteText			: "Colar como texto no formatado",
PasteWord			: "Colar do Word",
Print				: "Imprimir",
SelectAll			: "Seleccionar Tudo",
RemoveFormat		: "Eliminar Formato",
InsertLinkLbl		: "Hiperligao",
InsertLink			: "Inserir/Editar Hiperligao",
RemoveLink			: "Eliminar Hiperligao",
Anchor				: " Inserir/Editar ncora",
AnchorDelete		: "Remove Anchor",	//MISSING
InsertImageLbl		: "Imagem",
InsertImage			: "Inserir/Editar Imagem",
InsertFlashLbl		: "Flash",
InsertFlash			: "Inserir/Editar Flash",
InsertTableLbl		: "Tabela",
InsertTable			: "Inserir/Editar Tabela",
InsertLineLbl		: "Linha",
InsertLine			: "Inserir Linha Horizontal",
InsertSpecialCharLbl: "Caracter Especial",
InsertSpecialChar	: "Inserir Caracter Especial",
InsertSmileyLbl		: "Emoticons",
InsertSmiley		: "Inserir Emoticons",
About				: "Acerca do FCKeditor",
Bold				: "Negrito",
Italic				: "Itlico",
Underline			: "Sublinhado",
StrikeThrough		: "Rasurado",
Subscript			: "Superior  Linha",
Superscript			: "Inferior  Linha",
LeftJustify			: "Alinhar  Esquerda",
CenterJustify		: "Alinhar ao Centro",
RightJustify		: "Alinhar  Direita",
BlockJustify		: "Justificado",
DecreaseIndent		: "Diminuir Avano",
IncreaseIndent		: "Aumentar Avano",
Blockquote			: "Blockquote",	//MISSING
Undo				: "Anular",
Redo				: "Repetir",
NumberedListLbl		: "Numerao",
NumberedList		: "Inserir/Eliminar Numerao",
BulletedListLbl		: "Marcas",
BulletedList		: "Inserir/Eliminar Marcas",
ShowTableBorders	: "Mostrar Limites da Tabelas",
ShowDetails			: "Mostrar Pargrafo",
Style				: "Estilo",
FontFormat			: "Formato",
Font				: "Tipo de Letra",
FontSize			: "Tamanho",
TextColor			: "Cor do Texto",
BGColor				: "Cor de Fundo",
Source				: "Fonte",
Find				: "Procurar",
Replace				: "Substituir",
SpellCheck			: "Verificao Ortogrfica",
UniversalKeyboard	: "Teclado Universal",
PageBreakLbl		: "Quebra de Pgina",
PageBreak			: "Inserir Quebra de Pgina",

Form			: "Formulrio",
Checkbox		: "Caixa de Verificao",
RadioButton		: "Boto de Opo",
TextField		: "Campo de Texto",
Textarea		: "rea de Texto",
HiddenField		: "Campo Escondido",
Button			: "Boto",
SelectionField	: "Caixa de Combinao",
ImageButton		: "Boto de Imagem",

FitWindow		: "Maximizar o tamanho do editor",
ShowBlocks		: "Show Blocks",	//MISSING

// Context Menu
EditLink			: "Editar Hiperligao",
CellCM				: "Clula",
RowCM				: "Linha",
ColumnCM			: "Coluna",
InsertRowAfter		: "Insert Row After",	//MISSING
InsertRowBefore		: "Insert Row Before",	//MISSING
DeleteRows			: "Eliminar Linhas",
InsertColumnAfter	: "Insert Column After",	//MISSING
InsertColumnBefore	: "Insert Column Before",	//MISSING
DeleteColumns		: "Eliminar Coluna",
InsertCellAfter		: "Insert Cell After",	//MISSING
InsertCellBefore	: "Insert Cell Before",	//MISSING
DeleteCells			: "Eliminar Clula",
MergeCells			: "Unir Clulas",
MergeRight			: "Merge Right",	//MISSING
MergeDown			: "Merge Down",	//MISSING
HorizontalSplitCell	: "Split Cell Horizontally",	//MISSING
VerticalSplitCell	: "Split Cell Vertically",	//MISSING
TableDelete			: "Eliminar Tabela",
CellProperties		: "Propriedades da Clula",
TableProperties		: "Propriedades da Tabela",
ImageProperties		: "Propriedades da Imagem",
FlashProperties		: "Propriedades do Flash",

AnchorProp			: "Propriedades da ncora",
ButtonProp			: "Propriedades do Boto",
CheckboxProp		: "Propriedades da Caixa de Verificao",
HiddenFieldProp		: "Propriedades do Campo Escondido",
RadioButtonProp		: "Propriedades do Boto de Opo",
ImageButtonProp		: "Propriedades do Boto de imagens",
TextFieldProp		: "Propriedades do Campo de Texto",
SelectionFieldProp	: "Propriedades da Caixa de Combinao",
TextareaProp		: "Propriedades da rea de Texto",
FormProp			: "Propriedades do Formulrio",

FontFormats			: "Normal;Formatado;Endereo;Ttulo 1;Ttulo 2;Ttulo 3;Ttulo 4;Ttulo 5;Ttulo 6",

// Alerts and Messages
ProcessingXHTML		: "A Processar XHTML. Por favor, espere...",
Done				: "Concludo",
PasteWordConfirm	: "O texto que deseja parece ter sido copiado do Word. Deseja limpar a formatao antes de colar?",
NotCompatiblePaste	: "Este comando s est disponvel para Internet Explorer verso 5.5 ou superior. Deseja colar sem limpar a formatao?",
UnknownToolbarItem	: "Item de barra desconhecido \"%1\"",
UnknownCommand		: "Nome de comando desconhecido \"%1\"",
NotImplemented		: "Comando no implementado",
UnknownToolbarSet	: "Nome de barra \"%1\" no definido",
NoActiveX			: "As definies de segurana do navegador podem limitar algumas potencalidades do editr. Deve activar a opo \"Executar controlos e extenses ActiveX\". Pode ocorrer erros ou verificar que faltam potencialidades.",
BrowseServerBlocked : "No foi possvel abrir o navegador de recursos. Certifique-se que todos os bloqueadores de popup esto desactivados.",
DialogBlocked		: "No foi possvel abrir a janela de dilogo. Certifique-se que todos os bloqueadores de popup esto desactivados.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Cancelar",
DlgBtnClose			: "Fechar",
DlgBtnBrowseServer	: "Navegar no Servidor",
DlgAdvancedTag		: "Avanado",
DlgOpOther			: "<Outro>",
DlgInfoTab			: "Informao",
DlgAlertUrl			: "Por favor introduza o URL",

// General Dialogs Labels
DlgGenNotSet		: "<No definido>",
DlgGenId			: "Id",
DlgGenLangDir		: "Orientao de idioma",
DlgGenLangDirLtr	: "Esquerda  Direita (LTR)",
DlgGenLangDirRtl	: "Direita a Esquerda (RTL)",
DlgGenLangCode		: "Cdigo de Idioma",
DlgGenAccessKey		: "Chave de Acesso",
DlgGenName			: "Nome",
DlgGenTabIndex		: "ndice de Tubulao",
DlgGenLongDescr		: "Descrio Completa do URL",
DlgGenClass			: "Classes de Estilo de Folhas Classes",
DlgGenTitle			: "Ttulo",
DlgGenContType		: "Tipo de Contedo",
DlgGenLinkCharset	: "Fonte de caracteres vinculado",
DlgGenStyle			: "Estilo",

// Image Dialog
DlgImgTitle			: "Propriedades da Imagem",
DlgImgInfoTab		: "Informao da Imagem",
DlgImgBtnUpload		: "Enviar para o Servidor",
DlgImgURL			: "URL",
DlgImgUpload		: "Carregar",
DlgImgAlt			: "Texto Alternativo",
DlgImgWidth			: "Largura",
DlgImgHeight		: "Altura",
DlgImgLockRatio		: "Proporcional",
DlgBtnResetSize		: "Tamanho Original",
DlgImgBorder		: "Limite",
DlgImgHSpace		: "Esp.Horiz",
DlgImgVSpace		: "Esp.Vert",
DlgImgAlign			: "Alinhamento",
DlgImgAlignLeft		: "Esquerda",
DlgImgAlignAbsBottom: "Abs inferior",
DlgImgAlignAbsMiddle: "Abs centro",
DlgImgAlignBaseline	: "Linha de base",
DlgImgAlignBottom	: "Fundo",
DlgImgAlignMiddle	: "Centro",
DlgImgAlignRight	: "Direita",
DlgImgAlignTextTop	: "Topo do texto",
DlgImgAlignTop		: "Topo",
DlgImgPreview		: "Pr-visualizar",
DlgImgAlertUrl		: "Por favor introduza o URL da imagem",
DlgImgLinkTab		: "Hiperligao",

// Flash Dialog
DlgFlashTitle		: "Propriedades do Flash",
DlgFlashChkPlay		: "Reproduzir automaticamente",
DlgFlashChkLoop		: "Loop",
DlgFlashChkMenu		: "Permitir Menu do Flash",
DlgFlashScale		: "Escala",
DlgFlashScaleAll	: "Mostrar tudo",
DlgFlashScaleNoBorder	: "Sem Limites",
DlgFlashScaleFit	: "Tamanho Exacto",

// Link Dialog
DlgLnkWindowTitle	: "Hiperligao",
DlgLnkInfoTab		: "Informao de Hiperligao",
DlgLnkTargetTab		: "Destino",

DlgLnkType			: "Tipo de Hiperligao",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Referncia a esta pgina",
DlgLnkTypeEMail		: "E-Mail",
DlgLnkProto			: "Protocolo",
DlgLnkProtoOther	: "<outro>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Seleccionar una referncia",
DlgLnkAnchorByName	: "Por Nome de Referncia",
DlgLnkAnchorById	: "Por ID de elemento",
DlgLnkNoAnchors		: "(No h referncias disponveis no documento)",
DlgLnkEMail			: "Endereo de E-Mail",
DlgLnkEMailSubject	: "Ttulo de Mensagem",
DlgLnkEMailBody		: "Corpo da Mensagem",
DlgLnkUpload		: "Carregar",
DlgLnkBtnUpload		: "Enviar ao Servidor",

DlgLnkTarget		: "Destino",
DlgLnkTargetFrame	: "<Frame>",
DlgLnkTargetPopup	: "<Janela de popup>",
DlgLnkTargetBlank	: "Nova Janela(_blank)",
DlgLnkTargetParent	: "Janela Pai (_parent)",
DlgLnkTargetSelf	: "Mesma janela (_self)",
DlgLnkTargetTop		: "Janela primaria (_top)",
DlgLnkTargetFrameName	: "Nome do Frame Destino",
DlgLnkPopWinName	: "Nome da Janela de Popup",
DlgLnkPopWinFeat	: "Caractersticas de Janela de Popup",
DlgLnkPopResize		: "Ajustvel",
DlgLnkPopLocation	: "Barra de localizao",
DlgLnkPopMenu		: "Barra de Menu",
DlgLnkPopScroll		: "Barras de deslocamento",
DlgLnkPopStatus		: "Barra de Estado",
DlgLnkPopToolbar	: "Barra de Ferramentas",
DlgLnkPopFullScrn	: "Janela Completa (IE)",
DlgLnkPopDependent	: "Dependente (Netscape)",
DlgLnkPopWidth		: "Largura",
DlgLnkPopHeight		: "Altura",
DlgLnkPopLeft		: "Posio Esquerda",
DlgLnkPopTop		: "Posio Direita",

DlnLnkMsgNoUrl		: "Por favor introduza a hiperligao URL",
DlnLnkMsgNoEMail	: "Por favor introduza o endereo de e-mail",
DlnLnkMsgNoAnchor	: "Por favor seleccione uma referncia",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "Seleccionar Cor",
DlgColorBtnClear	: "Nenhuma",
DlgColorHighlight	: "Destacado",
DlgColorSelected	: "Seleccionado",

// Smiley Dialog
DlgSmileyTitle		: "Inserir um Emoticon",

// Special Character Dialog
DlgSpecialCharTitle	: "Seleccione um caracter especial",

// Table Dialog
DlgTableTitle		: "Propriedades da Tabela",
DlgTableRows		: "Linhas",
DlgTableColumns		: "Colunas",
DlgTableBorder		: "Tamanho do Limite",
DlgTableAlign		: "Alinhamento",
DlgTableAlignNotSet	: "<No definido>",
DlgTableAlignLeft	: "Esquerda",
DlgTableAlignCenter	: "Centrado",
DlgTableAlignRight	: "Direita",
DlgTableWidth		: "Largura",
DlgTableWidthPx		: "pixeis",
DlgTableWidthPc		: "percentagem",
DlgTableHeight		: "Altura",
DlgTableCellSpace	: "Esp. e/clulas",
DlgTableCellPad		: "Esp. interior",
DlgTableCaption		: "Ttulo",
DlgTableSummary		: "Sumrio",

// Table Cell Dialog
DlgCellTitle		: "Propriedades da Clula",
DlgCellWidth		: "Largura",
DlgCellWidthPx		: "pixeis",
DlgCellWidthPc		: "percentagem",
DlgCellHeight		: "Altura",
DlgCellWordWrap		: "Moldar Texto",
DlgCellWordWrapNotSet	: "<No definido>",
DlgCellWordWrapYes	: "Sim",
DlgCellWordWrapNo	: "No",
DlgCellHorAlign		: "Alinhamento Horizontal",
DlgCellHorAlignNotSet	: "<No definido>",
DlgCellHorAlignLeft	: "Esquerda",
DlgCellHorAlignCenter	: "Centrado",
DlgCellHorAlignRight: "Direita",
DlgCellVerAlign		: "Alinhamento Vertical",
DlgCellVerAlignNotSet	: "<No definido>",
DlgCellVerAlignTop	: "Topo",
DlgCellVerAlignMiddle	: "Mdio",
DlgCellVerAlignBottom	: "Fundi",
DlgCellVerAlignBaseline	: "Linha de Base",
DlgCellRowSpan		: "Unir Linhas",
DlgCellCollSpan		: "Unir Colunas",
DlgCellBackColor	: "Cor do Fundo",
DlgCellBorderColor	: "Cor do Limite",
DlgCellBtnSelect	: "Seleccione...",

// Find and Replace Dialog
DlgFindAndReplaceTitle	: "Find and Replace",	//MISSING

// Find Dialog
DlgFindTitle		: "Procurar",
DlgFindFindBtn		: "Procurar",
DlgFindNotFoundMsg	: "O texto especificado no foi encontrado.",

// Replace Dialog
DlgReplaceTitle			: "Substituir",
DlgReplaceFindLbl		: "Texto a Procurar:",
DlgReplaceReplaceLbl	: "Substituir por:",
DlgReplaceCaseChk		: "Maisculas/Minsculas",
DlgReplaceReplaceBtn	: "Substituir",
DlgReplaceReplAllBtn	: "Substituir Tudo",
DlgReplaceWordChk		: "Coincidir com toda a palavra",

// Paste Operations / Dialog
PasteErrorCut	: "A configurao de segurana do navegador no permite a execuo automtica de operaes de cortar. Por favor use o teclado (Ctrl+X).",
PasteErrorCopy	: "A configurao de segurana do navegador no permite a execuo automtica de operaes de copiar. Por favor use o teclado (Ctrl+C).",

PasteAsText		: "Colar como Texto Simples",
PasteFromWord	: "Colar do Word",

DlgPasteMsg2	: "Por favor, cole dentro da seguinte caixa usando o teclado (<STRONG>Ctrl+V</STRONG>) e prima <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignorar da definies do Tipo de Letra ",
DlgPasteRemoveStyles	: "Remover as definies de Estilos",

// Color Picker
ColorAutomatic	: "Automtico",
ColorMoreColors	: "Mais Cores...",

// Document Properties
DocProps		: "Propriedades do Documento",

// Anchor Dialog
DlgAnchorTitle		: "Propriedades da ncora",
DlgAnchorName		: "Nome da ncora",
DlgAnchorErrorName	: "Por favor, introduza o nome da ncora",

// Speller Pages Dialog
DlgSpellNotInDic		: "No est num directrio",
DlgSpellChangeTo		: "Mudar para",
DlgSpellBtnIgnore		: "Ignorar",
DlgSpellBtnIgnoreAll	: "Ignorar Tudo",
DlgSpellBtnReplace		: "Substituir",
DlgSpellBtnReplaceAll	: "Substituir Tudo",
DlgSpellBtnUndo			: "Anular",
DlgSpellNoSuggestions	: "- Sem sugestes -",
DlgSpellProgress		: "Verificao ortogrfica em progresso",
DlgSpellNoMispell		: "Verificao ortogrfica completa: no foram encontrados erros",
DlgSpellNoChanges		: "Verificao ortogrfica completa: no houve alterao de palavras",
DlgSpellOneChange		: "Verificao ortogrfica completa: uma palavra alterada",
DlgSpellManyChanges		: "Verificao ortogrfica completa: %1 palavras alteradas",

IeSpellDownload			: " Verificao ortogrfica no instalada. Quer descarregar agora?",

// Button Dialog
DlgButtonText		: "Texto (Valor)",
DlgButtonType		: "Tipo",
DlgButtonTypeBtn	: "Button",	//MISSING
DlgButtonTypeSbm	: "Submit",	//MISSING
DlgButtonTypeRst	: "Reset",	//MISSING

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Nome",
DlgCheckboxValue	: "Valor",
DlgCheckboxSelected	: "Seleccionado",

// Form Dialog
DlgFormName		: "Nome",
DlgFormAction	: "Aco",
DlgFormMethod	: "Mtodo",

// Select Field Dialog
DlgSelectName		: "Nome",
DlgSelectValue		: "Valor",
DlgSelectSize		: "Tamanho",
DlgSelectLines		: "linhas",
DlgSelectChkMulti	: "Permitir seleces mltiplas",
DlgSelectOpAvail	: "Opes Possveis",
DlgSelectOpText		: "Texto",
DlgSelectOpValue	: "Valor",
DlgSelectBtnAdd		: "Adicionar",
DlgSelectBtnModify	: "Modificar",
DlgSelectBtnUp		: "Para cima",
DlgSelectBtnDown	: "Para baixo",
DlgSelectBtnSetValue : "Definir um valor por defeito",
DlgSelectBtnDelete	: "Apagar",

// Textarea Dialog
DlgTextareaName	: "Nome",
DlgTextareaCols	: "Colunas",
DlgTextareaRows	: "Linhas",

// Text Field Dialog
DlgTextName			: "Nome",
DlgTextValue		: "Valor",
DlgTextCharWidth	: "Tamanho do caracter",
DlgTextMaxChars		: "Nr. Mximo de Caracteres",
DlgTextType			: "Tipo",
DlgTextTypeText		: "Texto",
DlgTextTypePass		: "Palavra-chave",

// Hidden Field Dialog
DlgHiddenName	: "Nome",
DlgHiddenValue	: "Valor",

// Bulleted List Dialog
BulletedListProp	: "Propriedades da Marca",
NumberedListProp	: "Propriedades da Numerao",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "Tipo",
DlgLstTypeCircle	: "Circulo",
DlgLstTypeDisc		: "Disco",
DlgLstTypeSquare	: "Quadrado",
DlgLstTypeNumbers	: "Nmeros (1, 2, 3)",
DlgLstTypeLCase		: "Letras Minsculas (a, b, c)",
DlgLstTypeUCase		: "Letras Maisculas (A, B, C)",
DlgLstTypeSRoman	: "Numerao Romana em Minsculas (i, ii, iii)",
DlgLstTypeLRoman	: "Numerao Romana em Maisculas (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Geral",
DlgDocBackTab		: "Fundo",
DlgDocColorsTab		: "Cores e Margens",
DlgDocMetaTab		: "Meta Data",

DlgDocPageTitle		: "Ttulo da Pgina",
DlgDocLangDir		: "Orientao de idioma",
DlgDocLangDirLTR	: "Esquerda  Direita (LTR)",
DlgDocLangDirRTL	: "Direita  Esquerda (RTL)",
DlgDocLangCode		: "Cdigo de Idioma",
DlgDocCharSet		: "Codificao de Caracteres",
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "Outra Codificao de Caracteres",

DlgDocDocType		: "Tipo de Cabealho do Documento",
DlgDocDocTypeOther	: "Outro Tipo de Cabealho do Documento",
DlgDocIncXHTML		: "Incluir Declaraes XHTML",
DlgDocBgColor		: "Cor de Fundo",
DlgDocBgImage		: "Caminho para a Imagem de Fundo",
DlgDocBgNoScroll	: "Fundo Fixo",
DlgDocCText			: "Texto",
DlgDocCLink			: "Hiperligao",
DlgDocCVisited		: "Hiperligao Visitada",
DlgDocCActive		: "Hiperligao Activa",
DlgDocMargins		: "Margem das Pginas",
DlgDocMaTop			: "Topo",
DlgDocMaLeft		: "Esquerda",
DlgDocMaRight		: "Direita",
DlgDocMaBottom		: "Fundo",
DlgDocMeIndex		: "Palavras de Indexao do Documento (separadas por virgula)",
DlgDocMeDescr		: "Descrio do Documento",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Direitos de Autor",
DlgDocPreview		: "Pr-visualizar",

// Templates Dialog
Templates			: "Modelos",
DlgTemplatesTitle	: "Modelo de Contedo",
DlgTemplatesSelMsg	: "Por favor, seleccione o modelo a abrir no editor<br>(o contedo actual ser perdido):",
DlgTemplatesLoading	: "A carregar a lista de modelos. Aguarde por favor...",
DlgTemplatesNoTpl	: "(Sem modelos definidos)",
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "Acerca",
DlgAboutBrowserInfoTab	: "Informao do Nevegador",
DlgAboutLicenseTab	: "Licena",
DlgAboutVersion		: "verso",
DlgAboutInfo		: "Para mais informaes por favor dirija-se a"
};
