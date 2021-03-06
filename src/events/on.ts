
// @require core/cash.ts
// @require core/get_split_values.ts
// @require core/guid.ts
// @require core/matches.ts
// @require core/type_checking.ts
// @require collection/each.ts
// @require ./helpers/variables.ts
// @require ./helpers/add_event.ts
// @require ./helpers/get_event_name_bubbling.ts
// @require ./helpers/has_namespaces.ts
// @require ./helpers/parse_event_name.ts
// @require ./helpers/remove_event.ts

interface Cash {
  on ( events: Record<string, EventCallback> ): this;
  on ( events: string, callback: EventCallback, _one?: boolean ): this;
  on ( events: string, selector: string | EventCallback, callback: EventCallback, _one?: boolean ): this;
}

function on ( this: Cash, eventFullName: Record<string, EventCallback> ): Cash;
function on ( this: Cash, eventFullName: string, callback: EventCallback, _one?: boolean ): Cash;
function on ( this: Cash, eventFullName: string, selector: string | EventCallback, callback: EventCallback, _one?: boolean ): Cash;
function on ( this: Cash, eventFullName: string | Record<string, EventCallback>, selector?: string | EventCallback, callback?: boolean | EventCallback, _one?: boolean ) {

  if ( !isString ( eventFullName ) ) {

    for ( const key in eventFullName ) {

      this.on ( key, selector, eventFullName[key] );

    }

    return this;

  }

  if ( isFunction ( selector ) ) {

    callback = selector;
    selector = '';

  }

  each ( getSplitValues ( eventFullName ), ( i, eventFullName ) => {

    const [name, namespaces] = parseEventName ( getEventNameBubbling ( eventFullName ) );

    this.each ( ( i, ele ) => {

      const finalCallback = function ( event: Event ) {

        if ( event.namespace && !hasNamespaces ( namespaces, event.namespace.split ( eventsNamespacesSeparator ) ) ) return;

        let thisArg: EventTarget = ele;

        if ( selector ) {

          let target = event.target;

          while ( !matches ( target, selector ) ) {

            if ( target === ele ) return;

            target = target.parentNode;

            if ( !target ) return;

          }

          thisArg = target;

          event.___cd = true; // Delegate

        }

        if ( event.___cd ) {

          Object.defineProperty ( event, 'currentTarget', {
            configurable: true,
            get () { // We need to define a getter for this to work everywhere
              return thisArg;
            }
          });

        }

        const returnValue = callback.call ( thisArg, event, event.data );

        if ( _one ) {

          removeEvent ( ele, name, namespaces, selector, finalCallback );

        }

        if ( returnValue === false ) {

          event.preventDefault ();
          event.stopPropagation ();

        }

      };

      finalCallback.guid = callback.guid = ( callback.guid || cash.guid++ );

      addEvent ( ele, name, namespaces, selector, finalCallback );

    });

  });

  return this;

}

fn.on = on;
