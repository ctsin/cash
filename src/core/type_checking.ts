
// @require ./cash.ts
// @require ./variables.ts

interface CashStatic {
  isWindow ( x: any ): x is Window;
  isFunction ( x: any ): x is Function;
  isString ( x: any ): x is string;
  isNumeric ( x: any ): boolean;
  isArray ( x: any ): x is Array<any>;
}

function isCash ( x: any ): x is Cash {

  return x instanceof Cash;

}

function isWindow ( x: any ): x is Window {

  return !!x && x === x.window;

}

function isDocument ( x: any ): x is Document {

  return !!x && x.nodeType === 9;

}

function isElement ( x: any ): x is HTMLElement {

  return !!x && x.nodeType === 1;

}

function isFunction ( x: any ): x is Function {

  return typeof x === 'function';

}

function isString ( x: any ): x is string {

  return typeof x === 'string';

}

function isUndefined ( x: any ): x is undefined {

  return x === undefined;

}

function isNull ( x: any ): x is null {

  return x === null;

}

function isNumeric ( x: any ): boolean {

  return !isNaN ( parseFloat ( x ) ) && isFinite ( x );

}

cash.isWindow = isWindow;
cash.isFunction = isFunction;
cash.isString = isString;
cash.isNumeric = isNumeric;
cash.isArray = isArray;
