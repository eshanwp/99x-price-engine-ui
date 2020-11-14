import {BaseSearchRequestDto} from "./BaseSearchRequestDto";

export class ProductSearchRequestDto extends BaseSearchRequestDto {
    constructor() {
        super();
        this.productName = null;
    }
}
