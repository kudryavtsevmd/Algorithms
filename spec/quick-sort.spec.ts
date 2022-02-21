import 'jasmine';
import { QuickSort } from '../src/quick-sort';

describe('Quick sort', () => {
	it("array should be equal", function() {
		const arraySource: number[] = [11,9,4,3,2,5,6,7,8,1,0,10];
		const arrayResult: number[] = [0,1,2,3,4,5,6,7,8,9,10,11];

		expect(QuickSort.sort(arraySource)).toEqual(arrayResult);
	});
});