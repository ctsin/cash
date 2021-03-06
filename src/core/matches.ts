
// @require ./cash.ts

interface CashStatic {
  matches ( ele: any, selector: string ): boolean;
}

function matches ( ele: any, selector: string ): boolean {

  const matches = ele && ( ele['matches'] || ele['webkitMatchesSelector'] || ele['msMatchesSelector'] );

  return !!matches && matches.call ( ele, selector );

}

cash.matches = matches;
