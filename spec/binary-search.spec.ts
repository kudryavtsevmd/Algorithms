import 'jasmine';
import { BinarySearch } from '../src/binary-search';

describe('Binary search', () => {
	it("index should be valid", function() {
		const array: number[] = [0,1,2,3,4,5,6,7,8,9,10,11];

		expect(BinarySearch.search(array,0)).toEqual(0);
		expect(BinarySearch.search(array,6)).toEqual(6);
		expect(BinarySearch.search(array,10)).toEqual(10);
		expect(BinarySearch.search(array,11)).toEqual(11);
	});
});