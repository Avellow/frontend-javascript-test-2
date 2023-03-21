import { IAppBook } from "../../api/AppBook";

export interface BookCardProps extends Omit<IAppBook, "etag"> {}
