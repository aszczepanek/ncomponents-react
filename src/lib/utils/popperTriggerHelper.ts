export type TriggerType = 'hover' | 'click' | 'focus' | 'manual';
export type UnregisterTriggerCallback = () => void;

interface Trigger {
  register(options: PopperTriggerHandlerOptions): UnregisterTriggerCallback;
}

const triggers: {[key: string]: Trigger} = {
  'hover': {
    register: function (options: PopperTriggerHandlerOptions) {
      options.refElement.addEventListener('mouseenter', options.callbacks.show);
      options.refElement.addEventListener('mouseleave', options.callbacks.hide);

      return function unregister() {
        options.refElement.removeEventListener('mouseenter', options.callbacks.show);
        options.refElement.removeEventListener('mouseleave', options.callbacks.hide);
      };
    }
  },
  'click': {
    register: function (options: PopperTriggerHandlerOptions) {
      options.refElement.addEventListener('click', options.callbacks.toggle);

      return function unregister() {
        options.refElement.removeEventListener('click', options.callbacks.toggle);
      };
    }
  },
  'focus': {
    register: function (options: PopperTriggerHandlerOptions) {
      options.refElement.addEventListener('focus', options.callbacks.show);
      options.refElement.addEventListener('blur', options.callbacks.hide);

      return function unregister() {
        options.refElement.removeEventListener('focus', options.callbacks.show);
        options.refElement.removeEventListener('blur', options.callbacks.hide);
      };
    }
  },
  'manual': {
    register: function () {
      return noop;
    }
  }
};

function noop() {}

export interface PopperTriggerHandlerOptions {
  callbacks: {
    show(): void;
    hide(): void;
    toggle(): void;
  };
  refElement: HTMLElement;
  triggerType: TriggerType;
}

export function createPopperTriggerHandler(options: PopperTriggerHandlerOptions) {
  const trigger = triggers[options.triggerType];

  if (!trigger) {
    throw new Error(`Trigger of type "${options.triggerType}" not found`);
  }

  return {
    unregister: trigger.register(options)
  };
};