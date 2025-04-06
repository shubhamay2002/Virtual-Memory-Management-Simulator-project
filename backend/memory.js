class Memory {
    constructor(frameCount) {
        this.frameCount = frameCount;
        this.frames = new Array(frameCount).fill(null);
        this.pageQueue = [];
    }

    allocatePages(pages) {
        let pageFaults = 0;
    
        pages.forEach(page => {
            if (!this.frames.includes(page)) { 
                pageFaults++; // 
    
                if (this.pageQueue.length >= this.frameCount) {
                   
                    const removed = this.pageQueue.shift();
                    this.frames[this.frames.indexOf(removed)] = page;
                } else {
                    
                    const emptyIndex = this.frames.indexOf(null);
                    this.frames[emptyIndex] = page;
                }
                
                this.pageQueue.push(page); 
            }
        });
    
        return { frames: this.frames, pageQueue: this.pageQueue, pageFaults };
    }
    
}

module.exports = Memory;
