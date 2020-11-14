export class BaseSearchRequestDto {

    constructor() {
        this.pageIndex = 0;
        this.sortingField = "id";
        this.sortingDirection = "ASC";
        this.itemPerPage = 10;
    }
}
