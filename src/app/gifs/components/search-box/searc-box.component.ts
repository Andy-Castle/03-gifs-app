import { Component, ElementRef, ViewChild } from '@angular/core';

// @Component({
//   selector: 'gifs-search-box',
//   standalone: false,
//   template: `
//     <h5>Buscar:</h5>
//     <input
//       type="text"
//       class="form-control"
//       placeholder="Buscar gifs..."
//       (keyup.enter)="searchTag(txtTagInput.value)"
//       #txtTagInput
//     />
//   `,
// })

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor() {}

  // searchTag(newTag: string) {
  //   console.log({ newTag });
  // }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log({ newTag });
  }
}
