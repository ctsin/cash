
// @require core/cash.ts
// @require core/filtered.ts
// @require core/matches.ts
// @require core/unique.ts
// @require core/variables.ts
// @require collection/each.ts

interface Cash {
  parents ( comparator?: Comparator ): Cash;
}

fn.parents = function ( this: Cash, comparator?: Comparator ) {

  return filtered ( cash ( unique ( pluck ( this, 'parentElement', true ) ) ), comparator );

};
