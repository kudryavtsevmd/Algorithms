// Algorithmic Complexity O(n*n)
export class SelectionSort {
    private static findsSmallestIndex(arr:number[]): number {
        let smallestIndex: number = 0;
        let smallestValue: number = arr[0];
        for (let i = 0 ; i < arr.length; i++){
            if (arr[i] < smallestValue){
                smallestIndex = i ;
                smallestValue = arr[i];
            }
        }
        return smallestIndex;
    }

    public static sort([...arr]: number[]): number[] {
        const result: number[] = [];
        while (arr.length > 0){
            const smallestIndex: number = this.findsSmallestIndex(arr);
            result.push(arr[smallestIndex]);
            arr.splice(smallestIndex,1);
        }
        return result;
    }
}