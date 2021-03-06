
const doc = document,
      win = window,
      docEle = doc.documentElement,
      createElement = doc.createElement.bind ( doc ),
      div = createElement ( 'div' ),
      table = createElement ( 'table' ),
      tbody = createElement ( 'tbody' ),
      tr = createElement ( 'tr' ),
      {isArray, prototype: ArrayProtoType} = Array,
      {filter, indexOf, map, push, slice, some, splice} = ArrayProtoType;

const idRe = /^#[\w-]*$/,
      classRe = /^\.[\w-]*$/,
      htmlRe = /<.+>/,
      tagRe = /^\w+$/;
