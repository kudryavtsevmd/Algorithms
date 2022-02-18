// Algorithmic Complexity O(n*n)
class SelectionSort {
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

const arr: number [] = [5,6,1,3,10,25,2,3,3,4,5,6,6,0]
console.log(SelectionSort.sort(arr));