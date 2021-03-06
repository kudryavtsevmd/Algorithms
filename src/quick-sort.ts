// Algorithmic Complexity O(n log n)
export class QuickSort {
	public static sort([...arr]: number[]): number[]  {
    if (arr.length < 2){
      return arr;
    } else {
      const pivot: number = arr[0];
      const less = arr.filter(item=>item < pivot);
      const greater = arr.filter(item=>item > pivot);
      return this.sort(less).concat([pivot],this.sort(greater))
    }
  }
}
