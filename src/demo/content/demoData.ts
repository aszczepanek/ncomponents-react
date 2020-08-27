import { AsyncItemsProvider } from "../../lib";

interface DemoAsyncProviderOptions {
  items: DemoItem[];
  delay?: number;
  rejectWithError?: boolean;
  dontProvideItemByKey?: boolean;
}

class DemoAsyncItemsProvider implements AsyncItemsProvider<DemoItem> {
  loadingFeedback = "Wczytywanie pozycji...";
  errorFeddback = "Błąd wczytywania pozycji, spróbuj później";
  enableSelectLocalFiltering = true;

  constructor(private options: DemoAsyncProviderOptions) {}

  getItems(input: string): Promise<DemoItem[]> {
    return new Promise((resolve, reject) => {
      const endFn = () => {
        if (this.options.rejectWithError) reject("Error");
        resolve(this.options.items);
      };

      const delay = this.options.delay || 1000;
      setTimeout(endFn, delay);
    });
  }

  getItemByKey(key: any): Promise<DemoItem | undefined> {
    if (this.options.dontProvideItemByKey) return promiseResolveWithDelay(undefined, 500);

    const item = this.options.items.filter(x => x.id === key)[0];
    return promiseResolveWithDelay(item, 500);
  }
}

function promiseResolveWithDelay<T>(resolveValue: T, delay?: number) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => resolve(resolveValue), delay || 1000);
  });
}

export interface DemoItem {
  id: number;
  label: string;
  lastName: string;
}

const people: DemoItem[] = [
  {
    id: 1,
    label: "Jan",
    lastName: "Kowal"
  },
  {
    id: 2,
    label: "Grześ",
    lastName: "Hardy"
  },
  {
    id: 3,
    label: "Krzyś",
    lastName: "Pyś"
  },
  {
    id: 4,
    label: "Jerzy",
    lastName: "Leży"
  }
];

const strings: string[] = ["", "test", "dwa", "trzy", "cztery"];

export const demoData = {
  people,
  strings,
  asyncPeople: new DemoAsyncItemsProvider({ items: people }),
  asyncPeopleError: new DemoAsyncItemsProvider({ items: people, rejectWithError: true }),
  asyncPeopleNoGetByKey: new DemoAsyncItemsProvider({ items: people, dontProvideItemByKey: true })
};
