import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
})
export class SortPipe implements PipeTransform {
  transform(value: any[], sortingString: string): any {
    return value.sort((a, b) => {
      return a[sortingString] > b[sortingString]
        ? 1
        : a[sortingString] === b[sortingString]
        ? 0
        : -1;
    });
  }
}
