export interface AsyncItemsProvider<TItem> {
  getItems(input: string): Promise<TItem[]>;
  getItemByKey(key: any): Promise<TItem | undefined>;
  loadingFeedback?: React.ReactNode;
  errorFeddback?: string;
  enableSelectLocalFiltering?: boolean;
}