export class Sort {
    private sortOrder = 1;
    private collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base'
    }); // Creates a new Collator object. The Intl.Collator object enables language-sensitive string comparison.

    constructor(){
    }

    startSort(property:any, order:any, type = ""){
        if(order === "desc"){
            this.sortOrder = -1;
        }
        return (a:any,b:any) => {
            return this.collator.compare(a[property], b[property]) * this.sortOrder;
            }
    }

    // private sortData(a:any,b:any){
    //     if(a < b) {
    //          return -1 * this.sortOrder;
    //     }else if (a > b) {
    //         return 1 * this.sortOrder;
    //     } else {
    //         return 0 * this.sortOrder
    //     }
    // }
}
