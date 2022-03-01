/// <reference types="react" />
import type { ProTableProps } from '@ant-design/pro-table';
export declare type CommonTableProps<T, U> = ProTableProps<T, U>;
declare const MemodCommonTable: <T, U extends Record<string, any> = {}>(props: ProTableProps<T, U, "text">) => JSX.Element;
export default MemodCommonTable;
