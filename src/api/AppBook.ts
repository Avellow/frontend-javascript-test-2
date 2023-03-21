export interface IAppBook {
  etag: string;
  authors: string[];
  title: string;
  subtitle?: string;
  category: string[];
  image: string;
  description?: string;
  volumeId: string;
}
