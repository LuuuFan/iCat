function solution({A, K}) {
    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
        if (A[i] + 1 < A[i + 1])
            return false;
    }
    if (A[0] != 1 || A[n - 1] != K)
        return false;
    else
        return true;
}


const cases = [
	{
		Input: {A: [1,1,2,3,3], K: 3},
		Output: true
	},{
		Input: {A: [1, 1, 3], K: 2},
		Output: false
	}, {
		Input: {A: [1,2,3,4,5], K:4},
		Ouput: false
	}
]

const runTestCases = () => cases.forEach(c => console.log(solution(c.Input)))
runTestCases();