import { OutputData } from "@editorjs/editorjs";
import { block } from "./transforms";
export interface APIOptionsMap {
    [key: string]: any;
}
declare type parser = {
    parse(OutputData: OutputData): Array<string>;
    parseAsync(OutputData: OutputData, apiOptions: APIOptionsMap): Promise<string[]>;
    parseStrict(OutputData: OutputData): Array<string> | Error;
    parseBlock(block: block): string;
    validate(OutputData: OutputData): Array<string>;
};
declare const parser: (plugins?: {}) => parser;
export default parser;
