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

const strings: string[] = [
  'test',
  'dwa',
  'trzy',
  'cztery'
];

export const demoData = {
  people,
  strings
};