interface Event {
    namespace: string;
    data: any;
    ___cd?: boolean;
}
interface Cash {
    [index: number]: EleLoose | undefined;
    length: number;
    splice(start: number, deleteCount?: number): EleLoose[];
    splice(start: number, deleteCount: number, ...items: Ele[]): EleLoose[];
}
interface CashStatic {
    fn: Cash;
}
declare type falsy = undefined | null | false | 0 | '';
declare type EleHTML = HTMLElement | HTMLAnchorElement | HTMLAppletElement | HTMLAreaElement | HTMLAudioElement | HTMLBRElement | HTMLBaseElement | HTMLBaseFontElement | HTMLBodyElement | HTMLButtonElement | HTMLCanvasElement | HTMLDListElement | HTMLDataElement | HTMLDataListElement | HTMLDetailsElement | HTMLDialogElement | HTMLDirectoryElement | HTMLDivElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFontElement | HTMLFormElement | HTMLFrameElement | HTMLFrameSetElement | HTMLHRElement | HTMLHeadElement | HTMLHeadingElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLIElement | HTMLLabelElement | HTMLLegendElement | HTMLLinkElement | HTMLMapElement | HTMLMarqueeElement | HTMLMediaElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLModElement | HTMLOListElement | HTMLObjectElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOrSVGElement | HTMLOutputElement | HTMLParagraphElement | HTMLParamElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLQuoteElement | HTMLScriptElement | HTMLSelectElement | HTMLSlotElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableCaptionElement | HTMLTableCellElement | HTMLTableColElement | HTMLTableDataCellElement | HTMLTableElement | HTMLTableHeaderCellElement | HTMLTableRowElement | HTMLTableSectionElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTrackElement | HTMLUListElement | HTMLUnknownElement | HTMLVideoElement;
declare type EleHTMLLoose = HTMLElement & HTMLAnchorElement & HTMLAppletElement & HTMLAreaElement & HTMLAudioElement & HTMLBRElement & HTMLBaseElement & HTMLBaseFontElement & HTMLBodyElement & HTMLButtonElement & HTMLCanvasElement & HTMLDListElement & HTMLDataElement & HTMLDataListElement & HTMLDetailsElement & HTMLDialogElement & HTMLDirectoryElement & HTMLDivElement & HTMLEmbedElement & HTMLFieldSetElement & HTMLFontElement & HTMLFormElement & HTMLFrameElement & HTMLFrameSetElement & HTMLHRElement & HTMLHeadElement & HTMLHeadingElement & HTMLHtmlElement & HTMLIFrameElement & HTMLImageElement & HTMLInputElement & HTMLLIElement & HTMLLabelElement & HTMLLegendElement & HTMLLinkElement & HTMLMapElement & HTMLMarqueeElement & HTMLMediaElement & HTMLMenuElement & HTMLMetaElement & HTMLMeterElement & HTMLModElement & HTMLOListElement & HTMLObjectElement & HTMLOptGroupElement & HTMLOptionElement & HTMLOrSVGElement & HTMLOutputElement & HTMLParagraphElement & HTMLParamElement & HTMLPictureElement & HTMLPreElement & HTMLProgressElement & HTMLQuoteElement & HTMLScriptElement & HTMLSelectElement & HTMLSlotElement & HTMLSourceElement & HTMLSpanElement & HTMLStyleElement & HTMLTableCaptionElement & HTMLTableCellElement & HTMLTableColElement & HTMLTableDataCellElement & HTMLTableElement & HTMLTableHeaderCellElement & HTMLTableRowElement & HTMLTableSectionElement & HTMLTemplateElement & HTMLTextAreaElement & HTMLTimeElement & HTMLTitleElement & HTMLTrackElement & HTMLUListElement & HTMLUnknownElement & HTMLVideoElement;
declare type Ele = Window | Document | EleHTML | Element | Node;
declare type EleLoose = Window & Document & EleHTMLLoose & Element & Node;
declare type Selector = falsy | string | Function | HTMLCollection | NodeList | Ele | Ele[] | ArrayLike<Ele> | Cash;
declare type Comparator = string | Ele | Cash | ((this: EleLoose, index: number, ele: EleLoose) => boolean);
declare type Context = Document | EleHTML | Element;
declare type EventCallback = {
    (event: any, data?: any): any;
    guid?: number;
};
declare class Cash {
    constructor(selector?: Selector, context?: Context | Cash);
    init(selector?: Selector, context?: Context | Cash): Cash;
}
declare const cash: ((selector?: Selector, context?: Element | HTMLMediaElement | HTMLElement | HTMLOrSVGElement | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | Document | HTMLAnchorElement | HTMLAppletElement | HTMLScriptElement | HTMLEmbedElement | HTMLFormElement | HTMLHeadElement | HTMLAreaElement | HTMLObjectElement | HTMLLinkElement | HTMLTrackElement | HTMLProgressElement | HTMLAudioElement | HTMLBaseElement | HTMLBaseFontElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDirectoryElement | HTMLDivElement | HTMLDListElement | HTMLFieldSetElement | HTMLFontElement | HTMLFrameElement | HTMLFrameSetElement | HTMLHeadingElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLMapElement | HTMLMarqueeElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLParamElement | HTMLPictureElement | HTMLPreElement | HTMLSelectElement | HTMLSlotElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableDataCellElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTableHeaderCellElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLUListElement | HTMLUnknownElement | Cash) => Cash) & CashStatic;
declare type MapCallback<T> = (this: T, index: number, ele: T) => Ele;
interface Cash {
    map(callback: MapCallback<EleLoose>): Cash;
}
interface Cash {
    slice(start?: number, end?: number): Cash;
}
interface CashStatic {
    camelCase(str: string): string;
}
declare type EachCallback<T> = (this: T, index: number, ele: T) => any;
interface CashStatic {
    each<T>(arr: ArrayLike<T>, callback: EachCallback<T>): void;
}
interface Cash {
    each(callback: EachCallback<EleLoose>): this;
}
interface Cash {
    removeProp(prop: string): this;
}
interface CashStatic {
    extend(target: any, ...objs: any[]): any;
}
interface Cash {
    extend(plugins: Record<any, any>): this;
}
interface CashStatic {
    guid: number;
}
interface CashStatic {
    matches(ele: any, selector: string): boolean;
}
interface CashStatic {
    isWindow(x: any): x is Window;
    isFunction(x: any): x is Function;
    isString(x: any): x is string;
    isNumeric(x: any): boolean;
    isArray(x: any): x is Array<any>;
}
interface Cash {
    prop(prop: string): any;
    prop(prop: string, value: any): this;
    prop(props: Record<string, any>): this;
}
interface Cash {
    get(): EleLoose[];
    get(index: number): EleLoose | undefined;
}
interface Cash {
    eq(index: number): Cash;
}
interface Cash {
    first(): Cash;
}
interface Cash {
    last(): Cash;
}
interface Cash {
    filter(comparator?: Comparator): Cash;
}
interface Cash {
    hasClass(cls: string): boolean;
}
interface Cash {
    removeAttr(attrs: string): this;
}
interface Cash {
    attr(): undefined;
    attr(attrs: string): string | null;
    attr(attrs: string, value: string): this;
    attr(attrs: Record<string, string>): this;
}
interface Cash {
    toggleClass(classes: string, force?: boolean): this;
}
interface Cash {
    addClass(classes: string): this;
}
interface Cash {
    removeClass(classes?: string): this;
}
interface CashStatic {
    unique<T>(arr: ArrayLike<T>): ArrayLike<T>;
}
interface Cash {
    add(selector: Selector, context?: Context): Cash;
}
interface CashStatic {
    prefixedProp(prop: string, isVariable?: boolean): string;
}
interface Cash {
    css(prop: string): string | undefined;
    css(prop: string, value: number | string): this;
    css(props: Record<string, number | string>): this;
}
interface Cash {
    data(): Record<string, any> | undefined;
    data(name: string): any;
    data(name: string, value: any): this;
    data(datas: Record<string, any>): this;
}
interface Cash {
    innerWidth(): number | undefined;
    innerHeight(): number | undefined;
    outerWidth(includeMargins?: boolean): number;
    outerHeight(includeMargins?: boolean): number;
}
interface Cash {
    width(): number;
    width(value: number | string): this;
    height(): number;
    height(value: number | string): this;
}
interface Cash {
    toggle(force?: boolean): this;
}
interface Cash {
    hide(): this;
}
interface Cash {
    show(): this;
}
interface Cash {
    off(): this;
    off(events: string): this;
    off(events: Record<string, EventCallback>): this;
    off(events: string, callback: EventCallback): this;
    off(events: string, selector: string, callback: EventCallback): this;
}
interface Cash {
    on(events: Record<string, EventCallback>): this;
    on(events: string, callback: EventCallback, _one?: boolean): this;
    on(events: string, selector: string | EventCallback, callback: EventCallback, _one?: boolean): this;
}
interface Cash {
    one(events: Record<string, EventCallback>): this;
    one(events: string, callback: EventCallback): this;
    one(events: string, selector: string | EventCallback, callback: EventCallback): this;
}
interface Cash {
    ready(callback: Function): this;
}
interface Cash {
    trigger(event: Event | string, data?: any): this;
}
interface Cash {
    serialize(): string;
}
interface Cash {
    val(): string | string[];
    val(value: string | string[]): this;
}
interface Cash {
    clone(): this;
}
interface Cash {
    detach(): this;
}
interface CashStatic {
    parseHTML(html: string): EleLoose[];
}
interface Cash {
    empty(): this;
}
interface Cash {
    html(): string;
    html(html: string): this;
}
interface Cash {
    remove(): this;
}
interface Cash {
    text(): string;
    text(text: string): this;
}
interface Cash {
    unwrap(): this;
}
interface Cash {
    offset(): undefined | {
        top: number;
        left: number;
    };
}
interface Cash {
    offsetParent(): Cash;
}
interface Cash {
    position(): undefined | {
        top: number;
        left: number;
    };
}
interface Cash {
    children(comparator?: Comparator): Cash;
}
interface Cash {
    contents(): Cash;
}
interface Cash {
    find(selector: string): Cash;
}
interface Cash {
    after(...selectors: Selector[]): this;
}
interface Cash {
    append(...selectors: Selector[]): this;
}
interface Cash {
    appendTo(selector: Selector): this;
}
interface Cash {
    before(...selectors: Selector[]): this;
}
interface Cash {
    insertAfter(selector: Selector): this;
}
interface Cash {
    insertBefore(selector: Selector): this;
}
interface Cash {
    prepend(...selectors: Selector[]): this;
}
interface Cash {
    prependTo(selector: Selector): this;
}
interface Cash {
    replaceWith(selector: Selector): this;
}
interface Cash {
    replaceAll(selector: Selector): this;
}
interface Cash {
    wrapAll(selector?: Selector): this;
}
interface Cash {
    wrap(selector?: Selector): this;
}
interface Cash {
    wrapInner(selector?: Selector): this;
}
interface Cash {
    has(selector: string | Node): Cash;
}
interface Cash {
    is(comparator?: Comparator): boolean;
}
interface Cash {
    next(comparator?: Comparator, _all?: boolean): Cash;
}
interface Cash {
    nextAll(comparator?: Comparator): Cash;
}
interface Cash {
    not(comparator?: Comparator): Cash;
}
interface Cash {
    parent(comparator?: Comparator): Cash;
}
interface Cash {
    index(selector?: Selector): number;
}
interface Cash {
    closest(comparator?: Comparator): Cash;
}
interface Cash {
    parents(comparator?: Comparator): Cash;
}
interface Cash {
    prev(comparator?: Comparator, _all?: boolean): Cash;
}
interface Cash {
    prevAll(comparator?: Comparator): Cash;
}
interface Cash {
    siblings(comparator?: Comparator): Cash;
}
export default cash;
export { Cash, CashStatic, Ele as Element, Selector, Comparator, Context };
