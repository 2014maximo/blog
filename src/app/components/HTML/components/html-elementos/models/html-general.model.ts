import * as HTML from '../constants/html-templates.constant';

export class HtmlModel {
    doctypeCode:string;
    doctype4Code:string;
    doctypeHxtml:string;
    htmlCode:string;
    hCode:string;
    h1Styles:string;
    headCode:string;
    headStyle:string;
    metaCharset:string;
    metaDescription:string;
    metaKeywords:string;
    metaRobots:string;
    metaHttp:string;
    pCode:string;
    pStyle:string;
    pBr:string;
    pPre:string;
    pPreP:string;
    pMark:string;
    pStrong:string;
    pStrongStyles:string;
    pItalicCode:string;
    pItalicStyles:string;
    pUnderline:string;
    pUnderlineStyles:string;
    pAbbrCode:string;
    pAbbrStyles:string;
    pIns:string;
    pInsStyle:string
    pDel:string;
    pDelStyle:string;
    pSub:string;
    pSubStyle:string;
    href:string;

    constructor(){

        this.doctypeCode = HTML.HTML;
        this.doctype4Code = HTML.HTML_4;
        this.doctypeHxtml = HTML.HTML_XHTML;
        this.htmlCode = HTML.HTML_html;
        this.h1Styles = HTML.HTML_H1;
        this.hCode = HTML.HTML_1;
        this.headCode = HTML.HTML_head_code;
        this.headStyle = HTML.HTML_head_style;
        this.metaCharset = HTML.HTML_meta_charset;
        this.metaDescription = HTML.HTML_meta_description;
        this.metaKeywords = HTML.HTML_meta_keywords;
        this.metaRobots = HTML.HTML_meta_robots;
        this.metaHttp = HTML.HTML_meta_http;
        this.pCode = HTML.HTML_p;
        this.pStyle = HTML.HTML_p_style;
        this.pBr = HTML.HTML_p_br;
        this.pPre = HTML.HTML_p_pre;
        this.pPreP = HTML.HTML_p_pre_;
        this.pMark = HTML.HTML_p_mark;
        this.pStrong = HTML.HTML_p_strong;
        this.pStrongStyles = HTML.HTML_p_styles;
        this.pItalicCode = HTML.HTML_p_italic;
        this.pItalicStyles = HTML.HTML_italic_style;
        this.pUnderline = HTML.HTML_p_underline;
        this.pUnderlineStyles = HTML.HTML_underline_style;
        this.pAbbrCode = HTML.HTML_p_abbr;
        this.pAbbrStyles = HTML.HTML_abbr_style;
        this.pIns = HTML.HTML_ins;
        this.pInsStyle = HTML.HTML_ins_style;
        this.pDel = HTML.HTML_p_del;
        this.pDelStyle = HTML.HTML_del_style;
        this.pSub = HTML.HTML_p_sub;
        this.pSubStyle = HTML.HTML_sub_style;
        this.href = HTML.HTML_href;
    }

}