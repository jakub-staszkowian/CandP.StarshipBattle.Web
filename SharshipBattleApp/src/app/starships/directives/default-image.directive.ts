import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'img[default]',
    host: {
        '(error)':'updateUrl()',
        '[src]':'src'
    }
})
export class DefaultImageDirective {
    @Input() src:string;
    defaultImageUrl: string = 'assets/starship-default.jpg';
  
    updateUrl() {
        this.src = this.defaultImageUrl;
    }
}