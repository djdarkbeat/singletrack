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
 * Spanish language file.
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Contraer Barra",
ToolbarExpand		: "Expandir Barra",

// Toolbar Items and Context Menu
Save				: "Guardar",
NewPage				: "Nueva Pgina",
Preview				: "Vista Previa",
Cut					: "Cortar",
Copy				: "Copiar",
Paste				: "Pegar",
PasteText			: "Pegar como texto plano",
PasteWord			: "Pegar desde Word",
Print				: "Imprimir",
SelectAll			: "Seleccionar Todo",
RemoveFormat		: "Eliminar Formato",
InsertLinkLbl		: "Vnculo",
InsertLink			: "Insertar/Editar Vnculo",
RemoveLink			: "Eliminar Vnculo",
Anchor				: "Referencia",
AnchorDelete		: "Eliminar Referencia",
InsertImageLbl		: "Imagen",
InsertImage			: "Insertar/Editar Imagen",
InsertFlashLbl		: "Flash",
InsertFlash			: "Insertar/Editar Flash",
InsertTableLbl		: "Tabla",
InsertTable			: "Insertar/Editar Tabla",
InsertLineLbl		: "Lnea",
InsertLine			: "Insertar Lnea Horizontal",
InsertSpecialCharLbl: "Caracter Especial",
InsertSpecialChar	: "Insertar Caracter Especial",
InsertSmileyLbl		: "Emoticons",
InsertSmiley		: "Insertar Emoticons",
About				: "Acerca de FCKeditor",
Bold				: "Negrita",
Italic				: "Cursiva",
Underline			: "Subrayado",
StrikeThrough		: "Tachado",
Subscript			: "Subndice",
Superscript			: "Superndice",
LeftJustify			: "Alinear a Izquierda",
CenterJustify		: "Centrar",
RightJustify		: "Alinear a Derecha",
BlockJustify		: "Justificado",
DecreaseIndent		: "Disminuir Sangra",
IncreaseIndent		: "Aumentar Sangra",
Blockquote			: "Cita",
Undo				: "Deshacer",
Redo				: "Rehacer",
NumberedListLbl		: "Numeracin",
NumberedList		: "Insertar/Eliminar Numeracin",
BulletedListLbl		: "Vietas",
BulletedList		: "Insertar/Eliminar Vietas",
ShowTableBorders	: "Mostrar Bordes de Tablas",
ShowDetails			: "Mostrar saltos de Prrafo",
Style				: "Estilo",
FontFormat			: "Formato",
Font				: "Fuente",
FontSize			: "Tamao",
TextColor			: "Color de Texto",
BGColor				: "Color de Fondo",
Source				: "Fuente HTML",
Find				: "Buscar",
Replace				: "Reemplazar",
SpellCheck			: "Ortografa",
UniversalKeyboard	: "Teclado Universal",
PageBreakLbl		: "Salto de Pgina",
PageBreak			: "Insertar Salto de Pgina",

Form			: "Formulario",
Checkbox		: "Casilla de Verificacin",
RadioButton		: "Botones de Radio",
TextField		: "Campo de Texto",
Textarea		: "Area de Texto",
HiddenField		: "Campo Oculto",
Button			: "Botn",
SelectionField	: "Campo de Seleccin",
ImageButton		: "Botn Imagen",

FitWindow		: "Maximizar el tamao del editor",
ShowBlocks		: "Mostrar bloques",

// Context Menu
EditLink			: "Editar Vnculo",
CellCM				: "Celda",
RowCM				: "Fila",
ColumnCM			: "Columna",
InsertRowAfter		: "Insertar fila en la parte inferior",
InsertRowBefore		: "Insertar fila en la parte superior",
DeleteRows			: "Eliminar Filas",
InsertColumnAfter	: "Insertar columna a la derecha",
InsertColumnBefore	: "Insertar columna a la izquierda",
DeleteColumns		: "Eliminar Columnas",
InsertCellAfter		: "Insertar celda a la derecha",
InsertCellBefore	: "Insertar celda a la izquierda",
DeleteCells			: "Eliminar Celdas",
MergeCells			: "Combinar Celdas",
MergeRight			: "Combinar a la derecha",
MergeDown			: "Combinar hacia abajo",
HorizontalSplitCell	: "Dividir la celda horizontalmente",
VerticalSplitCell	: "Dividir la celda verticalmente",
TableDelete			: "Eliminar Tabla",
CellProperties		: "Propiedades de Celda",
TableProperties		: "Propiedades de Tabla",
ImageProperties		: "Propiedades de Imagen",
FlashProperties		: "Propiedades de Flash",

AnchorProp			: "Propiedades de Referencia",
ButtonProp			: "Propiedades de Botn",
CheckboxProp		: "Propiedades de Casilla",
HiddenFieldProp		: "Propiedades de Campo Oculto",
RadioButtonProp		: "Propiedades de Botn de Radio",
ImageButtonProp		: "Propiedades de Botn de Imagen",
TextFieldProp		: "Propiedades de Campo de Texto",
SelectionFieldProp	: "Propiedades de Campo de Seleccin",
TextareaProp		: "Propiedades de Area de Texto",
FormProp			: "Propiedades de Formulario",

FontFormats			: "Normal;Con formato;Direccin;Encabezado 1;Encabezado 2;Encabezado 3;Encabezado 4;Encabezado 5;Encabezado 6;Normal (DIV)",

// Alerts and Messages
ProcessingXHTML		: "Procesando XHTML. Por favor, espere...",
Done				: "Hecho",
PasteWordConfirm	: "El texto que desea parece provenir de Word. Desea depurarlo antes de pegarlo?",
NotCompatiblePaste	: "Este comando est disponible slo para Internet Explorer version 5.5 or superior. Desea pegar sin depurar?",
UnknownToolbarItem	: "Item de barra desconocido \"%1\"",
UnknownCommand		: "Nombre de comando desconocido \"%1\"",
NotImplemented		: "Comando no implementado",
UnknownToolbarSet	: "Nombre de barra \"%1\" no definido",
NoActiveX			: "La configuracin de las opciones de seguridad de su navegador puede estar limitando algunas caractersticas del editor. Por favor active la opcin \"Ejecutar controles y complementos de ActiveX \", de lo contrario puede experimentar errores o ausencia de funcionalidades.",
BrowseServerBlocked : "La ventana de visualizacin del servidor no pudo ser abierta. Verifique que su navegador no est bloqueando las ventanas emergentes (pop up).",
DialogBlocked		: "No se ha podido abrir la ventana de dilogo. Verifique que su navegador no est bloqueando las ventanas emergentes (pop up).",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Cancelar",
DlgBtnClose			: "Cerrar",
DlgBtnBrowseServer	: "Ver Servidor",
DlgAdvancedTag		: "Avanzado",
DlgOpOther			: "<Otro>",
DlgInfoTab			: "Informacin",
DlgAlertUrl			: "Inserte el URL",

// General Dialogs Labels
DlgGenNotSet		: "<No definido>",
DlgGenId			: "Id",
DlgGenLangDir		: "Orientacin",
DlgGenLangDirLtr	: "Izquierda a Derecha (LTR)",
DlgGenLangDirRtl	: "Derecha a Izquierda (RTL)",
DlgGenLangCode		: "Cd. de idioma",
DlgGenAccessKey		: "Clave de Acceso",
DlgGenName			: "Nombre",
DlgGenTabIndex		: "Indice de tabulacin",
DlgGenLongDescr		: "Descripcin larga URL",
DlgGenClass			: "Clases de hojas de estilo",
DlgGenTitle			: "Ttulo",
DlgGenContType		: "Tipo de Contenido",
DlgGenLinkCharset	: "Fuente de caracteres vinculado",
DlgGenStyle			: "Estilo",

// Image Dialog
DlgImgTitle			: "Propiedades de Imagen",
DlgImgInfoTab		: "Informacin de Imagen",
DlgImgBtnUpload		: "Enviar al Servidor",
DlgImgURL			: "URL",
DlgImgUpload		: "Cargar",
DlgImgAlt			: "Texto Alternativo",
DlgImgWidth			: "Anchura",
DlgImgHeight		: "Altura",
DlgImgLockRatio		: "Proporcional",
DlgBtnResetSize		: "Tamao Original",
DlgImgBorder		: "Borde",
DlgImgHSpace		: "Esp.Horiz",
DlgImgVSpace		: "Esp.Vert",
DlgImgAlign			: "Alineacin",
DlgImgAlignLeft		: "Izquierda",
DlgImgAlignAbsBottom: "Abs inferior",
DlgImgAlignAbsMiddle: "Abs centro",
DlgImgAlignBaseline	: "Lnea de base",
DlgImgAlignBottom	: "Pie",
DlgImgAlignMiddle	: "Centro",
DlgImgAlignRight	: "Derecha",
DlgImgAlignTextTop	: "Tope del texto",
DlgImgAlignTop		: "Tope",
DlgImgPreview		: "Vista Previa",
DlgImgAlertUrl		: "Por favor escriba la URL de la imagen",
DlgImgLinkTab		: "Vnculo",

// Flash Dialog
DlgFlashTitle		: "Propiedades de Flash",
DlgFlashChkPlay		: "Autoejecucin",
DlgFlashChkLoop		: "Repetir",
DlgFlashChkMenu		: "Activar Men Flash",
DlgFlashScale		: "Escala",
DlgFlashScaleAll	: "Mostrar todo",
DlgFlashScaleNoBorder	: "Sin Borde",
DlgFlashScaleFit	: "Ajustado",

// Link Dialog
DlgLnkWindowTitle	: "Vnculo",
DlgLnkInfoTab		: "Informacin de Vnculo",
DlgLnkTargetTab		: "Destino",

DlgLnkType			: "Tipo de vnculo",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Referencia en esta pgina",
DlgLnkTypeEMail		: "E-Mail",
DlgLnkProto			: "Protocolo",
DlgLnkProtoOther	: "<otro>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Seleccionar una referencia",
DlgLnkAnchorByName	: "Por Nombre de Referencia",
DlgLnkAnchorById	: "Por ID de elemento",
DlgLnkNoAnchors		: "(No hay referencias disponibles en el documento)",
DlgLnkEMail			: "Direccin de E-Mail",
DlgLnkEMailSubject	: "Ttulo del Mensaje",
DlgLnkEMailBody		: "Cuerpo del Mensaje",
DlgLnkUpload		: "Cargar",
DlgLnkBtnUpload		: "Enviar al Servidor",

DlgLnkTarget		: "Destino",
DlgLnkTargetFrame	: "<marco>",
DlgLnkTargetPopup	: "<ventana emergente>",
DlgLnkTargetBlank	: "Nueva Ventana(_blank)",
DlgLnkTargetParent	: "Ventana Padre (_parent)",
DlgLnkTargetSelf	: "Misma Ventana (_self)",
DlgLnkTargetTop		: "Ventana primaria (_top)",
DlgLnkTargetFrameName	: "Nombre del Marco Destino",
DlgLnkPopWinName	: "Nombre de Ventana Emergente",
DlgLnkPopWinFeat	: "Caractersticas de Ventana Emergente",
DlgLnkPopResize		: "Ajustable",
DlgLnkPopLocation	: "Barra de ubicacin",
DlgLnkPopMenu		: "Barra de Men",
DlgLnkPopScroll		: "Barras de desplazamiento",
DlgLnkPopStatus		: "Barra de Estado",
DlgLnkPopToolbar	: "Barra de Herramientas",
DlgLnkPopFullScrn	: "Pantalla Completa (IE)",
DlgLnkPopDependent	: "Dependiente (Netscape)",
DlgLnkPopWidth		: "Anchura",
DlgLnkPopHeight		: "Altura",
DlgLnkPopLeft		: "Posicin Izquierda",
DlgLnkPopTop		: "Posicin Derecha",

DlnLnkMsgNoUrl		: "Por favor tipee el vnculo URL",
DlnLnkMsgNoEMail	: "Por favor tipee la direccin de e-mail",
DlnLnkMsgNoAnchor	: "Por favor seleccione una referencia",
DlnLnkMsgInvPopName	: "El nombre debe empezar con un caracter alfanumrico y no debe contener espacios",

// Color Dialog
DlgColorTitle		: "Seleccionar Color",
DlgColorBtnClear	: "Ninguno",
DlgColorHighlight	: "Resaltado",
DlgColorSelected	: "Seleccionado",

// Smiley Dialog
DlgSmileyTitle		: "Insertar un Emoticon",

// Special Character Dialog
DlgSpecialCharTitle	: "Seleccione un caracter especial",

// Table Dialog
DlgTableTitle		: "Propiedades de Tabla",
DlgTableRows		: "Filas",
DlgTableColumns		: "Columnas",
DlgTableBorder		: "Tamao de Borde",
DlgTableAlign		: "Alineacin",
DlgTableAlignNotSet	: "<No establecido>",
DlgTableAlignLeft	: "Izquierda",
DlgTableAlignCenter	: "Centrado",
DlgTableAlignRight	: "Derecha",
DlgTableWidth		: "Anchura",
DlgTableWidthPx		: "pixeles",
DlgTableWidthPc		: "porcentaje",
DlgTableHeight		: "Altura",
DlgTableCellSpace	: "Esp. e/celdas",
DlgTableCellPad		: "Esp. interior",
DlgTableCaption		: "Ttulo",
DlgTableSummary		: "Sntesis",

// Table Cell Dialog
DlgCellTitle		: "Propiedades de Celda",
DlgCellWidth		: "Anchura",
DlgCellWidthPx		: "pixeles",
DlgCellWidthPc		: "porcentaje",
DlgCellHeight		: "Altura",
DlgCellWordWrap		: "Cortar Lnea",
DlgCellWordWrapNotSet	: "<No establecido>",
DlgCellWordWrapYes	: "Si",
DlgCellWordWrapNo	: "No",
DlgCellHorAlign		: "Alineacin Horizontal",
DlgCellHorAlignNotSet	: "<No establecido>",
DlgCellHorAlignLeft	: "Izquierda",
DlgCellHorAlignCenter	: "Centrado",
DlgCellHorAlignRight: "Derecha",
DlgCellVerAlign		: "Alineacin Vertical",
DlgCellVerAlignNotSet	: "<Not establecido>",
DlgCellVerAlignTop	: "Tope",
DlgCellVerAlignMiddle	: "Medio",
DlgCellVerAlignBottom	: "ie",
DlgCellVerAlignBaseline	: "Lnea de Base",
DlgCellRowSpan		: "Abarcar Filas",
DlgCellCollSpan		: "Abarcar Columnas",
DlgCellBackColor	: "Color de Fondo",
DlgCellBorderColor	: "Color de Borde",
DlgCellBtnSelect	: "Seleccione...",

// Find and Replace Dialog
DlgFindAndReplaceTitle	: "Buscar y Reemplazar",

// Find Dialog
DlgFindTitle		: "Buscar",
DlgFindFindBtn		: "Buscar",
DlgFindNotFoundMsg	: "El texto especificado no ha sido encontrado.",

// Replace Dialog
DlgReplaceTitle			: "Reemplazar",
DlgReplaceFindLbl		: "Texto a buscar:",
DlgReplaceReplaceLbl	: "Reemplazar con:",
DlgReplaceCaseChk		: "Coincidir may/min",
DlgReplaceReplaceBtn	: "Reemplazar",
DlgReplaceReplAllBtn	: "Reemplazar Todo",
DlgReplaceWordChk		: "Coincidir toda la palabra",

// Paste Operations / Dialog
PasteErrorCut	: "La configuracin de seguridad de este navegador no permite la ejecucin automtica de operaciones de cortado. Por favor use el teclado (Ctrl+X).",
PasteErrorCopy	: "La configuracin de seguridad de este navegador no permite la ejecucin automtica de operaciones de copiado. Por favor use el teclado (Ctrl+C).",

PasteAsText		: "Pegar como Texto Plano",
PasteFromWord	: "Pegar desde Word",

DlgPasteMsg2	: "Por favor pegue dentro del cuadro utilizando el teclado (<STRONG>Ctrl+V</STRONG>); luego presione <STRONG>OK</STRONG>.",
DlgPasteSec		: "Debido a la configuracin de seguridad de su navegador, el editor no tiene acceso al portapapeles. Es necesario que lo pegue de nuevo en esta ventana.",
DlgPasteIgnoreFont		: "Ignorar definiciones de fuentes",
DlgPasteRemoveStyles	: "Remover definiciones de estilo",

// Color Picker
ColorAutomatic	: "Automtico",
ColorMoreColors	: "Ms Colores...",

// Document Properties
DocProps		: "Propiedades del Documento",

// Anchor Dialog
DlgAnchorTitle		: "Propiedades de la Referencia",
DlgAnchorName		: "Nombre de la Referencia",
DlgAnchorErrorName	: "Por favor, complete el nombre de la Referencia",

// Speller Pages Dialog
DlgSpellNotInDic		: "No se encuentra en el Diccionario",
DlgSpellChangeTo		: "Cambiar a",
DlgSpellBtnIgnore		: "Ignorar",
DlgSpellBtnIgnoreAll	: "Ignorar Todo",
DlgSpellBtnReplace		: "Reemplazar",
DlgSpellBtnReplaceAll	: "Reemplazar Todo",
DlgSpellBtnUndo			: "Deshacer",
DlgSpellNoSuggestions	: "- No hay sugerencias -",
DlgSpellProgress		: "Control de Ortografa en progreso...",
DlgSpellNoMispell		: "Control finalizado: no se encontraron errores",
DlgSpellNoChanges		: "Control finalizado: no se ha cambiado ninguna palabra",
DlgSpellOneChange		: "Control finalizado: se ha cambiado una palabra",
DlgSpellManyChanges		: "Control finalizado: se ha cambiado %1 palabras",

IeSpellDownload			: "Mdulo de Control de Ortografa no instalado. Desea descargarlo ahora?",

// Button Dialog
DlgButtonText		: "Texto (Valor)",
DlgButtonType		: "Tipo",
DlgButtonTypeBtn	: "Boton",
DlgButtonTypeSbm	: "Enviar",
DlgButtonTypeRst	: "Reestablecer",

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Nombre",
DlgCheckboxValue	: "Valor",
DlgCheckboxSelected	: "Seleccionado",

// Form Dialog
DlgFormName		: "Nombre",
DlgFormAction	: "Accin",
DlgFormMethod	: "Mtodo",

// Select Field Dialog
DlgSelectName		: "Nombre",
DlgSelectValue		: "Valor",
DlgSelectSize		: "Tamao",
DlgSelectLines		: "Lineas",
DlgSelectChkMulti	: "Permitir mltiple seleccin",
DlgSelectOpAvail	: "Opciones disponibles",
DlgSelectOpText		: "Texto",
DlgSelectOpValue	: "Valor",
DlgSelectBtnAdd		: "Agregar",
DlgSelectBtnModify	: "Modificar",
DlgSelectBtnUp		: "Subir",
DlgSelectBtnDown	: "Bajar",
DlgSelectBtnSetValue : "Establecer como predeterminado",
DlgSelectBtnDelete	: "Eliminar",

// Textarea Dialog
DlgTextareaName	: "Nombre",
DlgTextareaCols	: "Columnas",
DlgTextareaRows	: "Filas",

// Text Field Dialog
DlgTextName			: "Nombre",
DlgTextValue		: "Valor",
DlgTextCharWidth	: "Caracteres de ancho",
DlgTextMaxChars		: "Mximo caracteres",
DlgTextType			: "Tipo",
DlgTextTypeText		: "Texto",
DlgTextTypePass		: "Contrasea",

// Hidden Field Dialog
DlgHiddenName	: "Nombre",
DlgHiddenValue	: "Valor",

// Bulleted List Dialog
BulletedListProp	: "Propiedades de Vietas",
NumberedListProp	: "Propiedades de Numeraciones",
DlgLstStart			: "Inicio",
DlgLstType			: "Tipo",
DlgLstTypeCircle	: "Crculo",
DlgLstTypeDisc		: "Disco",
DlgLstTypeSquare	: "Cuadrado",
DlgLstTypeNumbers	: "Nmeros (1, 2, 3)",
DlgLstTypeLCase		: "letras en minsculas (a, b, c)",
DlgLstTypeUCase		: "letras en maysculas (A, B, C)",
DlgLstTypeSRoman	: "Nmeros Romanos (i, ii, iii)",
DlgLstTypeLRoman	: "Nmeros Romanos (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "General",
DlgDocBackTab		: "Fondo",
DlgDocColorsTab		: "Colores y Mrgenes",
DlgDocMetaTab		: "Meta Informacin",

DlgDocPageTitle		: "Ttulo de Pgina",
DlgDocLangDir		: "Orientacin de idioma",
DlgDocLangDirLTR	: "Izq. a Derecha (LTR)",
DlgDocLangDirRTL	: "Der. a Izquierda (RTL)",
DlgDocLangCode		: "Cdigo de Idioma",
DlgDocCharSet		: "Codif. de Conjunto de Caracteres",
DlgDocCharSetCE		: "Centro Europeo",
DlgDocCharSetCT		: "Chino Tradicional (Big5)",
DlgDocCharSetCR		: "Cirlico",
DlgDocCharSetGR		: "Griego",
DlgDocCharSetJP		: "Japons",
DlgDocCharSetKR		: "Coreano",
DlgDocCharSetTR		: "Turco",
DlgDocCharSetUN		: "Unicode (UTF-8)",
DlgDocCharSetWE		: "Europeo occidental",
DlgDocCharSetOther	: "Otra Codificacin",

DlgDocDocType		: "Encabezado de Tipo de Documento",
DlgDocDocTypeOther	: "Otro Encabezado",
DlgDocIncXHTML		: "Incluir Declaraciones XHTML",
DlgDocBgColor		: "Color de Fondo",
DlgDocBgImage		: "URL de Imagen de Fondo",
DlgDocBgNoScroll	: "Fondo sin rolido",
DlgDocCText			: "Texto",
DlgDocCLink			: "Vnculo",
DlgDocCVisited		: "Vnculo Visitado",
DlgDocCActive		: "Vnculo Activo",
DlgDocMargins		: "Mrgenes de Pgina",
DlgDocMaTop			: "Tope",
DlgDocMaLeft		: "Izquierda",
DlgDocMaRight		: "Derecha",
DlgDocMaBottom		: "Pie",
DlgDocMeIndex		: "Claves de indexacin del Documento (separados por comas)",
DlgDocMeDescr		: "Descripcin del Documento",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Copyright",
DlgDocPreview		: "Vista Previa",

// Templates Dialog
Templates			: "Plantillas",
DlgTemplatesTitle	: "Contenido de Plantillas",
DlgTemplatesSelMsg	: "Por favor selecciona la plantilla a abrir en el editor<br>(el contenido actual se perder):",
DlgTemplatesLoading	: "Cargando lista de Plantillas. Por favor, aguarde...",
DlgTemplatesNoTpl	: "(No hay plantillas definidas)",
DlgTemplatesReplace	: "Reemplazar el contenido actual",

// About Dialog
DlgAboutAboutTab	: "Acerca de",
DlgAboutBrowserInfoTab	: "Informacin de Navegador",
DlgAboutLicenseTab	: "Licencia",
DlgAboutVersion		: "versin",
DlgAboutInfo		: "Para mayor informacin por favor dirigirse a"
};
