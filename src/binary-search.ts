// Algorithmic Complexity OlnN
class BinarySearch {
	public static search([...sortedArr]: number[], value: number): number | null {
		let low: number = 0;
		let high: number = sortedArr.length - 1;
		while (low <= high){ 
			const mid: number = Math.round((low + high) / 2);
			const guess = sortedArr[mid];
			if (guess === value){
				return mid;
			}
			if (guess > value) {
				high = mid - 1;
			} else {
				low = mid + 1;
			}
		}
		return null;
	}
}

const sortedArr: number [] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
console.log(BinarySearch.search(sortedArr , 14));