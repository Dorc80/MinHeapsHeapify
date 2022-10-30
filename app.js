class MinHeap {

    constructor(idx, heap) {
        this.idx = idx;
        this.heap = heap;
    }

    getIdxValue() {
        return this.heap[this.idx];
    }

    getChild1Idx() {
        return this.idx * 2;
    }

    getChild2Idx() {
        return this.idx * 2 + 1;
    }

    getChild1Value() {
        return this.heap[this.getChild1Idx()]
    }

    getChild2Value() {
        return this.heap[this.getChild2Idx()]
    }

    getFatherIdx() {
        return Math.trunc(this.idx / 2);
    }

    getFatherValue() {
        return this.heap[this.getFatherIdx()];
    }

    isFather() {
        return this.getChild1Value() ? true : false || this.getChild2Value() ? true : false;
    }

    /**
     * 
     * @param {*} child  1: hijo 1; 2: hijo 2
     */
    downIdx(child) {
        if (child == 1) {
            this.idx = this.getChild1Idx();
        } else if (child == 2) {
            this.idx = this.getChild2Idx();
        }
    }

    /**
     * 
     * @param {*} child 1: hijo 1; 2: hijo 2
     */
    downValue(child, isDownIdx = true) {

        if (child == 1) {
            let idxValue = this.getIdxValue();
            this.heap[this.idx] = this.getChild1Value();
            this.heap[this.getChild1Idx()] = idxValue;
            if (isDownIdx) this.downIdx(1);
        } else if (child == 2) {
            let idxValue = this.getIdxValue();
            this.heap[this.idx] = this.getChild2Value();
            this.heap[this.getChild2Idx()] = idxValue;
            if (isDownIdx) this.downIdx(2);
        }

    }

    upIdx() {
        this.idx = this.getFatherIdx();
    }

    upValue(isUpIdx = true) {
        let fatherValue = this.getFatherValue();
        this.heap[this.getFatherIdx()] = this.getIdxValue();
        this.heap[this.idx] = fatherValue;
        if (true) this.upIdx();
    }

}

function heapify(heap = []) {

    heap.push(heap[0]);
    heap[0] = undefined;
    let minHeap = new MinHeap(heap.length - 1, heap)

    for (var i = heap.length - 1; i >= 0; i--) {

        minHeap.idx = i;

        if(!minHeap.isFather())
            continue;

        if (minHeap.getIdxValue() > minHeap.getChild2Value()) {
            minHeap.downValue(2, false);
        }

        if (minHeap.getIdxValue() > minHeap.getChild1Value()) {
            minHeap.downValue(1, false);
        }

    }

    return heap;

}

console.log(heapify([20, 3, 8, 14, 9, 6, 2]));